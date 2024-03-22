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
            <div className="card relative w-[calc(33.33%-3rem)] lg:w-[calc(50%-3rem)] sm:!w-full lg:mb-[2rem]  mx-[1.5rem] min-h-[45rem] lg:min-h-[34rem] bg-[#FFFFFF] pt-[5rem] pr-[4rem] pb-[11rem] pl-[5rem] lg:pt-[4rem] lg:pr-[4rem] lg:pl-[4rem] sm:mx-0 sm:!min-h-[30rem] sm:!px-[2rem]" key={index}>
              <Link className='redirect' href="/" target='_blank'>.</Link>
              <h4 className='mb-[1rem] sm:text-[20px]'>{item.heading}</h4>
              <p>{item.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Introwithcards;
