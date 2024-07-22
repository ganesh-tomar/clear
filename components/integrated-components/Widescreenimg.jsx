'use client'
import Image from 'next/image';
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WideScreenImg = (data) => {
  useEffect(() => {
    const container = document.querySelector('#imageScroller');
    const elementToMove = container.querySelector('.imagesRow');
    const containerWidth = container?.offsetWidth;
    const elementWidth = elementToMove?.offsetWidth;
    const xValue = elementWidth - containerWidth;

    gsap.to(elementToMove, {
      x: -xValue,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        scrub: 1,
        start: 'top center+=1%',
        end: 'top 30%',
      },
    });
  }, []);


  const content = data.items.map(item => ({
    imgpath: item?.logo?.sourceUrl,
    imgtext: item?.logo?.altText,
    width: item?.isBigImg === true ? 'max-w-[57rem]  w-[40%]' : 'max-w-[33.2rem] w-[23%]',
  }));


  const Marquee = () => (
    <section className={`widescreenimg grid__parallax dark small-padding-top ${data?.classes} ${data?.padding.join(' ')}`}>
      <div className='container'>
        <div id='imageScroller' className="img-wrapper sparkWheel relative h-[54rem] lg:h-[30rem]">
          <div className='imagesRow absolute w-max top-0 phablet:w-[450vw] left-0'>
            <div className='relative w-full flex'>
              {content.map((item, index) => (
                <div key={index} className={`img-wrap-one relative h-[54rem] ${item.width} mr-[3rem] laptop:mr-[3.5rem] lg:h-[30rem] lg:max-w-[100%] lg:mr-[2rem]`}>
                  <Image src={item.imgpath} width={9000} height={5500} alt={item.imgtext} className='w-full h-full object-cover' />
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

export default WideScreenImg;