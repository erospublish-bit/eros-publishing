'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PageShell } from '@/components/PageShell';
import { templates, templateLinks } from '@/lib/agreement-templates';

export default function AgreementForms() {
 const [selected,setSelected]=useState<string>('author-services');
 const [values,setValues]=useState<Record<string,Record<string,string>>>({});
 const template=templates[selected];
 const current=values[selected] || {};
 const update=(name:string,value:string)=>setValues(prev=>({...prev,[selected]:{...(prev[selected]||{}),[name]:value}}));
 const missing=template.fields.filter(f=>f.required && !current[f.name]);
 return (
  <PageShell eyebrow="AUTHOR DOCUMENT CENTER" title="Editable agreement" accent="forms." intro="Choose a form, complete the fields, and print or save a PDF for review and signatures. No form entries are transmitted to Eros Publishing from this page.">
   <section className="agreement-tool">
    <p className="page-lead"><strong>Draft only (November 2026 version).</strong> This browser-only tool produces a printable working copy, not a legally executed contract or authenticated e-signature. To save it, select a form, complete your fields, choose Print / Save as PDF, then select Save as PDF in your browser's print dialog. Review page breaks and checkboxes before signing through an agreed process.</p>
    <div className="agreement-toolbar">
     <label htmlFor="agreement-template">Select document template</label>
     <select id="agreement-template" value={selected} onChange={e=>setSelected(e.target.value)}>
      {templateLinks.map(([id,label])=><option key={id} value={id}>{label}</option>)}
     </select>
     <button type="button" className="button button-primary" onClick={()=>window.print()}>Print / Save as PDF →</button>
    </div>
    <div className="agreement-document">
     <div className="agreement-document-heading"><small>EROS PUBLISHING · CLIENT DOCUMENT TEMPLATE · NOV 2026</small><h2>{template.title}</h2><p>{template.subtitle}</p></div>
     <div className="agreement-fields">
      {template.fields.map(field=><label key={field.name} className={field.kind==='textarea'?'agreement-field agreement-wide':field.kind==='checkbox'?'agreement-field agreement-wide agreement-check':'agreement-field'}>
       {field.kind==='checkbox'?<><input type="checkbox" checked={current[field.name]==='Yes'} onChange={e=>update(field.name,e.target.checked?'Yes':'')} /><span>{field.label}{field.required?' *':''}</span></>:<><span>{field.label}{field.required?' *':''}</span>{field.kind==='textarea'?<textarea rows={4} value={current[field.name]||''} onChange={e=>update(field.name,e.target.value)} />:<input type={field.kind==='date'?'date':field.kind==='email'?'email':'text'} value={current[field.name]||''} onChange={e=>update(field.name,e.target.value)} />}</>}
      </label>)}
     </div>
     <div className="agreement-clauses">{template.clauses.map((clause,i)=><section key={clause.heading}><h3>{i+1}. {clause.heading}</h3><p>{clause.text}</p></section>)}</div>
     <p className="agreement-notice">Draft for review. Blank or typed signature fields are not a verified electronic-signature process. The parties should review the completed document, obtain appropriate legal advice, and sign it using a mutually accepted signing method. A quote request or unsigned form does not create a contract.</p>
    </div>
    <div className="agreement-actions">
     <p>{missing.length ? `Fields marked * still incomplete: ${missing.length}. You can print a draft, but complete these before signing.` : 'Required drafting fields completed. Review the terms and signatures before use.'}</p>
     <button type="button" className="button button-primary" onClick={()=>window.print()}>Print / Save Completed Form as PDF →</button>
     <button type="button" className="button book-secondary-button" onClick={()=>{if(window.confirm('Clear the entries for this form?'))setValues(prev=>({...prev,[selected]:{}}));}}>Clear This Form</button>
    </div>
    <p><strong>Privacy:</strong> Entries stay in this browser tab only and are lost when you reload or leave the page. Saving as PDF is handled by your browser. Do not enter sensitive financial information or account passwords.</p>
    <p><Link className="text-link" href="/legal">Review legal policies →</Link></p>
   </section>
   <style jsx global>{`
    .agreement-toolbar{display:flex;align-items:center;gap:16px;flex-wrap:wrap;margin:12px 0 28px}.agreement-toolbar label{font-weight:700}.agreement-toolbar select{min-width:240px;padding:13px;border:1px solid #d7c6ba;background:#fffaf5;color:#23191b}
    .agreement-document{background:#fff;border:1px solid #e8dcd4;padding:clamp(20px,4vw,48px)}.agreement-document-heading{border-bottom:2px solid #8f2636;padding-bottom:20px;margin-bottom:24px}.agreement-document-heading small{color:#8f2636;letter-spacing:2px;font-weight:700}.agreement-document-heading h2{font-family:Georgia,serif;font-size:clamp(28px,3vw,42px);margin:12px 0}.agreement-fields{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}.agreement-field{display:flex;flex-direction:column;gap:7px;font-size:12px;font-weight:600}.agreement-wide{grid-column:1/-1}.agreement-field input:not([type=checkbox]),.agreement-field textarea{width:100%;border:1px solid #d7c6ba;background:#fffdf9;color:#23191b;padding:12px;min-height:42px}.agreement-field textarea{resize:vertical}.agreement-check{flex-direction:row;align-items:flex-start}.agreement-check input{width:18px;height:18px;accent-color:#8f2636}.agreement-clauses{margin-top:32px}.agreement-clauses section{padding:15px 0;border-top:1px solid #e8dcd4}.agreement-clauses h3{font-size:15px;margin:0 0 8px}.agreement-clauses p{line-height:1.8;margin:0}.agreement-notice{background:#faf1e9;padding:16px;line-height:1.7}.agreement-actions{display:flex;align-items:center;flex-wrap:wrap;gap:14px;margin:24px 0}.agreement-actions p{flex-basis:100%}
    @media(max-width:640px){.agreement-fields{grid-template-columns:1fr}.agreement-toolbar select{width:100%}}
    @media print{@page{size:letter;margin:0.6in}body{background:white!important;color:black!important}.announcement,.site-header,.site-footer,.subpage-hero,.agreement-toolbar,.agreement-actions,.agreement-tool>p{display:none!important}.subpage-main,.subpage-content,.agreement-tool{padding:0!important;margin:0!important;max-width:none!important}.agreement-document{border:0;padding:0}.agreement-field input:not([type=checkbox]),.agreement-field textarea{border:0;border-bottom:1px solid #777;background:white;padding:4px;resize:none;min-height:28px}.agreement-fields{gap:13px}.agreement-clauses section{break-inside:avoid}.agreement-document-heading{break-after:avoid}a{color:black}}
   `}</style>
  </PageShell>
 );
}
