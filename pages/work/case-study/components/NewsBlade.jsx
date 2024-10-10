
import React from 'react';

const Newsblade=({content}) => {
    return(
       <section className="newsblade height__full bg-gray lg:min-h-[unset]">
          <div className="container">
             <div className="wrapper w-full max-w-[100rem] flex flex-wrap items-center md:block">
                <h6 className="font-normal mb-[2rem] subtitle">{content?.content?.subTitle}</h6>
                 {/* <h2 className="h1 mb-[3rem]"><span className="text-pink inline-block relative underline-container black">$250 million </span> in Series E funding</h2> */}
                 {content?.HighLightedText}
                 <h1
						className={` lg:pr-[30px] ${content?.content === 'casestudiesdetailmini' || content?.content === 'insights'
							? 'h2'
							: ''
							} ${content?.content?.dark === true ? 'text-black' : 'text-white'}`}
					>
						{content?.content?.PreNormalText ? content?.content?.PreNormalText : ''}{' '}
						{content?.content?.HighLightedText ? (
							<span
								className={`${content?.content?.HighLightedTextColorClass ? content?.content?.HighLightedTextColorClass : ''
									} ${content?.content?.HighLightedTextColor ? content?.content?.HighLightedTextColor : ''} inline-block relative ${content?.content?.underline === true ? 'underline-container' : ''} ${content?.content?.underLineClass}`}
							>
								{' '}
								{content?.content?.HighLightedText}
							</span>
						) : (
							''
						)}{' '}
						{content?.content?.normalText}
					</h1>
                <p className={`font-normal text-[20px] mt-[20px] ${content?.content?.textSize}`}>{content?.content?.description}</p>
             </div>
          </div>
       </section>
    )
}
export default Newsblade;