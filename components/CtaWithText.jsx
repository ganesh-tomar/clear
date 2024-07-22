import React from 'react';
import Image from "next/image";
import Link from "next/link";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const CtaWithText = (data) => {
  let sectionPadding = '';
  data.padding.map(item => {
    sectionPadding += ' ' + item;
  });

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    let getRatio = (el) => window.innerHeight / (window.innerHeight + (el.offsetHeight));

    gsap.utils.toArray("section").forEach((section, i) => {
      const content = section.querySelector(".footerCta .fixedContent");
      if (content) {
        gsap.fromTo(
          content,
          {
            y: () =>
              i ? -window.innerHeight * getRatio(content) : 0,
          },
          {
            y: () =>
              window.innerHeight * (1 - getRatio(content)),
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: () => (i ? "top bottom" : "top top"),
              end: "bottom top",
              scrub: true,
              invalidateOnRefresh: true, // to make it responsive
            },
          }
        );
      }
    });
  });

  return (
    <div className='footerCtaOuter'>
      <section
        className={`footerCta grid__parallax z-0 transition-all height__full-nav will-change-scroll h-[calc(100vh-180px)] duration-1000  ${data.classes} ${sectionPadding}`} id={data.id}>
        {data?.image?.mediaItemUrl && (data.image.mediaItemUrl) &&
          <div className="bg-img dark__overlay !h-[117%] relative fixedContent">
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
          <div className="">
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
            {data?.link?.linkText && data?.link?.linkUrl &&
              <div className="header-btnwrap relative inline-block w-auto h-auto bg-transparent">
                <Link className={data.link.class} href={data.link.linkUrl} target={data.link.target ? '_blank' : '_self'}>
                  {data.link.linkText}
                </Link>
              </div>
            }
          </div>
        </div>
      </section>
    </div>
  );
};
export default CtaWithText;
