import { Advent_Pro } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'

const adventPro = Advent_Pro({
  weight: '200',
  preload: false,
})

export const metadata = {
  title: 'heyjuanma.js',
  description: 'My Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={adventPro.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
