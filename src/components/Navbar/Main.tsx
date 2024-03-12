"use client"
import React, { use } from "react";
import { Exo_2 } from "next/font/google";
import {useTypewriter, Cursor} from "react-simple-typewriter"
const exo=Exo_2({subsets:["latin"],style:"italic",weight:"700"})

export default function MainNV() {
    const [text] = useTypewriter({
        words: ["Keeper App"],
        loop: true,
        typeSpeed: 200,
        deleteSpeed: 100,
    });
    return (
        <div className="bg-yellow-400 h-10 flex justify-center items-center">
            <div>
                <div className={`${exo.className}  text-white text-3xl`} style={{ textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black' }}>
                    {text}
                    <Cursor/>
                </div>
            </div>
                
        </div>
    );
}