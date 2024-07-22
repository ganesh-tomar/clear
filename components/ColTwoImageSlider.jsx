import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
// import FeaturedLogos from './FeaturedLogos';
import FeaturedinLogos from './FeaturedinLogos';
import style from '../components/styles/colTwoImageSlider.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageTextCarousel = ({
	imageSrc,
	heading,
	subText,
	url,
	linkText,
	count,
	post,
	pre,
	categories,
	medium,
	hiddenlink,
	hiddenurl,
	redirect,
	onClick,
	insights,
}) => {
	const [isTouchDevice, setIsTouchDevice] = useState(false);
	const [winWidth, isWinWidth] = useState(0);

	useEffect(() => {
		const handleResize = () => {
			isWinWidth(window.innerWidth);
		};
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	useEffect(() => {
		const checkTouchDevice = () => {
			setIsTouchDevice(
				'ontouchstart' in window ||
				navigator.maxTouchPoints > 0 ||
				navigator.msMaxTouchPoints > 0,
			);
		};
		checkTouchDevice();
		window.addEventListener('touchstart', checkTouchDevice);
		return () => window.removeEventListener('touchstart', checkTouchDevice);
	}, []);
	if (isTouchDevice && winWidth <= 1024) {
		var body = document.querySelector('body');
		body.classList.add('touchDevice');
	}

	return (
		<div
			className={`${imageSrc ? '' : 'bg-[#E5E4E7]'} ${style.card
				} ${insights === false ? '' : style.insight}  insightCard relative flex-col flex  ${categories?.length == 0 ? 'justify-end' : ''
				} xl-up:min-h-[54rem] xl-up:max-h-[54rem] laptop:min-h-[53rem] laptop:max-h-[53rem] tablet:min-h-[49.3rem] tablet:max-h-[49.3rem] phablet:min-h-[49.3rem]  phablet:max-h-[49.3rem] sm:min-h-[38rem] sm:max-h-[38rem] md-up:mr-[3rem]`}
			id="card"
		>
			{redirect === true ? (
				<Link href={`${hiddenurl ? hiddenurl : '/'}`} className="redirect">
					.
				</Link>
			) : (
				''
			)}
			{count ? (
				<div className="card_heading  w-full laptop:pb-[2rem] p-[5rem] md:py-[3rem] md:px-[2rem]">
					<h2 className="medium-light tiltCross inline-block relative sm:!text-[90px]">
						{pre}
						{count}
						{post}
					</h2>
				</div>
			) : (
				''
			)}
			{imageSrc ? (
				<div className="bg-img">
					<Image
						src={imageSrc}
						width={1000}
						height={1000}
						className="w-full h-full object-cover"
						alt=""
					/>
				</div>
			) : (
				''
			)}
			{categories?.length > 0 ? (
				<div className={`${style.tab} p-[5rem] ipad:p-[4rem] md:!pt-[3rem] md:!px-[2rem] md:!pb-0`}>
					{categories.map((category, index) => (
						<span
							key={index}
							className="font-bold py-[0.5rem] px-[1rem] bg-black text-white text-[16px] xxl-up:text-[1.6rem] inline-block mr-[1rem]"
						>
							{category}
						</span>
					))}
				</div>
			) : (
				''
			)}

			<div
				className={`${imageSrc
					? `insightCardBlackOverlay ${style.blackOverlay} absolute bottom-0`
					: ''
					} p-[5rem] w-full md:!py-[3rem] md:!px-[2rem]`}
			>
				{heading ? (
					<h4
						className={`${style.desc} ${imageSrc ? 'text-white' : 'text-black'
							}`}
					>
						{heading}
					</h4>
				) : (
					''
				)}
				<div
					className={`${imageSrc ? `hiddenContent ${style.hiddencontent}` : ''
						} mt-0 h-0 opacity-0`}
				>
					<p
						className={`${medium
							? 'medium text-white mb-[2rem] sm:mb-0'
							: ''
							}`}
					>
						{medium}
					</p>
					<Link
						href={`${hiddenurl ? hiddenurl : '/'}`}
						className={`${hiddenlink ? 'tertiary-btn ' : ''}`}
					>
						{hiddenlink}
					</Link>
				</div>
				{subText ? (
					<p
						className={`${imageSrc ? 'text-white' : 'text-black'} ${count ? '' : ' mb-[3rem]'
							} ${count ? '' : 'sm:hidden'} mt-[2rem]`}
					>
						{subText}
					</p>
				) : (
					''
				)}
				{linkText ? (
					<Link
						href={url ? url : '/'}
						className={` tertiary-btn sm:mt-[1.8rem]`}
					>
						{linkText}
					</Link>
				) : (
					''
				)}
			</div>
		</div>
	);
};

const ColTwoImageSlider = ({
	data,
	bgColor,
	featuredLogos,
	contentName,
	pt,
	whitecard,
	insights
}) => {
	const contentdata = {
		home: [
			{
				subtitle: '',
				pre: 'Clear Digital news, thoughts, and',
				Highlighttextt: 'insights',
				normaltxt: '.',
				para: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
				btn: 'View all Insights',
				underlineClass: 'blackMedium',
			},
		],
		collobriaion: [
			{
				subtitle: 'Results',
				pre: 'Notable',
				Highlighttextt: 'outcome',
				normaltxt: '  statistics lorem ipsum dolor',
				para: 'Lorem ipsum dolor sit amet consectetur. Pharetra dictum faucibus proin turpis sit. Tortor amet sit nunc libero non nec suscipit volutpat in. Viverra adipiscing dolor amet vitae malesuada vitae.',
				underlineClass: 'blackMedium bps',
			},
		],
		partnerDetail: [
			{
				subtitle: '',
				pre: '',
				Highlighttextt: 'Drupal',
				normaltxt: '  Insights Lorem Ipsum Dolor',
				para: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
				underlineClass: 'blackMedium bps',
				btn: 'View all Insights',
			},
		],
	};
	const contentData = contentdata[contentName] || [];

	const [currentSlide, setCurrentSlide] = useState(0);
	const totalSlides = Math.ceil(data.length);
	const sliderRef = useRef(null);

	function handleclick() {
		let card = document.querySelector(`.colTwoImageSlider__right`);
		card.addEventListener('click', function (event) {
			var mouseX = event.clientX; // Mouse X position relative to the viewport
			var elementOffsetLeft = this.getBoundingClientRect().left; // Offset left of the element
			var elementOffsetRight = this.getBoundingClientRect().right;
			var mouseOffsetLeft = mouseX - elementOffsetLeft;
			var mouseOffsetRight = elementOffsetRight - mouseX;

			if (mouseOffsetLeft < 151 && currentSlide > 0) {
				setCurrentSlide(currentSlide - 1);
			}
			if (mouseOffsetRight < 151 && currentSlide < totalSlides - 1) {
				setCurrentSlide(currentSlide + 1);
			}
		});
	}

	useEffect(() => {
		handleclick();
	});

	useEffect(() => {
		const handleResize = () => {
			if (sliderRef.current) {
				sliderRef.current.slickGoTo(currentSlide);
			}
		};

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [currentSlide]);

	useEffect(() => {
		if (sliderRef.current) {
			sliderRef.current.slickGoTo(currentSlide);
		}
	}, [currentSlide]);

	const handleDotSwipe = (direction) => {
		if (direction === 'left' && currentSlide > 0) {
			setCurrentSlide(currentSlide - 1);
		} else if (direction === 'right' && currentSlide < totalSlides - 1) {
			setCurrentSlide(currentSlide + 1);
		}
	};

	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1.16,
		slidesToScroll: 1,
		centerMode: true,
		focusOnSelect: false,
		swipe: true,
		touchThreshold: 100,
		appendDots: (dots) => (
			<div>
				<ul
					className="custom-dots"
					onTouchStart={(e) => handleTouchStart(e)}
					onTouchMove={(e) => handleTouchMove(e)}
					onTouchEnd={(e) => handleTouchEnd(e)}
				>
					{dots}
				</ul>
			</div>
		),
		customPaging: function (i) {
			return (
				<button className="custom-dot" onClick={() => setCurrentSlide(i)} >.</button>
			);
		},
		afterChange: (index) => {
			setCurrentSlide(index);
			console.log('Slide changed to:', index);
		},
		prevArrow: <CustomPrevArrow currentSlide={currentSlide} />,
		nextArrow: (
			<CustomNextArrow currentSlide={currentSlide} totalSlides={totalSlides} />
		),
	};

	const responsiveSettings = [
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				centerMode: false,
			},
		},
	];
	Object.assign(settings, { responsive: responsiveSettings });
	const progressBarWidth = `${((currentSlide + 1) / totalSlides) * 100}%`;

	// Swipe handling logic
	let xDown = null;

	const handleTouchStart = (e) => {
		xDown = e.touches[0].clientX;
	};

	const handleTouchMove = (e) => {
		if (!xDown) {
			return;
		}

		const xUp = e.touches[0].clientX;
		const xDiff = xDown - xUp;

		if (xDiff > 0) {
			handleDotSwipe('left'); // Change to 'left' for next slide
			handlecardSwipe('left');
		} else {
			handleDotSwipe('right'); // Change to 'right' for previous slide
			handlecardSwipe('right');
		}

		xDown = null;
	};

	const handleTouchEnd = () => {
		xDown = null;
	};

	return (
		<section
			className={`${bgColor ? bgColor : 'bg-white'} ${contentName === 'collobriaion' ? 'grid__parallax dark' : ''
				} ${pt === 'none' ? 'pt-0' : ''
				} colTwoImageSlider xs:whitespace-break-spaces`}
			id="resources"
		>
			<div className="container">
				<div className="wrapper flex items-center justify-between lg:flex-wrap">
					<div className="colTwoImageSlider__left pr-[15rem] pb-[5rem] lg:pr-0 w-1/2 lg:w-full lg:pb-0">
						{contentData.map((item, index) => (
							<div key={index}>
								{item.subtitle && (
									<p className="subtitle mb-[2rem]">{item.subtitle}</p>
								)}

								<h3 className="whitespace-normal pr-[6rem] lg:pr-0">
									{item.pre}{' '}
									<span
										className={`underline-container ${item.underlineClass ? item.underlineClass : ''
											} relative inline-block leading-1 pb-[0.8rem] dark text-pink`}
									>
										{item.Highlighttextt}
									</span>
									{item.normaltxt}
								</h3>
								<p className="mt-[2rem]">{item.para}</p>
								{item.btn ? (
									<div className="mt-[3.5rem]">
										<Link
											href={item.url || '/'}
											className={` btn pink lg:text-center`}
										>
											{item.btn}
										</Link>
									</div>
								) : (
									''
								)}
							</div>
						))}
					</div>
					<div
						className="colTwoImageSlider__right w-1/2 lg:w-full lg:mt-[4rem]"
						onClick={handleclick}
					>
						<div className="custom-wrapper relative md-up:overflow-hidden left-[1.5rem] lg:left-0">
							<Slider ref={sliderRef} {...settings}>
								{data.map((slide, index) => (
									<div key={index}>
										<ImageTextCarousel {...slide} insights={insights} />
									</div>
								))}
							</Slider>
						</div>
						<div className="progress-bar mt-[3rem] md-up:mt-[5rem] relative hidden">
							<span className="block bg-black w-full md-up:max-w-[94.6667%] h-[1px] absolute left-0 top-1/2 -translate-y-1/2"></span>
							<div
								className="h-[1rem] md:h-[1.6rem] bg-pink transition-all duration-300 relative z-10"
								style={{
									width: `${((currentSlide + 1) / totalSlides) * 100}%`,
								}}
							></div>
						</div>
					</div>
				</div>
				{featuredLogos === false ? '' : <FeaturedinLogos />}
			</div>
		</section>
	);
};

const CustomPrevArrow = ({ onClick, currentSlide }) => (
	<button
		aria-label="first link"
		data-cursor-expand="true"
		data-cursor-icon="arrow-left"
		className={`btn__left group absolute top-0 left-[-20px] sm:hidden h-full w-5 xl-up:w-24 laptop:w-[70px] tablet:w-[12rem] md:w-[2rem] md:left-[-1.5rem] z-10 ${currentSlide === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'
			}`}
		onClick={currentSlide !== 0 ? onClick : undefined}
	></button>
);

const CustomNextArrow = ({ onClick, currentSlide, totalSlides }) => (
	<button
		aria-label="first link"
		data-cursor-expand="true"
		data-cursor-icon="arrow-right"
		className={`btn__right group absolute top-0 right-0 sm:hidden h-full w-[35%] z-10  ${Math.ceil(currentSlide) === totalSlides - 1
			? 'opacity-0 pointer-events-none'
			: 'opacity-100'
			}`}
		onClick={currentSlide !== totalSlides ? onClick : undefined}
	></button>
);

export default ColTwoImageSlider;
