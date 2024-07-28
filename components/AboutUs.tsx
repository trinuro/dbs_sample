import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookSquare, faInstagramSquare,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Script from "next/script";

const AboutUs = () =>{
    return (
        <section id='About_us' className="bg-dunSketch bg-no-repeat bg-center">
            <div className="max-container padding-container text-center">
                <h2 className="py-4 font-hightide regular-32 lg:regular-64">About Us</h2>
                <h3 className="bold-18  bg-white/70 lg:bold-32 lg:py:5">Persatuan Mahasiswa Sarawak Universiti Malaya is an assocation of Sarawakian students, by Sarawakian students and for Sarawakian students in Universiti Malaya</h3>
                <h3 className="regular-16 text-gray-700 bg-white/70 lg:regular-28 lg:py-5">To learn more of our activities, please follow us on our social media accounts</h3>
            
                <div className="flex flex-row justify-center gap-10 py-16 lg:pt-10">

                        <a href='https://www.facebook.com/pmsum.sarawak/?locale=ms_MY'>
                            <FontAwesomeIcon
                                icon={faFacebookSquare}
                                style={{ color: "black", fontSize: 64}}
                                
                            />
                        </a>
                        <a href='https://www.instagram.com/pmsum_/?hl=en'>
                            <FontAwesomeIcon
                                icon={faInstagramSquare}
                                style={{ color: "", fontSize: 64}}
                                className="text-yellow-dbsYellow"
                            />
                        </a>
                        <a href='https://my.linkedin.com/in/persatuan-mahasiswa-sarawak-universiti-malaya-4265272aa'>
                            <FontAwesomeIcon
                                icon={faLinkedinIn}
                                style={{ color: "", fontSize: 64}}
                                className="text-red-sarawak"
                            />
                        </a>
                </div>
            </div>

        </section>
    )
}


export default AboutUs;