"use client";
import Link from "next/link";

const Introduction = ({ gridframe, content }) => {
  
  return (
    <section className={`intro default-padding gray-line ${gridframe === true ? 'grid__parallax dark' : ''} ${content?.content[0]?.borderTop === true ? `border-t border-darkGray ` : ''} `}>
      <div className="container">
        {content?.content?.map((item, index) => (
          <div key={index} className="wrapper w-full relative flex flex-wrap justify-between laptop:items-center">
            <div className={`contentwrapper pr-[10px] ${item.btntext ? 'max-w-[69rem]' : 'max-w-[110rem]'}`}>
              <h6 className="mb-[20px] font-normal subtitle">{item.subheading}</h6>
              <h3 className="font-bold">
                {item.heading} <span className="text-pink">{item.highlightedtext}</span> {item.normaltext}
              </h3>
            </div>
            {item.btntext ? <div className="btnwrapper mt-[60px] laptop:mt-0 lg:mt-[40px] sm:!mt-[30px]">
              <Link className="btn pink" href={item.buttonUrl}>{item.btntext}</Link>
            </div> : ''}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Introduction;
