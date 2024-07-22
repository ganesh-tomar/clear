import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const BrandedBlade = ({ content }) => {
    console.log(content);
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        // Set initial window width
        setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className={` brandedblade no-padding ${content?.bgColor} `} >
            <div className={`bg-img-two lg:relative sm:absolute`}>
                {content?.content.map((item, index) => (
                    item?.isVideo != true ?
                        item?.img && (
                            <Image key={index} src={item?.img} width={1920} height={1920} className='w-full h-full object-cover' alt={item?.imageAlt} />
                        )
                        :
                        <div key={index} className="bg-video relative">
                            {/* <video
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
                        </video> */}
                            <iframe src={item?.videoUrl} className='w-[1920px] h-[500px]' title="Clear video" name="iframe_video1"></iframe>
                            <a href={item?.videoUrl} target="iframe_video1"><img src={item?.videoThumnailImg} /></a>
                        </div>


                ))}
            </div>

            <div className="container">

            </div>
        </section>
    )
}

export default BrandedBlade;
