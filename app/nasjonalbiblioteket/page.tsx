import type { Metadata } from 'next';
import { SignatureGenerator } from '@/components/SignatureGenerator';

export default function NasjonalbiblioteketPage() {
  return (
    <SignatureGenerator
      client="nasjonalbiblioteket"
      title="Lag din epostsignatur for Nasjonalbiblioteket"
      description="Fyll ut feltene nedenfor for å generere din signatur for Nasjonalbiblioteket."
      placeholders={{
        email: 'navn@nb.no',
        position: 'Din stilling',
        phone: '+47 12 34 56 78',
      }}
    />
  );
}

export const metadata: Metadata = {
  title: 'Epostsignatur – Nasjonalbiblioteket',
};


