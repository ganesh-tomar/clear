import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import FeaturedLogos from '../FeaturedLogos';
import style from '../../components/styles/colTwoImageSlider.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageTextCarousel = (slide) => {
	let categories = slide?.contentType?.node?.name == 'post' ? 'Article' : slide?.contentType?.node?.name;
	let targetDate = new Date(slide?.date);
	let formattedDate = targetDate.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});


	return (
		<div
			className={`${style.card} ${style.insight} insightCard group relative flex-col flex xl-up:min-h-[54rem] xl-up:max-h-[54rem] laptop:min-h-[53rem] laptop:max-h-[53rem] tablet:min-h-[49.3rem] tablet:max-h-[49.3rem] phablet:min-h-[49.3rem]  phablet:max-h-[49.3rem] sm:min-h-[38rem] sm:max-h-[38rem] md-up:mr-[3rem]`}
			id="card"
		>
			{slide?.uri && <Link href={slide?.uri} className="redirect">.</Link>}
			{slide?.featuredImage &&
				<div className="bg-img overflow-hidden">
					<Image
						src={slide?.featuredImage?.node?.mediaItemUrl}
						width={1000}
						height={1000}
						className="w-full h-full object-cover group-hover:scale-[1] transition-transform duration-300 scale-[1.2]"
						alt={slide?.featuredImage?.node?.altText}
						fetchPriority='high'
					/>
				</div>
			}

			<div className={`${style.tab} p-[5rem] ipad:p-[4rem] md:!pt-[3rem] md:!px-[2rem] md:!pb-0`}>
				<span className="font-bold py-[0.5rem] px-[1rem] bg-black text-white text-[16px] xxl-up:text-[1.6rem] inline-block mr-[1rem]">
					{categories}
				</span>
				{slide?.terms?.edges?.map((category, index) => (
					(category?.node?.__typename == "MessageAreaOfFocus" && (index < 1) &&
						<span key={index} className="font-bold py-[0.5rem] px-[1rem] bg-black text-white text-[16px] xxl-up:text-[1.6rem] inline-block mr-[1rem]">
							{category?.node?.name}
						</span>
					))
				)}
			</div>

			<div className={`insightCardBlackOverlay ${style.blackOverlay} absolute bottom-0 p-[5rem] w-full md:!py-[3rem] md:!px-[2rem]`}>
				<h4 className={`${style.desc} ${slide?.featuredImage ? 'text-white' : 'text-black'}`}>{slide?.title}</h4>
				<div className={`${slide?.featuredImage ? `hiddenContent relative ${style.hiddencontent}` : ''} mt-0 h-0 opacity-0`}>
					{slide?.author &&
						<p className={`${style.paragraph} medium text-white xxl-up:mb-[2rem] sm:mb-0`} >
							By {slide?.author?.node?.firstName} {slide?.author?.node?.lastName} on {formattedDate}
						</p>
					}
					{slide?.uri && <Link href={slide?.uri} className={`tertiary-btn ipad:mt-[15px] !absolute bottom-0 left-0`}>Read more</Link>}
				</div>
			</div>
		</div>
	);
};

