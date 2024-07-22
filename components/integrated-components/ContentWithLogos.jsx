'use client';
import Link from 'next/link';
import Image from 'next/image';

const ContentWithLogos = ({ content, images }) => {
  return (
    <section className="logocontentgrid bg-black">
      <div className="container">
        <div className="wrapper w-full relative flex flex-wrap">
          <div className="content-wrapper relative pr-[6.5rem] w-[45%] lg:w-[100%] lg:pr-[0] lg:mb-[5rem]">
            <h6 className="subtitle mb-[2rem]">{content?.blurb}</h6>
            <h3 className="mb-[3rem] pr-[9rem] whitePointingArrow">
              {content?.title}
            </h3>
            <div className="mb-[3rem]" dangerouslySetInnerHTML={{ __html: content?.body }}></div>
            <div className="btn-wrap">
              <Link
                className={`btn pink white-bordered ${content?.link.class}`}
                href={content?.link.linkUrl}
                target={content?.link.target}
              >
                {content?.link.linkText}
              </Link>
            </div>
          </div>
          <div className="image-wrapper w-[calc(55%-8.7rem)] ml-[8.7rem] lg:w-[100%] lg:ml-[0]">
            <div className="w-[calc(100%+3rem)] ml-[-1.5rem] flex flex-wrap">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="area-wrap h-[33rem] border greyborder w-[calc(50%-3rem)] flex flex-wrap justify-center items-center mx-[1.5rem] mb-[3rem] sm:w-[100%]"
                >
                  <div className="img-wrap max-w-[22rem] max-h-[10.3rem]">
                    <Image
                      src={img.image.sourceUrl}
                      width={1000}
                      height={1000}
                      className="w-full h-full object-contain"
                      alt={img.image.altText}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentWithLogos;
