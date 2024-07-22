import React from 'react';
import Link from 'next/link';

const Intro = ({ id, titleClass, title, padding, eyebrow, classes, blurb, isCurvedArrow, link }) => {
console.log(padding);
  if (!title && !blurb) {
    return null; // Render nothing if neither title nor blurb is provided
  }
  // ${padding ? 'pt-[8rem] lg:pt-[4rem]' : ''}
  return (
    <section className={`intro dark ${classes || ''} ${padding.join(' ')}`} id={id}>
      <div className="container">
        <div className={`wrapper`}>
          <div className="intro__text max-w-[117rem]">
            {eyebrow && (
              <p>{eyebrow}</p>
            )}
            <div className="wrapper w-full">
              {title && (
                <h2 className={titleClass} dangerouslySetInnerHTML={{ __html: title }} />
              )}
              {blurb && (
                <p className={`relative mt-[5rem] lg:mt-[3rem] subtitle !leading-[1.5] ${isCurvedArrow ? 'curved_arrow' : ''}`}>
                  {blurb}
                </p>
              )}
              {link && link.linkText && (
                <div className="btn-wrap mt-[5rem]">
                  <Link className={`pink btn ${link.class || ''}`} href={link.linkUrl} target={link.target || '_self'}>
                    {link.linkText}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
