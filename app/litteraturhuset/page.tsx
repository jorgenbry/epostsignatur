import type { Metadata } from 'next';
import { SignatureGenerator } from '@/components/SignatureGenerator';

const PAGE_TITLE = 'Epostsignatur – Litteraturhuset';
const PAGE_DESCRIPTION = 'Fyll ut feltene nedenfor for å generere din signatur for Litteraturhuset.';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function LitteraturhusetPage() {
  return (
    <SignatureGenerator
      client="litteraturhuset"
      title="Epostsignatur"
      description={PAGE_DESCRIPTION}
      placeholders={{
        email: 'navn@litteraturhuset.no',
        position: 'Din stilling',
        phone: '+47 12 34 56 78',
      }}
    />
  );
}

