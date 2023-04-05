import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="w-full px-4 text-white py-9 bg-header-primary-darkest">
      <div className="container">
        <div>
          <Image src="/icons/logo.svg" width={152} height={42} alt="Logo" />
        </div>

        <p className="mt-5 font-normal leading-6 text-gray-medium">
          CHRONUS Sports é a sua chance de possuir, vender e negociar NFT’s
          colecionáveis digitais oficiais dos melhores atletas profissionais do
          mundo.
        </p>

        <div className="mt-9">
          <div>
            <p className="font-semibold text-secondary-medium">NAVEGAR</p>

            <div className="flex flex-col mt-6">
              <Link className="text-gray-medium" href={'/'}>
                Cards
              </Link>
              <Link className="mt-3 text-gray-medium" href={'/'}>
                Edições Especiais
              </Link>
              <Link className="mt-3 text-gray-medium" href={'/'}>
                Álbuns
              </Link>
              <Link className="mt-3 text-gray-medium" href={'/'}>
                Coleções
              </Link>
              <Link className="mt-3 text-gray-medium" href={'/'}>
                Puzzle
              </Link>
              <Link className="mt-3 text-gray-medium" href={'/'}>
                Packs
              </Link>
            </div>
          </div>

          <div className="mt-9">
            <p className="font-semibold text-secondary-medium">INSTITUCIONAL</p>

            <div className="flex flex-col mt-6">
              <Link className="text-gray-medium" href={'/'}>
                Sobre
              </Link>
              <Link className="mt-3 text-gray-medium" href={'/'}>
                FAQ
              </Link>
              <Link className="mt-3 text-gray-medium" href={'/'}>
                Código de Conduta
              </Link>
              <Link className="mt-3 text-gray-medium" href={'/'}>
                Chronus Sports
              </Link>
            </div>
          </div>

          <div className="mt-9">
            <p className="font-semibold text-secondary-medium">MINHA CONTA</p>

            <div className="flex flex-col mt-6">
              <Link className="text-gray-medium" href={'/'}>
                Meu Perfil
              </Link>
              <Link className="mt-3 text-gray-medium" href={'/'}>
                Editar Perfil
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-6 text-sm text-center text-gray-medium">
        <p>© 2022 Chronus Sports - Powered By Mooh!Tech</p>
        <p>Terms and conditions Privacy policy</p>
      </div>
    </div>
  )
}
