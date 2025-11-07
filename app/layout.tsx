import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'E-postsignatur Generator - Kagge forlag',
  description: 'Generer din e-postsignatur for Kagge forlag',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nb">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}

