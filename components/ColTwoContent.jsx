import React from 'react'

export default function ColTwoContent(contentName) {
    
    const contentdata = {
        casestudy: [
            {
                subheading: 'Challenge',
                heading:
                    'Integer facilisis libero risus, non sollicitudin ipsum tempor ornare.',
                para: 'Sed ligula massa, finibus et ultricies vel, molestie ut sem. Proin sollicitudin vel quam eu posuere. Maecenas laoreet congue ultrices. Donec est nisi, convallis eget euismod eu, commodo ut erat. Donec gravida sollicitudin ligula, sit amet dictum quam aliquet at. Proin vel orci eleifend, tempus nunc vel, ornare quam.',
            },
            {
                subheading: 'Approach',
                heading: 'Nulla pellentesque magna a enim maximus, sed viverra eros.',
                para: 'Donec gravida sollicitudin ligula, sit amet dictum quam aliquet at. Proin vel orci eleifend, tempus nunc vel, ornare quam. Mauris non sem imperdiet, ultricies velit ac, cursus justo. Vestibulum eget tortor a mauris pellentesq sollicitudin vitae dignissim odio.',
            },
        ],
    };


    const content = contentdata[contentName.contentName] || [];
   
    return (
        <div className="wrapper w-colThreeWrapper relative  flex flex-wrap ">
            {
                content.map((wrap, index) => (
                    <div key={index} className="area max-w-[69rem] lg:max-w-[100%] w-[calc(50%-3rem)] lg:w-[100%] lg:mb-[5rem] mx-[1.5rem] sm:mx-0 ">
                        <h5 className="text-pink mb-[3rem] font-normal">{wrap.subheading}</h5>
                        <h4 className="mb-[2rem]">{wrap.heading}</h4>
                        <p className=''>{wrap.para}</p>
                    </div>
                ))
            }
        </div>
    )
}
