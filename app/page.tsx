import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <h1 className='bg-green-200 p-1 rounded-md'>Hola Mundo</h1>
    </>
  )
}
