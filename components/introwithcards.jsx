import React from 'react';
import Link from 'next/link';

const Introwithcards = ({ contentname }) => {
  const carddata = {
    threecard: [
      {
        heading: 'Lorem ipsum dolor sit amet consectetur. Aliquam ac semper massa luctus pellentesque orci.',
        para: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit.',
      },
      {
        heading: 'Lorem ipsum dolor sit amet consectetur. Aliquam ac semper massa luctus pellentesque orci.',
        para: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit.',
      },
      {
        heading: 'Lorem ipsum dolor sit amet consectetur. Aliquam ac semper massa luctus pellentesque orci.',
        para: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit.',
      },
    ],
  }

  const content = carddata[contentname] || [];

  return (
    <section className="introwithcards bg-gray">
      <div className="container">
        <h3 className="mb-[5rem]">Client news and outcomes</h3>
        <div className="wrapper w-colThreeWrapper flex flex-wrap ml-[-1.5rem] sm:ml-0 sm:w-full">
          {content.map((item, index) => (
            <div className="card group relative w-[calc(33.33%-3rem)] lg:w-[calc(50%-3rem)] sm:!w-full lg:mb-[2rem]  mx-[1.5rem] min-h-[45rem] lg:min-h-[34rem] bg-[#FFFFFF] pt-[5rem] pr-[4rem] pb-[11rem] pl-[5rem] lg:pt-[4rem] lg:pr-[4rem] lg:pl-[4rem] sm:mx-0 sm:!min-h-[30rem] sm:!px-[2rem]" key={index}>
              <Link className='redirect' href="/" target='_blank'>.</Link>
              <h4 className='mb-[1rem] sm:text-[20px]'>{item.heading}</h4>
              <p>{item.para}</p>
              <div className='absolute right-[5rem] bottom-[5rem] w-[3rem] h-[3rem] m-0'>
                <svg className='overflow-visible w-full h-full' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.5 16.25V23.75C22.5 24.413 22.2366 25.0489 21.7678 25.5178C21.2989 25.9866 20.663 26.25 20 26.25H6.25C5.58696 26.25 4.95107 25.9866 4.48223 25.5178C4.01339 25.0489 3.75 24.413 3.75 23.75V10C3.75 9.33696 4.01339 8.70107 4.48223 8.23223C4.95107 7.76339 5.58696 7.5 6.25 7.5H13.75" stroke="#FA198C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18.75 3.75H26.25V11.25" stroke="#FA198C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='group-hover:translate-x-[7px] group-hover:-translate-y-[7px] transition-transform duration-300' />
                  <path d="M12.5 17.5L26.25 3.75" stroke="#FA198C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='group-hover:translate-x-[7px] group-hover:-translate-y-[7px] transition-transform duration-300' />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Introwithcards;
