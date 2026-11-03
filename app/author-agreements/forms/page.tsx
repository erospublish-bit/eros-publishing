import type { Metadata } from 'next';
import AgreementForms from '@/components/AgreementForms';

export const metadata: Metadata = {title:'Fillable Author Agreement Forms | Eros Publishing',description:'Complete and print author services agreements, statements of work, publication approvals and other publishing forms.',alternates:{canonical:'/author-agreements/forms'}};

export default function Page(){return <AgreementForms/>;}
