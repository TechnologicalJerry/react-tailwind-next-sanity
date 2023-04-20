import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="py-8 px-48">
        <Link href={'/dashboard'}>Go to the Dashboard</Link>
    </main>
  )
}
