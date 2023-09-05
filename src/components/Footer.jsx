import React from 'react'
import ScrollReveal from '../provider/ScrollReveal'

const Footer = () => {
    return (
        <ScrollReveal direction="top">
            <div className='w-full  bg-[#222222] '>
                <div className="p-[20px] w-full flex flex-col md:flex-row gap-[25px] items-center justify-center   ">
                    <ScrollReveal direction="left">
                        <div className='w-full md:w-[250px] h-[250px] bg-[#fff]'></div>
                    </ScrollReveal>
                    <ScrollReveal direction="right">
                        <div className='w-full md:w-[50%] text-white grid gap-4'>
                            <h2 className='text-2xl'>Join the early birds</h2>
                            <p>This should be some convincing text
                                to help convince people to join the community</p>
                            <button className='px-[30px] py-[10px] rounded-md border text-white bg-[#750FF7] border-black'>
                                Join The Community
                            </button>
                        </div>
                    </ScrollReveal>
                </div>
                <hr className='bg-white h-[2px] w-full ' />
                <div className="p-[20px] w-full flex flex-col md:flex-row gap-[25px] items-center justify-center text-white  ">
                    Built By Team SoluTech
                </div>
            </div>
        </ScrollReveal>
    )
}

export default Footer