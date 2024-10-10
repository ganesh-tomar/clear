import React from 'react'

export default function IntroWithColThree() {
  return (
   <section className="IntroWithColThree bg-[#0033A1]">
        <div className="container">
            <div className="intro pb-[45px]">
                <p className='border-b-[1px] border-white pb-[10px] w-full text-[#77DAFF] border-opacity-40 text-[14px]'>OUR MESSAGE</p>
                <h2 className='text-white max-w-[933px] pt-[40px] font-[500]'>The core of enterprise security is identity</h2>
            </div>
            <div className="intro pb-[80px] pt-[40px]">
                <p className='border-b-[1px] border-white pb-[10px] w-full text-[#77DAFF] border-opacity-40 text-[14px]'>MISSION</p>
                <h4 className='text-white max-w-[894px] pt-[30px] text-[40px] font-[300]'>To equip every enterprise to effortlessly manage and secure access to applications and data through the lens of identity</h4>
            </div>
            {/* <div className="colThreeItem pb-[10px] flex flex-wrap items-center border-b-[1px] border-opacity-40 border-white pt-[50px]">
                <div className="item text-[#77DAFF] w-[33.33%]">
                    <span>BRAND TONE</span>
                </div>
                <div className="item text-[#77DAFF] w-[33.33%]">
                    <span>PERSONALITY</span>
                </div>
                <div className="item text-[#77DAFF] w-[33.33%]">
                    <span>IDENTITY SECURITY PLATFORM</span>
                </div>
            </div> */}
            <div className="colThreeWrapper flex flex-wrap pt-[30px]">
                <div className="colThree text-white w-[33.33%] md:w-[50%] sm:!w-full sm:mt-[20px]">
                    <div className="item text-[#77DAFF] border-b-[1px] border-white border-opacity-40 pb-[10px]">
                        <p className=' text-[14px]'>BRAND TONE</p>
                    </div>
                    <ul className='pl-0 pt-[30px]'>
                        <li className='mb-[10px]'>
                            <h4 className='lg-up:text-[35px] font-[500]'>Direct</h4>
                        </li>
                        <li className='mb-[10px]'>
                            <h4 className='lg-up:text-[35px] font-[500]'>Trustworthy</h4>
                        </li>
                        <li className='mb-[10px]'>
                            <h4 className='lg-up:text-[35px] font-[500]'>Personal</h4>
                        </li>
                        <li className='mb-[10px]'>
                            <h4 className='lg-up:text-[35px] font-[500]'>Warm</h4>
                        </li>
                    </ul>
                </div>
                <div className="colThree text-white w-[33.33%] md:w-[50%] sm:!w-full sm:mt-[20px]">
                    <div className="item text-[#77DAFF] border-b-[1px] border-white border-opacity-40 pb-[10px]">
                        <p className='text-[14px]'>PERSONALITY</p>
                    </div>
                    <ul className='pl-0 pt-[30px]'>
                        <li className='mb-[10px]'>
                            <h4 className='lg-up:text-[35px] font-[500]'>Bold</h4>
                        </li>
                        <li className='mb-[10px]'>
                            <h4 className='lg-up:text-[35px] font-[500]'>Trustworthy</h4>
                        </li>
                        <li className='mb-[10px]'>
                            <h4 className='lg-up:text-[35px] font-[500]'>Intelligent</h4>
                        </li>
                    </ul>
                </div>
                <div className="colThree text-white w-[33.33%] md:w-[50%] sm:!w-full sm:mt-[20px] md:mt-[20px]">
                    <div className="item text-[#77DAFF] border-b-[1px] border-white border-opacity-40 pb-[10px]">
                        <p className='text-[14px]'>IDENTITY SECURITY PLATFORM</p>
                    </div>
                    <ul className='pl-0 pt-[30px]'>
                        <li className='mb-[10px]'>
                            <h4 className='lg-up:text-[35px] font-[500]'>Intelligent</h4>
                        </li>
                        <li className='mb-[10px]'>
                            <h4 className='lg-up:text-[35px] font-[500]'>Autonomous</h4>
                        </li>
                        <li className='mb-[10px]'>
                            <h4 className='lg-up:text-[35px] font-[500]'>Extensible</h4>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
   </section>
  )
}
