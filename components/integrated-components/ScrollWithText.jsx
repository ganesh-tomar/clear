'use client';
import React, { useState, useEffect, useRef } from 'react';

const ScrollWithText = ({ data }) => {
  // State to track scroll position
  const [scrollPosition, setScrollPosition] = useState(0);
  const sectionRef = useRef(null);

  // Update scroll position on scroll
  const handleScroll = () => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const isSectionVisible = rect.top <= window.innerHeight + 200 && rect.bottom >= 0;
      if (isSectionVisible) {
        setScrollPosition(window.innerHeight - rect.top);
      }
    }
  };

  useEffect(() => {
    handleScroll(); // Initialize scroll position
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate right offset based on scroll position
  const rightOffset = `${scrollPosition}px`;

  // Debugging output to ensure data structure is correct
  console.log('Data prop:', data);

  return (
    <section className="scrolltxt grid__parallax dark no-padding">
      <div className="bg-text-lines relative z-[1] w-[2200vw] sm:w-[2600vw] pb-[3rem] xxs:w-[2860vw]">
        <div ref={sectionRef} className="w-full">
          {data ? (
            data.contentitem ? (
              <>
                {data.contentitem.textItem1 && (
                  <h2
                    key="textItem1"
                    className="h1 sm:text-[45px]"
                    style={{ 
                      position: 'relative', 
                      right: data.contentitem.textDirection === 'right' ? rightOffset : `calc(20% - ${rightOffset})` 
                    }}
                  >
                    <span className={`${data.contentitem.textItem1.colorClass} sm:hidden`}>
                      {data.contentitem.textItem1.text1}
                    </span>
                  </h2>
                )}
                {data.contentitem.textItem2 && (
                  <h2
                    key="textItem2"
                    className="h1 sm:text-[45px]"
                    style={{ 
                      position: 'relative', 
                      right: data.contentitem.textDirection === 'right' ? rightOffset : `calc(20% - ${rightOffset})` 
                    }}
                  >
                    <span className={`${data.contentitem.textItem2.colorClass} sm:hidden`}>
                      {data.contentitem.textItem2.text2}
                    </span>
                  </h2>
                )}
                {data.contentitem.textItem3 && (
                  <h2
                    key="textItem3"
                    className="h1 sm:text-[45px]"
                    style={{ 
                      position: 'relative', 
                      right: data.contentitem.textDirection === 'right' ? rightOffset : `calc(20% - ${rightOffset})` 
                    }}
                  >
                    <span className={`${data.contentitem.textItem3.colorClass} sm:hidden`}>
                      {data.contentitem.textItem3.text3}
                    </span>
                  </h2>
                )}
              </>
            ) : (
              <p>No content available here</p>
            )
          ) : (
            <p>Data prop is missing</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ScrollWithText;
