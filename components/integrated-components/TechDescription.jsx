import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import style from '../../components/styles/techOverview.module.css'

export default function TechOverview(data) {
  return (
    <section
      className={`${style.techOverview} ${data.classes} techOverview border-darkGray border-t group ${data?.padding.join(' ')}`}>
      <div className="absolute top-0 left-0 w-full h-full opacity-0 after:content-[''] after:bg-black after:absolute after:opacity-50 after:w-full after:h-full after:top-0 after:left-0  group-hover:opacity-100 transition-opacity duration-200">
        {data?.bgImage?.sourceUrl &&
          <Image
            src={data?.bgImage?.sourceUrl}
            className="w-full h-full object-cover object-bottom sm:object-[70%]"
            width={10000}
            height={10000}
            alt={data?.bgImage?.altText}
          />
        }
      </div>
      <div className="container">
        <div className="w-colTwoWrapper relative flex z-[1] pt-[0.6rem] lg:flex-wrap lg:w-full">
          <div className="w-1/2 group-hover:text-white  lg:w-full">
            <div className="wrap relative flex flex-col justify-between h-full mb-[4.5rem] tablet:mb-[6rem] md:mb-[3rem] lg-up:mr-[10rem]">
              {data?.title && <h3>{data.title}</h3>}
              <div className="desc lg:mt-[4rem] lg-up:pb-[4.9rem]">
                {data?.subhead && <h4 className="lite">{data.subhead}</h4>}
                {data?.body && <div className="mt-[1rem]" dangerouslySetInnerHTML={{ __html: data.body }}></div>}
              </div>
            </div>
          </div>
          <div className="w-1/2 lg:w-full">
            <ul className={`pl-0 `}>
              {data?.linkItems && data?.linkItems.map((item, index) => (
                <li key={index} className={`${style.link} py-[4.9rem] first:pt-0 last:pb-0`}>
                  <Link href={item.link} className="tertiary-btn black  group-hover:text-white">
                    {item.linkText}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
