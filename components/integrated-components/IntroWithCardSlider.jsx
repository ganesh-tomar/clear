import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import style from '../../components/styles/colTwoImageSlider.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageTextCarousel = (data) => {
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
		<div className="bg-[#E5E4E7] card relative flex flex-col lg-up:justify-between p-[5rem] ipad:p-[4rem] sm:!p-[2rem] xl-up:min-h-[54rem] xl-up:max-h-[54rem] laptop:min-h-[54rem] tablet:min-h-[49.3rem] tablet:max-h-[49.3rem] phablet:min-h-[49.3rem] phablet:max-h-[49.3rem] sm:min-h-[38rem] sm:max-h-[38rem] md-up:mr-[3rem]" id="card">
			<div className="card_heading w-full">
				<h2 className="medium-light inline-block relative sm:!text-[90px]">
					{data?.prefix ?? ''}{data?.count ?? ''}{data?.suffix ?? ''}
				</h2>
			</div>
			<div className="">
				{data.subtitle && <p className="subtitle mb-[2rem]">{data.subtitle}</p>}
				{data.subtext && <h4 className="mt-[2rem] text-black truncate line-clamp-2 whitespace-normal">{data.subtext}</h4>}
				{data.subdescription && <p className="text-black mt-[2rem] truncate line-clamp-[7] whitespace-normal sm:line-clamp-[6]">{data.subdescription}</p>}
			</div>
		</div>
	);
};

const IntroWithCardSlider = (data) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [totalSlides, setTotalSlides] = useState(Math.ceil(data?.sliderItem?.length));
	const sliderRef = useRef(null);
	const wrapperRef = useRef(null);

	const setEqualHeight = () => {
		if (wrapperRef.current) {
			const slides = wrapperRef.current.querySelectorAll('.slick-slide');
			let maxHeight = 0;

			// Reset heights
			slides.forEach(slide => {
				slide.style.height = 'auto'; // Reset height
			});

			// Calculate max height
			slides.forEach(slide => {
				const slideHeight = slide.clientHeight;
				if (slideHeight > maxHeight) {
					maxHeight = slideHeight;
				}
			});

			// Set equal height
			slides.forEach(slide => {
				slide.style.height = `${maxHeight}px`;
			});
		}
	};

	const handleResize = () => {
		setEqualHeight();
	};

	useEffect(() => {
		setEqualHeight(); // Set initial height

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);



	function handleclick() {
		let card = document.querySelector(`.colTwoImageSlider__right .custom-wrapper`);
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

	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 1.17,
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


	Object.assign(settings, { responsive: responsiveSettings });
	const progressBarWidth = ((Math.ceil(currentSlide) + 1) / totalSlides) * 100;

	const handleAfterChange = (index) => {
		setCurrentSlide(index);
	};

	const handleNextChange = (index) => {
		setCurrentSlide(currentSlide + 1);
	};
	const handlePrevChange = (index) => {
		setCurrentSlide(currentSlide - 1);
	};

	return (
		<section
			className={`IntroWithCardSlider  xs:whitespace-break-spaces z-[2] ${data?.classes} ${data?.padding.join(' ')}`}
			id={data.id}
		>
			<div className="container">
				<div className="wrapper flex items-center justify-between lg:flex-wrap">
					<div className="colTwoImageSlider__left pr-[15rem] pb-[5rem] lg:pr-0 w-1/2 lg:w-full lg:pb-0">
						<div>
							{data?.subtitle && <p className="subtitle mb-[2rem]">{data?.subtitle}</p>}
							{data?.title && <h3 className="whitespace-normal" dangerouslySetInnerHTML={{ __html: data?.title }}></h3>}
							{data?.bodyWithoutEditor && <p className="mt-[2rem]">{data?.bodyWithoutEditor}</p>}

							{/* <div className="btn-wrap mb-[3rem]">
									<Link className="tertiary-btn black" href={data.linkUrl} target={data.target}>{data.linkText}</Link>
								</div> */}


						</div>

					</div>
					<div
						className="colTwoImageSlider__right w-1/2 lg:w-full lg:mt-[4rem]">
						<div ref={wrapperRef} className="custom-wrapper relative lg:left-0" onClick={handleclick}>
							<Slider ref={sliderRef} {...settings} afterChange={handleAfterChange}>
								{data.sliderItem.map((slide, index) => (
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
				</div>
			</div>
		</section>
	);
};

const CustomPrevArrow = ({ onClick, currentSlide }) => (
	<button
		aria-label="first link"
		data-cursor-expand="true"
		data-cursor-icon="arrow-left"
		className={`btn__left group absolute top-0 left-[-2rem] w-[9rem] sm:hidden h-full laptop:w-[7rem] tablet:w-[12rem] md:w-[2rem] md:left-[-1.5rem] z-10 ${currentSlide === 0 ? 'hidden' : ''}`}
		onClick={currentSlide !== 0 ? onClick : undefined}
	></button>
);
const CustomNextArrow = ({ onClick, currentSlide, totalSlides }) => (
	<button
		aria-label="first link"
		data-cursor-expand="true"
		data-cursor-icon="arrow-right"
		className={`${totalSlides} ${Math.ceil(currentSlide)} btn__right group absolute top-0 right-0 sm:hidden h-full w-[35%] z-10 ${Math.ceil(currentSlide) === (totalSlides - 1) ? 'hidden' : ''}`}
		onClick={currentSlide !== totalSlides ? onClick : undefined}
	></button>
);
export default IntroWithCardSlider;