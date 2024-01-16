import Link from "next/link";
import React, { useState, useEffect } from 'react';


const Navbar = () => {
    
    const [originaText] = useState('unnat.xyz');
    const [resultTextPointer, setResultTextPointer] = useState(0);
    const [resultText, setResultText] = useState('');


    useEffect(() => {
        for (let index = 0; index < originaText.length; index++) {
            setTimeout(() => {
                setResultTextPointer(index)
            }, index * 200);
        }
      }, [])

      useEffect(() => {
        if (originaText[resultTextPointer]) {
            setResultText((current) => current + originaText[resultTextPointer])
        }
      }, [resultTextPointer]);

    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                    { resultText }
                </Link>
            </div>
            <a href="https://docs.google.com/document/d/10ZosQ38Z3804KYPcb_aZp9bceoXK-q3GrkHjYshqIRE/edit?usp=sharing" className="cta-btn">Resume</a>
        </div>
    )
}

export default Navbar;