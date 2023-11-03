import { Inter } from 'next/font/google'
import './globals.css'
import { MyProvider } from '@/context/context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MachHUB',
  description: 'Generated by MachHUB for your company',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F5F3ED]`}>
        <MyProvider>
          {children}
        </MyProvider>
      </body>
    </html>
  )
}
