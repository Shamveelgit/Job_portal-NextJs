import { Miriam_Libre } from 'next/font/google';
import Link from 'next/link';
import React from 'react'

const MiriamLibreFont = Miriam_Libre({
    subsets: ["latin"],
});

function TitleUi() {
    return (
            <h1
                className={`text-title uppercase text-lg ${MiriamLibreFont.className} `}
            >
                JOB <span className=" text-primary">Portal</span>
            </h1>
    )
}

export default TitleUi