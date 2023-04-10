import { Header } from '../components/Header/Header'
import { Inter, Outfit } from 'next/font/google'
import Image from 'next/image'

import FutsalIcon from '../../public/icons/futsal.svg'
import BasketIcon from '../../public/icons/basquete.svg'
import SoccerIcon from '../../public/icons/futebol.svg'
import GymnasticsIcon from '../../public/icons/ginastica-olimpica.svg'
import HandballIcon from '../../public/icons/handball.svg'
import JudoIcon from '../../public/icons/judo.svg'
import SynchronizedSwimmingIcon from '../../public/icons/nado-sincronizado.svg'
import SwimmingIcon from '../../public/icons/natacao.svg'
import WaterPoloIcon from '../../public/icons/polo-aquatico.svg'
import OrnamentalJumpIcon from '../../public/icons/salto-ornamental.svg'
import TennisIcon from '../../public/icons/tenis.svg'
import TableTennisIcon from '../../public/icons/tenis-mesa.svg'
import VolleyIcon from '../../public/icons/volei.svg'

import Footer from '@/components/Footer'

import { useKeenSlider } from 'keen-slider/react'

import { Button } from '@/components/Button'

const inter = Inter({ subsets: ['latin'] })
const outfit = Outfit({ subsets: ['latin'] })

