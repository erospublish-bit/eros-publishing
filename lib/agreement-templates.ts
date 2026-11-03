export type Field = { name: string; label: string; kind?: 'date' | 'textarea' | 'email' | 'checkbox'; required?: boolean };
export type Template = { title: string; subtitle: string; fields: Field[]; clauses: { heading: string; text: string }[] };
const common: Field[] = [
 {name:'effectiveDate',label:'Effective date',kind:'date',required:true},
 {name:'clientName',label:'Client / author legal name',required:true},
 {name:'clientEmail',label:'Client email',kind:'email',required:true},
 {name:'clientAddress',label:'Client mailing address'},
 {name:'publisherName',label:'Provider legal entity / name (verify before signing)',required:true},
 {name:'publisherRepresentative',label:'Provider representative',required:true},
];
const signatures: Field[] = [
 {name:'clientSignature',label:'Client signature (sign printed copy or use a separate approved e-signature service)'},
 {name:'clientSignedDate',label:'Client signature date',kind:'date'},
 {name:'publisherSignature',label:'Eros Publishing authorized signature'},
 {name:'publisherSignedDate',label:'Provider signature date',kind:'date'},
];
export const templates: Record<string,Template> = {
 'author-services': {
  title:'Author Services Agreement',subtitle:'Master agreement for commissioned publishing services. Attach a completed Statement of Work.',
  fields:[...common,{name:'projectTitle',label:'Book / project title',required:true},{name:'sowReference',label:'Statement of Work title / version',required:true},{name:'governingLaw',label:'Governing state / jurisdiction (confirm with counsel)'},{name:'notices',label:'Address or email for formal notices'},...signatures],
  clauses:[
   {heading:'Scope and changes',text:'Provider will perform only the services and deliverables identified in the mutually approved Statement of Work. Changes to scope, price, deadlines, or deliverables require a written change order approved by both parties before additional work begins.'},
   {heading:'Ownership and permissions',text:'Client retains ownership of the original manuscript and underlying intellectual property. Client warrants that submitted materials are owned or properly licensed and grants Provider a limited, nonexclusive permission to use them solely to perform the agreed services. Rights to newly commissioned deliverables, pre-existing tools, stock imagery, fonts, and other third-party assets must be specified in the Statement of Work and applicable licenses.'},
   {heading:'Payment and expenses',text:'The Statement of Work controls fees and milestones. Unless expressly changed there, 50% is payable at project kickoff and 50% before release of final deliverables or publication setup. Third-party expenses require prior client approval and are not included unless itemized.'},
   {heading:'Revisions and approvals',text:'Included revision rounds and delivery estimates are listed in the Statement of Work. One round is one consolidated set of feedback. Client reviews all proofs and metadata; publication requires separate written approval identifying the edition and distribution platforms.'},
   {heading:'Accounts and royalties',text:'When distribution accounts are registered in Client’s name, Client controls those accounts and receives royalties under each platform’s terms. Provider receives the agreed service fees, not an additional royalty share, unless separately negotiated in writing.'},
   {heading:'Confidentiality',text:'Both parties will reasonably protect nonpublic project materials and use them only to perform this agreement, subject to customary exceptions for public, independently developed, lawfully obtained, or legally compelled information. Public portfolio use requires separate consent.'},
   {heading:'Cancellation and outcomes',text:'On written cancellation, parties will account for completed work, approved outside costs, outstanding fees, and unused prepaid services in accordance with the Statement of Work and applicable law. Provider does not guarantee retailer acceptance, sales, rankings, reviews, or earnings. Specific remedies and dispute terms should be reviewed with counsel.'},
  ]
 },
 'statement-of-work': {
  title:'Project Statement of Work',subtitle:'Complete for each book or service package and attach to the signed Author Services Agreement.',
  fields:[...common,{name:'agreementReference',label:'Related agreement date / reference'},{name:'bookTitle',label:'Book title',required:true},{name:'manuscriptVersion',label:'Manuscript filename / version / word count',required:true},{name:'services',label:'Included services and precise scope',kind:'textarea',required:true},{name:'exclusions',label:'Services specifically excluded',kind:'textarea'},{name:'deliverables',label:'Deliverable files, editions, specifications and ownership / licenses',kind:'textarea',required:true},{name:'platforms',label:'Distribution platforms / account ownership',kind:'textarea'},{name:'revisions',label:'Included revision rounds and feedback deadlines',kind:'textarea',required:true},{name:'schedule',label:'Milestones, dependencies and estimated delivery dates',kind:'textarea',required:true},{name:'totalFee',label:'Total service fee and currency',required:true},{name:'deposit',label:'Deposit amount and due date',required:true},{name:'balance',label:'Remaining payments and due dates',required:true},{name:'thirdPartyCosts',label:'Approved third-party expenses / caps',kind:'textarea'},{name:'cancellation',label:'Project-specific cancellation and refund accounting',kind:'textarea'},{name:'specialTerms',label:'Other agreed terms / attachments',kind:'textarea'},...signatures],
  clauses:[{heading:'Project authorization',text:'The parties agree to the listed scope, deliverables, fees, schedule, revision allowance and approved expenses. Additional work or costs require a separate written change order. This Statement of Work is effective only when accepted by both parties and read with the referenced Author Services Agreement.'}]
 },
 'publication-approval': {
  title:'Final Proof & Publication Approval',subtitle:'Use for each edition and distribution release; do not treat a general contract as publication permission.',
  fields:[...common,{name:'bookTitle',label:'Book title and author / pen name',required:true},{name:'isbn',label:'ISBN (if assigned)'},{name:'edition',label:'Edition / format (paperback, hardcover, e-book)',required:true},{name:'coverFile',label:'Approved cover file name / version',required:true},{name:'interiorFile',label:'Approved interior file name / version',required:true},{name:'metadata',label:'Approved description, categories, keywords and credits',kind:'textarea'},{name:'platforms',label:'Approved platforms / retailers',kind:'textarea',required:true},{name:'prices',label:'Approved prices, currencies and territories',kind:'textarea',required:true},{name:'releaseDate',label:'Requested release / submission date',kind:'date'},{name:'knownIssues',label:'Known corrections, limitations or exceptions',kind:'textarea'},{name:'rightsConfirmed',label:'I confirm that I have the rights and permissions required to publish these materials.',kind:'checkbox',required:true},{name:'proofConfirmed',label:'I reviewed and approve the specified files, metadata and release details.',kind:'checkbox',required:true},{name:'releaseConfirmed',label:'I specifically authorize submission of this edition to the platforms listed above.',kind:'checkbox',required:true},...signatures],
  clauses:[{heading:'Authorization',text:'Approval applies only to the listed edition, files, prices and platforms. Changes after approval may require another written authorization. Third-party processing and release dates are not guaranteed.'}]
 },
 'nda': {
  title:'Mutual Non-Disclosure Agreement',subtitle:'Optional agreement for exchanging confidential manuscripts and project information.',
  fields:[...common,{name:'purpose',label:'Permitted evaluation / project purpose',required:true},{name:'startDate',label:'Confidentiality start date',kind:'date'},{name:'term',label:'Confidentiality duration (agree with counsel)'},{name:'exceptions',label:'Additional exclusions or authorized recipients',kind:'textarea'},...signatures],
  clauses:[{heading:'Mutual confidentiality',text:'Each party will use the other’s nonpublic information only for the stated purpose, disclose it only to persons with a legitimate need and appropriate confidentiality duties, and protect it using reasonable care. This does not cover information that is public without breach, previously known, independently developed, lawfully received, or required to be disclosed by law. No copyright or ownership transfers under this NDA.'}]
 },
 'change-order': {
  title:'Project Change Order',subtitle:'Document and approve any additional work before it begins.',
  fields:[...common,{name:'originalAgreement',label:'Original agreement / SOW reference',required:true},{name:'changeNumber',label:'Change order number'},{name:'requestedChanges',label:'Requested changes and new deliverables',kind:'textarea',required:true},{name:'reason',label:'Reason for change',kind:'textarea'},{name:'addedFees',label:'Additional or reduced fees and payment timing',required:true},{name:'scheduleImpact',label:'Revised milestones and deadlines',kind:'textarea',required:true},{name:'unchanged',label:'Terms that remain unchanged',kind:'textarea'},...signatures],
  clauses:[{heading:'Approval',text:'Only the changes described here modify the original Statement of Work. All other agreed terms remain in effect. Additional work begins after approval by both parties.'}]
 },
 'permissions': {
  title:'Third-Party Content Permission & License Record',subtitle:'Record permission for each excerpt, image, artwork, quotation or other licensed asset.',
  fields:[{name:'work',label:'Book / project title',required:true},{name:'material',label:'Material description and source',kind:'textarea',required:true},{name:'rightsHolder',label:'Rights holder legal name',required:true},{name:'rightsEmail',label:'Rights holder contact email',kind:'email'},{name:'licensee',label:'Person / company receiving permission',required:true},{name:'allowedUse',label:'Allowed use, formats, platforms and territories',kind:'textarea',required:true},{name:'duration',label:'License duration / expiration'},{name:'credit',label:'Required attribution / credit'},{name:'fee',label:'Permission fee / conditions'},{name:'restrictions',label:'Restrictions, exclusions and supporting license reference',kind:'textarea'},{name:'rightsHolderSignature',label:'Rights holder signature'},{name:'rightsHolderDate',label:'Date signed',kind:'date'},{name:'licenseeSignature',label:'Licensee acknowledgement signature'},{name:'licenseeDate',label:'Date signed',kind:'date'}],
  clauses:[{heading:'Limited permission',text:'The rights holder grants only the specific uses identified above and represents they have authority to grant those rights. All rights not expressly granted are reserved. Attach written permission or license evidence and have counsel review material rights questions.'}]
 },
 'portfolio-release': {
  title:'Optional Testimonial & Portfolio Release',subtitle:'Separate, voluntary permission for marketing; not required to purchase publishing services.',
  fields:[{name:'clientName',label:'Author / client legal name',required:true},{name:'bookTitle',label:'Book / project title'},{name:'displayName',label:'Public credit name or pen name'},{name:'approvedQuote',label:'Exact approved testimonial (if any)',kind:'textarea'},{name:'approvedAssets',label:'Approved images, cover art, excerpts or project results',kind:'textarea'},{name:'channels',label:'Approved channels (website, social, proposals, etc.)',kind:'textarea'},{name:'limits',label:'Attribution limits, duration or restrictions',kind:'textarea'},{name:'consent',label:'I voluntarily authorize only the uses described above.',kind:'checkbox',required:true},{name:'signature',label:'Client signature'},{name:'date',label:'Date signed',kind:'date'}],
  clauses:[{heading:'Optional consent',text:'This release is optional and separate from the service agreement. Eros Publishing may use only the expressly approved testimonial and assets for the listed promotional purposes, without implying unapproved endorsements or results. Any agreed withdrawal procedure and existing uses should be documented before signing.'}]
 },
};
export const templateLinks = [
 ['author-services','Author Services Agreement'],['statement-of-work','Statement of Work'],['publication-approval','Publication Approval'],['nda','Mutual NDA'],['change-order','Change Order'],['permissions','Permissions & Licensing'],['portfolio-release','Testimonial & Portfolio Release']
] as const;
