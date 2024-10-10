import React, { useRef, useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Style from './miniSandhill.module.css';

const NextArrow = (props) => {
	const { className, style, onClick } = props;
	return (
		<div
			className={`${Style.customArrow} ${Style.customNext} customArrow customNext ${className} `}
			style={{ ...style, display: 'block' }}
			onClick={onClick}
		/>
	);
};

const PrevArrow = (props) => {
	const { className, style, onClick } = props;
	return (
		<div
			className={`${Style.customArrow} ${Style.customPrev} customArrow customPrev ${className} `}
			style={{ ...style, display: 'block' }}
			onClick={onClick}
		/>
	);
};

export default function MiniSandhillSlider({ content }) {
	const sliderRef = useRef(null);
	const [currentSlide, setCurrentSlide] = useState(0);
	const [clickedSlide, setClickedSlide] = useState(null);

	const settings = {
		dots: false,
		arrows: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		autoplay: false,
		// autoplaySpeed: 3000,
		centerMode: true,
		centerPadding: '0',

		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
		afterChange: (index) => {
			if (clickedSlide !== null) {
				sliderRef.current.slickGoTo(clickedSlide); // Ensure clicked slide stays centered
			}
		},
	};

	// const handleDotClick = (index) => {
	// 	if (sliderRef.current) {
	// 		sliderRef.current.slickGoTo(index);
	// 		setCurrentSlide(index);
	// 	}
	// };

	const handleSlideClick = (index) => {
		if (sliderRef.current) {
			sliderRef.current.slickGoTo(index);
			setClickedSlide(index);
		}
	};

	const handleClickOutside = useCallback((event) => {
		const sliderNode = ReactDOM.findDOMNode(sliderRef.current);
		if (sliderNode && !sliderNode.contains(event.target)) {
			setClickedSlide(null);
		}
	}, []);
	useEffect(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [handleClickOutside]);

	return (
		<>
			<section className={`${Style.miniSandhillSlider} miniSandhillSlider`}>
				<div className="container">
					<div
						className={`${Style.infographicSliderWrap} infographicSliderWrap relative w-full max-w-[1170px] mx-auto before:content-[''] before:absolute before:top-0 before:right-[100%] before:w-full before:h-full before:bg-[#ffffffbf] before:z-[2]  after:content-[''] after:absolute after:top-0 after:left-[100%] after:w-full after:h-full after:bg-[#ffffffbf] after:z-[5] `}
					>
						<Slider ref={sliderRef} {...settings}>
							{content?.map((sliderItem, index) => (
								<div
									className={`relative w-[25%] min-h-[622px] border-r-[1px] border-r-[#fff] border-solid transition-all duration-1000 ease-in-out ${
										index === clickedSlide ? Style.activeSlide : ''
									} `}
									key={index}
									onClick={() => handleSlideClick(index)}
									style={{
										width: index === clickedSlide ? '40%' : '25%',
									}}
								>
									<div className=" absolute top-0 left-0 w-full h-full ">
										<Image
											src={sliderItem.imageSrc}
											width={1000}
											height={1500}
											alt="img"
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
							))}
						</Slider>
						<div
							className={`${Style.customDots} customDots relative w-full mx-auto after:bg-[#e6edef]`}
						>
							{content?.map((item, index) => (
								<div
									key={index}
									onClick={() => handleDotClick(index)}
									className={`${Style.customDotButton} customDotButton ${
										index === currentSlide ? Style.activeDot : ''
									} relative z-[1] `}
								>
									<button
										className={` relative w-[15px] h-[15px] !bg-[#e6edef] transform rotate-[45deg]`}
									></button>
									<div
										className={`${Style.hoverWrap} hoverWrap absolute bottom-[50px] w-[286px] h-[286px] rounded-[50%] bg-[#4298b5] overflow-hidden   border-[1px] border-[#fff] border-solid `}
									>
										<div className="imgWrap absolute top-0 left-0 w-full h-full">
											<Image
												src={item.imageSrc}
												width={1000}
												height={1000}
												alt="img"
												className="w-full h-full object-cover"
											/>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<style jsx>{`
				:global(.infographicSliderWrap .slick-list) {
					overflow: visible !important;
					padding-bottom: 30px !important;
				}
				// :global(.slick-current) {
				// 	transform: translateY(-4.7%);
				// 	width: 34% !important; /* Adjust width here */
				// 	transition: transform 0.5s ease-in-out, width 0.5s ease-in-out;
				// }
			`}</style>
		</>
	);
}
