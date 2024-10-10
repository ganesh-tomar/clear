import React from 'react';
import Link from 'next/link';
import LogoSlider from './LogoSlider';

const Intro = ({
	eyeBrowText,
	heading,
	highLightedText,
	normaltext,
	subText,
	post,
	titleMaxW,
	underlineClass,
	underlineVisibiltiy,
	rocketBg,
	pointer,
	hide,
	arrow,
	doodle,
	doodleClass,
	btnText,
	btnUrl,
	pt,
	Logo,
}) => {

	return (
		<div className="intro">
			<div className={`wrapper ${pt === true ? 'pt-[8rem] lg:pt-[4rem]' : ''}`}>
				<div className="intro__text max-w-[117rem]">
					{eyeBrowText ? (
						<h5 className="eyebrow__text pr-[7rem]">{eyeBrowText}</h5>
					) : (
						''
					)}
					{hide ? (
						<>
							<h2 className={`${rocketBg} ${hide && 'hide'}`}>
								{heading}{' '}
								<span
									className={`relative ${underlineVisibiltiy === false ? '' : 'underline-container '
										} ${underlineClass ? underlineClass : ''
										} inline-block leading-1 pb-[0.8rem] text-pink`}
								>
									{highLightedText}
								</span>
								{normaltext}.
							</h2>
							<p className={`${pointer} ${hide && 'hide'}`}></p>
							{btnText ? (
								<div className="btn-wrap mt-[5rem]">
									<Link className="pink btn" href={btnUrl}>
										{btnText}
									</Link>
								</div>
							) : (
								''
							)}
						</>
					) : (
						<>
							<h2
								className={`${rocketBg} ${rocketBg ? 'tablet:pr-[1rem]' : ''} ${doodle === true ? '' : ''} ${titleMaxW ? titleMaxW : ''
									} ${doodle === true ? 'pointingDoodle' : ''} ${doodleClass ? doodleClass : ''
									}`}
							>
								{heading}{' '}
								<span
									className={`relative ${underlineVisibiltiy === false ? '' : 'underline-container '
										} ${underlineClass ? underlineClass : ''
										}  inline-block leading-1 pb-[0.8rem] text-pink`}
								>
									{highLightedText}
								</span>
								{post}
								{normaltext}
							</h2>
							<p
								className={` relative mt-[5rem] lg:mt-[3rem]  subtitle !leading-[1.5] ${arrow === true ? 'curved_arrow' : ''
									}`}
							>
								{' '}
								{subText}
							</p>

							{btnText ? (
								<div className="btn-wrap mt-[5rem]">
									<Link className="pink btn" href={btnUrl}>
										{btnText}
									</Link>
								</div>
							) : (
								''
							)}
						</>
					)}
				</div>
				{
					Logo === true ? <LogoSlider contentname={'award'} asChild={true} showGradient={false} /> : ''
				}
			</div>
		</div>
	);
};

export default Intro;
