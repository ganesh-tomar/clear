"use client";
import Link from "next/link";
import serviceDetail from "../pages/html/service-detail";

const Introduction = ({ introname, gridframe, borderTop }) => {
  const introdata = {
    intro: [
      {
        subheading: 'Case studies',
        heading: 'Nisl',
        highlightedtext: 'pulvinar',
        normaltext: 'consectet nec lipsum dolor',
        btntext: 'View all case studies',
      }
      // Add more intro items as needed
    ],
    introdetail: [
      {
        subheading: 'Related case studies',
        heading: 'Nisl',
        highlightedtext: 'pulvinar',
        normaltext: 'consectet nec lipsum dolor',
        btntext: 'View all case studies',
      },
    ],
    industryFocus: [
      {
        subheading: 'Our Industries',
        heading: 'Curabitur malesuada est tempor',
        highlightedtext: 'ullam corper',
        normaltext: 'maximus',
        underlineVisibiltiy: false,
      },
    ],
    serviceDetail: [
      {
        subheading: 'How We Work',
        heading: 'Lorem ipsum dolor sit amet consectetur. Risus arcu sit libero in.',
        highlightedtext: '',
        normaltext: '',
        underlineVisibiltiy: false,
      },
    ],
    partnerDetailA: [
      {
        subheading: 'Related case studies',
        heading: 'Nisl',
        highlightedtext: 'pulvinar',
        normaltext: 'consectet nec lipsum dolor',
        underlineVisibiltiy: false,
        btntext: 'View all case studies',
      },
    ],
  };

  const content = introdata[introname] || [];

  return (
    <section className={`intro default-padding ${gridframe === true ? 'grid__parallax dark' : ''} ${borderTop === true ? `border-t border-darkGray` : ''}`}>
      <div className="container">
        {content.map((item, index) => (
          <div key={index} className="wrapper w-full relative flex flex-wrap justify-between laptop:items-center">
            <div className={`contentwrapper pr-[10px] ${item.btntext ? 'max-w-[69rem]' : 'max-w-[110rem]'}`}>
              <h6 className="mb-[20px] font-normal subtitle">{item.subheading}</h6>
              <h3 className="font-bold">
                {item.heading} <span className="text-pink">{item.highlightedtext}</span> {item.normaltext}
              </h3>
            </div>
            {item.btntext ? <div className="btnwrapper mt-[60px] laptop:mt-0 lg:mt-[40px] sm:!mt-[30px]">
              <Link className="btn pink" href="/case-studies-overview">{item.btntext}</Link>
            </div> : ''}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Introduction;
