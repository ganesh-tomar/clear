'use client';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollWithText = ({ data }) => {
  const sectionRef = useRef(null);
  const textRefs = useRef([]);

  console.log(data);

  const [parallaxInit, setParallaxInit] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.scrolltxt');
      if (element) {
        const footerRect = element.getBoundingClientRect();
        const footerDistanceFromBottom = window.innerHeight - footerRect.top;
        if (footerDistanceFromBottom > 0) {
          setParallaxInit(true)
        }
      }
    };


    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("resize", handleScroll);
    };
  }, []);
  // Function to initialize animations
  const initAnimations = () => {
    // Clear previous animations and ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    textRefs.current.forEach((el, index) => {
      const direction = el.dataset.direction;
      const moveDistance = window.innerWidth * 2; // Distance the text will move

      gsap.to(el, {
        right: direction === 'right' ? moveDistance : `calc(20% - ${moveDistance}px)`,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom', // Start animation when top of section hits the bottom of viewport
          end: 'bottom top', // End animation when bottom of section hits the top of viewport
          scrub: true, // Smoothly animate as the user scrolls
          ease: 'none', // No easing for linear motion
        },
      });
    });
  };

  // Debounced resize handler to restart animations on resize
  useEffect(() => {
    initAnimations(); // Initialize animations on component mount
  }, [parallaxInit]);

  const sectionPadding = data?.padding?.join(' ');

  const renderTextItems = (textItems, keyPrefix) => {
    return [...Array(7)].map((_, repeatIndex) => (
      <React.Fragment key={`${keyPrefix}-repeat-${repeatIndex}`}>
        {textItems.map((item, itemIndex) => (
          item.text1 && (
            <span key={`${keyPrefix}-${itemIndex}-${repeatIndex}`} className={item.colorClass}>
              {item.text1} &nbsp;
            </span>
          )
        ))}
      </React.Fragment>
    ));
  };

  return (
    <section className={`scrolltxt  grid__parallax dark ${data?.classes} ${sectionPadding}`} ref={sectionRef}>
      <div className="bg-text-lines relative z-[1] w-[2200vw] sm:w-[2600vw] pb-[3rem] xxs:w-[2860vw]">
        <div className="w-full">
          {data && data.contentitem ? (
            data.contentitem.map((content, contentIndex) => (
              <div key={`contentitem-${contentIndex}`}>
                <h2
                  className="h1 sm:text-[45px]"
                  ref={(el) => (textRefs.current[contentIndex] = el)}
                  style={{
                    position: 'relative',
                    right: content.textDirection === 'right' ? '0px' : '20%',
                  }}
                >
                  {content.textItem1 && renderTextItems(content.textItem1, 'textItem1')}
                  {content.textItem2 && renderTextItems(content.textItem2, 'textItem2')}
                  {content.textItem3 && renderTextItems(content.textItem3, 'textItem3')}
                </h2>
              </div>
            ))
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default ScrollWithText;
