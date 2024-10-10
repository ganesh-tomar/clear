import Link from 'next/link';
import React, { useState, useEffect, useRef } from "react";

const HeroBanner = (data) => {
  const [textLeft, setTextLeft] = useState(32)
  const videoUrl = `${data.video.videoUrl}`;
  const handleOverlayClick = () => {
    const overlayClass = document.querySelector('#smooth-wrapper .outOverLay');
    const addVideo = document.querySelector('#smooth-wrapper .outOverLay .videoWrapOut');

    if (overlayClass && addVideo) {
      const posterAttribute = data.video.videoThumbnail && data.video.videoThumbnail.mediaItemUrl
        ? `poster="${data.video.videoThumbnail.mediaItemUrl}"`
        : '';

      overlayClass.classList.add('showOverlay');
      addVideo.innerHTML = `
        <video class="transition-all duration-300 ease-linear video-bg h-auto w-full object-contain" ${posterAttribute} autoplay loop muted>
          <source src="${data.overlayVideo}" type="video/mp4">
        </video>
      `;
    }
  };

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
      {data?.overlayVideo && (<div className='absolute w-full h-full top-0 left-0 z-[6]' onClick={() => handleOverlayClick()} data-cursor-expand="true" data-cursor-icon="iconPlay" ></div>)}
      <div className="container">
        <div className="hero__content relative z-[6]">
          {data?.subhead &&
            <h5 className="eyebrow__text text-white cursor-auto inline-block" onClick={handleHeadingClick}>
              {data.subhead}
            </h5>
          }
          {data?.title &&
            <h1 className='text-white mb-[3rem] cursor-auto' dangerouslySetInnerHTML={{ __html: data.title }} onClick={handleHeadingClick}></h1>
          }
        </div>
      </div>
      <div style={elementLeft} className="relative inline-block w-fit !z-[10]">
        {data?.link &&
          <div className='inline-block w-fit md:mt-[2rem] relative z-[99]'>
            <Link data-circle-expand href={data?.link && data?.link?.linkUrl} className={data?.link && data?.link?.class} target={data?.link && data?.link?.target ? '_blank' : '_self'} onClick={handleHeadingClick}>
              {data?.link?.linkText}
            </Link>
          </div>
        }
      </div>
      {data.video &&
        <div className="bg-img dark__overlay">
          <video className="video-bg overlay" poster={data?.video?.videoThumbnail && data?.video?.videoThumbnail?.mediaItemUrl} autoPlay loop muted >
            <source src={data?.video?.videoUrl} type="video/mp4"></source>
          </video>
        </div>
      }
    </section >
  );
};

export default HeroBanner;

