'use client'
import Image from 'next/image';

const BladeWithImageGrid = ({ content }) => {
    return (
        <section className={`bladewiththreeimg before:hidden after:hidden no-padding height__full overflow-visible z-[2] min-h- lg:min-h-[70vh] ${content?.bgColor}`}>
            <div className="logo-wrap !max-w-[200px] max-h-fit lg:max-w-[20.5rem] lg:max-h-[3rem] sm:!max-w-[206px] sm:!max-h-[60px]">
                <Image src={content?.bgImage} width={1000} height={1000} className='w-full h-auto object-cover' alt={content?.mageAlt} />
            </div>
            <div className="img-wrapper w-full h-full bottom-0 left-0 z-33 sm:hidden lg:px-[5rem]">
                <Image src={content?.imageUrl} width={1000} height={1000} className='w-full h-full object-contain' alt='Phones' />
            </div>

            <div className="container">

            </div>
        </section>
    )
}
export default BladeWithImageGrid;