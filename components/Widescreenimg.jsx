'use client'
import Image from 'next/image';
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ScrollComponent = () => {

  useEffect(() => {
    const initAnimation = () => {
      setTimeout(() => {
        const container = document.querySelector('#imageScroller');
        const elementToMove = container.querySelector('.imagesRowWrapper');
        const containerWidth = container?.offsetWidth;
        const elementWidth = elementToMove?.offsetWidth;

        const xValue = elementWidth - containerWidth;

        gsap.to(elementToMove, {
          x: -xValue,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            scrub: 2,  // Adjusted this value to slow down the animation
            start: 'top center+=1%',
            end: 'top 30%',
            invalidateOnRefresh: true, // This ensures recalculations on refresh or resize
          },
        });
      }, 300);
    };

    // Initialize the animation
    initAnimation();

    // Event listener to reset animation on resize
    const handleResize = () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Kill all existing ScrollTriggers
      initAnimation(); // Reinitialize the animation after killing the previous one
    };

    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Kill ScrollTriggers on unmount
    };
  }, []);

  const content = [
    {
      imgpath: '/section/WideScreenImg/hand-wave-up.png',
      width: 'max-w-[57rem]  w-[40%]'
    },
    {
      imgpath: '/section/WideScreenImg/have-fun.png',
      width: ' max-w-[33.2rem] w-[23%]'
    },
    {
      imgpath: '/section/WideScreenImg/team-member-smile.png',
      width: 'max-w-[54.5rem] w-[40%]'
    },
    {
      imgpath: '/section/WideScreenImg/team-member-smile-2.png',
      width: ' max-w-[33.2rem] w-[23%]'
    },
  ];

  const Marquee = () => (
    <section className="widescreenimg grid__parallax dark small-padding-top">
      <div className='container'>
        <div id='imageScroller' className="img-wrapper sparkWheel relative h-[54rem] lg:h-[30rem]">
          <div className='imagesRow absolute top-0 w-[300vw] tablet:w-[350vw] phablet:w-[450vw] sm:w-[600vw] left-0'>
            <div className='imagesRowWrapper w-full flex'>
              {content.map((item, index) => (
                <div key={index} className={`img-wrap-one relative h-[54rem] ${item.width} mr-[3rem] laptop:mr-[3.5rem] lg:h-[30rem]  lg:max-w-[100%] lg:mr-[2rem]`}>
                  <Image src={item.imgpath} width={9000} height={5500} alt='img' className='w-full h-full object-cover' />
                </div>
              ))}
              {content.map((item, index) => (
                <div key={index} className={`img-wrap-one relative h-[54rem] ${item.width} mr-[3rem] laptop:mr-[3.5rem] lg:h-[30rem]  lg:max-w-[100%] lg:mr-[2rem]`}>
                  <Image src={item.imgpath} width={9000} height={5500} alt='img' className='w-full h-full object-cover' />
                </div>
              ))}
              {content.map((item, index) => (
                <div key={index} className={`img-wrap-one relative h-[54rem] ${item.width} mr-[3rem] laptop:mr-[3.5rem] lg:h-[30rem]  lg:max-w-[100%] lg:mr-[2rem]`}>
                  <Image src={item.imgpath} width={9000} height={5500} alt='img' className='w-full h-full object-cover' />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return <Marquee />;
};

export default ScrollComponent;
