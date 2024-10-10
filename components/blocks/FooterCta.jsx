import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const FooterCta = () => {
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

    setTimeout(() => {
      handleScroll();
    }, 3000);

     window.addEventListener("scroll", handleScroll);
    setTimeout(() => {
          window.addEventListener("resize", handleScroll);
      }, 500);

   
    return () => {
      window.addEventListener("scroll", handleScroll);
      setTimeout(() => {
          window.addEventListener("resize", handleScroll);
      }, 500);
    };
  }, []);

  useEffect(() => {
    gsap.utils.toArray('.footerCta').forEach(container => {
      const img = container.querySelector('.bg-img');

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
    <section className={`footerCta ss grid__parallax z-0 transition-all height__full-nav will-change-scroll duration-1000`}>
      <div className="bg-img !h-[120%]  dark__overlay absolute inset-0">
        <Image
          src={`https://dev-cleardigital.pantheonsite.io/app/uploads/2024/07/ClearOfficeFooterCTA.webp`}
          alt={`clear office`}
          height={100}
					width={100}         
          className="w-full h-full !transform-none object-cover"
          loading='eager'
        />
      </div>
      <div className="container relative z-10">
        <div className="">
          <h6 className="text-white mb-[20px] subtitle font-normal">Ready to get to work?</h6>
          <h2 className="h1 text-white mb-[30px] font-weight-[700]">Let’s talk.</h2>
          <div className='button-wrap mt-4'>
            <Link className={`btn btn pink white-bordered mr-2`} href={`/about/contact-us`} target={'_self'}>Contact us</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCta;
