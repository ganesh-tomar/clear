import React, { useState } from 'react';

const FaqAccordion = ({ item }) => {

  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="accordion" id="faqs">
      <div className="container">
        <div className="intro">
          <h3>FAQs</h3>
        </div>
        <div className="accordionWrap">
          {item.map((item, index) => (
            <div
              data-cursor-expand="true"
              data-cursor-rotate
              data-cursor-icon={activeIndex === index ? "iconMinus" : "iconPlus"}
              key={index}
              className="accordion-item relative py-[5rem] border-b border-black sm:py-[3rem]"
              onClick={() => toggleAccordion(index)}
            >
              <div
                className={`accordion-header ${activeIndex === index ? 'active' : ''} cursor-pointer`}
              >
                <h4 className='font-medium relative  xm:pr-[70px]'>{item?.title}</h4>
              </div>
              <div
                className={`accordioncontent max-w-[123.9rem] overflow-hidden transition-max-height duration-300 ease-in-out ${activeIndex === index ? 'max-h-[250rem] open pt-[2rem]' : 'max-h-0'}`}
              >
                <div className='mb-[10px]' dangerouslySetInnerHTML={{ __html: item?.body }}></div>
                {/* <div className="btnWrap mt-[3rem] sm:mt-[1rem]">
                  <a href="#" className="btn blackBtn">
                    Learn more
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;
