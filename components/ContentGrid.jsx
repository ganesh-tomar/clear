import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Intro from './Intro';
import LogoSlider from './LogoSlider';

const ContentGrid = ({ introName, cards, fourcards, pb, hFull, min, defaultpadding, Logo }) => {

	const introContent = {
		home: [
			{
				eyeBrowText: '20+ years of success.',
				heading:
					'We deliver results-driven digital experiences that get you to what’s',
				highLightedText: 'next',
				post: '.',
				underLineDark: 'dark',
				underlineClass: 'blackSmall',
				rocketBg: 'rocketBg',
				arrow: true,
				pointer: 'pointer',
				subText:
					'Clear Digital is a Silicon Valley-based website design agency that helps you build and accelerate your web, brand, and digital marketing by providing expert, strategic, and data-informed solutions that deliver results.',
			},
		],
		introdesign: [
			{
				eyeBrowText: 'Driving B2B results',
				heading: 'Curabitur malesuada est tempor',
				highLightedText: ' ullamcorper',
				underlineVisibiltiy: true,
				underlineClass: 'black',
				normaltext: '  maximus',
				pointer: 'pointer',
				subText:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
			},
		],
		design: [
			{
				eyeBrowText: 'Integrated Creativity & Technology',
				heading: 'Curabitur malesuada est tempor ',
				highLightedText: 'ullamcorper',
				underlineVisibiltiy: true,
				underlineClass: 'black',
				normaltext: '  maximus',
				pointer: 'pointer',
				subText:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
			},
		],
		collaboration: [
			{
				eyeBrowText: 'Collaboration Achieves Success',
				heading: 'Curabitur malesuada est tempor ',
				highLightedText: 'ullamcorper',
				underlineVisibiltiy: true,
				underlineClass: 'black',
				normaltext: '  maximus',
				pointer: 'pointer',
				subText:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
			},
		],
		industry: [
			{
				eyeBrowText: 'Why Clear',
				heading: 'Curabitur malesuada est tempor',
				highLightedText: 'ullamcorper',
				underlineVisibiltiy: true,
				underlineClass: 'black',
				normaltext: ' maximus',
				pointer: 'pointer',
				subText:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
				pt: true,
			},
		],
		Partners: [
			{
				eyeBrowText: 'Our Expertise',
				heading: 'Donec hendrerit tempor arcu id',
				highLightedText: 'laoreet',
				underlineVisibiltiy: false,
				underlineClass: '',
				normaltext: ' est ullamcorper at',
				pointer: 'pointer',
				subText:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
				pt: true,
			},
		],
		industryfocus: [
			{
				eyeBrowText: 'Why Clear',
				heading: 'Curabitur malesuada est tempor',
				highLightedText: 'ullamcorper',
				underlineVisibiltiy: false,
				underlineClass: 'black',
				normaltext: ' maximus',
				pointer: 'pointer',
				subText:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			},
		],
		careers: [
			{
				eyeBrowText: 'Benefits',
				heading: 'Curabitur malesuada est tempor',
				highLightedText: 'ullamcorper',
				normaltext: ' maximus',
				pointer: 'pointer',
				underlineClass: 'black',
				subText:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
			},
		],
		carrersup: [
			{
				eyeBrowText: 'Our values',
				heading: 'Curabitur malesuada est tempor',
				highLightedText: 'ullamcorper',
				normaltext: 'maximus',
				underLineDark: 'dark',
				subText:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
			},
		],
	};

	const cardsContent = {
		driving: [
			{
				link: '/',
				img: '/Collaboration.png',
				lite: 'Lorem ipsum dolor sit amet contectetur',
				para: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit',
			},
			{
				link: '/',
				img: '/Performance.png',
				lite: 'Consectetur adisciping etal lorem dolor.',
				para: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit',
			},
			{
				link: '/another-link',
				img: '/Excellence.png',
				lite: 'Ipsum dolor lorem etal lorem adisciping',
				para: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit',
			},
		],
		home: [
			{
				link: '/',
				img: '/Collaboration.png',
				lite: 'Collaboration focus lorem ipsum.',
				para: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit',
			},
			{
				link: '/',
				img: '/Performance.png',
				lite: 'B2B performance driven.',
				para: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit',
			},
			{
				link: '/another-link',
				img: '/Excellence.png',
				lite: 'Design + development excellence.',
				para: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit',
			},
		],
		design: [
			{
				link: '/',
				img: '/Collaboration.png',
				lite: 'Lorem ipsum dolor sit amet contectetur',
				para: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit',
			},
			{
				link: '/',
				img: '/Performance.png',
				lite: 'Consectetur adisciping etal lorem dolor.',
				para: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit',
			},
			{
				link: '/another-link',
				img: '/Excellence.png',
				lite: 'Ipsum dolor lorem etal lorem adisciping',
				para: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit',
			},
		],
		careers: [
			{
				link: '/',
				img: '/Collaboration.png',
				lite: '401K matching opportunities',

			},
			{
				link: '/',
				img: '/Performance.png',
				lite: 'Employee interest and social groups',
			},
			{
				link: '/another-link',
				img: '/Excellence.png',
				lite: 'Volunteer opportunities',
			},
			{
				link: '/',
				img: '/Collaboration.png',
				lite: 'Comprehensive medical and health plans',
			},
			{
				link: '/',
				img: '/Performance.png',
				lite: '“Work from anywhere” flexibility',
			},
			{
				link: '/another-link',
				img: '/Excellence.png',
				lite: 'Lunch & snacks for on-site employees',
			},
			{
				link: '/',
				img: '/Collaboration.png',
				lite: 'Holiday gifts & birthday treats',
			},
			{
				link: '/',
				img: '/Performance.png',
				lite: 'Education budget for career development',
			},
		],
	};

	const introData = introContent[introName] || [];
	const contentData = cardsContent[cards] || [];

	return (
		<section
			className={`${pb === 'none' ? 'pb-0' : ''} ${defaultpadding === true ? 'default-padding !pb-0' : ''} ${min === 'full' ? '!min-h-[100%]' : ''} contentGrid  dark ${hFull === false ? '' : 'height__full'} grid__parallax`}
		>
			<div className="container">
				{
					Logo === true ? <LogoSlider contentname={'fourcard'} asChild={true} showGradient={false} /> : ''
				}
				{introData.map((intro, index) => (
					<Intro key={index} {...intro} />
				))}
				<div className={`${fourcards == true ? 'gap-[2rem] gap-y-[5rem] xl:gap-y-[50px]' : 'gap-[3rem]'} wrapper flex flex-wrap justify-between laptop:justify-normal  md:gap-[5rem] mt-[5.4rem] md:mt-[4.4rem]`}>
					{contentData.map((item, index) => (
						<div
							key={index}
							className={`${fourcards == true ? 'lg-up:w-[calc(25%-2rem)] laptop:!w-[calc(33.33%-2rem)] pr-[5rem] ' : 'lg-up:w-[calc(33%-2rem)] pr-[9rem]'} contentGrid__item w-full  tablet:w-[calc(50%-2rem)]  xl:pr-0`}
						>
							<Link href={item.link} className='inline-block'>
								<div className="contentGrid__icon max-h-[9rem] max-w-[9rem] min-h-[9rem] w-full h-full mb-[3.7rem] md:mb-[3rem]">
									<Image
										src={item.img}
										alt="img"
										width={300}
										height={300}
										className="md:object-contain h-full w-full object-contain"
									/>
								</div>
								<h4 className={`${fourcards == true ? 'h6 !font-bold' : ''} lite`}>{item.lite}</h4>
								<p className="mt-[1rem] md:mt-[1rem]">{item.para}</p>
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ContentGrid;
