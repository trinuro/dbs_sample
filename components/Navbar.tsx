import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const headers = ['Home', 'Objectives', 'Achievements', 'About_us']

const Navbar = () =>{
    return (
        <nav className='sm:flex justify-between px-8 lg:pt-3 py-5 w-max lg:w-[80%] items-center align-middle
        max-container padding-container'>
            <div className='flex flex-column items-center'>
                <Image src='/DUN2.png' alt='DBS Logo' width={80} height={25} className='lg:w-28 h-auto lg:flex-1' ></Image>
                <p className='hidden lg:inline lg:regular-16 lg: font-hightide'>Diskusi Belanjawan Sarawak</p>
            </div>
            <ul className='sm:flex gap-8 hidden px-10'>
                {headers.map((heading, index)=>(
                    <li key={heading+'_'+index}>
                        <Link href={'#'+heading} className='text-gray-500 font-bold lg:bold-18 hover:text-black-sarawak'>
                            {heading}
                        </Link>
                    </li>
                ))}
            </ul>
            
        </nav>
    )
}

export default Navbar;