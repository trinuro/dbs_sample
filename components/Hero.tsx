import Image from 'next/image';
import React from 'react'

const colourOfDots = ['black', 'red', 'yellow']

/*Work in progress
                {<div className='flex flex-row max-w-120'>
                    {Array(3).fill(1).map((_, index)=>(
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" key={'dots_'+index}>
                            <circle cx="10" cy="10" r="10" stroke-width="1" fill={colourOfDots[index]} />
                        </svg> 
                    ))}
                    <p className='font-leagueSpartan text-[15px] font-extrabold w-72' >Ke Arah Kemakmuran Negeri</p>
                </div>}

*/

const Hero = () => {
    return(
        <section id='Home' className='flex-nowrap bg-cover bg-dun-and-bcs bg-center'>
            <div className=' max-container padding-container pt-5 lg:pt-20 bg-white/50'>
                <div className='text-center lg:bold-64 flex flex-col whitespace-nowrap gap-0'>
                    <p className='font-leagueSpartan text-[30px] font-extrabold leading-3 lg:text-[80px]'>DISKUSI BELANJAWAN</p>
                    <p className='font-horta text-[100px] p-0 m-0 leading-tight text-yellow-dbsYellow lg:text-[300px] drop-shadow-xl [text-shadow:_#ff3131_2px_5px_3px] lg:[text-shadow:_#ff3131_4px_10px_3px]'>SARAWAK</p>
                
                    
                </div>
            </div>
        </section>
    )
}

export default Hero;