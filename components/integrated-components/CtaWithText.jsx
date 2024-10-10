import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const CtaWithText = (data) => {
  const [parallaxInit, setParallaxInit] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.footerCta');
      if (element) {
        const footerRect = element.getBoundingClientRect();
        const footerDistanceFromBottom = window.innerHeight - footerRect.top;
        if (footerDistanceFromBottom > 0) {
          setParallaxInit(true)
        }
      }
    };
      handleScroll();
    
			window.addEventListener("scroll", handleScroll);
      window.addEventListener('resize', handleScroll);
    return () => {
        window.addEventListener("scroll", handleScroll);
        window.addEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    gsap.utils.toArray('.footerCta .bg-img').forEach(container => {
      const img = container.querySelector('img');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top bottom", // Start the animation when the top of the container hits the bottom of the viewport
          end: "bottom top", // End when the bottom of the container hits the top of the viewport
          scrub: true
        }
      });

      // Adjust the animation to fit within the bounds of the container
      tl.fromTo(img, {
        yPercent: -20, // Reduced to prevent overflow
        ease: 'none'
      }, {
        yPercent: 20,
        ease: 'none'
      });
    });

    // Clean up function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger && document.querySelector('.footerCta') && document.querySelector('.footerCta').contains(trigger.trigger)) {
          trigger.kill();
        }
      });
    };
  }, [parallaxInit]); // Empty dependency array ensures this runs once on mount

  return (
    <section
      className={`footerCta grid__parallax  z-0 transition-all height__full-nav will-change-scroll duration-1000 ${data.classes} ${data?.padding.join(' ')}`} id={data.id}>
      {data?.image?.mediaItemUrl && (data.image.mediaItemUrl) &&
        <div className="bg-img dark__overlay !h-[140%] !top-[-20%] tablet:!top-[-40%] tablet:!h-[140%] phablet:!top-[-40%] phablet:!h-[140%] sm:!top-[-50%] sm:!h-[150%] relative fixedContent">
          <Image
            src={data.image.mediaItemUrl}
            alt={data.image.altText}
            height={2000}
            width={2000}
            className="w-full h-full botttom-0 object-cover absolute left-0 object-center"
          />
        </div>
      }
      <div className="container">
        <div className="wrapper">
          <div className='icon-wrap max-w-[15.3rem] mb-8'>
            {data?.icon &&
              <Image
                src={data.icon.mediaItemUrl}
                alt={data.icon.altText}
                height={2000}
                width={2000}
                className="w-full h-full object-contain object-center"
              />
            }
          </div>
          {data?.title &&
            <h6 className="text-white mb-[20px] subtitle font-normal">
              {data.title}
            </h6>

          }
          {data?.subtitle &&
            <h2 className="h1 text-white mb-[30px] font-weight-[700]" dangerouslySetInnerHTML={{ __html: data.subtitle }} />
          }
          {data?.body &&
            <div className="text-white lead mb-[30px] max-w-[103rem] font-weight-[700]" dangerouslySetInnerHTML={{ __html: data.body }} />
          }

          {data?.button?.length > 0 && (
            <div className='button-wrap mt-4'>
              {data?.button.map((btn, index) => (
                <Link
                  key={index}
                  className={`btn ${btn?.class}  mr-8`}
                  href={btn?.linkUrl}
                  target={btn?.target ? '_blank' : '_self'}
                >
                  {btn?.linkText}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default CtaWithText;
