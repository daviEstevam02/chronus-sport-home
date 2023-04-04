import Head from 'next/head'
import { Inter, Outfit } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Chronos Sports</title>
        <meta name="description" content="Chronos Sports - the NFT sports website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex justify-center'>

        <div className='w-[250px]'>
          <h1 className='text-lg font-bold text-support-positive-darkest'>Chronos Sports</h1>
        </div>
      </main>
    </>
  )
}
