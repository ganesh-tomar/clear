'use client'
import Image from 'next/image';
// Import necessary libraries
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Your functional component
const ScrollComponent = () => {


  useEffect(() => {
    const container = document.querySelector('#imageScroller');
    const elementToMove = container.querySelector('.imagesRow'); // Replace 'your-element' with the actual class or selector of your element

    gsap.to(elementToMove, {
      xPercent: -40,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        // pin: true,
        scrub: 1,
        start: 'top center+=1%', // Adjust the percentage as needed
        end: () => `+=${container.offsetWidth}`,
      },
    });
  }, []);
  const content = [
    {
      imgpath: '/Clear_Summit.png',
      width: 'max-w-[57rem]  w-[40%]'
    },
    {
      imgpath: '/Z91.png',
      width: ' max-w-[33.2rem] w-[23%]'
    },
    {
      imgpath: '/Z91_27.png',
      width: 'max-w-[54.5rem] w-[40%]'
    },
  ];


  // Marquee component as a functional component
  const Marquee = () => (
    <section className="widescreenimg grid__parallax dark small-padding-top">
      <div className='container'>
        <div id='imageScroller' className="img-wrapper sparkWheel relative h-[54rem] lg:h-[30rem]">
          <div className='imagesRow absolute top-0 w-[300vw] tablet:w-[350vw] phablet:w-[450vw] sm:w-[600vw] left-0'>
            <div className='relative w-full flex'>
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
  )
  return <>
    <Marquee />
  </>
    ;
};

export default ScrollComponent;