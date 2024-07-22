"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FooterCta = ({ content }) => {
  return (
    <section className={`footerCta grid__parallax height__full-nav `}>
      <div className="bg-img dark__overlay">
        <Image
          src={content?.bgImg}
          alt={content?.alt}
          height={2000}
          width={2000}
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
