import React, { useState, useRef, useEffect } from 'react';
import Lottie from 'react-lottie';
import Link from 'next/link';
import Image from 'next/image';
import SectionIntro from '../SectionIntro';
import collaborative from '../../public/Lootie/Clear_Collaborative_Icon_R1.json';
import excellence from '../../public/Lootie/Clear_Excellence_Icon_R1.json';
import performance from '../../public/Lootie/Clear_Performance_Icon_R1.json';

const IntroWithContent = (data) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationStates, setAnimationStates] = useState(
    data.items.map(() => ({ isStopped: true, isPaused: false })),
  );
  const rocketRef = useRef(null);

  const getLottieAnimation = (iconAnim) => {
    switch (iconAnim) {
      case 0:
        return collaborative;
      case 1:
        return performance;
      case 2:
        return excellence;
      default:
        return null;
    }
  };

  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnimationStates((prevStates) => {
            if (currentIndex < prevStates.length) {
              prevStates[currentIndex].isStopped = false;
              prevStates[currentIndex].isPaused = false;
            }
            return [...prevStates];
          });
          setTimeout(() => {
            setCurrentIndex((prevIndex) => {
              const newIndex = prevIndex + 1;
              return newIndex < data.items.length ? newIndex : 0;
            });
          }, 500);
          observer.disconnect();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    if (rocketRef.current) {
      observer.observe(rocketRef.current);
    }

    return () => {
      if (observer) {
        if (rocketRef.current) {
          observer.unobserve(rocketRef.current);
        }
      }
    };
  }, [currentIndex, data.items.length]);

  return (
    <section
      className={`introWithContent dark height__full grid__parallax z-[7] will-change-transform bg-white ${data?.classes} ${data?.padding.join(' ')}`}
      id={data.id}
    >
      <div className="container">
        <SectionIntro {...data} iconAnim="rocket" />
        <div className="gap-[3rem] wrapper flex flex-wrap justify-between laptop:justify-normal md:gap-[5rem] mt-[5.4rem] md:mt-[4.4rem]">
          {data.items?.map((item, i) => (
            <div
              className={`lg-up:w-[calc(33%-2rem)] pr-[9rem] introWithContent__item w-full tablet:w-[calc(50%-2rem)] xl:pr-0 animation-container-${i}`}
              key={i}
              data-index={i}
            >
              {item.linkUrl ? (
                <Link className="inline-block" href={item.linkUrl}>
                  <div
                    ref={rocketRef}
                    className="introWithContent__icon max-h-[9rem] max-w-[9rem] min-h-[9rem] w-full h-full mb-[3.7rem] md:mb-[3rem]"
                  >
                    <Lottie
                      options={{
                        loop: false,
                        autoplay: false,
                        animationData: getLottieAnimation(i),
                        rendererSettings: {
                          preserveAspectRatio: 'xMidYMid slice',
                        },
                      }}
                      isStopped={animationStates[i]?.isStopped}
                      isPaused={animationStates[i]?.isPaused}
                    />
                  </div>
                  {item.logo?.mediaItemUrl && (
                    <Image
                      src={item.logo.mediaItemUrl}
                      width={800}
                      height={1090}
                      className="md:object-contain h-full w-full object-contain"
                      alt={item.logo.altText}
                    />
                  )}
                  {item.subhead && (
                    <h2 className="tiltCross large mb-[1rem] sm:!text-[90px] relative inline-block" dangerouslySetInnerHTML={{ __html: item.subhead }} />
                  )}
                  <h5 dangerouslySetInnerHTML={{ __html: item.title }} />
                  <p className="mt-[1rem] md:mt-[1rem]">
                    {item.bodyWithoutEditor}
                  </p>
                </Link>
              ) : (
                <>
                  {item.logo?.mediaItemUrl && (
                    <div className="introWithContent__icon max-h-[9rem] max-w-[9rem] min-h-[9rem] w-full h-full mb-[3.7rem] md:mb-[3rem]">
                      <Image
                        src={item.logo.mediaItemUrl}
                        width={800}
                        height={1090}
                        className="md:object-contain h-full w-full object-contain"
                        alt={item.logo.altText}
                      />
                    </div>
                  )}
                  {item.subhead && (
                    <h2 className="large mb-[1rem] sm:!text-[90px] relative inline-block" dangerouslySetInnerHTML={{ __html: item.subhead }} />
                  )}
                  <h5 dangerouslySetInnerHTML={{ __html: item.title }}></h5>
                  <p className="mt-[1rem] md:mt-[1rem]">
                    {item.bodyWithoutEditor}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroWithContent;
