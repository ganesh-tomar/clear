import React from 'react';
import Image from 'next/image';

const BrandedBlade = ({ content, pd }) => {
  return (
    <section className={`brandedblade relative h-[100vh] lg:min-h-[500px] ${content?.sectionClass} ${content?.bgColor} ${pd}`} >
      <div className={`bg-img-two lg:relative sm:absolute h-[calc(100vh+40%)] top-[20%] lg:h-full lg:top-0 ${content?.sectionClass === 'revealParallaxBottom' ? 'lg:top-0' : content?.sectionClass === 'revealParallaxTop' ? 'lg:top-0' : 'lg:top-0'}`}>
        {content?.content.map((item, index) => (
          item?.isVideo != true ?
            item?.img && (
              <Image key={index} src={item?.img} width={1920} height={1920} className='w-full h-full elementToBeAnimate object-cover' alt={item?.imageAlt} />
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
