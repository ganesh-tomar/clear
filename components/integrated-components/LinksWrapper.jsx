import React from 'react';
import Link from 'next/link';

const LinksWrapper = (data) => {
console.log(data);

  return (
    <section className={`linkwrapper bg-gray ${data?.classes} ${data?.padding.join(' ')}`} >
      <div className="container">
        <div className="intro mb-[5rem]">

          {data?.heading && (<h3>{data?.heading}</h3>)}
          {data?.subheading && (<p className='mt-8'>{data?.subheading}</p>)}

        </div>
        <div className="wrapper w-colThreeWrapper flex flex-wrap ml-[-2.5rem] sm:ml-0 sm:w-full">
          <ul className="w-full flex flex-wrap md:[&>*:nth-child(24)]:hidden [&>*:nth-child(25)]:mb-0 [&>*:nth-child(26)]:mb-0 [&>*:nth-child(27)]:mb-0   sm:[&>*:nth-child(25)]:mb-[2.6rem] sm:[&>*:nth-child(26)]:mb-[2.6rem]">
            {data?.items.map((item, itemIndex) => (
              <>{item?.title !== null &&
              <li className="relative w-[calc(25%-5rem)]  tablet:w-[calc(33.33%-5rem)] laptopsmall:w-[calc(33.33%-5rem)] sm:w-[calc(100%-5rem)] phablet:w-[calc(50%-5rem)] mx-[2.5rem] mb-[2.6rem] sm:mx-0 lg:text-[18px] " key={itemIndex}>
                {item?.titleLink && (<Link className="redirect" href={item?.titleLink}>.</Link>)}
                {item?.title}
              </li>}</>
            ))}
            
          </ul>

        </div>
      </div>
    </section>
  );
};


export default LinksWrapper;
