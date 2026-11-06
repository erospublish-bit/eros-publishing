import { spawn } from 'node:child_process';
import { setTimeout as sleep } from 'node:timers/promises';
import assert from 'node:assert/strict';

const port = 3137;
const origin = 'http://127.0.0.1:' + port;
const publicBase = 'https://erospublishingkc.com';
const pages = [
  '/', '/about/', '/contact/', '/books/', '/books/no-love-lost-in-the-village/',
  '/portfolio/', '/portfolio/no-love-lost-in-the-village/',
  '/author-services/', '/publishing-pricing/', '/publishing-quote/',
  '/publishing-quote/detailed/', '/author-agreements/', '/author-agreements/forms/',
  '/legal/', '/blog/',
  '/blog/how-much-does-it-cost-to-self-publish-a-book/',
  '/blog/how-to-self-publish-a-book/', '/blog/lulu-vs-amazon-kdp/',
  '/blog/book-formatting-guide/', '/blog/how-book-royalties-work/',
  '/blog/what-is-an-isbn/',
  '/eros-publishing-author-checklist.html'
];
const assets = ['/sitemap.xml', '/robots.txt', '/eros-publishing-publishing-budget.csv'];
const app = spawn('npm', ['run', 'start', '--', '-p', String(port)], {
  env: { ...process.env, NODE_ENV: 'production' },
  stdio: ['ignore', 'pipe', 'pipe']
});
let logs = '';
app.stdout.on('data', chunk => { logs += chunk.toString().slice(-3000); });
app.stderr.on('data', chunk => { logs += chunk.toString().slice(-3000); });
function norm(value) { return value.replace(/\/+$/, ''); }

try {
  let ready = false;
  for (let i = 0; i < 35; i++) {
    if (app.exitCode !== null) throw new Error('Next server exited early\n' + logs);
    try {
      const r = await fetch(origin + '/', { signal: AbortSignal.timeout(1200) });
      if (r.ok) { ready = true; break; }
    } catch {}
    await sleep(500);
  }
  assert.ok(ready, 'Next server did not start\n' + logs);
  for (const path of pages) {
    const response = await fetch(origin + path, { signal: AbortSignal.timeout(10000) });
    assert.equal(response.status, 200, path + ' responded with ' + response.status);
    const html = await response.text();
    assert.match(html, /<main\b/i, path + ' missing main landmark');
    assert.match(html, /<h1\b/i, path + ' missing H1');
    const title = html.match(/<title>(.*?)<\/title>/is)?.[1];
    assert.ok(title?.trim(), path + ' missing page title');
    assert.ok(!title.includes('Eros Publishing | Eros Publishing'), path + ' duplicated site title');
    const tag = html.match(/<link\b(?=[^>]*\brel="canonical")[^>]*>/i)?.[0];
    assert.ok(tag, path + ' missing canonical link');
    const canonical = tag.match(/\bhref="([^"]+)"/)?.[1];
    assert.equal(norm(canonical || ''), norm(publicBase + path), path + ' incorrect canonical');
    if (path !== '/eros-publishing-author-checklist.html') {
      assert.match(html, /id="main-content"/, path + ' missing skip-navigation target');
    }
    process.stdout.write('PASS ' + path + '\n');
  }
  for (const path of assets) {
    const response = await fetch(origin + path, { signal: AbortSignal.timeout(10000) });
    assert.equal(response.status, 200, path + ' not served');
    const text = await response.text();
    assert.ok(text.length > 20, path + ' unexpectedly empty');
    if (path === '/sitemap.xml') {
      for (const url of pages) {
        const canon = publicBase + url;
        assert.ok(text.includes(canon), 'Sitemap missing ' + canon);
      }
    }
    process.stdout.write('PASS ' + path + '\n');
  }
  console.log('Passed ' + pages.length + ' HTML routes and ' + assets.length + ' site resources.');
} finally {
  app.kill('SIGTERM');
  app.stdout.destroy();
  app.stderr.destroy();
}
