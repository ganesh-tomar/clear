import Link from "next/link";
import React, { useState, useRef, useEffect } from 'react';
import Lottie from 'react-lottie';
import rocket from '../public/Lootie/Clear_HP_Rocket_R1.json';
import arrow from '../public/Lootie/Clear_HP_DownArrow_R1.json';

const getLottieAnimation = (iconAnim) => {
  switch (iconAnim) {
    case 'rocket':
      return rocket;
    case 'arrow':
      return arrow;
    default:
      return null;
  }
};

const SectionIntro = ({ iconAnim, subhead, title, bodyWithoutEditor }) => {
  const [rocketAnimationState, setRocketAnimationState] = useState({
    isStopped: true,
    isPaused: false,
  });

  const [arrowAnimationState, setArrowAnimationState] = useState({
    isStopped: true,
    isPaused: false,
  });

  const rocketRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // console.log('Rocket is in view');
          setRocketAnimationState({ isStopped: false, isPaused: false });

          // Start arrow animation after a delay
          setTimeout(() => {
            // console.log('Arrow is in view');
            setArrowAnimationState({ isStopped: false, isPaused: false });
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
  }, []);

  return (
    <div className="intro">
      <div className="wrapper">
        <div className="intro__text max-w-[117rem] relative">
          <div ref={rocketRef} className="hidden rocketDoodleIcon img-wrap absolute top-[-8rem] right-[7rem] w-[12rem] h-[12rem]">
            <Lottie
              options={{
                loop: false,
                autoplay: false,
                animationData: getLottieAnimation('rocket'),
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice',
                },
              }}
              isStopped={rocketAnimationState.isStopped}
              isPaused={rocketAnimationState.isPaused}
            />
          </div>
          <div ref={arrowRef} className="hidden arrowDoodleIcon img-wrap absolute bottom-[-8rem] left-[-5rem] w-[4.6rem] h-[10.3rem]">
            <Lottie
              options={{
                loop: false,
                autoplay: false,
                animationData: getLottieAnimation('arrow'),
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice',
                },
              }}
              isStopped={arrowAnimationState.isStopped}
              isPaused={arrowAnimationState.isPaused}
            />
          </div>
          <h5 className="eyebrow__text pr-[7rem]">{subhead}</h5>
          <h2 className="rocketBg tablet:pr-[1rem]" dangerouslySetInnerHTML={{ __html: title }}></h2>
          <p className="relative mt-[5rem] lg:mt-[3rem] subtitle !leading-[1.5] curved_arrow">
            {bodyWithoutEditor}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionIntro;
