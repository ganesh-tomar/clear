import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollComponent = () => {
	const sectionRef = useRef(null);
	const textRefs = useRef([]);
	const [parallaxInit, setParallaxInit] = useState(false);

	// Function to initialize animations
	const initAnimations = () => {
		// Clear previous animations and ScrollTriggers
		ScrollTrigger.getAll().forEach(trigger => {
			if (trigger.trigger && document.querySelector('.scrolltxt') && document.querySelector('.scrolltxt').contains(trigger.trigger)) {
				trigger.kill();
			}
		});

		textRefs.current.forEach((el, index) => {
			const direction = el.dataset.direction;
			const moveDistance = window.innerWidth * 1.5; // Adjusted for smoother performance

			gsap.to(el, {
				right: direction === 'right' ? moveDistance : `calc(20% - ${moveDistance}px)`,
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top bottom', // Start animation when top of section hits bottom of viewport
					end: 'bottom top',   // End animation when bottom of section hits top of viewport
					scrub: true,         // Smooth animation on scroll
					ease: 'power1.out',  // Added easing for smoother effect
				},
			});
		});

		// Refresh ScrollTrigger after setting animations
		ScrollTrigger.refresh();
	};

	// Debounced resize handler
	useEffect(() => {
		let resizeTimeout;
		const handleResize = () => {
			clearTimeout(resizeTimeout);
			resizeTimeout = setTimeout(() => {
				ScrollTrigger.refresh();
				initAnimations();
			}, 100); // Adjust delay to avoid too frequent recalculations
		};

		window.addEventListener('resize', handleResize);

		return () => {
			clearTimeout(resizeTimeout);
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	// Scroll handler to initialize parallax effect
	useEffect(() => {
		const handleScroll = () => {
			const element = document.querySelector('.scrolltxt');
			if (element) {
				const footerRect = element.getBoundingClientRect();
				const footerDistanceFromBottom = window.innerHeight - footerRect.top;
				if (footerDistanceFromBottom > 0) {
					setParallaxInit(true);
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Initialize on first load

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	// Initialize animations when the component mounts
	useEffect(() => {
		if (parallaxInit) {
			requestAnimationFrame(() => {
				initAnimations();
			});
		}
	}, [parallaxInit]);

	const content = [
		{
			pre: 'Brand Strategy &',
			post: 'Web Experiences',
			addon: 'User Research',
			colorClass: {
				pre: 'text-black',
				post: 'text-black',
				addon: 'text-gray',
			},
			moveFrom: 'right',
		},
		{
			pre: 'Systems Support',
			post: 'Motion Graphics & Videos',
			addon: 'Brand Messaging',
			colorClass: {
				pre: 'text-gray',
				post: 'text-black',
				addon: 'text-gray',
			},
			moveFrom: 'left',
		},
		{
			pre: 'Data & Metrics Analysis',
			post: 'Technology Integration',
			addon: 'Visual Identity',
			colorClass: {
				pre: 'text-black',
				post: 'text-black',
				addon: 'text-gray',
			},
			moveFrom: 'right',
		},
	];

	const renderTextBlocks = (item) => (
		<>
			<span className={item.colorClass.pre}> {item.pre}</span>
			<span className={item.colorClass.post}> {item.post} </span>
			<span className={item.colorClass.addon}> {item.addon} </span>
		</>
	);

	const Marquee = () => (
		<div ref={sectionRef} className="w-full">
			{content.map((item, index) => (
				<h2
					key={index}
					ref={(el) => (textRefs.current[index] = el)}
					data-direction={item.moveFrom}
					className="h1 sm:text-[clamp(35px, 5vw, 45px)]" // Responsive text
					style={{
						position: 'relative',
						right: item.moveFrom === 'right' ? '0px' : 'calc(20% - 0px)',
					}}
				>
					{Array(7)
						.fill(0)
						.map((_, i) => (
							<React.Fragment key={i}>
								{renderTextBlocks(item)}
							</React.Fragment>
						))}
					<span className={`${item.colorClass.pre} lg:hidden `}>
						{item.pre}
					</span>
					<span className={`${item.colorClass.post} lg:hidden`}>
						{item.post}
					</span>
					<span className={`${item.colorClass.addon} lg:hidden `}>
						{item.addon}
					</span>
				</h2>
			))}
		</div>
	);

	return <Marquee />;
};

export default ScrollComponent;
