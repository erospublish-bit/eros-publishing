import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
const config = [
  ...nextVitals, ...nextTs,
  { ignores: ['.next/**', 'out/**', 'build/**', 'next-env.d.ts', '*.tsbuildinfo'],
    rules: { 'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }] } },
];
export default config;
