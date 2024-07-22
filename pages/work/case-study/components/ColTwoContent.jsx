import React from 'react'

export default function ColTwoContent({data}) {
    return (
        <div className={`wrapper w-colThreeWrapper relative  flex flex-wrap ${data?.pointerClass}`}>
            {
                data?.colTwo?.map((wrap, index) => (
                    <div key={index} className="area max-w-[69rem] lg:max-w-[100%] w-[calc(50%-3rem)] lg:w-[100%] lg:mb-[5rem] mx-[1.5rem] sm:mx-0 ">
                        <h5 className="text-pink mb-[3rem] font-normal">{wrap.subTitle}</h5>
                        <h4 className="mb-[2rem]">{wrap.title}</h4>
                        <p className=''>{wrap.description}</p>
                    </div>
                ))
            }
        </div>
    )
}
