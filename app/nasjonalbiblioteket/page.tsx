import type { Metadata } from 'next';
import { SignatureGenerator } from '@/components/SignatureGenerator';

const PAGE_TITLE = 'Epostsignatur – Nasjonalbiblioteket';
const PAGE_DESCRIPTION = 'Fyll ut feltene nedenfor for å generere din signatur for Nasjonalbiblioteket.';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function NasjonalbiblioteketPage() {
  return (
    <SignatureGenerator
      client="nasjonalbiblioteket"
      title="Epostsignatur"
      description={PAGE_DESCRIPTION}
      placeholders={{
        email: 'navn@nb.no',
        position: 'Din stilling',
        phone: '+47 12 34 56 78',
      }}
    />
  );
}


