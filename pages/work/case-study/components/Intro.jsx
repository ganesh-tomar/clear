import React from 'react';
import Link from 'next/link';

const Intro = ({
	eyeBrowText,
	heading,
	HighLightedText,
	PreNormalText,
	normalText,
	HighLightedTextColor,
	underline,
	underlineBlack,
	underlineVisibiltiy,
	rocketBg,
	hide,
	pointerClass,
	pt,
}) => {
		

	return (
		<div className="intro">
			<div className={`wrapper ${pt === true ? 'pt-[8rem] lg:pt-[4rem]' : ''}`}>
				<div className="intro__text max-w-[117rem]">
						<h5 className="eyebrow__text pr-[7rem] lg-up:text-[25px] lg:text-[20px]">{eyeBrowText}</h5>
				
							<h2 className={`${rocketBg} ${hide && 'hide'}`}>
								{PreNormalText}{' '}
								<span
									className={`relative ${underline === false ? '' : 'underline-container'
										} ${underlineBlack} ${HighLightedTextColor ? HighLightedTextColor : ''
										} } inline-block leading-1 pb-[0.8rem]`}
								>
									{HighLightedText} 
								</span>
								{normalText}
							</h2>
				</div>
			</div>
		</div>
	);
};

export default Intro;
