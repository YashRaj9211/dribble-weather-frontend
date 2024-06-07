import React from 'react'
import Image from 'next/image'

import ArrowIcon from "../public/icons/arrow_right_alt_24dp_FILL0_wght400_GRAD0_opsz24.svg"
import RainIcon from "../public/icons/rainy_24dp_FILL0_wght400_GRAD0_opsz24 (1).svg"
import HamIcon from "../public/icons/menu_24dp_FILL0_wght400_GRAD0_opsz24 (1).svg"
import AppleIcon from "../public/icons/apple-173-svgrepo-com.svg"
import PlayIcon from "../public/icons/playstore-svgrepo-com.svg"
import InsaIcon from "../public/icons/instagram-svgrepo-com.svg"
import DowloadIcon from "../public/icons/download_24dp_FILL0_wght400_GRAD0_opsz24.svg"
import RightIcon from "../public/icons/east_24dp_FILL0_wght400_GRAD0_opsz24.svg"

const Benefits = () => {
    return (
        <div className='h-full py-20 px-10  relative'>
            {/* <div className='w-3/4 h-1/2 border border-gray-400 absolute rounded-full '></div> */}
            <p className='text-5xl w-1/2 mx-auto text-center'>Don't<span> </span>
                <span className='inline-flex items-center border rounded-full px-4 py-2 bg-white gap-2'>
                    guess <Image src={RainIcon} className='w-10 h-10 p-2 border border-black rounded-full' />
                </span>
                <span> </span>the weather!
            </p>

            <p className='text-gray-400 w-1/5 mx-auto mt-10 text-center'>Rely on Clime for year round weather forecasts for your location and <span>aross the world.</span></p>
            <button className='mx-auto mt-10 border border-gray-300 font-semibold rounded-full flex items-center gap-2 px-4 py-2'>
                Explore Benefits
                <span className='bg-black rounded-full flex items-center justify-center w-12 h-12 overflow-clip'>
                    <Image src={ArrowIcon} className='w-6 h-6 translate-x-1 opacity-60' />
                    <Image src={ArrowIcon} className='w-6 h-6' />
                    <Image src={ArrowIcon} className='w-6 h-6 -translate-x-1 opacity-60' />
                </span>
            </button>

            <div className='flex justify-between gap-4 mt-10 relative'>
                <div className='bc-card w-full h-80 rounded-3xl text-white p-4 relative'>
                    <div className='bg-blur w-fit py-1 px-2 rounded-full mx-auto'>
                        <>21h:32m:56s</>
                    </div>
                    <p className='absolute bottom-5 left-2 text-2xl'>Daily morning and evening weatehr outlooks</p>
                </div>

                <div className='bg-slate-300 w-full h-40 rounded-3xl text-white p-4 relative translate-y-52'>
                
                        <div className='flex gap-2 items-center bg-blur rounded-full py-1 justify-center absolute bottom-2 px-5'>
                            <p>Get it on</p>
                            <Image src={AppleIcon} className='w-4' />
                            <Image src={PlayIcon} className='w-4' />
                            <div className='p-2 bg-black rounded-full'>
                                <Image src={DowloadIcon} className='w-4 h-4' />
                            </div>
                        </div>
                    
                </div>

                <div className='bc-card w-full h-60 rounded-3xl text-white p-4 relative translate-y-10'>
                    <div className='absolute w-14 h-14 rounded-full bg-blur bottom-4 right-4 border-[0.5px] border-black border-'></div>
                    <div className='absolute w-14 h-14 rounded-full bg-blur bottom-4 right-14 border-[0.5px] border-gray-400 '></div>
                </div>

                <div className='bc-card w-full h-32 rounded-3xl text-white p-4 relative translate-y-10'>
                    <Image src={RightIcon} className='-rotate-45 p-4 w-20 h-20 bg-blur rounded-full absolute right-0 translate-x-2 top-0 -translate-y-10'/>
                    <p className='mt-5'>Use weather sharing feature to warn your family</p>
                </div>
                <div className='bc-card w-full h-80 rounded-3xl text-white p-4 relative'>
                    <div className='bg-blur w-fit py-1 px-2 rounded-full mx-auto'>
                        <>21h:32m:56s</>
                    </div>
                    <p className='absolute bottom-5 left-2 text-2xl'>Daily morning and evening weatehr outlooks</p>
                </div>
            </div>

        </div>
    )
}

export default Benefits