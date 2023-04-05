import logoImg from '../../assets/logos.svg'
import Image from 'next/legacy/image'

import cartIcon from '../../assets/ic-cart.svg';
import profileIcon from '../../assets/ic-profile.svg';
import walletIcon from '../../assets/ic-wallet.svg';
import { Search } from '../Search/Search';

import { Button } from '../Button'


export const Header = () => {
    return(
        <div className="h-24 px-20 pt-6 x-full bg-header-primary-darkest">
            <div className='flex items-center justify-between lg:justify-evenly '>
               <div className='flex items-center justify-evenly'>
                    <div  className='flex items-center'>
                        <Image src={logoImg} alt="Chronus-sports" className='max-width-[10px]'/>
                        <div className='mx-[20px]'>
                            <Search />
                        </div>
                    </div>

                    <div  className='flex items-center lg:ml-12'>
                        <div className='2xl:w-[500px] lg:w-[200px] lg:pr-5 flex items-center justify-end pr-10'>
                            <a href="" className='mr-10 text-base font-normal text-white transition duration-200 hover:text-gray-medium lg:text-sm'>Home</a>
                            <a href="" className='mr-10 text-base font-normal text-white transition duration-200 hover:text-gray-medium lg:text-sm'>MKT Place</a>
                            <a href="" className='text-base font-normal text-white transition duration-200 hover:text-gray-medium lg:text-sm'>Institucional</a>
                        </div> 

                        <div className='flex items-center w-[300px]'>
                            <Button className='transform hover:scale-110 transition duration-500 px-2.5 h-10 mr-4 w-[120px] py-2 2xl:w-[200px] rounded-full bg-gray-500 text-secondary-500 lg:text-sm'>Área do Cliente</Button>
                            <Button className='transform hover:scale-110 transition duration-500 px-2.5  h-10 py-2 w-[120px] 2xl:w-[200px] rounded-full bg-primary-dark text-secondary-medium lg:text-sm lg:px-1.5'>Área do Parceiro</Button>
                        </div>
                    </div>
               </div>

                <div className='flex items-center'>
                    <Button className='h-10 w-[70px] mr-2 text-xs bg-gray-500 rounded-full lg:max-w-[65px] lg:text-[10px] text-gray-light' >R$ Real</Button>
                    <Button className=' 2xl:w-[100px] lg:w-full lg:max-w-[80px] px-2.5 h-10 py-2 text-xs bg-gray-500 rounded-full text-gray-light'>Portugues</Button> 
                </div>

                <div className='flex items-center ml-2'>
                    <Button className='object-cover w-10 h-10 mr-2 transition duration-500 transform bg-gray-500 rounded-full hover:scale-110 lg:w-9 lg:h-9'> <Image src={walletIcon} alt="Wallet" /> </Button>
                    <Button className='object-cover w-10 h-10 mr-2 transition duration-500 transform bg-gray-500 rounded-full hover:scale-110 lg:w-9 lg:h-9'> <Image src={profileIcon} alt="Profile" /> </Button>
                    <Button className='object-cover w-10 h-10 transition duration-500 transform bg-gray-500 rounded-full hover:scale-110 lg:w-9 lg:h-9'> <Image src={cartIcon} alt="Cart"  /> </Button>
                </div>
            </div>
        </div>
    )
}