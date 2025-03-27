"use client"

import { ReactElement } from "react";

let sampleTitle: string = "text-textHighlight mb-3 text-3xl lg:text-4xl tracking-wider whitespace-nowrap";
let description: string = "xl:text-lg tracking-wide mb-4 max-w-[350px] sm:max-w-[400px] lg:max-w-[500px] text-pretty";
let link: string = "text-lg sm:text-lg lg:text-xl hover:opacity-65 cursor-pointer";
let sampleImage: string = "w-full h-auto aspect-ratio lg:aspect-w-[450px] xl:aspect-w-[700px] h-64 lg:h-72 rounded-lg";

export interface Sample {
    title: string;
    description: ReactElement;
    liveLink?: string;
    infoLink: string;
    image: string;
    anchor?: boolean;
}

export default function SampleSet({ firstSample, secondSample }: { firstSample: Sample, secondSample: Sample }) {

    return (
        <div className="mt-[5%] flex flex-col gap-28">
            { firstSample.anchor && <a id="projects" className="absolute"></a> }
            <div className="lg:ml-auto flex flex-col-reverse lg:flex-row gap-6 md:gap-8 lg:gap-14 xl:gap-20 items-center lg:items-start mt-64">

                <div className="flex flex-col text-center lg:text-right lg:h-72 items-center lg:items-end 3xl:py-6">
                    <div className={`${sampleTitle}`}>{firstSample.title}</div>
                    <div className={`${description}`}>{firstSample.description}</div>
                    <div className="flex justify-center lg:justify-start text-xl gap-2.5 tracking-wide">
                        {firstSample.liveLink ? (
                            <>
                                <a className={`fade ${link} text-textHighlight`}>Live app</a>
                                •
                                <a className={`fade ${link}`}>Request source code</a>
                            </>
                        ) : (
                            <a href={firstSample.infoLink} className={`fade ${link} text-textHighlight`}>Request source code</a>
                        )}
                    </div>
                </div>

                <a href={firstSample.image}>
                    <img id="sample"  className={sampleImage} src={firstSample.image} alt="project sample image"/>
                </a>
            </div>

            <div className="flex flex-col lg:flex-row text-center lg:text-left gap-6 lg:gap-14 xl:gap-20 items-center lg:items-start">

            <a href={secondSample.image}>
                <img id="sample" className={sampleImage} src={secondSample.image} alt="project sample image"/>
            </a>

                <div className="flex flex-col h-64 lg:h-72 items-center lg:items-start 3xl:py-6">
                    <div className={`${sampleTitle}`}>{secondSample.title}</div>
                    <div className={`${description}`}>{secondSample.description}</div>
                    <div className="flex text-xl gap-2.5 tracking-wide">
                    {secondSample.liveLink ? (
                            <>
                                <a className={`fade ${link} text-textHighlight`}>Live app</a>
                                •
                                <a className={`fade ${link}`}>Request source code</a>
                            </>
                        ) : (
                            <a href={secondSample.infoLink} className={`fade ${link} text-textHighlight`}>Request source code</a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}