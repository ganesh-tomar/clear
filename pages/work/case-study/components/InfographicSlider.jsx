
import React, { useState, useEffect, useRef } from 'react';

const InfographicSlider = ({ content }) => {


    const [slideId, setSlideId] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setSlideId(1)
        }, 1000)
    })

    return (
        <section className="infographicslider bg-white overflow-hidden p-0" id="resources">
            {
                slideId == 1 ? <iframe src="/infographic-slider/sandhill_infographics.html" className='h-[900px] '></iframe> : ''
            }
            
        </section>
    );
};

export default InfographicSlider;
