import './globals.css'
import { Footer } from './components/Shared/Footer'
import { Navbar } from './components/Shared/Navbar'
import { Sidebar } from './components/Shared/Sidebar/Sidebar';

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
        <div className='flex flex-row justify-center'>
          <Sidebar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
