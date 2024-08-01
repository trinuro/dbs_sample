import { SESSIONS } from "@/Constants";
import Image from "next/image";
import React from "react";

const ses1 = SESSIONS[0];
const ses2 = SESSIONS[1];
const ses3 = SESSIONS[2];

const Achievements = () =>{
    return (
        <section id="Achievements" className="bg-dunSketchMedium bg-white/40 md:bg-dunSketchLarge bg-no-repeat bg-center md:bg-bottom">
            <div className="max-container padding-container bg-white/90 relative pb-5">
                <div
                    className="absolute h-full bg-dayak-motif -z-10 w-36 right-0"
                ></div>
                <div
                    className="absolute h-full bg-dayak-motif -z-10 w-36 left-0"
                ></div>
                <h2 className="py-4 font-hightide regular-32 lg:regular-64 text-center">Achievements</h2>
                <section id='session1' className="lg:flex flex-row justify-center m-auto  items-center gap-5 pt-4">
                    <Image
                        src={ses1.src}
                        alt={ses1.src}
                        width={600}
                        height={200}
                        className="h-auto m-auto"
                    ></Image>
                    <div className="flex flex-col gap-2 p-4">
                        <h3 className="pb-3 font-horta text-center regular-28 lg:regular-40 leading-tight text-yellow-sarawak [text-shadow:_#ff3131_1px_1px_1px]">{ses1.fullName}</h3>
                        <h4 className="regular-14 text-gray-800 lg:regular-18" >Speaker: {ses1.speaker}</h4>
                        <p className="lg:regular-20">{ses1.text}</p>
                    </div>
                </section>

                <section id='session2' className="lg:flex flex-row-reverse justify-center m-auto  items-center gap-5 pt-4">
                    <Image
                        src={ses2.src}
                        alt={ses2.src}
                        width={600}
                        height={200}
                        className="h-auto m-auto"
                    ></Image>
                    <div className="flex flex-col gap-2 p-4">
                        <h3 className="pb-3 font-horta text-center regular-28 lg:regular-40 leading-tight text-yellow-sarawak [text-shadow:_#ff3131_1px_1px_1px]">{ses2.fullName}</h3>
                        <ul className="regular-14 text-gray-800 lg:regular-18" >Speaker: {
                                ses2.speaker.map((speaker,index)=>(
                                    <li key={'speaker_session2_'+index}>{speaker}</li>
                                ))
                            }</ul>
                        <p className="lg:regular-20">{ses2.text}</p>
                    </div>
                </section>

                <section id='session3' className="lg:flex flex-row justify-center m-auto  items-center gap-5 pt-4">
                    <Image
                        src={ses3.src}
                        alt={ses3.src}
                        width={600}
                        height={200}
                        className="h-auto m-auto"
                    ></Image>
                    <div className="flex flex-col gap-2 p-4">
                        <h3 className="pb-3 font-horta text-center regular-28 lg:regular-40 leading-tight text-yellow-sarawak [text-shadow:_#ff3131_1px_1px_1px]">{ses3.fullName}</h3>
                        <ul className="regular-14 text-gray-800 lg:regular-18" >Speaker: {
                                ses3.speaker.map((speaker,index)=>(
                                    <li key={'speaker_session3_'+index}>{speaker}</li>
                                ))
                            }</ul>
                        <p className="lg:regular-20">{ses3.text}</p>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Achievements;