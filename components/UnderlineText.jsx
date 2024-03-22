import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const UnderlineText = ({ colorClass, marker, size, underlineVisibiltiy }) => {
    const [isElementInView, setIsElementInView] = useState(false);
    const underlineRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            const element = underlineRef.current;
            if (element) {
                const elementRect = element.getBoundingClientRect();
                const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

                const threshold = 0.3; // Adjust as needed
                const isInView = elementRect.top <= viewportHeight / 2 + viewportHeight * threshold && elementRect.bottom >= viewportHeight / 2 - viewportHeight * threshold;
                setIsElementInView(isInView);
            }
        };

        // Check the initial position on load
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const getBackgroundImage = () => {
        // Determine the background image URL based on marker and colorClass
        if (marker === 3) {
            return `/black_marker_underline.png`;
        } else if (marker === 2) {
            return `/markers/second-marker-underline-${colorClass ? colorClass : 'black'}-${size ? size : 'large'}.png`;
        } else {
            return `/markers/marker-underline-${colorClass ? colorClass : 'black'}-${size ? size : 'large'}.png`;
        }
    };

    const dynamicStyle = {
        backgroundImage: `url(${getBackgroundImage()})`,
        width: isElementInView ? (size === 'small' ? '105%' : '102%') : '0',
    };
    // style={dynamicStyle}

    const imageDynamicStyle = {
        width: isElementInView ? '100%' : '0', // Adjust as needed
        height: '100%',
        objectFit: 'cover',

    };

    return (
        <span ref={underlineRef} id="underlineText" className={`${size === 'small' ? 'bottom-[10px] ' : ''} ${underlineVisibiltiy === false ? 'hidden' : ''} absolute bg-100 bottom-[-1rem] left-[-0.7rem] h-[17%] bg-no-repeat bg-left overflow-hidden transition-[width] duration-400 ${isElementInView ? 'w-[102%]' : 'w-0'} ${colorClass}`}>
            <Image src={getBackgroundImage()} width={1000} height={1000} alt="img" className='h-full w-full object-cover object-left' style={imageDynamicStyle} />
        </span>
    )
}

export default UnderlineText;
