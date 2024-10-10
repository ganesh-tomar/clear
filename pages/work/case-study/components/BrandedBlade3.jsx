import React from 'react';
import Image from 'next/image';
import Style from '../../../../components/styles/brandedblade.module.css'

const BrandedBlade = ({ content, pd }) => {
  return (
    <section className={`brandedblade relative sm:!min-h-full ${content?.sectionClass === 'revealParallaxBottom' ? `${Style.brandedblade} h-[100vh] sm:!h-[50vh] sm:mt-[-40px] sm:z-[-1] tablet:h-[50vh] ipad:h-[80vh] ipadmid:h-[80vh] phablet:h-[70vh] phablet:mt-[-30px] laptopSmallMid:h-[70vh] desktopmid:h-[80vh] desktopMidUp:h-[90vh] largedesktop:h-full` : content?.sectionClass === 'revealParallaxTop' ? 'h-[100vh]' : 'h-full sm:z-[1]'} ${content?.sectionClass} ${content?.bgColor} ${pd} `} >
      <div className={`bg-img-two lg:relative sm:absolute h-[calc(100vh+40%)] top-[20%] tablet:h-full ipad:h-full phablet:!h-[calc(100vh+30%)] lg:top-0 ${content?.sectionClass === 'revealParallaxBottom' ? 'lg:top-0 ipad:top-[-20px] sm:!top-[-15px] ipad:relative' : content?.sectionClass === 'revealParallaxTop' ? 'lg:top-0' : content?.sectionClass === 'revealAnimation' ? 'sm:h-[calc(100%+30%)]' : 'lg:top-0'}`}>
        {content?.content.map((item, index) => (
          item?.isVideo != true ?
            item?.img && (
              <Image key={index} src={item?.img} width={1920} height={1920} className='w-full h-full elementToBeAnimate object-contain ipad:object-cover' alt={item?.imageAlt} />
            )
            : item?.isVimeo != true ?
              <div className="bg-video relative">
                <video
                  className="video-bg overlay w-full"
                  poster=""
                  autoPlay
                  loop
                  muted
                >
                  <source
                    src={item?.videoUrl}
                    type="video/mp4"
                  ></source>
                </video>   </div>
              : <div className="bg-video relative ">
                <iframe src={item?.videoUrl} className='' width="100%" height="700" title="Clear video" name="iframe_video1" allow=" autoplay; " ></iframe>

                <a href={item?.videoUrl} target="iframe_video1"><Image src={item?.videoThumnailImg} /></a>
              </div>
        ))}
      </div>
    </section>
  )
}

export default BrandedBlade;