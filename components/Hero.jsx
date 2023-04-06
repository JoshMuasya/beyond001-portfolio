import React from 'react';

const Hero = () => (
    <>
        <div className='h-screen w-screen heropic flex items-center mb-0 bg-fixed bg-cover '>
            <div className='text-white flex flex-col absolute inset-y-1/4 pl-14 pr-14'>
                {/* Top */}
                <div className='mb-4'>
                    <div>
                        <h1 className='font-sancreek text-lpurple text-lg l:text-xl lg:text-xxl'>
                            Hello
                        </h1>
                    </div>

                    <div>
                        <h1 className='font-sancreek text-dpurple text-lg l:text-xl lg:text-xxl'>
                            I&apos;m Meshack
                        </h1>
                    </div>
                </div>

                {/* Middle */}
                <div className='mb-4'>
                    <p className='text-white text-s l:text-m'>
                        I photograph very uniquley and instinctively. <br />
                        I do not follow any styles, philosophies or teachers.
                    </p>
                </div>

                {/* Bottom */}
                <div className='flex flex-row justify-between'>
                    {/* Button 1 */}
                    <button className='border-4 duration-500 hover:duration-500 rounded-lg hover:bg-purple border-purple mr-4 p-3 font-bold text-s md:text-m'>
                        Get A Quote
                    </button>

                    {/* Button 2 */}
                    <button className='text-lpurple duration-500 hover:duration-500 font-bold text-s md:text-m hover:border-purple hover:rounded-lg hover:p-3 hover:bg-white'>
                        Email Me
                    </button>
                </div>
            </div>
        </div>
    </>
)

export default Hero
