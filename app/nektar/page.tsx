import type { Metadata } from 'next';
import { SignatureGenerator } from '@/components/SignatureGenerator';

const PAGE_TITLE = 'Epostsignatur – Nektar';
const PAGE_DESCRIPTION =
  'Fyll ut feltene nedenfor for å generere din signatur for Nektar, Happy Ending eller Nektar Import.';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function NektarPage() {
  return (
    <SignatureGenerator
      client="nektar"
      title="Epostsignatur"
      description={PAGE_DESCRIPTION}
      placeholders={{
        email: 'navn@nektarvinbar.no',
        position: 'Din stilling',
        phone: '+47 123 45 678',
        department: 'Nektar',
      }}
    />
  );
}

