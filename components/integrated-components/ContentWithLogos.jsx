'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Lottie from 'react-lottie';
import curvedArrow from '../../public/Lootie/Curved_White_Arrow.json';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContentWithLogos = ({ content, images }) => {
  const [triggerPoint, setTriggerPoint] = useState(400)
  const [whiteCoverDimension, setWhiteCoverDimension] = useState(`10px`)
  const [animationState, setAnimationState] = useState({
    isStopped: true,
    isPaused: false,
  });

  const animationContainerRef = useRef(null);

  useEffect(() => {
    const screenOneThird = ((window.innerHeight) / 2);
    setTriggerPoint(screenOneThird * 2)
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setAnimationState({ isStopped: false, isPaused: false });
            observer.disconnect();
          }, 200);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    if (animationContainerRef.current) {
      observer.observe(animationContainerRef.current);
    }

    return () => {
      if (observer && animationContainerRef.current) {
        observer.unobserve(animationContainerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Target the parent container
    const parentContainer = document.querySelector('.logocontentgrid');

    // Target all card elements
    const cards = document.querySelectorAll('.logocontentgrid .image-wrapper .area-wrap');

    // Set initial scale for all cards
    gsap.set(cards, { scale: 0 });

    ScrollTrigger.create({
      trigger: parentContainer,
      start: "top 25%", // Trigger when parent is 25% from the top
      onEnter: () => {
        gsap.to(cards, {
          scale: 1,
          stagger: 0.3,
          duration: 0.5,
          ease: 'power1.out',
        });
      },
    });

    return () => {
      // Clean up ScrollTrigger instances when component unmounts
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);


  useEffect(() => {
    const handleResize = () => {
      const cardWidth = document.querySelector('.logocontentgrid .image-wrapper .area-wrap')?.offsetWidth;
      const cardHeight = document.querySelector('.logocontentgrid .image-wrapper .area-wrap')?.offsetHeight;
      if (cardWidth > cardHeight) {
        setWhiteCoverDimension(cardWidth)
      } else {
        setWhiteCoverDimension(cardHeight)
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const dimensions = {
    width: `${whiteCoverDimension * 1.5}px`,
    height: `${whiteCoverDimension * 1.5}px`,
  };

  return (
    <section className="logocontentgrid bg-black">
      <div className="container">
        <div className="wrapper w-full relative flex flex-wrap">
          <div className="content-wrapper relative pr-[6.5rem] w-[45%] lg:w-[100%] lg:pr-[0] lg:mb-[5rem]">
            <h6 className="subtitle mb-[2rem]">{content?.blurb}</h6>
            <div className='mb-[3rem] relative'>
              <div
                ref={animationContainerRef}
                className="whitePointingArrow"
              >
                <Lottie
                  options={{
                    loop: false,
                    autoplay: false,
                    animationData: curvedArrow,
                    rendererSettings: {
                      preserveAspectRatio: 'xMidYMid slice',
                    },
                  }}
                  isStopped={animationState.isStopped}
                  isPaused={animationState.isPaused}
                />
              </div>
              <h3 className="" dangerouslySetInnerHTML={{ __html: content?.title }} />
            </div>
            <div className="mb-[3rem]" dangerouslySetInnerHTML={{ __html: content?.body }} />
            <div className="btn-wrap">
              <Link
                className={`btn pink white-bordered ${content?.link?.class}`}
                href={content?.link?.linkUrl}
                target={content?.link?.target}
              >
                {content?.link?.linkText}
              </Link>
            </div>
          </div>
          <div className="image-wrapper w-[calc(55%-8.7rem)] ml-[8.7rem] lg:w-[100%] lg:ml-[0]" >
            <div className="w-[calc(100%+3rem)] ml-[-1.5rem] flex flex-wrap">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="area-wrap group relative h-[33rem] border greyborder w-[calc(50%-3rem)] flex flex-wrap justify-center items-center mx-[1.5rem] mb-[3rem] sm:w-[100%]"
                  data-cursor-expand
                >
                  {img?.link &&
                    <Link href={img?.link} className="redirect !z-[6]">
                      .
                    </Link>
                  }
                
                  <div className="img-wrap max-w-[22rem] max-h-[10.3rem]">
                    <Image
                      src={img?.image?.sourceUrl}
                      width={1000}
                      height={1000}
                      className="w-full h-full object-contain"
                      alt={img?.image?.altText}
                    />
                  </div>
                  <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
                    <div className='w-full h-full relative'>
                      <span style={dimensions} className='block absolute top-1/2 left-1/2 origin-center -translate-x-1/2 -translate-y-1/2 scale-[0] bg-white mix-blend-difference rounded-full group-hover:scale-[1] transition-transfrom duration-700' />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentWithLogos;
