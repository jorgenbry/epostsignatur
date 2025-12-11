import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-postsignatur Generator',
  description: 'Generer tilpassede e-postsignaturer for dine klienter',
};

export default function HomePage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        fontFamily: 'var(--font-family-base)',
      }}
    >
      <h1
        style={{
          transform: 'rotate(180deg)',
          fontSize: '5rem',
          fontWeight: 500,
          lineHeight: '1',
          margin: '0 0 2.5rem 0',
          textAlign: 'center',
          fontFamily: 'var(--font-family-base)',
        }}
      >
        Smuss<br />
        Studio
      </h1>
      <div
        style={{
          fontSize: '6rem',
          lineHeight: '1',
        }}
      >
        🖋️
      </div>
    </div>
  );
}

