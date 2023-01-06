import './globals.css'
import { Footer } from './components/Shared/Footer'
import { Navbar } from './components/Shared/Navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='flex flex-col h-screen justify-between'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
