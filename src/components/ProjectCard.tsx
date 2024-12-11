import React from 'react'

import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import grainImage from '@/assets/images/grain.jpg';
import Image, { StaticImageData } from 'next/image';
import ArrowUpRight from '@/assets/icons/arrow-up-right.svg'

type IProps = {
    project: {
        title: string;
        company: string;
        year: string;
        results: Array<{title: string}>;
        link: string;
        image: StaticImageData;
        isMobile: boolean;
    },
}

const ProjectCard = (props: IProps) => {
    const { project } = props;
    const { isMobile } = project;

    return (
        <div key={project.title} className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20">
            <div className="absolute inset-0 -z-10 opacity-5" style={{ backgroundImage: `url(${grainImage.src})`}}></div>

            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{[project.year]}</span>
                </div>
                <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                    <li key={result.title} className="flex gap-2 text-sm text-white/50 md:text-base">
                        <CheckCircleIcon className="size-5 md:size-6"/>
                        <span>{result.title}</span>
                    </li>
                    ))}
                </ul>

                <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto md:px-6">
                    <span>Visit Live Site</span>
                    <ArrowUpRight className="size-4" />
                    </button>
                </a>
                </div>
                <div className="relative">
                    <Image src={project.image} alt={project.title} className={`rounded-t-3xl mt-8 -mb-4 md:mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none ${isMobile ? 'sm:pl-20 sm:pr-20 sm:pb-20 lg:pl-36 lg:pb-12' : ''}`}/>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
