import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FooterCta = ({data}) => {
  return (
    <section className={`footerCta grid__parallax height__full-nav padding-small `}>
      <div className="bg-img dark__overlay">
       {data?.image?.sourceUrl &&
        <Image
          src={data.image.sourceUrl}
          alt={data.image.altText}
          height={2000}
          width={2000}
          className="w-full h-full object-cover"
        /> 
       }

      </div>
      <div className="container">
          <div className="wrapper w-full laptop:w-[calc(100%+3rem)] relative flex flex-wrap items-center">
            <div className="textwrapper max-w-[69rem] lg:max-w-[100%]  w-colTwohalfwidth  lg:w-[100%] lg:mb-[30px]">
              {data?.subtitle &&  <h6 className='text-white  mb-[20px] subtitle font-normal'>{data.subtitle}</h6>}
              {data?.title && <h2 className='h1 text-white mb-[30px] font-weight-[700]'>{data.title}</h2>}
              {data?.bodyWithoutEditor && <p className="text-[white] medium-bold">{data.bodyWithoutEditor}.</p>}

              {data?.button?.length > 0 && (
              <div className='button-wrap mt-4'>
                {data.button.map((btn, index) => (
                  <Link
                    key={index}
                    className={`btn ${btn.class} mr-2`}
                    href={btn.linkUrl}
                    target={btn.target ? '_blank' : '_self'}
                  >
                    {btn.linkText}
                  </Link>
                ))}
              </div>
            )}
            </div>

            <div className="formwrapper max-w-[69rem] w-colTwohalfwidth py-[5rem] px-[6rem] laptop:max-w-[100%] lg:max-w-[100%] lg-up:ml-[3rem] lg:w-[100%] lg:px-[4rem] lg:py-[4.5rem] bg-[black]">
              <p className='mb-[3rem] max-w-[45rem] text-[white]'>Complete this quick form and we will get back to you within 24 hours.</p>
              <form action="">
                <div className="row w-full flex flex-wrap">
                  <div className="wrapper w-full flex sm:flex-wrap">
                    <div className="area w-colTwohalfwidth mb-[3rem] sm:mb-[1rem] sm:w-[100%]">
                      <label htmlFor="" className='text-[14px] xxl-up:text-[1.4rem] text-white font-normal mb-[10px] block'>First name</label>
                      <input type="text" className='bg-black p-[2rem] sm:p-[1rem] w-full h-[7rem] border-2 border-solid border-white text-white laptop:h-[60px] lg:h-[50px]' />
                    </div>
                    <div className="area w-colTwohalfwidth ml-[3rem] mb-[3rem] sm:mb-[1rem] sm:w-[100%] sm:ml-[0]">
                      <label htmlFor="" className='text-[14px] xxl-up:text-[1.4rem] text-white font-normal mb-[10px] block'>Last name</label>
                      <input type="text" className='bg-black p-[2rem] sm:p-[1rem] w-full h-[7rem] border-2 border-solid border-white text-white laptop:h-[60px] lg:h-[50px]' />
                    </div>
                  </div>
                  <div className="area w-[100%] mb-[3rem] sm:mb-[1rem]">
                    <label htmlFor="" className='text-[14px] xxl-up:text-[1.4rem] text-white font-normal mb-[10px] block'>Business email</label>
                    <input type="email" className='bg-black p-[2rem] sm:p-[1rem] w-full h-[7rem] border-2 border-solid border-white text-white laptop:h-[60px] lg:h-[50px]' />
                  </div>
                  <div className="area w-[100%] mb-[3rem] sm:mb-[1rem]">
                    <label htmlFor="" className='text-[14px] xxl-up:text-[1.4rem] text-white font-normal mb-[10px] block'>Company</label>
                    <input type="text" className='bg-black p-[2rem] sm:p-[1rem] w-full h-[7rem] border-2 border-solid border-white text-white laptop:h-[60px] lg:h-[50px]' />
                  </div>
                  <div className="area w-[100%] mb-[3rem] sm:mb-[1rem]">
                    <label htmlFor="" className='text-[14px] xxl-up:text-[1.4rem] text-white font-normal mb-[10px] block'>Message</label>
                    <textarea name="" id="" className='bg-black p-[2rem] sm:p-[1rem] w-full !h-[15.7rem] border-2 border-solid border-white text-white laptop:h-[160px] lg:h-[120px]'></textarea>
                  </div>
                  <div className="btn-wrap w-full">
                    <button type='submit' className='btn pink white-bordered'>Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
       





      </div>
    </section>
  );
};
export default FooterCta;