const ColTwoWithSlider = (data) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [totalSlides, setTotalSlides] = useState(Math.ceil(data?.reference?.length));
	const sliderRef = useRef(null);
	const [fullWidthSlider, setFullWidthSlider] = useState(false);
	const [winWidth, setWinWidth] = useState(null);

	function handleclick() {
		let card = document.querySelector(`.colTwoImageSlider__right .custom-wrapper`);
		card?.addEventListener('click', function (event) {
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
		const handleResize = () => {
			setWinWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	useEffect(() => {
		const sections = document.querySelectorAll('.colTwoImageSlider');
		sections.forEach((section) => {
			if (section.classList.contains('full-width-slider') && (window.innerWidth > 991)) {
				setFullWidthSlider(true);
			} else {
				setFullWidthSlider(false);
			}
		});
	}, [winWidth]);

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

	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 1.23,
		slidesToScroll: 1,
		centerMode: true,
		focusOnSelect: false,
		swipe: true,
		touchThreshold: 100,
		prevArrow: <CustomPrevArrow currentSlide={currentSlide} totalSlides={totalSlides} />,
		nextArrow: <CustomNextArrow currentSlide={currentSlide} totalSlides={totalSlides} />,
	};

	const responsiveSettings = [
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 1.25,
			},
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				centerMode: false,
			},
		},
	];

	const fullWidthSliderSettings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 2.4,
		slidesToScroll: 1,
		centerMode: false,
		focusOnSelect: false,
		swipe: true,
		touchThreshold: 100,
		prevArrow: <CustomPrevArrow currentSlide={currentSlide} totalSlides={totalSlides} fullWidthSlider={fullWidthSlider} />,
		nextArrow: <CustomNextArrow currentSlide={currentSlide} totalSlides={totalSlides} fullWidthSlider={fullWidthSlider} />,
	};

	const fullWidthSliderResponsiveSettings = [
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 1.5,
			},
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
			},
		},
	];

	Object.assign(settings, { responsive: responsiveSettings });
	Object.assign(fullWidthSliderSettings, { responsive: fullWidthSliderResponsiveSettings });
	const progressBarWidth = fullWidthSlider ? ((Math.ceil(currentSlide) + 2) / totalSlides) * 100 : ((Math.ceil(currentSlide) + 1) / totalSlides) * 100;


	const handleAfterChange = (index) => {
		setCurrentSlide(Math.ceil(index));
	};
	const handleNextChange = (index) => {
		setCurrentSlide(Math.ceil(currentSlide) + 1);
	};
	const handlePrevChange = (index) => {
		setCurrentSlide(Math.ceil(currentSlide) - 1);
	};

	return (
		<section className={`bg-gray colTwoImageSlider xs:whitespace-break-spaces z-[2] ${data?.classes || ''} ${data?.padding.join(' ')}`} id={data?.id}>
			<div className="container">
				{(data?.title || data?.bodyWithoutEditor || data?.link?.linkUrl || (data?.reference && data?.reference.length > 0)) && (
					<div className="wrapper flex items-center justify-between lg:flex-wrap">
						{(data?.title || data?.bodyWithoutEditor || data?.link?.linkUrl) && (
							<div className="asd colTwoImageSlider__left pr-[15rem] pb-[5rem] lg:pr-0 w-1/2 lg:w-full lg:pb-0">
								<div>
									<h3 className="whitespace-normal" dangerouslySetInnerHTML={{ __html: data?.title }}></h3>
									<p className="mt-[2rem]">{data?.bodyWithoutEditor}</p>
									{data?.link?.linkUrl && (
										<div className="header-btnwrap relative inline-block w-auto h-auto bg-transparent mt-[3.5rem]">
											<Link
												href={data?.link?.linkUrl}
												className={data?.link?.class}
												target={data?.link?.target ? '_blank' : '_self'}
											>
												{data?.link?.linkText}
											</Link>
										</div>
									)}
								</div>
							</div>
						)}
						{data?.reference && data?.reference.length > 0 && (
							<div className={`colTwoImageSlider__right ${fullWidthSlider ? 'w-full' : 'w-1/2'} lg:w-full lg:mt-[4rem]`}>
								<div className="custom-wrapper relative lg:left-0" onClick={handleclick}>
									<Slider ref={sliderRef} {...(fullWidthSlider ? fullWidthSliderSettings : settings)} afterChange={handleAfterChange}>
										{data?.reference.map((slide, index) => (
											<div key={index}>
												<ImageTextCarousel {...slide} />
											</div>
										))}
									</Slider>
								</div>
								{totalSlides > 1 && (
									<div className="progress-bar overflow-visible mt-[3rem] md-up:mt-[5rem] relative">
										<span data-cursor-expand="true" data-cursor-icon="arrow-left" className={`inline-block absolute left-0 top-0 h-full ${currentSlide === 0 ? 'hidden' : ''}`} onClick={handlePrevChange} style={{ width: `${progressBarWidth}%`, }} />
										<span data-cursor-expand="true" data-cursor-icon="arrow-right" className={`inline-block absolute right-0 top-0 h-full ${Math.ceil(currentSlide) === (totalSlides - 1) ? 'hidden' : ''}`} onClick={handleNextChange} style={{ width: `${100 - progressBarWidth}%`, }} />
										<span className={`bg-black block w-full md-up:max-w-[105%] h-[1px] absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none`} ></span>
										<div className="h-[1rem] md:h-[1.6rem] bg-pink transition-all duration-300 relative pointer-events-none" style={{ width: `${progressBarWidth}%`, }} />
									</div>
								)}
							</div>
						)}
					</div>
				)}
				<FeaturedLogos
					subtitle={data?.subtitle}
					logo={data?.logos}
				/>
			</div>
		</section>
	);
};

const CustomPrevArrow = ({ onClick, currentSlide, fullWidthSlider }) => (
	<button
		aria-label="first link"
		data-cursor-expand="true"
		data-cursor-icon="arrow-left"
		className={`btn__left group absolute top-0 ${fullWidthSlider ? 'left-[-9rem]' : 'left-[-2rem]'} w-[9rem] sm:hidden h-full laptop:w-[7rem] tablet:w-[12rem] md:w-[2rem] md:left-[-1.5rem] z-10 ${currentSlide === 0 ? 'hidden' : ''}`}
		onClick={currentSlide !== 0 ? onClick : undefined}
	></button>
);
const CustomNextArrow = ({ onClick, currentSlide, totalSlides, fullWidthSlider }) => (
	<button
		aria-label="first link"
		data-cursor-expand="true"
		data-cursor-icon="arrow-right"
		className={`${totalSlides} ${Math.ceil(currentSlide)} btn__right group absolute top-0 right-0 sm:hidden h-full z-10 ${fullWidthSlider ? 'w-[17%] tablet:w-[35%]' : 'w-[35%]'} ${fullWidthSlider && Math.ceil(currentSlide) === (totalSlides - 2) ? 'hidden' : ''} ${Math.ceil(currentSlide) === (totalSlides - 1) ? 'hidden' : ''}`}
		onClick={currentSlide !== totalSlides ? onClick : undefined}
	></button>
);

export default ColTwoWithSlider;