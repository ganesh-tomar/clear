// Import necessary libraries
import React, { useState, useEffect, useRef } from 'react';

// Your functional component
const ScrollComponent = () => {
    // State to track scroll position
    const [scrollPosition, setScrollPosition] = useState(0);
    const sectionRef = useRef(null);
    // Update scroll position on scroll
    const handleScroll = () => {
        const rect = sectionRef.current.getBoundingClientRect();
        const isSectionVisible = rect.top <= window.innerHeight + 200 && rect.bottom >= 0;
        if (isSectionVisible) {
            setScrollPosition(window.innerHeight - rect.top);
        }
    };


    // Add event listener on component mount
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures it only runs on mount and unmount

    // Calculate right offset based on scroll position
    const rightOffset = `${scrollPosition}px`;
    const content = [
        {
            pre: 'Be inspired & ',
            post: 'Stay accountable',
            addon: '',
            colorClass: {
                pre: 'text-gray',
                post: 'text-black',
                addon: ''
            },
            moveFrom: 'right', // Specify the direction
        },
        {
            pre: 'Embrace family ',
            post: '& exceed',
            addon: '',
            colorClass: {
                pre: 'text-black',
                post: 'text-gray',
                addon: ''
            },

            moveFrom: 'left', // Specify the direction
        },
        {
            pre: 'Always collaborate & Be i ',
            post: 'Technology Integration',
            addon: '',
            colorClass: {
                pre: 'text-gray',
                post: 'text-black',
                addon: ''
            },

            moveFrom: 'right', // Specify the direction
        },
    ];
    // Marquee component as a functional component
    const Marquee = () => (
        <div ref={sectionRef} className='w-full'>
            {content.map((item, index) => (
                <h2
                    key={index}
                    className={`h1 sm:text-[45px]`}
                    style={{ position: 'relative', right: item.moveFrom === 'right' ? rightOffset : `calc(20% - ${rightOffset})` }}
                >
                    <span className={item.colorClass.pre}> {item.pre}</span> <span className={item.colorClass.post}> {item.post} </span> <span className={item.colorClass.addon}> {item.addon} </span>
                    &nbsp;
                    <span className={item.colorClass.pre}> {item.pre}</span> <span className={item.colorClass.post}> {item.post} </span> <span className={item.colorClass.addon}> {item.addon} </span>
                    &nbsp;
                    <span className={item.colorClass.pre}> {item.pre}</span> <span className={item.colorClass.post}> {item.post} </span> <span className={item.colorClass.addon}> {item.addon} </span>
                    &nbsp;
                    <span className={item.colorClass.pre}> {item.pre}</span> <span className={item.colorClass.post}> {item.post} </span> <span className={item.colorClass.addon}> {item.addon} </span>
                    &nbsp;
                    <span className={item.colorClass.pre}> {item.pre}</span> <span className={item.colorClass.post}> {item.post} </span> <span className={item.colorClass.addon}> {item.addon} </span>
                    &nbsp;
                    <span className={item.colorClass.pre}> {item.pre}</span> <span className={item.colorClass.post}> {item.post} </span> <span className={item.colorClass.addon}> {item.addon} </span>
                    &nbsp;
                    <span className={item.colorClass.pre}> {item.pre}</span> <span className={item.colorClass.post}> {item.post} </span> <span className={item.colorClass.addon}> {item.addon} </span>
                    &nbsp;
                    <span className={`${item.colorClass.pre} sm:hidden`}> {item.pre}</span> <span className={`${item.colorClass.pre} sm:hidden`}>  {item.post} </span> <span className={`${item.colorClass.addon}  sm:hidden`}> {item.addon} </span>
                </h2>
            ))}
        </div>
    )
    return <>
        <Marquee />
    </>
        ;
};

export default ScrollComponent;
