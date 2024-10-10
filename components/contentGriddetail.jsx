'use client';
import Intro from './Intro';
import Counter from './Counter';
import Image from 'next/image';
import Techlogo from './TechnologyLogos'
import Biglogos from './Biglogos';
import ColTwoContent from './ColTwoContent';

const ContentGriddetail = ({ props, introname, contentName, techLogo, pb, min, colTwo, biglogo }) => {

	const wrapperdata = {
		casestudy: [
			{
				eyeBrowText: 'Overview',
				highLightedText: 'Humanizing',
				normaltext: '. Elevating. Updating',
				underlineClass: 'black',
				rocketBg: 'rocketBg',
				pointer: 'pointer',
				hide: true
			},
		],
		clientindex: [
			{
				eyeBrowText: 'Customer impact',
				heading: 'Curabitur malesuada est tempor  ',
				highLightedText: 'ullamcorper',
				normaltext: ' maximus ',
				underlineClass: 'black',
				subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',

			},
		],
		driving: [
			{
				eyeBrowText: 'Expertise in B2B design',
				heading: 'Donec hendrerit tempor arcu id',
				highLightedText: 'laoreet',
				normaltext: ' est ullamcorper at',
				underlineVisibiltiy: false,
				subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',

			},
		],
		careers: [
			{
				eyeBrowText: 'Our values',
				heading: 'The way we do things',
				highLightedText: 'rocks',
				underlineClass: 'black',
				subText: 'Our approach to work has some edge and a whole lot of heart. It’s about always wanting to be better, to do great work for our clients, and build real, meaningful relationships. Our values aren’t complicated or fussy. They’re just who we are and how we show up.',
			}

		]
	};

	const contentdata = {
		datavalue: [
			{
				highLightedText: "Modernizing",
				heading: " the logo & palette, while engaging with illustrations",
				para: "In updating the Cohesity logo, the Clear Digital team focused on strengthening its most iconic aspects. The green ‘S’ was an impactful element that became even more stylized with the refresh. By sharpening the angles, making the interlocking ‘C’ design more clearly interpreted, and then echoing these shapes throughout other parts of the Cohesity look and feel, this evolution created a more ownable visual approach. A refreshed palette was a vital part of creating a more approachable and welcoming brand experience.",
			}
		],
		dataval: [
			{
				normaltext: 'A',
				highLightedText: "design-driven",
				heading: "experience",
				para: "In most responsive site builds, the majority of design attention happens in the desktop version, while adaptations for smaller devices typically happen during programming. With the increasing importance of mobile experiences for the company’s users, Cohesity wanted to make sure the mobile version was fully designed to ensure cross-platform consistency and optimal impact.",
			}
		],
		driving: [
			{
				headpre: '2',
				headmain: 'M',
				pre: 'Lorem',
				highLightedText: 'ipsum',
				post: 'dolor',
				para: 'Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet',
			},
			{
				headpre: '90',
				headmain: '%',
				pre: 'Lorem',
				highLightedText: 'ipsum',
				post: 'dolor',
				para: 'Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet',
			},
			{
				headpre: '$',
				headmain: '1.5',
				headpost: 'M',
				pre: 'Lorem',
				highLightedText: 'ipsum',
				post: 'dolor',
				para: 'Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet',
			},
		],
		count: [
			{
				logo: '/Cisco_Logo.svg',
				headpre: '2',
				headmain: 'M',
				pre: 'Lorem',
				highLightedText: 'ipsum',
				post: 'dolor',
				para: 'Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet',
			},
			{
				logo: '/intel-logo-2020.svg',
				headpre: '90',
				headmain: '%',
				pre: 'Lorem',
				highLightedText: 'ipsum',
				post: 'dolor',
				para: 'Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet',
			},
			{
				logo: '/Citrix-White-Logo.svg',
				headpre: '$',
				headmain: '1.5',
				headpost: 'M',
				pre: 'Lorem',
				highLightedText: 'ipsum',
				post: 'dolor',
				para: 'Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet',
			},
		],
	}




	// const content = contentName === "casestudy" ? '' || [] : wrapperdata.data || [];
	// const content = contentdata[contentName] || [];
	const counter = contentdata[contentName] || [];
	const introData = wrapperdata[introname] || [];
	// const logos = wrapperdata.logos || [];
	const contents = contentdata[props] || [];
	// const introData = introname === "clientindex" ? wrapperdata.clientindex || [] : wrapperdata.intro || [];


	return (
		<section className={`ContentGriddetail ${props ? 'bg-[black]' : 'grid__parallax dark  height__full'} ${pb === 'none' ? 'pb-0' : ''} ${min === 'full' ? '!min-h-[100%]' : ''}`}>
			<div className="container">

				{props ? (
					<div className="wrapper w-full relative flex flex-wrap ml-[-15px]">
						{contents.map((wrap, index) => (
							<div key={index} className="area max-w-[69rem] mx-[15px] laptop:max-w-[100rem] lg:max-w-[100rem]">
								<h4 className="mb-[2rem] text-[white]">
									{wrap.normaltext} {` `}
									<span className='text-pink inline-block relative'>{wrap.highLightedText} </span>
									{` `}  {wrap.heading}</h4>
								<p className='text-[white] '>{wrap.para}</p>
							</div>
						))}
					</div>
				) : (
					<>
						{introData.map((intro, index) => (
							<Intro key={index} {...intro} />
						))}
						<div className="wrapper w-full relative mt-[5rem] sm:mt-[3rem] flex flex-wrap ml-[-1rem] sm:ml-0">
							{colTwo === true ? <ColTwoContent contentName="casestudy" /> : ''}

							{counter.map((wrap, index) => (
								<div
									key={index}
									className="contentGrid__item w-full lg-up:w-[calc(33.33%-2rem)] tablet:w-[calc(50%-2rem)] mx-[1rem] lg:mb-[3rem] sm:mx-0"
								>
									{wrap.logo ? <div key={index} className="flex items-center max-w-[9.5rem] w-full h-full max-h-[5rem] mb-[1rem]">
										<Image
											src={wrap.logo}
											width={300}
											height={300}
											className="w-auto h-auto object-contain"
											alt=""
										/>
									</div> : ''}

									<h2 className='tiltCross large mb-[1rem] sm:!text-[90px] relative inline-block'>{wrap.headpre}{wrap.headmain}{wrap.headpost}</h2>
									<h4 className='relative font-medium mb-[1rem]'>{wrap.pre} <span className='text-pink'>{wrap.highLightedText}</span> {wrap.post}  </h4>
									<p>{wrap.para}</p>
								</div>
							))}
						</div>
						{techLogo === true ? <Techlogo /> : ''}
						{biglogo === true ? <Biglogos /> : ''}
						{ }
					</>
				)}
			</div>
		</section>
	);
};
export default ContentGriddetail;