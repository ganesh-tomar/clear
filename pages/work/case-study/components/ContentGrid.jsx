
import React from 'react';

const ContentGrid=({content}) => {
    return(
       <section className={`contentGrid ${content?.content?.bgColor} ${content?.pd} lg:min-h-[unset]`}>
          <div className="container">
             <div className="wrapper w-full max-w-[687px] flex flex-wrap items-center">
                <h6 className="font-normal mb-[2rem] subtitle">{content?.content?.subTitle}</h6>
                 <h4 className={` lg:pr-[30px] ${content?.content === 'casestudiesdetailmini' || content?.content === 'insights'
							? 'h2'
							: ''
							} ${content?.content?.dark === true ? 'text-black' : 'text-white'}`}
					>
						{content?.content?.PreNormalText ? content?.content?.PreNormalText : ''}{' '}
						{content?.content?.HighLightedText ? (
							<span
								className={`${content?.content?.HighLightedTextColorClass ? content?.content?.HighLightedTextColorClass : ''
									} ${content?.content?.HighLightedTextColor ? content?.content?.HighLightedTextColor : ''} inline-block relative ${content?.content?.underline === true ? 'underline-container' : ''} `}
							>
								{' '}
								{content?.content?.HighLightedText} 
							</span> 
						) : (
							''
						)}{' '}
						{' '}{content?.content?.normalText}
					</h4>
                 <p className='font-normal mt-[20px] text-[16px]'>{content?.content?.description}</p>
             </div>
          </div>
       </section>
    )
}
export default ContentGrid;