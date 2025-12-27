import React from 'react'
import { IoCart, IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";


const Navbar = () => {
    return (
        <>
            <nav>
                <span className='navButtonsSpan'>
                    <button className='navButton1'>
                        <IoLocationSharp size='1.5rem' color='white' className='navButtonsIcons' />
                        <span className='navButton1Span'>
                            <h4>Change Branch</h4>
                            <h6>Javed Nihari F.B Area</h6>
                        </span>
                    </button>
                    <button className='navButton2'>
                        <FaPhoneAlt size='.85rem' color='white' className='navButtonsIcons' />
                        <h4>0311 4422786</h4>
                    </button>
                </span>
                <span className='navLogoSpan'>
                    <img src="https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1697710290-logo.png%3Fq%3D10&w=128&q=75" alt="Logo" />
                </span>
                <span className='navCartSpan'>
                    <IoCart className='navCartIcon' size='30px' color='rgb(242, 157, 19)' />
                </span>
            </nav>
        </>
    )
}

export default Navbar