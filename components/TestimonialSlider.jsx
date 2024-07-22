import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './styles/colTwoSlider.module.css';
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);

const ColTwoSlider = (data) => {
	const [sectionHeight, setsectionHeight] = useState('')
	const [sectionContentHeight, setSectionContentHeight] = useState('')
	const [windowWidth, setSindowWidth] = useState(0)
	const [currentSlide, setCurrentSlide] = useState(0);
	const slideRefs = useRef([]);
	const totalSlides = Math.ceil(data.items.length);

	useGSAP(() => {
		animateInitialSlide();
	});

	const animateInitialSlide = () => {
		const currentLeft = slideRefs.current[currentSlide];
		const currentRight = slideRefs.current[currentSlide + data.items.length];

		gsap.set(currentLeft, { x: '0%' });
		gsap.set(currentRight, { x: '0%' });

		for (let i = 0; i < data.items.length; i++) {
			if (i !== currentSlide) {
				const leftSlide = slideRefs.current[i];
				const rightSlide = slideRefs.current[i + data.items.length];
				gsap.set(leftSlide, { x: '100%' });
				gsap.set(rightSlide, { x: '-100%' });
			}
		}
	};

	const handlePrevSlide = () => {
		if (currentSlide > 0) {
			animateSlide(currentSlide - 1, 'left');
		}
	};

	const handleNextSlide = () => {
		if (currentSlide < data.items.length - 1) {
			animateSlide(currentSlide + 1, 'right');
		}
	};

	const animateSlide = (index, direction) => {
		const currentLeft = slideRefs.current[currentSlide];
		const nextLeft = slideRefs.current[index];
		const currentRight = slideRefs.current[currentSlide + data.items.length];
		const nextRight = slideRefs.current[index + data.items.length];

		// Select the quotationMark element
		const quotationMark = document.querySelector(`.${styles.quotationMark}`);

		const tl = gsap.timeline();

		if (direction === 'right') {
			tl.to(currentLeft, { x: '101%', duration: 0.6, ease: 'power3.out' })
				.to(currentRight, { x: '101%', duration: 0.6, ease: 'power3.out' }, '-=0.6')
				.fromTo(nextLeft, { x: '-101%' }, { x: '0%', duration: 0.6, ease: 'power3.out' }, '-=0.6')
				.fromTo(nextRight, { x: '-101%' }, { x: '0%', duration: 0.6, ease: 'power3.out' }, '-=0.6');

			// Sequence animations for right part elements with adjusted delays
			tl.fromTo(nextRight.querySelector('.heading'), { x: '-101%' }, { x: '0%', duration: 0.6, ease: 'power3.out' }, '-=0.6')
				.fromTo(nextRight.querySelector('.author'), { x: '-101%' }, { x: '0%', duration: 0.6, ease: 'power3.out' }, '-=0.6')
				.fromTo(nextRight.querySelector('.designation'), { x: '-101%' }, { x: '0%', duration: 0.6, ease: 'power3.out' }, '-=0.6')
				.fromTo(nextRight.querySelector('.logo'), { x: '-101%' }, { x: '0%', duration: 0.6, ease: 'power3.out' }, '-=0.6')
				.fromTo(nextRight.querySelector('.slideBtn'), { x: '-101%' }, { x: '0%', duration: 0.6, ease: 'power3.out' }, '-=0.8');

			// Animate the quotation mark
			tl.fromTo(quotationMark, { x: '-100%' }, { x: '0%', duration: 0.6, ease: 'power3.out' }, '-=0.6');

		} else if (direction === 'left') {
			tl.to(currentLeft, { x: '-101%', duration: 0.6, ease: 'power3.out' })
				.to(currentRight, { x: '-101%', duration: 0.6, ease: 'power3.out' }, '-=0.6')
				.fromTo(nextLeft, { x: '101%' }, { x: '0%', duration: 0.6, ease: 'power3.out' }, '-=0.6')
				.fromTo(nextRight, { x: '101%' }, { x: '0%', duration: 0.6, ease: 'power3.out' }, '-=0.6');

			// Sequence animations for right part elements with adjusted delays
			tl.fromTo(nextRight.querySelector('.heading'), { x: '101%' }, { x: '0%', duration: 0.6, ease: 'power3.out' }, '-=0.6')
				.fromTo(nextRight.querySelector('.author'), { x: '101%' }, { x: '0%', duration: 0.6, ease: 'power3.out' }, '-=0.6')
				.fromTo(nextRight.querySelector('.designation'), { x: '101%' }, { x: '0%', duration: 0.6, ease: 'power3.out' }, '-=0.6')
				.fromTo(nextRight.querySelector('.logo'), { x: '101%' }, { x: '0%', duration: 0.6, ease: 'power3.out' }, '-=0.6')
				.fromTo(nextRight.querySelector('.slideBtn'), { x: '101%' }, { x: '0%', duration: 0.6, ease: 'power3.out' }, '-=0.8');

			// Animate the quotation mark
			tl.fromTo(quotationMark, { x: '100%' }, { x: '0%', duration: 0.6, ease: 'power3.out' }, '-=0.6');
		}

		setCurrentSlide(index);
	};

	useEffect(() => {
		const handleResize = () => {
			setSindowWidth(window.innerWidth)
			const colTwoSliderActiveContent = document.querySelector('.colTwoSlider .colTwoSlider_content.slideActive').getBoundingClientRect().height
			if (window.innerWidth > 991) {
				setsectionHeight(colTwoSliderActiveContent);
			} else {
				setSectionContentHeight(colTwoSliderActiveContent);
			}
		};

		window.addEventListener("resize", handleResize);
		handleResize();
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	});

	const ColTwoSliderSectionHeight = {
		minHeight: `${sectionHeight}px`
	};
	const ColTwoSliderContentHeight = {
		minHeight: `${sectionContentHeight + 40}px`
	};
	let sectionPadding = '';
	data.padding.map(item => {
		sectionPadding += ' ' + item;
	});

	return (
		<section
			className={`colTwoSlider grid__parallax dark adptHeightNone ${data.classes} ${sectionPadding} ${data.backgroundColor} ${data.textColor}`}
			id={data.id}
		>
			<div className="container">
				{totalSlides > 1 && <>
					<span aria-label="first link"
						data-cursor-expand="true"
						data-cursor-icon="arrow-left" className={`ColTwoSlider_prev_button text-[0]  z-[5] absolute inline-block w-[7%] h-full top-0 left-0 ${currentSlide === 0 ? 'hidden' : ''}`} onClick={handlePrevSlide}>Previous
					</span>
					<span aria-label="first link"
						data-cursor-expand="true"
						data-cursor-icon="arrow-right" className={`ColTwoSlider_next_button text-[0] z-[5]  absolute inline-block w-[7%] h-full top-0 right-0 ${currentSlide === (totalSlides - 1) ? 'hidden' : ''}`} onClick={handleNextSlide}>Next
					</span>
				</>
				}
				<div className="wrapper">
					<div className="colTwoSlider__item">
						<div className="colTwoSlider__item--inner flex justify-between gap-x-[6rem] lg:flex-wrap">
							<div className="colTwoSlider__left relative overflow-hidden w-full sm-up:grow-0 sm-up:shrink-0 sm-up:my-0 min-h-[49rem] lg-up:flex-[41%]">
								{data.items.map((slide, index) => (
									<div ref={el => slideRefs.current[index] = el} key={index} className={`absolute w-full`}>
										{slide.type == 'image' && (slide.image) && (
											<Image
												src={slide.image.mediaItemUrl}
												alt={slide.image.altText}
												width={608}
												height={523}
												className="max-w-[60.8rem] w-full h-auto"
											/>
										)}
										{slide.type == 'text-with-prefix' && (
											<div
												className={`${styles.cross_icon} counter relative inline-block sm:mb-[1rem]`}
											>
												<h2 className="large inline font-light sm:!text-[90px] text-white count">
													{slide.textWithPrefix.prefix}
												</h2>
												<h2 className="large font-light inline sm:!text-[90px] text-white count">
													{slide.textWithPrefix.number}
												</h2>
												<h2 className="large inline font-light sm:!text-[90px] text-white h1">
													{slide.textWithPrefix.denotation}
												</h2>
											</div>
										)}
										{slide.textWithPrefix.subHeading && (
											<h4 className="mb-[0.3rem] leading-[1.5] font-medium">
												{slide.textWithPrefix.subHeading}
											</h4>
										)}
										{slide.textWithPrefix.description && (
											<p className="max-w-[40rem] leading-[1.5] font-normal">
												{slide.textWithPrefix.description}
											</p>
										)}
									</div>
								))}
							</div>
							<div className={`colTwoSlider__right relative ${styles.sliderRight} ml-[8.8rem] pr-[0.1rem] lg:w-full lg-up:flex-[55%] lg:pt-[4rem] lg:mt-[7rem] lg:pr-0 lg:ml-0 transition-[min-height]`} style={windowWidth > 991 ? ColTwoSliderSectionHeight : ColTwoSliderContentHeight}>
								<div className={`${styles.quotationMarkBox}`}>
									<span className={`${styles.quotationMark} quotationMarkSpan`}></span>
								</div>
								<div className='overflow-hidden relative w-full h-full'>
									{data.items.map((slide, index) => (
										<div ref={el => slideRefs.current[index + data.items.length] = el} key={index} className={`${currentSlide == index ? 'slideActive' : ''} colTwoSlider_content absolute w-full`}>
											{slide.body && (
												<div className='h4' dangerouslySetInnerHTML={{ __html: slide.body }}></div>
											)}
											{slide.authorName && (
												<>
													<span className="inline-block text-[1.6rem] laptop:text-[16px] font-bold xl-up:text-[1.6rem] text-pink mt-[2.5rem] md:mt-[2rem]">
														{slide.authorName}
													</span>
													&nbsp;
													<span className={`inline-block text-[1.6rem] laptop:text-[16px] designation font-bold xl-up:text-[1.6rem] text-pink mt-[2.5rem] md:mt-[2rem] sm:!mt-[10px]`}>
														{slide.designation}
													</span>
												</>
											)}
											{slide.logo && (slide.logo.mediaItemUrl) && (
												<div className="colTwoSlider__logo mt-[1.7rem]">
													<Image src={slide.logo.mediaItemUrl} alt={slide.logo.altText} width={156} height={24} />
												</div>
											)}
											{slide.link && (
												<div className="mt-[3rem] relative z-20 header-btnwrap white  inline-block w-auto h-auto bg-transparent">
													<Link
														href={slide.link.linkUrl}
														className={`btn  relative lg:text-center sm:w-full lg:!text-[20px] !py-[1rem] w-full  whiteBtn`}
													>
														{slide.link.linkText}
													</Link>
												</div>
											)}
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
				{totalSlides > 1 &&
					<div className="progress-bar block mt-[3rem] md-up:mt-[5rem] relative w-full">
						<span className="block bg-white w-full md-up:max-w-[105%] h-[1px] absolute left-0 top-1/2 -translate-y-1/2"></span>
						<div
							className="h-[1rem] md:h-[1.6rem] bg-pink transition-all duration-300 relative z-10"
							style={{
								width: `${((currentSlide + 1) / totalSlides) * 100}%`,
							}}
						></div>
					</div>}
			</div>
		</section>
	);
};

export default ColTwoSlider;
