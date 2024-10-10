'use client'
import Image from 'next/image';

const Quoteblade = ({content}) => {
	
  return (
    <section className="quoteblade bg-black height__full">
      <div className="container">
        <div className="quote relative max-w-[129.1rem] lg:pl-[40px] sm:!pl-0">
          {/* <h4 className="medium-bold font-normal text-[white]">A major key to the success of this project was the incredible <span className='text-pink inline-block relative'>collaboration </span>  that took place amongst the Cohesity and Clear Digital teams. We set our sights on a common goal of launching a beautiful digital experience and maintained a stride which elevated the project towards prosperity</h4> */}
          <h3
				className={` lg:pr-0 sm:text-[20px] sm:leading-[1.3] sm:font-[400] ${content?.content === 'casestudiesdetailmini' || content?.content === 'insights'
					? 'h2'
					: ''
					} ${content?.dark === true ? 'text-blck' : 'text-white'}`}
			>
				{content?.PreNormalText ? content?.PreNormalText : ''}{' '}
				{content?.HighLightedText ? (
					<span
						className={`${content?.underLineClass ? content?.underLineClass : ''} ${content?.HighLightedTextColorClass ? content?.HighLightedTextColorClass : ''
							} ${content?.HighLightedTextColor ? content?.HighLightedTextColor : ''} inline relative ${content?.underline === true ? 'underline-container' : ''} `}
					>
						{' '}
						{content?.HighLightedText}
					</span>
				) : (
					''
				)}
				{content?.postText ? content?.postText : ''}{content?.normalText}
			</h3>
          <span className="block text-[1.6rem] xl-up:text-[1.6rem] font-normal text-pink mt-[3rem] md:mt-[2.5rem]"><strong>{content?.quoteName}</strong> {content?.position}</span>
        </div>
      </div>
    </section>
  )
}
export default Quoteblade;