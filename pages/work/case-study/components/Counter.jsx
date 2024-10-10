import { useState, useEffect, useRef } from 'react';

const Counter = ({content}) => {
	var number 
	var numberTwo 
	var numThree 
	var operator
	var operatorTwo
	var operatorThree
	if(content?.countData?.length === 3) {
		number = content?.countData[0]?.number
		operator = content?.countData[0]?.oprator
		numberTwo = content?.countData[1]?.number
		operatorTwo = content?.countData[1]?.oprator
		numThree = content?.countData[2]?.number
		operatorThree = content?.countData[2]?.oprator
	}
	
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

							const timeOnSiteIncrement = number / steps;
							const formConversionsIncrement = numberTwo / steps;
							const downloadsIncrement = numThree / steps;

							setTimeOnSite((prevTime) =>
								Math.min(prevTime + timeOnSiteIncrement, number),
							);
							setFormConversions((prevConversions) =>
								Math.min(prevConversions + formConversionsIncrement, numberTwo),
							);
							setDownloads((prevDownloads) =>
								Math.min(prevDownloads + downloadsIncrement, numThree),
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
		<section className="counter bg-black" ref={counterRef}>
			<div className="container">
				<h6 className="!text-pink mb-[20px] font-bold text-[20px]">Real-world impact</h6>
				<div className="wrapper flex flex-wrap relative justify-between xs:justify-left max-w-[125rem]">
					<div className="wrap sm:mb-[2rem] sm:w-[100%]">
						<h1 className="large text-[white] mb-[1rem] xs:w-[100%] !font-[700]">
							<span>{operator}</span>{Math.round(timeOnSite)}<span>%</span>{' '}
						</h1>
						<p className="text-white font-medium text-[20px]">{content?.countData[0]?.describe}</p>
					</div>
					<div className="wrap sm:mb-[2rem] sm:w-[100%]">
						<h1 className="large text-[white] mb-[1rem] !font-[700]">
						<span>{operatorTwo}</span>{Math.round(formConversions)}<span>%</span>{' '}
						</h1>
						<p className="text-white font-medium text-[20px]">{content?.countData[1]?.describe}</p>
					</div>
					<div className="wrap sm:mb-[2rem] sm:w-[100%]">
						<h1 className="large text-[white] mb-[1rem] !font-[700]">
						<span>{operatorThree}</span>{Math.round(downloads)}<span>%</span>{' '}
						</h1>
						<p className="text-white font-medium text-[20px]">{content?.countData[2]?.describe}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Counter;
