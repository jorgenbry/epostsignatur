import type { Metadata } from 'next';
import { SignatureGenerator } from '@/components/SignatureGenerator';

const PAGE_TITLE = 'Epostsignatur – Kagge forlag';
const PAGE_DESCRIPTION = 'Fyll ut feltene nedenfor for å generere din signatur for Kagge forlag.';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function KaggePage() {
  return (
    <SignatureGenerator
      client="kagge"
      title="Epostsignatur"
      description={PAGE_DESCRIPTION}
      placeholders={{
        email: 'navn@kagge.no',
        position: 'Din stilling',
        phone: '+47 123 45 678',
      }}
    />
  );
}


