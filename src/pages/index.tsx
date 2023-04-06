import { Header } from '../components/Header/Header'
import { Inter, Outfit } from 'next/font/google'
import Image from 'next/image'

import Footer from '@/components/Footer'

import { Button } from '@/components/Button'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <div className="w-full h-full pt-9 pb-52 bg-primary-darkest">
        <div className="container px-3 mx-auto my-0">
          <div className="grid justify-between grid-cols-4 lg:gap-5 section-1 lg:grid-cols-12 lg:items-start">
            <div className="col-span-2 lg:col-span-6">
              <div className="flex flex-col mb-2 Title lg:mt-12">
                <h1 className="font-bold text-md md:text-4xl lg:text-[48px] xl:text-[58px] text-gray-light">
                  COLECIONÁVEIS
                </h1>
                <h2 className="text-sm font-bold md:text-4xl lg:text-[45px] md:mt-2  text-secondary-medium">
                  EXCLUSIVOS
                </h2>
              </div>

              <div className="text-sm font-normal text-gray-light lg:mt-6">
                <p className="text-sm md:text-base">
                  CHRONUS Sports é a sua chance de possuir, vender e negociar
                  NFTs colecionáveis digitais oficiais dos melhores atletas
                  profissionais do Mundo todo.
                </p>
                <div className="flex items-center font-normal mt-9">
                  <Button className="h-10 md:h-[56px] gradient-4 md:text-base min-w-[170px] text-gray-light rounded-2xl">
                    EXPLORE
                  </Button>

                  <Button className="h-10 md:h-[56px] md:text-base min-w-[170px] ml-4 md:ml-[30px] bg-transparent border border-1 border-[#4f25cc] text-gray-light rounded-2xl">
                    CADASTRE-SE
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative col-start-3 col-end-5 ml-2 lg:col-start-7 lg:col-end-13">
              <Image
                src="/images/principal-image.png"
                width={1920}
                height={1080}
                alt="Imagem principal"
              />
            </div>
          </div>

          <div
            className="items-center mt-10 md:flex section-2"
            style={{
              backgroundImage: 'url(/images/scount.png)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'top',
              backgroundSize: 'contain',
            }}
          >
            <div className="relative w-full">
              <Image
                style={{ borderRadius: 122 }}
                src="/images/scount-banner.png"
                width={1920}
                height={1920}
                alt="Scount Banner"
              />
            </div>

            <div className="mt-2 text-gray-light">
              <h2 className="font-extrabold md:text-6xl text-gray-light text-md">
                SCOUNT COMBINE
              </h2>
              <p className="mt-2 text-base md:mt-6">
                Acompanhe o desempenho do seu atleta favorito, com NFTs
                dinâmicos e adicione à sua Wallet os ativos digitais de cada
                temporada. Invista e colecione a história. Comece agora, é
                rápido e fácil.
              </p>

              <Button className="h-[40px] md:h-[53px] mt-4 md:mt-14 min-w-[171px] bg-transparent border border-1 border-[#4f25cc] text-gray-light rounded-2xl">
                CADASTRE-SE
              </Button>
            </div>
          </div>
          <div className="text-center mt-36">
            <h1 className="mt-8 font-bold text-gray-light">LANÇAMENTOS</h1>
          </div>
          <div className="mt-16 text-center ">
            <h1 className="mt-8 font-bold text-gray-light">RECURSOS</h1>

            <div>
              <Image
                src="/images/recursos.png"
                width={389}
                height={320}
                alt="Recursos"
              />
            </div>

            <div>
              <div className="flex justify-between mt-5">
                <div>
                  <Image
                    src="/icons/ic-be-atlet.svg"
                    width={77}
                    height={95}
                    alt="Seja um atleta"
                  />
                </div>

                <div className="text-left w-[259px]">
                  <h1 className="font-bold text-secondary-medium">
                    SEJA UM ATLETA
                  </h1>

                  <p className="mt-4 text-sm text-gray-light">
                    No CHRONUS Sports, seja você atleta amador ou profissional,
                    ao realizar o seu cadastro nós iremos validar suas
                    informações e categorizar o seu perfil dentro da plataforma.
                    Cadastre-se e aproveite todos os nossos recursos.
                  </p>
                </div>
              </div>

              <div className="flex justify-between mt-14">
                <div>
                  <Image
                    src="/icons/ic-scount.svg"
                    width={77}
                    height={95}
                    alt="Scount Combine"
                  />
                </div>

                <div className="text-left w-[259px]">
                  <h1 className="font-bold text-secondary-medium">
                    SCOUNT COMBINE
                  </h1>

                  <p className="mt-4 text-sm text-gray-light">
                    NFT’s cheios de recursos para você colecionar, investir e se
                    destacar dentro do mercado desportivo.
                  </p>
                </div>
              </div>

              <div className="flex justify-between mt-14">
                <div>
                  <Image
                    src="/icons/ic-digital-wallet.svg"
                    width={77}
                    height={95}
                    alt="Carteira Digital"
                  />
                </div>

                <div className="text-left w-[259px]">
                  <h1 className="font-bold text-secondary-medium">
                    CARTEIRA DIGITAL
                  </h1>

                  <p className="mt-4 text-sm text-gray-light">
                    NFT’s cheios de recursos para você colecionar, investir e se
                    destacar dentro do mercado desportivo.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <div>
              <Image
                src="/images/pack-banner.png"
                width={389}
                height={183}
                alt="Pack card"
              />
            </div>

            <div className="w-[280px]">
              <h1 className="font-bold text-gray-light">
                JÁ IMAGINOU{' '}
                <span className="text-secondary-medium">GANHAR</span> VIAGENS E
                DIVERSOS OUTROS PRÊMIOS?
              </h1>
            </div>
            <div className="w-[358px] mt-2">
              <p className="text-sm font-normal text-gray-light">
                Uma enorme variedade de experiências atreladas aos NFTs
                esportivos mais procurados. Compre colecionáveis raros e
                participe.
              </p>
            </div>

            <div className="flex items-center w-full mt-3 font-normal button-swap">
              <Button className="px-6 py-2 gradient-4 min-w-[171px] text-gray-light rounded-2xl">
                EXPLORE
              </Button>

              <Button className="px-6 py-2 min-w-[171px] ml-2 bg-transparent border border-1 border-[#4f25cc] text-gray-light rounded-2xl">
                CADASTRE-SE
              </Button>
            </div>
          </div>
          <div className="mt-40">
            <h1 className="mt-8 font-bold text-center text-gray-light">
              MODALIDADES
            </h1>
          </div>
          <div className="mt-24">
            <h1 className="mt-8 font-bold text-center text-gray-light">
              NEWSLETTER
            </h1>
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
            <h1 className="mt-8 font-bold text-center text-gray-light">
              PARCEIROS
            </h1>

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
      </div>
      <Footer />
    </>
  )
}
