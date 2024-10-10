import Link from 'next/link';
import React, { useState, useEffect, useRef } from "react";

const HeroBanner = (data) => {
  const [textLeft, setTextLeft] = useState(32)
  // const videoUrl = `${data.video.videoUrl}`;
  // const handleOverlayClick = () => {
  //   const overlayClass = document.querySelector('#smooth-wrapper .outOverLay');
  //   const addVideo = document.querySelector('#smooth-wrapper .outOverLay .videoWrapOut');

  //   if (overlayClass && addVideo) {
  //     overlayClass.classList.add('showOverlay');
  //     addVideo.innerHTML = `<video class="transition-all duration-300 ease-linear video-bg h-auto w-full object-contain" poster="https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/10/iStock-1280582431-1.webp" autoplay loop muted>
  //           <source src="${data.video.videoUrl}" type="video/mp4">
  //         </video>
  //       `;
  //   }
  // };

  const handleHeadingClick = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const handleResize = () => {
      const element = document.querySelector('.hero__banner .hero__content');
      const contentLeft = element.getBoundingClientRect().left;
      setTextLeft(contentLeft);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const elementLeft = {
    left: `${textLeft + 5}px`,
  };


  let sectionPadding = '';
  data.padding.map(item => {
    sectionPadding += ' ' + item;
  });

  return (
    <section className={`hero__banner grid__parallax height__full !items-start cursor-pointer z-[2] ${data.classes} ${sectionPadding}`} id={data.id}>
      {/* <div className='absolute w-full h-full top-0 left-0 z-[6]' onClick={() => handleOverlayClick()} data-cursor-expand="true" data-cursor-icon="iconPlay" ></div> */}
      {/* <Button buttonClass={'absolute w-full h-full top-0 left-0 z-[1]'} buttonText={''} url={'https://media.istockphoto.com/id/1372283447/video/attractive-woman-wearing-virtual-reality-headset-augmented-reality-creative-lady-swiping.mp4?s=mp4-640x640-is&k=20&c=Flz0Jza76gPaFZyEJ8X6114fy__lJc1m_4_yKZRZsVo='} videoUrl={'https://media.istockphoto.com/id/1372283447/video/attractive-woman-wearing-virtual-reality-headset-augmented-reality-creative-lady-swiping.mp4?s=mp4-640x640-is&k=20&c=Flz0Jza76gPaFZyEJ8X6114fy__lJc1m_4_yKZRZsVo='} data-cursor-expand="true" data-cursor-icon="iconPlay"  /> */}
      <div className="container">
        <div className="hero__content relative z-[6]">
          {data.subhead &&
            <h5 className="eyebrow__text text-white cursor-auto inline-block" onClick={handleHeadingClick}>
              {data.subhead}
            </h5>
          }
          {data.title &&
            <h1 className='text-white mb-[3rem] cursor-auto' dangerouslySetInnerHTML={{ __html: data.title }} onClick={handleHeadingClick}></h1>
          }
          {data.link &&
            <div className='inline-block w-fit md:mt-[2rem] relative z-[99]'>
              <Link data-circle-expand href={data.link && data.link.linkUrl} className={data.link && data.link.class} target={data.link && data.link.target ? '_blank' : '_self'} onClick={handleHeadingClick}>
                {data.link.linkText}
              </Link>
            </div>
          }
        </div>
      </div>
      {/* <div style={elementLeft} className="relative inline-block w-fit !z-[10]">
        {data.link &&
          <div className='inline-block w-fit md:mt-[2rem] relative z-[99]'>
            <Link data-circle-expand href={data.link && data.link.linkUrl} className={data.link && data.link.class} target={data.link && data.link.target ? '_blank' : '_self'} onClick={handleHeadingClick}>
              {data.link.linkText}
            </Link>
          </div>
        }
      </div> */}
      {
        // isOverlayOpen && (
        //   <div className="overlay fixed top-0 left-0 w-full h-full xl-up:p-[10rem] xl:p-[4rem] bg-black/[0.8] z-[100!important] transition-all duration-300 ease-linear" scroll={false}>
        //     <video className="transition-all duration-300 ease-linear video-bg h-auto w-full object-contain" poster="https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/10/iStock-1280582431-1.webp" autoPlay loop muted>
        //       <source src="https://media.istockphoto.com/id/1372283447/video/attractive-woman-wearing-virtual-reality-headset-augmented-reality-creative-lady-swiping.mp4?s=mp4-640x640-is&amp;k=20&amp;c=Flz0Jza76gPaFZyEJ8X6114fy__lJc1m_4_yKZRZsVo=" type="video/mp4"></source>
        //     </video>
        //     <span className="group absolute h-[3rem] w-[3rem] right-[5rem] top-[13rem] cursor-pointer" iconMinus onClick={handlespanclick}>
        //       <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        //         <path d="M22.5 7.5L7.5 22.5" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-pink" />
        //         <path d="M7.5 7.5L22.5 22.5" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-pink" />
        //       </svg>
        //     </span>
        //   </div>
        // )
      }
      {data.video &&
        <div className="bg-img dark__overlay">
          <video className="video-bg overlay" poster={data.video.videoThumbnail && data.video.videoThumbnail.mediaItemUrl} autoPlay loop muted >
            <source src={data.video.videoUrl} type="video/mp4"></source>
          </video>
        </div>
      }
    </section >
  );
};

export default HeroBanner;

