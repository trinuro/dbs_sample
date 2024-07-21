import React from "react";
import {OBJECTIVES} from '@/Constants'
import Image from "next/image";

const Objectives = () =>{
    return (
        <section id='Objectives' className="bg-honeycomb pb-20 bg-center">
            <div className="max-container padding-container ">
                <h2 className="py-4 font-hightide regular-32 lg:regular-64 text-center">Objectives</h2>
                <div className="flex flex-row gap-10">
                    
                    <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 ">
                        {OBJECTIVES.map((objective, index)=>(
                            <li key={'objective_'+index} className="flex flex-col w-max-xl bg-yellow-dbsYellow p-4 shadow-2xl rounded-md lg:rounded-lg hover:scale-105 transition-all">
                                <h3 className="bold-32 text-center">{index+1}</h3>
                                <p className="regular-18">{objective}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Objectives;