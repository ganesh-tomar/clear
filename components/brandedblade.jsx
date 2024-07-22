import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Brandedblade = ({ contentName }) => {
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

    const contentData = {
        data: [
            {
                img: '/Branded blade.svg',
            }
        ],

        datatwo: [
            {
                img: '/build.png',
            }
        ],

        datathree: [
            {
                img: '/cohesity_large.png',
            }
        ],

        datafour: [
            {
                img: '/Clear-Summit.png',
            }
        ],
        careers: [ {
            img: '/section/BrandedBalde/collaboration-collage-n.png',
        }],
    }
    const content = contentData[contentName] || [];
    
    return (
        <section className={`${windowWidth <= 1024 ? 'height__full-nav' : 'height__full'} brandedblade no-padding`}  >
            <div className={`bg-img lg:relative sm:absolute`}>
                {content.map((item, index) => (
                    <Image key={index} src={item.img} width={1000} height={1000} className='w-full h-full object-cover' alt='image' />
                ))}
            </div>

            <div className="container">
               
            </div>
        </section>
    )
}

export default Brandedblade;
