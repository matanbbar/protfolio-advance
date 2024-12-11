import React from 'react'

type IProps = {
    title: string;
    eyebrow: string;
    description: string;
}

export default function SectionHeader(props: IProps) {
    const {title, eyebrow, description} = props;
    return (
        <>
            <div className="flex justify-center">
                <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">{eyebrow}</p>
            </div>
            <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">{title}</h2>
            <p className="text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto">{description}</p>
        </>
    )
}