export default function Home() {
  const [modalidadesSliderRef, instanceRef] = useKeenSlider(
    {
      breakpoints: {
        '(min-width: 400px)': {
          slides: { perView: 3, spacing: 5, origin: 'auto' },
        },
        '(min-width: 600px)': {
          slides: { perView: 5, spacing: 10 },
        },
      },
      mode: 'free-snap',
      slides: {
        perView: 3,
        origin: 'auto',
        spacing: 25,
      },
      slideChanged() {
        console.log('slide changed')
      },
    },
    [
      // add plugins here
    ]
  )

  const HeroSection = () => {
    return (
      <div className="relative flex flex-col justify-between">
        <div className="flex">
          <div className="max-w-[50%] md:w-full flex flex-col mb-10 xl:justify-center">
            <h1 className="font-black text-base md:text-4xl lg:text-[48px] xl:text-[58px] text-gray-light">
              COLECIONÁVEIS
            </h1>
            <h2 className="text-sm font-black md:text-4xl lg:text-[45px] md:mt-2  text-secondary-medium">
              EXCLUSIVOS
            </h2>

            <div className="mt-2 font-normal text-gray-light lg:mt-6">
              <p className="text-xs leading-5 md:text-base">
                CHRONUS Sports é a sua chance de possuir, vender e negociar NFTs
                colecionáveis digitais oficiais dos melhores atletas
                profissionais do Mundo todo.
              </p>
            </div>

            <div className="absolute md:static flex items-center w-full font-normal bottom-[-20px] mt-9">
              <Button className="h-10 md:h-[56px] gradient-4 md:text-base max-w-[170px] w-full text-gray-light rounded-2xl">
                EXPLORE
              </Button>

              <Button className="h-10 md:h-[56px] md:text-base max-w-[170px] w-full ml-4 md:ml-[30px] bg-transparent border border-1 border-[#4f25cc] text-gray-light rounded-2xl">
                CADASTRE-SE
              </Button>
            </div>
          </div>

          <div className="w-full h-fit">
            <Image
              src="/images/principal-image.png"
              width={563}
              height={563}
              alt="Imagem principal"
            />
          </div>
        </div>
      </div>
    )
  }

  const Section1 = () => {
    return (
      <div
        className="mt-14 md:flex section-2 lg:items-start"
        style={{
          backgroundImage: 'url(/images/scount.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top',
          backgroundSize: 'contain',
        }}
      >
        <div>
          <Image
            src="/images/scout-banner.png"
            width={1920}
            height={1920}
            alt="Scount Banner"
          />
        </div>

        <div className="text-gray-light md:mt-14">
          <h2 className="font-extrabold md:text-4xl lg:text-6xl text-gray-light text-md">
            SCOUT COMBINE
          </h2>
          <p className="mt-2 text-sm md:mt-6 md:text-base">
            Acompanhe o desempenho do seu atleta favorito, com NFTs dinâmicos e
            adicione à sua Wallet os ativos digitais de cada temporada. Invista
            e colecione a história. Comece agora, é rápido e fácil.
          </p>

          <div>
            <Button className="h-[40px] md:h-[53px] mt-4 md:mt-14 min-w-[171px] bg-transparent border border-1 border-[#4f25cc] text-gray-light rounded-2xl">
              CADASTRE-SE
            </Button>
          </div>
        </div>
      </div>
    )
  }

  const Section2 = () => {
    return (
      <div
        className="w-full mt-14 section-2"
        style={{
          backgroundImage: 'url(/images/lancamentos-bg.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top',
          backgroundSize: 'cover',
        }}
      >
        <h2 className="mt-8 font-extrabold text-center text-gray-light">
          LANÇAMENTOS
        </h2>
      </div>
    )
  }

  const Section3 = () => {
    return (
      <div id="section-3" className="mt-2 md:block">
        <div className="text-center md:text-left text-gray-light">
          <h2 className="text-base font-black md:text-6xl text-gray-light">
            RECURSOS
          </h2>
        </div>

        <div className="h-full md:relative md:flex md:flex-col xl:flex-row md:items-center xl:mt-10">
          <div className="xl:absolute md:max-w-[694px] md:mt-10 right-0">
            <Image
              src="/images/recursos-banner.png"
              width={1050}
              height={794}
              alt="Recursos"
            />
          </div>

          <div className="md:flex md:flex-col xl:max-w-[50%] xl:mt-10">
            <div className="flex gap-5 md:gap-10">
              <div className="">
                <Image
                  src="/icons/ic-be-atlet.svg"
                  width={77}
                  height={95}
                  alt="Seja um atleta"
                />
              </div>

              <div className="flex-1">
                <h3 className="font-black md:text-5xl text-secondary-medium">
                  SEJA UM ATLETA
                </h3>
                <p className="mt-4 text-xs font-normal leading-5 md:text-base text-gray-light">
                  No CHRONUS Sports, seja você atleta amador ou profissional, ao
                  realizar o seu cadastro nós iremos validar suas informações e
                  categorizar o seu perfil dentro da plataforma. Cadastre-se e
                  aproveite todos os nossos recursos.
                </p>
              </div>
            </div>

            <div className="flex gap-5 mt-14 md:gap-10 md:mt-10">
              <div className="">
                <Image
                  src="/icons/ic-scount.svg"
                  width={77}
                  height={95}
                  alt="Scount Combine"
                />
              </div>

              <div className="flex-1">
                <h3 className="font-black md:text-5xl text-secondary-medium">
                  SCOUT COMBINE
                </h3>
                <p className="mt-4 text-xs font-normal leading-5 md:text-base text-gray-light">
                  NFT’s cheios de recursos para você colecionar, investir e se
                  destacar dentro do mercado desportivo.
                </p>
              </div>
            </div>

            <div className="flex gap-5 mt-14 md:gap-10 md:mt-10">
              <div className="">
                <Image
                  src="/icons/ic-digital-wallet.svg"
                  width={77}
                  height={95}
                  alt="Carteira Digital"
                />
              </div>

              <div className="flex-1">
                <h3 className="font-black md:text-5xl text-secondary-medium">
                  CARTEIRA DIGITAL
                </h3>
                <p className="mt-4 text-xs font-normal leading-5 md:text-base text-gray-light">
                  Crie sua Wallet de forma simples e rápida, sem vínculos com
                  CRIPTOMOEDAS e comece a investir nos melhores NFTs esportivos
                  do Mundo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const Section4 = () => {
    return (
      <div className="flex flex-col mt-20 md:mt-40 md:flex md:flex-row-reverse">
        <div className="h-[183px] md:h-auto relative md:flex-grow md:basis-0">
          <Image
            className="object-cover"
            src="/images/pack-banner.png"
            fill
            alt="Pack card"
          />
        </div>

        <div className="w-full md:flex-grow md:flex md:flex-col md:basis-0">
          <div className="w-[280px] md:w-full mt-3">
            <p className="font-bold md:leading-10 text-gray-light md:text-5xl">
              JÁ IMAGINOU{' '}
              <span className="md:leading-10 text-secondary-medium">
                GANHAR VIAGENS
              </span>{' '}
              E DIVERSOS OUTROS PRÊMIOS?
            </p>
          </div>
          <div className="w-[358px] md:w-full mt-2">
            <p className="text-sm font-normal text-gray-light">
              Uma enorme variedade de experiências atreladas aos NFTs esportivos
              mais procurados. Compre colecionáveis raros e participe.
            </p>
          </div>

          <div className="flex items-center w-full font-normal button-swap mt-7">
            <Button className="h-10 md:h-[56px] gradient-4 md:text-base max-w-[170px] w-full text-gray-light rounded-2xl">
              EXPLORE
            </Button>

            <Button className="h-10 md:h-[56px] md:text-base max-w-[170px] w-full ml-4 md:ml-[30px] bg-transparent border border-1 border-[#4f25cc] text-gray-light rounded-2xl">
              CADASTRE-SE
            </Button>
          </div>
        </div>
      </div>
    )
  }

  const Section5 = () => {
    return (
      <div className="mx-auto my-0 mt-40 xl:container xl:flex xl:flex-col xl:justify-center xl:items-center">
        <h2 className="mt-8 font-bold text-center text-gray-light">
          MODALIDADES
        </h2>

        <div
          ref={modalidadesSliderRef}
          id="modalidades-slider"
          className="relative flex items-center h-56 mt-8 keen-slider"
        >
          <div className="absolute blur-3xl w-full bg-[#07749C9E] mx-auto h-80">
            .
          </div>
          <div className="relative flex items-center text-center text-white keen-slider__slide">
            <Image
              className="h-full max-h-[170px]"
              src={FutsalIcon}
              alt="Futsal image"
            />
            <p className="absolute left-0 right-0 mx-auto my-auto text-white bottom-5">
              Futsal
            </p>
          </div>
          <div className="flex items-center text-center text-white keen-slider__slide">
            <Image
              className="h-full max-h-[170px]"
              src={BasketIcon}
              alt="Basquete image"
            />
            <p className="absolute left-0 right-0 mx-auto my-auto text-white bottom-5">
              Basquete
            </p>
          </div>
          <div className="flex items-center text-white keen-slider__slide">
            <Image
              className="h-full max-h-[170px]"
              src={SoccerIcon}
              alt="Futsal image"
            />
            <p className="absolute left-0 right-0 mx-auto my-auto text-white bottom-5">
              Futebol
            </p>
          </div>
          <div className="flex items-center text-white keen-slider__slide">
            <Image
              className="h-full max-h-[170px]"
              src={GymnasticsIcon}
              alt="Ginástica image"
            />
            <p className="absolute left-0 right-0 mx-auto my-auto text-white bottom-5">
              Ginástica Olimpica
            </p>
          </div>
          <div className="flex items-center text-white keen-slider__slide">
            <Image
              className="h-full max-h-[170px]"
              src={HandballIcon}
              alt="Handball image"
            />
            <p className="absolute left-0 right-0 mx-auto my-auto text-white bottom-5">
              Handball
            </p>
          </div>
          <div className="flex items-center text-white keen-slider__slide">
            <Image
              className="h-full max-h-[170px]"
              src={JudoIcon}
              alt="Judo image"
            />
            <p className="absolute left-0 right-0 mx-auto my-auto text-white bottom-5">
              Judo
            </p>
          </div>
          <div className="flex items-center text-white keen-slider__slide">
            <Image
              className="h-full max-h-[170px]"
              src={SynchronizedSwimmingIcon}
              alt="Nado sincronizado image"
            />
            <p className="absolute left-0 right-0 mx-auto my-auto text-white bottom-5">
              Nado sincronizado
            </p>
          </div>
          <div className="flex items-center text-white keen-slider__slide">
            <Image
              className="h-full max-h-[170px]"
              src={SwimmingIcon}
              alt="Futsal image"
            />
            <p className="absolute left-0 right-0 mx-auto my-auto text-white bottom-5">
              Natação
            </p>
          </div>
          <div className="flex items-center text-white keen-slider__slide">
            <Image
              className="h-full max-h-[170px]"
              src={WaterPoloIcon}
              alt=" Polo aquático image"
            />
            <p className="absolute left-0 right-0 mx-auto my-auto text-white bottom-5">
              Polo aquático
            </p>
          </div>
          <div className="flex items-center text-white keen-slider__slide">
            <Image
              className="h-full max-h-[170px]"
              src={OrnamentalJumpIcon}
              alt=" Salto ornamental image"
            />
            <p className="absolute left-0 right-0 mx-auto my-auto text-white bottom-5">
              Salto ornamental
            </p>
          </div>
          <div className="flex items-center text-white keen-slider__slide">
            <Image
              className="h-full max-h-[170px]"
              src={TennisIcon}
              alt="Tenis image"
            />
            <p className="absolute left-0 right-0 mx-auto my-auto text-white bottom-5">
              Tenis
            </p>
          </div>
          <div className="flex items-center text-white keen-slider__slide">
            <Image
              className="h-full max-h-[170px]"
              src={TableTennisIcon}
              alt="Tenis de mesa image"
            />
            <p className="absolute left-0 right-0 mx-auto my-auto text-white bottom-5">
              Tenis de mesa
            </p>
          </div>
          <div className="flex items-center text-white keen-slider__slide">
            <Image
              className="h-full max-h-[170px]"
              src={VolleyIcon}
              alt="Volei image"
            />
            <p className="absolute left-0 right-0 mx-auto my-auto text-white bottom-5">
              Volei
            </p>
          </div>
        </div>
      </div>
    )
  }

  const Section6 = () => {
    return (
      <div className="container">
        <div className="mt-24">
          <h2 className="mt-8 font-bold text-center text-gray-light">
            NEWSLETTER
          </h2>
          <p className="text-sm text-center mt-9 text-gray-light">
            Inscreva-se na nossa newsletter para ficar por dentro de todas as
            novidades, lançamentos, drops e dicas do Chronus Sports
          </p>
          <div>
            <input
              placeholder="Endereço de e-mail"
              className="px-4 py-2 mt-8 bg-transparent border border-1 border-primary-medium rounded-lg text-secondary-medium min-w-[358px]"
            />
          </div>
        </div>
        <div className="mt-20 text-center">
          <h2 className="mt-8 font-bold text-center text-gray-light">
            PARCEIROS
          </h2>

          <p className="mt-10 font-normal text-gray-medium">
            Parceiros e Clientes da CHRONUS Plataform
          </p>

          <div className="flex items-center justify-between mt-6">
            <div className="Card bg-header-primary-darkest w-[110px] h-[110px] rounded-2xl flex justify-center items-center">
              <Image
                src="/images/websummit.png"
                width={60}
                height={42}
                alt="Web Summit image"
              />
            </div>
            <div className="Card bg-header-primary-darkest w-[110px] h-[110px] rounded-2xl flex justify-center items-center">
              <Image
                src="/images/cbf.png"
                width={44}
                height={70}
                alt="CBF image"
              />
            </div>
            <div className="Card bg-header-primary-darkest w-[110px] h-[110px] rounded-2xl flex justify-center items-center">
              <Image
                src="/images/fpf.png"
                width={70}
                height={70}
                alt="FBF image"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <Header />
      <div className="w-full h-full pt-9 pb-52 bg-primary-darkest">
        <div className="container px-3 mx-auto my-0">{HeroSection()}</div>

        <div className="container px-3 mx-auto my-0">{Section1()}</div>

        {Section2()}

        <div className="container px-3 mx-auto my-0">{Section3()}</div>

        <div className="container px-3 mx-auto my-0">{Section4()}</div>

        {Section5()}

        <div className="container px-3 mx-auto my-0">{Section6()}</div>
      </div>
      <Footer />
    </>
  )
}
