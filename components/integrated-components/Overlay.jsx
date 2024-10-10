import React, { useEffect, useState } from 'react';

export default function Overlay() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');

  const handleVideoClick = (e) => {
    e.preventDefault();
    const videoBtn = e.currentTarget;
    const videoUrl = videoBtn.getAttribute('href');
    setVideoSrc(videoUrl);
    setIsOverlayVisible(true);
  };

  const handleCloseClick = () => {
    const overlayClass = document.querySelector('#smooth-wrapper .outOverLay');

    const setVideoAttr = document.querySelector('#smooth-wrapper .outOverLay .videoWrapOut');
    overlayClass.classList.remove('showOverlay')
    // setVideoAttr.innerHTML = '';

    setVideoSrc('');
  };

  useEffect(() => {
    const videoBtn = document.querySelector('#smooth-wrapper main .overlay-video');
    if (videoBtn) {
      videoBtn.addEventListener('click', handleVideoClick);
    }

    // Cleanup function to remove the event listener
    return () => {
      if (videoBtn) {
        videoBtn.removeEventListener('click', handleVideoClick);
      }
    };
  }, []);

  // useEffect(() => {
  //   console.log(videoSrc);
  //   console.log(isOverlayVisible);
  // })

  return (
    <div
      className={`overlay outOverLay fixed top-[50%] left-0 w-full h-full xl-up:p-[10rem] xl:p-[4rem] translate-y-[-50%] bg-black/[0.8] z-[100!important] transition-all duration-300 ease-linear`}
    >
      <div className="videoWrapOut w-full">
        {videoSrc && (
          <video
            className="transition-all duration-300 ease-linear video-bg h-auto w-full object-contain"
            // poster="https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/10/iStock-1280582431-1.webp"
            autoPlay
            loop
            muted
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}
      </div>
      <span
        className="group absolute h-[3rem] w-[3rem] right-[5rem] top-[13rem] cursor-pointer crossClick z-[99] lg:!top-[2rem] lg:!right-[1rem] xl:top-[5rem] xl:right-[3rem] desktop:top-[4rem] desktop:right-[4rem]"
        onClick={handleCloseClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <path
            d="M22.5 7.5L7.5 22.5"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:stroke-pink"
          />
          <path
            d="M7.5 7.5L22.5 22.5"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:stroke-pink"
          />
        </svg>
      </span>
    </div>
  );
}
