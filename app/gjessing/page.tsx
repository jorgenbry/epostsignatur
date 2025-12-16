import type { Metadata } from 'next';
import { SignatureGenerator } from '@/components/SignatureGenerator';

const PAGE_TITLE = 'Epostsignatur – Gjessing';
const PAGE_DESCRIPTION = 'Fyll ut feltene nedenfor for å generere din signatur for Gjessing.';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function GjessingPage() {
  return (
    <SignatureGenerator
      client="gjessing"
      title="Epostsignatur"
      description={PAGE_DESCRIPTION}
      placeholders={{
        email: 'navn@gjessing.law',
        position: 'Din stilling',
        phone: '+47 12 34 56 78',
        linkedin: 'https://linkedin.com/in/dittnavn',
      }}
    />
  );
}

