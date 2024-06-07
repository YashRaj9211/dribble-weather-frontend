import React from 'react'
import Image from 'next/image'
import RainIcon from "../public/icons/rainy_24dp_FILL0_wght400_GRAD0_opsz24 (1).svg"
import CloseIcon from "../public/icons/close_24dp_FILL0_wght400_GRAD0_opsz24 (1).svg"
import RightICon from "../public/icons/language_24dp_FILL0_wght400_GRAD0_opsz24.svg"
import ShareIcon from "../public/icons/share_24dp_FILL0_wght400_GRAD0_opsz24.svg"
import ArrowIcon from "../public/icons/arrow_right_alt_24dp_FILL0_wght400_GRAD0_opsz24.svg"
// import SunIcon from "../public/icons/sunny_24dp_FILL0_wght400_GRAD0_opsz24.svg"
import FlareIcon from "../public/icons/flare_24dp_FILL0_wght400_GRAD0_opsz24.svg"

const Hero = () => {
    return (
        <div className='hero flex w-screen h-screen justify-center items-center'>
            <div className='flex flex-col gap-4 items-center'>
                <div className='text-6xl w-3/4 text-white text-center font-semibold'>
                    <p>Precise <span><Image src={FlareIcon} className='inline w-16 blur-sm' /> <Image src={FlareIcon} className='inline w-16 absolute -translate-x-[82px] translate-y-[8px]' /></span> weather precisely for you </p>
                </div>
                <button className='mx-auto mt-10 rounded-full flex items-center gap-4 px-4 py-2 bg-blur text-white'>
                    Let's Start
                    <span className='bg-black rounded-full flex items-center justify-center w-12 h-12 overflow-clip'>
                        <Image src={ArrowIcon} className='w-6 h-6 translate-x-1 opacity-60' />
                        <Image src={ArrowIcon} className='w-6 h-6' />
                        <Image src={ArrowIcon} className='w-6 h-6 -translate-x-1 opacity-60' />
                    </span>
                </button>
            </div>

            <div className='absolute flex items-center bottom-5 gap-2 left-5 py-2  px-4 border bg-white rounded-[30px] w-1/3'>

                <span className='border border-black rounded-full p-4'><Image src={RainIcon} width={40} /></span>


                <span className='border border-black rounded-full p-4'><Image src={RainIcon} width={40} /></span>


                <span className='border border-black rounded-full p-4'><Image src={RainIcon} width={40} /></span>

                <div>
                    <p>Get <span className='font-semibold'>skysavvy</span> for an all-in-one weather assistacnce right on your device</p>
                </div>

                <button className='p-1 bg-white absolute top-0 -translate-y-4 right-0 translate-x-4 rounded-full'><Image src={CloseIcon} width={12} /></button>
            </div>

            <div className='absolute right-2 flex flex-col gap-2 items-center'>
                <div>
                    <span><Image src={ShareIcon} className='p-2 rounded-full text-white text-lg bg-blur' /></span>
                </div>
                <div className='flex flex-col gap-2 bg-blur p-1 rounded-full'>
                    <span><Image src={ShareIcon} className='p-2 rounded-full text-white text-lg bg-blur' /></span>
                    <span><Image src={ShareIcon} className='p-2 rounded-full text-white text-lg bg-blur' /></span>
                    <span><Image src={ShareIcon} className='p-2 rounded-full text-white text-lg bg-blur' /></span>
                </div>
            </div>
        </div>
    )
}

export default Hero 