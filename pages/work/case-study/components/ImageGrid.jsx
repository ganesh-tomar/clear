import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import style from '../../../../components/styles/imageGrid.module.css'

export default function ImageGrid({ content }) {
  const card = content?.content;
  const hasRightFullHeight = card?.some(item => item.rightFullHeight);

  const getItemClass = (index, length, leftFullHeight, rightFullHeight) => {
    if (length === 2) {
      return 'col-span-1';
    }
    if (length === 3 && leftFullHeight) {
      return index === 0 ? 'row-span-2 col-span-1 sm:row-span-1 xm-up:max-h-[1090px]' : 'row-span-1 col-span-2 sm:col-span-1 ';
    }
    if (length === 3 && rightFullHeight) {
      return index === 2 ? 'row-span-2 col-span-1 sm:row-span-1 a xm-up:max-h-[1090px]' : 'row-span-1 col-span-2 sm:col-span-1 sm:col-span-1';
    }
    return 'col-span-1 sm:w-full xm-up:h-[545px]';
  };

  return (
    <section className={`imageGrid p-0 ${content?.sectionClass} ${content?.sectionClass === 'revealParallaxTop' || content?.sectionClass === 'revealParallaxBottom' ? `overflow-hidden phablet:h-[35vh] phablet:mt-[-30px] tablet:h-[40vh] tablet:mt-[-30px] laptopsmall:h-[34vh] sm:!h-full ${style.imageGrid}` : 'overflow-visible ipad:overflow-hidden ipadmid:overflow-hidden ' } ${card?.length == 3 ? 'sm:!h-full' : ''}`} >
      <div className={`sm-up:grid sm:block grid-cols-2 md:grid-cols-2 lg:grid-cols-2 sm:!grid-cols-1 gap-0 ${content?.sectionClass === 'revealParallaxBottom' ? 'tablet:top-0 tablet:relative elementToBeAnimate' : ''} ${hasRightFullHeight ? '' : ''}`} >
        {card?.map((item, index) => (
          <div className={classNames(`grid-item `, getItemClass(index, card?.length, item?.leftFullHeight, item?.rightFullHeight))} key={index}>
            {
              item?.bgimg && (
                <div className={`imgWrap ${item.bgColor} ${content?.sectionClass === 'revealParallaxBottom' ? 'phablet:h-[calc(100%+30%)]' : ''}`}>
                  <Image src={item?.bgimg} alt={item?.alt || 'Image'} width={1000} height={1920} layout="responsive" className={`!h-full `} />
                </div>
              )}
            {item?.isVideo == true ?
              <div className="bg-video w-full" >
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
                <div className={`imgWrap z-[1] relative top-[25%] right-[-120px] mt-0 ${item.bgColor}`}>
                  <Image src={item?.videoImg} alt={item?.videImageAlt || 'Image'} width={1920} height={1920} layout="responsive h-full" />
                </div>
              </div> : ''
            }
          </div>
        ))}
        {
         ( content?.animationImage || content?.animationFramImg) && (
            <div className="outOfSectionImage absolute top-[-200px] right-[30px] max-w-[500px] max-h-[460px] w-full h-full tablet:max-w-[400px] xm:max-w-[360px] tablet:max-h-[300px]  sm:hidden aos-init" data-aos="fade-left" data-aos-delay="500">
              {
                content?.animationImage && (
                  <Image src={content?.animationImage} width={1920} height={1920} alt='' className='w-full h-full object-contain' />
                )
              }
              {
                content?.animationFramImg && (
                  <>
                    <Image src={content?.animationFramImg} width={1920} height={1920} alt='' className='w-full h-full object-contain' />
                    <div className="videoWrap absolute top-[105px] right-[67px] w-full h-full max-w-[365px] max-h-[235px] laptopsmall:max-w-[262px] laptopsmall:max-h-[172px] laptopsmall:top-[138px] laptopsmall:right-[49px] tablet:max-w-[292px] tablet:max-h-[190px] tablet:right-[55px] tablet:top-[50px] md:max-w-[262px] md:max-h-[172px] md:right-[49px] md:top-[140px] ">

                      <video loading="lazy" autoPlay muted loop playsInline preload="none" className={` object-cover absolute top-[0] left-[0] bottom-[0] w-[100%] h-[100%]`}>
                        <source src={content?.animationVideo} type="video/mp4" />
                      </video>
                    </div>
                  </>
                )
              }
            </div>
          )
        }
      </div>
    </section>
  );
}
