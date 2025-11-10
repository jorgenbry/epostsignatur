import type { Metadata } from 'next';
import { SignatureGenerator } from '@/components/SignatureGenerator';

export default function KaggePage() {
  return (
    <SignatureGenerator
      client="kagge"
      title="Lag din epostsignatur for Kagge"
      description="Fyll ut feltene nedenfor for å generere din Kagge-signatur."
      placeholders={{
        email: 'navn@kagge.no',
        position: 'Din stilling',
        phone: '+47 123 45 678',
      }}
    />
  );
}

export const metadata: Metadata = {
  title: 'Epostsignatur – Kagge forlag',
};


