
"use client"
import React, { useState }  from 'react';
import Image from 'next/image';

const FooterCta = ({ content }) => {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    console.log(content);

    const handleOverlayClick = (e) => {
        e.stopPropagation();
        setIsOverlayOpen(!isOverlayOpen);
      };

      const handlespanclick = () => {
        setIsOverlayOpen(false)
      }

    const handleHeadingClick = (e) => {
        e.prevetDefault();
        e.stopPropagation();
    };
  return (
    <section className={`bannerfooterCta relative`}>
      {
        content?.bgImg && (
          <div className="bg-img dark__overlay">
            <Image
              src={content?.bgImg}
              alt={content?.alt}
              height={2000}
              width={2000}
              className="w-full h-full object-cover"
            />
          </div>
        )
      } 
      {
        content?.bgVideo == true && (
          <div className="bg-video">
            <video loading="lazy" autoPlay muted loop playsInline preload="none" className={` object-cover absolute top-[0] left-[0] bottom-[0] w-[100%] h-[100%]`}>
              <source src={content?.bgVideoUrl} type="video/mp4" />
            </video>
          </div>
        )
      }
      
      <div className="container">
        {
          content?.isText  && (
            <div className="max-w-[850px] sm:max-w-full">
              <h3 className=' text-white mb-[30px] font-weight-[700]'>{content?.title}</h3>
              {/* <h6 className='text-white  mb-[20px] subtitle font-normal'>{content?.subTitle}</h6> */}
              <p className='text-white  mb-[20px] subtitle font-normal'>{content?.description}</p>
              <div className='relative'>
                <span className={` white-bordered tertiary-btn cursor-pointer`} href={'#'} onClick={handleOverlayClick}>{content?.btnText}</span>
              </div>
            </div>
          )
        }
        {
          content?.icons && (
            <div className="row">

              <div className="iconWrap">
                <Image src={'/'} alt='' width={100} height={100} />
              </div>
            </div>
          )
        }
       
      </div>
      {/* {
        isOverlayOpen && (
          <div className="overlay absolute top-0 left-0 w-full h-full xl-up:p-[10rem] xl:p-[4rem] bg-black/[0.8] z-[100!important] transition-all duration-300 ease-linear">
            <video className="transition-all duration-300 ease-linear video-bg h-full w-full object-contain" poster="https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/10/iStock-1280582431-1.webp" autoPlay loop muted>
              <source src="https://media.istockphoto.com/id/1372283447/video/attractive-woman-wearing-virtual-reality-headset-augmented-reality-creative-lady-swiping.mp4?s=mp4-640x640-is&amp;k=20&amp;c=Flz0Jza76gPaFZyEJ8X6114fy__lJc1m_4_yKZRZsVo=" type="video/mp4"></source>
            </video>
            <span className="group absolute h-[3rem] w-[3rem] right-[5rem] top-[13rem] cursor-pointer" iconMinus onClick={handlespanclick}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M22.5 7.5L7.5 22.5" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-pink" />
                <path d="M7.5 7.5L22.5 22.5" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-pink" />
              </svg>
            </span>
          </div>
        )
      } */}
    </section>
  );
};
export default FooterCta;
