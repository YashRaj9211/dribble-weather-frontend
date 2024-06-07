import React from 'react'
import Image from 'next/image'

import HamIcon from "../public/icons/menu_24dp_FILL0_wght400_GRAD0_opsz24 (1).svg"
import AppleIcon from "../public/icons/apple-173-svgrepo-com.svg"
import PlayIcon from "../public/icons/playstore-svgrepo-com.svg"
import InsaIcon from "../public/icons/instagram-svgrepo-com.svg"
import DowloadIcon from "../public/icons/download_24dp_FILL0_wght400_GRAD0_opsz24.svg"
import GPSICon from "../public/icons/pin_drop_24dp_FILL0_wght400_GRAD0_opsz24.svg"
import SearchIcon from "../public/icons/search_24dp_FILL0_wght400_GRAD0_opsz24.svg"
import SettingsIcon from "../public/icons/settings_24dp_FILL0_wght400_GRAD0_opsz24.svg"


const Navbar = () => {
    return (
        <nav className='fixed top-2 flex justify-between w-screen text-sm px-2 z-50'>
            <div className='flex gap-2 items-center'>
                <div className='bg-white rounded-full p-2'>
                    <Image src={HamIcon} className='' />
                </div>
                <div className='flex gap-2 items-center bg-white rounded-full px-2 py-1'>
                    <p>Get it on</p>
                    <Image src={AppleIcon} className='w-4' />
                    <Image src={PlayIcon} className='w-4' />
                    <div className='p-2 bg-black rounded-full'>
                        <Image src={DowloadIcon} className='w-4 h-4' />
                    </div>
                </div>
            </div>

            <div className='flex gap-4 p-2 bg-blur rounded-full'>
                <div className='bg-white py-2 px-3 rounded-full'>
                    <p className='flex items-center gap-1'><Image src={GPSICon} className='w-4' />NYC, United States, 20C</p>
                </div>
                <div className='p-3 bg-white rounded-full'>
                    <Image src={SearchIcon} className='w-4' />
                </div>
                <div className='flex items-center gap-2 pl-4 pr-2 bg-white rounded-full'>
                    <p>F</p>
                    <div className='p-2 rounded-full border border-gray-400'>
                        <Image src={SettingsIcon} className='w-4' />
                    </div>
                </div>
            </div>

            <div className='flex gap-2 items-center'>
                <p className='bg-black text-white py-2 px-4 rounded-full'>skysavvy</p>
                <p className='bg-white py-2 px-4 rounded-full'>About</p>
                <p className='bg-white py-2 px-4 rounded-full flex items-center gap-2'>Services <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg></p>
            </div>
        </nav>
    )
}

export default Navbar