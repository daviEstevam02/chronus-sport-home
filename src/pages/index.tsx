import { Header } from '../components/Header/Header'
import { Inter, Outfit } from 'next/font/google'
import Image from 'next/legacy/image'

import { Button } from '@/components/Button'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <div className="w-full h-full bg-primary-darkest ">
        <div className="container"></div>
      </div>

      {/* <div className='flex items-center mt-40 ml-auto mr-auto 2xl:w-3/6 px-80 Content-Section-1 lg:px-20'>
        <div className='Content'>
         <div className='Title'>
            <h1
              className='text-[58px] font-black text-gray-light tracking-wider lg:text-[38x]'
            >
              COLECIONÁVEIS
            </h1>
            <h2
              className='mt-[-20px] text-[46px] font-black text-secondary-light tracking-wider lg:text-[26x]'
            >EXCLUSIVOS</h2>
            <p
              className='text-gray-light max-w-[600px] tracking-wider'
            >
              CHRONUS Sports é a sua chance de possuir, vender e negociar NFTs colecionáveis digitais oficiais dos melhores atletas profissionais do Mundo todo.
            </p>

            <div className='mt-10 button-section'>
              <Button 
                className='gradient-1 w-[204px]  text-gray-light px-3 py-3 rounded-xl mr-4 '
              >
                Explore
              </Button>

              <Button 
                className='w-[204px] text-gray-light px-3 py-3 bg-transparent rounded-xl border border-solid border-1 border-[#803EB4]'
              >
                Cadastre-se
              </Button>
            </div>
         </div>
        </div>
        <div className='mt-32 principal-banner lg:mt-0'>
          <Image layout='fill' src='/images/principal-image.png' alt="" className='w-[800px]' />
        </div>
      </div>

      <div className='relative flex items-center px-32 mt-28 2xl:mt-96 Content-section-2 lg:px-10'>
            <Image layout='fill' src='/images/scount.png' alt="Scount" />
            <Image layout='fill' src='/images/scount-banner.png' alt="Scount" className='absolute w-3/6 '/>

          <div className=''>
            <h1
              className='text-[58px] font-black text-gray-light tracking-wider'
            >
              SCOUNT <br/> COMBINE
            </h1>
            <p
              className='text-gray-light max-w-[600px] tracking-wider'
            >
              Acompanhe o desempenho do seu atleta favorito, com NFTs dinâmicos e adicione à sua Wallet os ativos digitais de cada temporada. Invista e colecione a história. Comece agora, é rápido e fácil.
            </p>

            <div className='mt-10 button-section'>
              <Button 
                className='w-[204px] text-gray-light px-3 py-3 bg-transparent rounded-xl border border-solid border-1 border-[#803EB4]'
              >
                Cadastre-se
              </Button>
            </div>
         </div>

      </div>

        <div className='px-32 text-center mt-80 Content-section-3'>
            <h1
              className='text-[58px] font-black text-gray-light tracking-wider'
            >
              LANÇAMENTOS
            </h1>
         </div> */}
    </>
  )
}
