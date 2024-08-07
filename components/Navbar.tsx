import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import React from 'react'
import {headers} from '@/Constants';

const Navbar = () =>{
    return (
        <>
            <nav className='bg-dayak-motif-light relative opacity-90'>
                
                <div className='px-8 lg:pt-3 py-5 w-max lg:w-[80%]  align-middle max-container padding-container flex-col z-30'>
                    <div className='sm:flex justify-between items-center'>
                        <div className='flex flex-column items-center'>
                            <Image id='logo'  src='/DUN2.png' alt='DBS Logo' width={80} height={25} className='lg:w-28 h-auto lg:flex-1  cursor-pointer active:scale-75 transition' ></Image>
                            <p className='hidden lg:inline lg:regular-16 lg: font-hightide'>Diskusi Belanjawan Sarawak</p>
                        </div>
                        <ul className='sm:flex gap-8 hidden px-10'>
                            {headers.map((heading, index)=>(
                                <li key={heading+'_'+index}>
                                    <Link href={'#'+heading} className='text-gray-500 font-bold lg:bold-18 hover:text-black-sarawak transition'>
                                        {heading}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='bg-white/90 h-full w-full -z-10 absolute top-0'></div>
                <ul id='navbar_expanded' className='hidden z-100 gap-6 lg:gap-16 px-10 left-0 flex-col text-center m-auto bg-white/80 w-screen h-screen absolute'>
                    {headers.map((heading, index)=>(
                        <li key={heading+'_toggle_'+index} className='pt-5'>
                            <Link href={'#'+heading} className='items-in-navbar text-gray-800 bold-32 lg:bold-52 hover:text-black-sarawak transition'>
                                {heading}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <Script id="show_navbar" strategy='lazyOnload'>
                {
                    `const navbar = document.getElementById('navbar_expanded');
                    const logo =  document.getElementById('logo');
                    const body = document.querySelector('body');
                    const navbarButtons = [...document.getElementsByClassName('items-in-navbar')];
                    const sarawakText = document.getElementById('SARAWAK_TEXT');
                    isNavbarShowing = false;
                    const hideNavbar = () =>{
                        isNavbarShowing = !isNavbarShowing;
                        console.log(isNavbarShowing);
                        if(isNavbarShowing){
                            navbar.style.display = "flex";
                            body.style.overflow='hidden';
                        }else{
                            navbar.style.display = "none";
                            body.style.overflow='visible';
                        }
                    };
                    logo.addEventListener('click', hideNavbar);
                    navbarButtons.map((button)=>{
                    button.addEventListener('click', hideNavbar);
                    })`
                }
            </Script>
            
        </>
    )
}

export default Navbar;