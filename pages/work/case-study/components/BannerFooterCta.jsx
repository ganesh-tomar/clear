"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FooterCta = ({ content }) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleOverlayClick = (e) => {
    e.preventDefault()
    const overlayClass = document.querySelector('#smooth-wrapper .outOverLay');
    const addVideo = document.querySelector('#smooth-wrapper .outOverLay .videoWrapOut');

    if (overlayClass && addVideo) {
      overlayClass.classList.add('showOverlay');
      if (content?.isVimio) {
        addVideo.innerHTML = `<iframe src="${content?.overlayVideo}?&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1&#t=235s" width="100%" height="700" class='lg:h-[300px] ' title="Clear video" name="iframe_video1" allow="autoplay" ></iframe>`;
      } else {
        addVideo.innerHTML = `
          <video class="transition-all duration-300 ease-linear video-bg h-auto w-full object-contain" muted loop>
            <source src="${content?.overlayVideo}" type="video/mp4">
          </video>
        `;
      }
    }
  };

  const handleHeadingClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <section className={`bannerfooterCta relative ${content?.type === 'multi-img' ? 'min-h-[1090px] lg:min-h-min' : ''}`}>
      {content?.bgImg && (
        <div className={`bg-img ${content?.overlay}`}>
          <Image
            src={content?.bgImg}
            alt={content?.alt}
            height={2000}
            width={2000}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      {content?.bgVideoUrl && (
        <div className="bg-video">
          <video loading="lazy" autoPlay muted loop playsInline preload="none" className="object-cover absolute top-0 left-0 bottom-0 w-full h-full">
            <source src={content?.bgVideoUrl} type="video/mp4" />
          </video>
        </div>
      )}
      <div className="container">
        {content?.isText && (
          <div className={`sm:max-w-full ${content?.textCenter ? 'text-center mx-auto max-w-[650px]' : 'max-w-[850px]'}`}>
            <h6 className='text-white mb-[20px] subtitle font-normal'>{content?.subTitle}</h6>
            <h3 className={`text-white mb-[30px] ${content?.description ? '' : 'lg-up:text-[70px] font-[600]'} font-weight-[700]`}>{content?.title}</h3>
            <p className='text-white mb-[20px] subtitle font-normal'>{content?.description}</p>
            {content?.btnText && (
              <div className='relative'>
                <Link className="white-bordered tertiary-btn cursor-pointer" href="#" onClick={handleOverlayClick}>
                  {content?.btnText}
                </Link>
              </div>
            )}
          </div>
        )}
        {content?.icons && (
          <div className="row flex flex-wrap max-w-[905px] mx-auto">
            {content?.icons.map((item, index) => (
              <div className="item w-[calc(16.33%-20px)] mx-[10px] mb-[50px]" key={index}>
                <div className="iconWrap max-w-[60px] w-full mx-auto">
                  <Image src={item?.iconUrl} alt={item?.alt} width={100} height={100} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FooterCta;
