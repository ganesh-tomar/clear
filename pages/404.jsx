import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Lottie from 'react-lottie';
import Layout from '../components/layout';
import { NextSeo } from 'next-seo';
import Specs_Animation from '../public/Lootie/404_Specs_Animation.json';

export default function Custom404() {
	const [animationState, setAnimationState] = useState({
		isStopped: true,
		isPaused: false,
	});
	const animationContainerRef = useRef(null);
	useEffect(() => {
		const handleIntersection = (entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					setTimeout(() => {
						setAnimationState({ isStopped: false, isPaused: false });
					}, 500);
					observer.disconnect();
				}
			});
		};

		const observer = new IntersectionObserver(handleIntersection, {
			threshold: 0.1,
		});

		if (animationContainerRef.current) {
			observer.observe(animationContainerRef.current);
		}

		return () => {
			if (observer && animationContainerRef.current) {
				observer.unobserve(animationContainerRef.current);
			}
		};
	}, []);
	return (

		<Layout>
			<NextSeo
				title="ClearDigital 404"
				description="ClearDigital "
			/>
			<section className='blade_404 bg-black height__full grid__parallax'>
				<div className="container">
					<div className="w-colTwoWrapper flex items-center -ml-[1rem] md:w-full md:ml-0 md:flex-wrap lg:pt-[5rem] lg:flex-col-reverse lg:w-full lg:ml-0">
						<div className="w-colTwo mx-[1rem] pt-[3rem] lg:w-full sm:pt-0 lg:mx-0">
							<h1 className='h2'>Page Not Found</h1>
							<p className='mt-[3rem]'>Lorem ipsum dolor sit amet consectetur. Mattis volutpat lacus.</p>
							<div className="btnWrapper inline-block">
								<div className="btn-wrap inline-block mr-[3rem] mb-[3rem]">
									<Link className='btn pink white-bordered' href={`/`}>Back to Homepage</Link>
								</div>
								<div className="btn-wrap inline-block">
									<Link className='tertiary-btn' href={`/case-studies-overview`}>Check Out Case Studies</Link>
								</div>
							</div>
						</div>
						<div ref={animationContainerRef} className="w-colTwo relative mx-[1rem] lg-up:pb-[18rem] lg:pb-[5rem] lg-up:min-w-[50rem] min-h-[44rem] flex justify-center lg:w-[90%] sm:min-h-[30.5rem] lg:mx-0 overflow-visible">
							<div className="starsDoodleContainer w-full img-wrap overflow-visible">
								<Lottie
									options={{
										loop: false,
										autoplay: false,
										animationData: Specs_Animation,
										rendererSettings: {
											preserveAspectRatio: 'xMidYMid slice',
										},
									}}
									isStopped={animationState.isStopped}
									isPaused={animationState.isPaused}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>

	);
}