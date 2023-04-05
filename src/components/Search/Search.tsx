import Image from "next/image"

import searchIcon from '../../assets/search-icon.svg'

export const Search = () => {
    return (
       <div  className=" relative container flex items-center 2xl:w-[330px] lg:w-[200px] px-5 py-2 bg-transparent border border-primary-medium rounded-xl placeholder-secondary-lightest text-white">
            <Image src={searchIcon} alt="" className="mr-2"/>
             <input 
                className="lg:w-[150px]  bg-transparent outline-none"
                placeholder={ 'Search' }
                name='search'
            />
       </div>
    )
}