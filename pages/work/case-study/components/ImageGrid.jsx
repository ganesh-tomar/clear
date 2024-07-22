import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

export default function ImageGrid({ content }) {
  const card = content?.content;
  const hasRightFullHeight = card?.some(item => item.rightFullHeight);

  const getItemClass = (index, length, leftFullHeight, rightFullHeight) => {
    if (length === 2) {
      return 'col-span-1';
    } 
    if (length === 3 && leftFullHeight) {
      return index === 0 ? 'row-span-2 col-span-1 sm:row-span-1 ' : 'row-span-1 col-span-2 sm:col-span-1';
    }
    if (length === 3 && rightFullHeight) {
      return index === 2 ? 'row-span-2 col-span-1 sm:row-span-1 a' : 'row-span-1 col-span-2 sm:col-span-1 sm:col-span-1';
    }
    return 'col-span-1 sm:w-full';
  };

  return (
    <section className='imageGrid p-0'>
      <div className={`sm-up:grid sm:block grid-cols-2 md:grid-cols-2 lg:grid-cols-2 sm:!grid-cols-1 gap-0 ${hasRightFullHeight ? '' : ''}`}>
        {card?.map((item, index) => (
          <div className={classNames(`grid-item `, getItemClass(index, card?.length, item?.leftFullHeight, item?.rightFullHeight))} key={index}>
            {
              item?.bgimg && (
                <div className="imgWrap">
                  <Image src={item?.bgimg} alt={item?.alt || 'Image'} width={1920} height={1920} layout="responsive" />
                </div>
              ) } 
              { item?.isVideo == true ? 
                <div className="bg-video">
                    <video
                        className="video-bg overlay"
                        poster=""
                        autoPlay
                        loop
                        muted
                    >
                        <source
                            src={item?.videoUrl}
                            type="video/mp4"
                        ></source>
                    </video>
                   
                </div>

              : ''}
            {
              item?.bgVideo == true ? <div className="bg-video h-full">
              <video loading="lazy" autoPlay muted loop playsInline preload="none" className={` object-cover absolute top-[0] left-[0] bottom-[0] w-[100%] h-[100%]`}>
                <source src={item?.bgVideoUrl} type="video/mp4" />
              </video>
              <div className="imgWrap z-[1] relative top-[25%] right-[-120px] mt-0">
                <Image src={item?.videoImg} alt={item?.videImageAlt || 'Image'} width={1920} height={1920} layout="responsive" />
              </div>
          </div> : ''
            }
          </div>
        ))}
      </div>
    </section>
  );
}
