import React, { useState } from 'react';
// import style from '../components/styles/accordionserviceoverview.module.css';
import { useEffect } from 'react';


const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  // useEffect(() => {
  //   setActiveIndex(0)
  // }, [])

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const accordionItems = [
    {
      title: 'Sed ut perspiciatis unde omnis iste natus error sit voluptate accusantium?',
      content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum.',
      contentagain: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis.',
    },
    {
      title: 'Corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?',
      content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum.',
      contentagain: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis.',
    },
    {
      title: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem?',
      content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum.',
      contentagain: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis.',
    },
  ];

  return (
    <section className="accordion" id="faqs">
      <div className="container">
        <div className="intro">
          <h3>FAQs</h3>
        </div>
        <div className="accordionWrap">
          {accordionItems.map((item, index) => (
            <div data-cursor-expand="true" data-cursor-icon={activeIndex === index ? "iconMinus" : "iconPlus"} key={index} className="accordion-item relative py-[5rem] border-b border-black sm:py-[3rem]" onClick={() => toggleAccordion(index)}>
              <div
                className={`accordion-header ${activeIndex === index ? 'active' : ''} cursor-pointer`}
              >
                <h4 className='font-medium'>{item.title}</h4>
              </div>
              <div
                className={`accordioncontent  max-w-[123.9rem] overflow-hidden transition-max-height duration-300 ease-in-out ${activeIndex === index ? 'max-h-[250rem] open pt-[2rem]' : 'max-h-0'
                  }`}
              >
                <p className='mb-[10px] '>{item.content}</p>
                <p className=''>{item.contentagain}</p>
                <div className="btnWrap mt-[3rem] sm:mt-[1rem]">
                  <a href="#" className="btn blackBtn">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accordion;

