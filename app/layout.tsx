import './globals.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'E-postsignatur Generator',
  description: 'Generer tilpassede e-postsignaturer for dine klienter',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nb">
      <body>{children}</body>
    </html>
  )
}

