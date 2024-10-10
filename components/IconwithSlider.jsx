import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const logos = [
  {
    image: "/logos/cisco.svg",
    alt: "Cisco"
},
{
    image: "/logos/mcafee.svg",
    alt: "McAfee"
},
{
    image: "/Stanford.png",
    alt: "Stanford"
},
{
    image: "/Tenable.png",
    alt: "Tenable"
},
{
    image: "/VMware.png",
    alt: "VMware"
},
{
    image: "/logos/cisco.svg",
    alt: "Cisco"
},
{
    image: "/logos/mcafee.svg",
    alt: "McAfee"
},
{
    image: "/Stanford.png",
    alt: "Stanford"
},
];

const settings = {
  autoplay: true,
  autoplaySpeed: 1,
  speed: 2000,
  dots: false,
  arrows: false,
  swipeToSlide: true,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  cssEase: 'linear',
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 595,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const LogoSlider = ({ asChild }) => {
  return (
    <>
      {asChild ? (
        <div className="w-full flex flex-col logoSlider liteGradient z-[3] overflow-hidden padding-top-md no-padding-bottom">
          <div>
            <Slider {...settings}>
              {logos.map((item, index) => (
                <div className="h-[8.4rem] max-w-[19.3rem]" key={index}>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={162}
                    height={100}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      ) : (
        <section className="logoSlider bg-black overflow-hidden sm:pt-0">
          <div>
            <Slider {...settings} className="custom-slider">
              {logos.map((item, index) => (
                <div className="h-[8.4rem] max-w-[19.3rem] logo-wrap" key={index}>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={162}
                    height={100}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </section>
      )}
    </>
  );
};

export default LogoSlider;
