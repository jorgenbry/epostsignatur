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
        department: 'Avdeling',
        phone: '+47 12 34 56 78',
      }}
    />
  );
}


