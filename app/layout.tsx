import './globals.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'E-postsignatur Generator',
  description: 'Generer tilpassede e-postsignaturer for dine klienter',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', rel: 'icon' },
      { url: '/favicon-96x96.png', sizes: '96x96', rel: 'icon' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    title: 'E-postsignatur Generator',
  },
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

