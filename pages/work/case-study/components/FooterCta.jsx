import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const FooterCta = ({ content }) => {
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

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
    <section className={`footerCta grid__parallax height__full-nav `}>
      <div className="bg-img dark__overlay">
        <Image
          src={content?.bgImg}
          alt={content?.alt}
          height={1920}
          width={1920}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container">
        <div className="">
          <h6 className='text-white  mb-[20px] subtitle font-normal'>{content?.subTitle}</h6>
          <h2 className='h1 text-white mb-[30px] font-weight-[700]'>{content?.title}</h2>
          <div>
            <Link className={`btn pink white-bordered`} href={`${content?.btnUrl}`}>{content?.btnText}</Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FooterCta;
