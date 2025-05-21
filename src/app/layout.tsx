import type { Metadata } from 'next'
import './globals.css'

import { Rubik } from 'next/font/google'

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'ClimateGuesser - Descubra de onde é essa previsão climáticas',
  description:
    'Descubra a região mais próxima com base na previsão do tempo. Analise as informações climáticas e veja se consegue acertar o local!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`antialiased ${rubik.className}`}>{children}</body>
    </html>
  )
}
