'use client'
import Image from 'next/image';

const Bladewiththreeimg = ({ contentName }) => {
    const contentData = {
        data: [
            {

            }
        ],

    }
    const content = contentData[contentName] || [];

    return (
        <section className="bladewiththreeimg no-padding height__full overflow-visible z-[2] bg-[#376BC3] lg:min-h-[70vh]">
            <div className="logo-wrap  lg:max-w-[20.5rem] lg:max-h-[3rem] sm:!max-w-[25.2rem] sm:!max-h-[3.7rem]">
                <Image src='/choesity-white.png' width={1000} height={1000} className='w-full h-full object-cover' alt='choesity-white' />
            </div>
            <div className="img-wrapper w-full h-full bottom-0 left-0 z-33 sm:hidden lg:px-[5rem]">
                <Image src='/Phones.png' width={1000} height={1000} className='w-full h-full object-contain' alt='Phones' />
            </div>

            <div className="container">

            </div>
        </section>
    )
}
export default Bladewiththreeimg;