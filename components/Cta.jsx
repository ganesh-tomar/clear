'use client'
import Image from 'next/image';
import Link from 'next/link';

const Cta = () => {
   return(
      <section className="cta height__full">
        <div className="bg-img dark__overlay">
            <Image src="/cta.png" width={1000} height={1000} alt="img"/>
        </div>
        <div className="container">
            <div className="wrapper w-full relative">
                <h2 className='text-[white] mb-[2rem] h1'>Velocity Workshop <sub className='h2 top-[-5rem]'>™</sub></h2>
                <p className='text-[white] medium-bold max-w-[105rem] leading-[1.3]'>The Clear Digital Velocity Workshops is our unique and dynamic methodology that flips the traditional agency models by transforming project discovery conversations into focused project planning and road mapping exercises.</p>
                <div className="btn-wrap mt-[2.7rem]">
                    <Link className="btn pink" href="/">Learn more</Link>
                </div>
                <div className="textWrapper relative flex flex-wrap w-[calc(100%+3rem)] mt-[4rem] ml-[-1.5rem] md:ml-[0]">
                    <div className="textWrap w-[calc(33.33%-3rem)] lg:w-[calc(50%-3rem)] pr-[5rem] ipad:pr-[1rem] ipad:max-w-[100%] mx-[1.5rem] max-w-[45rem] md:!w-[100%] md:max-w-[100%] md:mx-[0] lg:mb-[5rem]">
                         <h4 className=' mb-[1rem] text-[white] font-medium'>Lorem ipsum dolor sit amet contectetur</h4>
                         <p className='text-[white]'>Torem ipsum dolor sit amet, consectetur adipiscing at elit</p>
                    </div>
                    <div className="textWrap w-[calc(33.33%-3rem)] lg:w-[calc(50%-3rem)] pr-[5rem] ipad:pr-[1rem] ipad:max-w-[100%] mx-[1.5rem] max-w-[45rem] md:!w-[100%] md:max-w-[100%] md:mx-[0] lg:mb-[5rem]">
                         <h4 className=' mb-[1rem] text-[white] font-medium'>Consectetur adisciping etal lorem dolor</h4>
                         <p className='text-[white]'>Torem ipsum dolor sit amet, consectetur adipiscing at elit</p>
                    </div>
                    <div className="textWrap w-[calc(33.33%-3rem)] lg:w-[calc(50%-3rem)] pr-[5rem] ipad:pr-[1rem] ipad:max-w-[100%] mx-[1.5rem] max-w-[45rem] md:!w-[100%] md:max-w-[100%] md:mx-[0]">
                         <h4 className=' mb-[1rem] text-[white] font-medium'>Ipsum dolor lorem etal lorem adisciping</h4>
                         <p className='text-[white]'>Torem ipsum dolor sit amet, consectetur adipiscing at elit</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
   )
}
export default Cta;