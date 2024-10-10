import { useState, useEffect, useRef } from 'react';

const Counter = () => {
	const counterdata = {
		count: [
			{
				para: 'Real-world impact',
			},
			{
				strin: '59',
				symbol: '%',
				case: 'Time on site',
			},
			{
				strin: '113',
				symbol: '%',
				case: 'Form conversions',
			},
			{
				strin: '84',
				symbol: '%',
				case: 'Downloads',
			},
		],
	};

	const [timeOnSite, setTimeOnSite] = useState(0);
	const [formConversions, setFormConversions] = useState(0);
	const [downloads, setDownloads] = useState(0);

	const duration = 10000; // Duration in milliseconds
	const counterRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const interval = setInterval(() => {
							const steps = duration / 1000;

							const timeOnSiteIncrement = 59 / steps;
							const formConversionsIncrement = 113 / steps;
							const downloadsIncrement = 84 / steps;

							setTimeOnSite((prevTime) =>
								Math.min(prevTime + timeOnSiteIncrement, 59),
							);
							setFormConversions((prevConversions) =>
								Math.min(prevConversions + formConversionsIncrement, 113),
							);
							setDownloads((prevDownloads) =>
								Math.min(prevDownloads + downloadsIncrement, 84),
							);
						}, 1000 / (duration / 1000));

						// Clear the interval when the component is not in the viewport
						return () => clearInterval(interval);
					}
				});
			},
			{ threshold: 0.5 }, // Trigger when at least 50% of the component is in the viewport
		);

		if (counterRef.current) {
			observer.observe(counterRef.current);
		}

		// Cleanup the observer on component unmount
		return () => observer.disconnect();
	}, [counterRef]);

	return (
		<section className="counter bg-[black]" ref={counterRef}>
			<div className="container">
				<h4 className="text-pink mb-[20px] font-bold">Real-world impact</h4>
				<div className="wrapper flex flex-wrap relative justify-between xs:justify-left max-w-[125rem]">
					<div className="wrap sm:mb-[2rem] sm:w-[100%]">
						<h2 className="large text-[white] mb-[1rem] xs:w-[100%]">
							{Math.round(timeOnSite)} <span>%</span>{' '}
						</h2>
						<h4 className="text-white font-medium">Time on site</h4>
					</div>
					<div className="wrap sm:mb-[2rem] sm:w-[100%]">
						<h2 className="large text-[white] mb-[1rem]">
							{Math.round(formConversions)} <span>%</span>{' '}
						</h2>
						<h4 className="text-white font-medium">Form conversions</h4>
					</div>
					<div className="wrap sm:mb-[2rem] sm:w-[100%]">
						<h2 className="large text-[white] mb-[1rem]">
							{Math.round(downloads)} <span>%</span>{' '}
						</h2>
						<h4 className="text-white font-medium">Downloads</h4>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Counter;
