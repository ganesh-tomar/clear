import Link from 'next/link';
import React, { useState, useEffect } from "react";
import styles from './header/header.module.css';

const HomepageHero = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleOverlayClick = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  const handleHeadingClick = (e) => {
    e.stopPropagation();
  };

  const handlespanclick = () => {
    setIsOverlayOpen(false)
  }

  return (
    <section className={`hero__banner grid__parallax height__full flex items-center cursor-pointer`}>
      <div className='absolute w-full h-full top-0 left-0 z-[1]' onClick={handleOverlayClick} data-cursor-expand="true" data-cursor-icon="iconPlay" ></div>
      <div className="container">
        <div className="hero__content relative z-[6]">
          <h5 className="eyebrow__text text-white cursor-auto inline-block" onClick={handleHeadingClick}>
            Hello! We are Clear Digital.
          </h5>
          <h1 className='text-white cursor-auto' onClick={handleHeadingClick}> We build B2B websites and <span className="underline-container relative inline-block leading-1 pb-[0.8rem]">digital</span> brand experiences.</h1>
          <div className='mt-[3rem] md:mt-[2rem]'>
            <Link data-circle-expand href="/" className="tertiary-btn" target="_self" onClick={handleHeadingClick}>
              Our approach
            </Link>
          </div>
        </div>
      </div>
      {
        isOverlayOpen && (
          <div className="overlay fixed top-0 left-0 w-full h-full xl-up:p-[10rem] xl:p-[4rem] bg-black/[0.8] z-[100!important] transition-all duration-300 ease-linear">
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
      }
      <div className="bg-img dark__overlay">
        <video className="video-bg overlay" poster="https://dev-clear-astro-wp.pantheonsite.io/wp-content/uploads/2023/10/iStock-1280582431-1.webp" autoPlay loop muted >
          <source src="https://media.istockphoto.com/id/1372283447/video/attractive-woman-wearing-virtual-reality-headset-augmented-reality-creative-lady-swiping.mp4?s=mp4-640x640-is&amp;k=20&amp;c=Flz0Jza76gPaFZyEJ8X6114fy__lJc1m_4_yKZRZsVo=" type="video/mp4"></source>
        </video>
      </div>
    </section >
  );
};

export default HomepageHero;

