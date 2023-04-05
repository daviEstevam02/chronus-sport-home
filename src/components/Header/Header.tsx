import Image from 'next/image'
import { Search } from '../Search/Search'
import { Button } from '../Button'

export const Header = () => {
  return (
    <div className="w-full px-4 h-[88px] flex items-center bg-header-primary-darkest lg:h-24">
      <div className="flex items-center justify-between w-full">
        <div className="relative w-full">
          <Image src="/icons/logo.svg" width={142} height={26} alt="Logo" />
        </div>

        <div className="flex">
          <Button className="w-[40px] ml-2 bg-button-transparent h-[40px] flex justify-center items-center rounded-full">
            <Image
              src="/icons/search-icon.svg"
              alt="Search icon"
              width={14}
              height={14}
            />
          </Button>
          <Button className="w-[40px] ml-2 bg-button-transparent h-[40px] flex justify-center items-center rounded-full">
            <Image
              src="/icons/ic-wallet.svg"
              alt="Search icon"
              width={14}
              height={14}
            />
          </Button>
          <Button className="w-[40px] ml-2 bg-button-transparent h-[40px] flex justify-center items-center rounded-full">
            <Image
              src="/icons/ic-cart.svg"
              alt="Search icon"
              width={14}
              height={14}
            />
          </Button>
          <Button className="w-[40px] ml-2 bg-button-transparent h-[40px] flex justify-center items-center rounded-full">
            <Image
              src="/icons/ic-hamburger.svg"
              alt="Search icon"
              width={14}
              height={14}
            />
          </Button>
        </div>
      </div>
    </div>
  )
}
