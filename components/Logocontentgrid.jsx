'use client';
import Link from 'next/link';
import Image from 'next/image';
import UnderlineText from './UnderlineText';

const Logocontentgrid = () => {
	return (
		<section className="logocontentgrid bg-black">
			<div className="container">
				<div className="wrapper w-full relative flex flex-wrap ">
					<div className="content-wrapper relative pr-[6.5rem] w-[45%] lg:w-[100%] lg:pr-[0] lg:mb-[5rem]">
						<h6 className="subtitle mb-[2rem]">Lorem ipsum</h6>
						<h3 className="mb-[3rem] pr-[9rem] whitePointingArrow">
							Headline about strategic{' '}
							<span className="text-pink relative inline-block whiteThin bpm underline-container">
								partnerships
							</span>
						</h3>
						<p className="mb-[3rem]">
							Lorem ipsum dolor sit amet consectetur. Pharetra dictum faucibus
							proin turpis sit. Tortor amet sit nunc libero non nec suscipit
							volutpat in. Viverra adipiscing dolor amet vitae. Malesuada vitae
							consectetur erat risus ac nibh. Lectus egestas adipiscing interdum
							hendrerit vitae consequat odio. Mattis imperdiet vitae tellus
							fringilla. Magna.
						</p>
						<p className="mb-[3rem]">Viverra adipiscing dolor amet vitae. Malesuada vitae consectetur erat risus ac nibh. Lectus egestas adipiscing interdum hendrerit vitae consequat odio.</p>
						<div className="btn-wrap">
							<Link className="btn pink white-bordered" href="">
								View our partners
							</Link>
						</div>
					</div>
					<div className="image-wrapper w-[calc(55%-8.7rem)] ml-[8.7rem] lg:w-[100%] lg:ml-[0]">
						<div className="w-[calc(100%+3rem)] ml-[-1.5rem] flex flex-wrap">
							<div className="area-wrap h-[33rem] border greyborder w-[calc(50%-3rem)] flex flex-wrap justify-center items-center mx-[1.5rem] mb-[3rem] sm:w-[100%]">
								<div className="img-wrap max-w-[22rem] max-h-[10.3rem] ">
									<Image
										src="/adobe.svg"
										width={1000}
										height={1000}
										className="w-full h-full object-contain"
										alt="img"
									/>
								</div>
							</div>
							<div className="area-wrap h-[33rem] border greyborder w-[calc(50%-3rem)] flex flex-wrap justify-center items-center mx-[1.5rem] mb-[3rem] sm:w-[100%]">
								<div className="img-wrap max-w-[22rem] max-h-[10.3rem] ">
									<Image
										src="/drupal.svg"
										width={1000}
										height={1000}
										className="w-full h-full object-contain"
										alt="img"
									/>
								</div>
							</div>
							<div className="area-wrap h-[33rem] border greyborder w-[calc(50%-3rem)] flex flex-wrap justify-center items-center mx-[1.5rem] mb-[3rem] sm:w-[100%]">
								<div className="img-wrap max-w-[22rem] max-h-[10.3rem] ">
									<Image
										src="/acquia.svg"
										width={1000}
										height={1000}
										className="w-full h-full object-contain"
										alt="img"
									/>
								</div>
							</div>
							<div className="area-wrap h-[33rem] border greyborder w-[calc(50%-3rem)] flex flex-wrap justify-center items-center mx-[1.5rem] mb-[3rem] sm:w-[100%]">
								<div className="img-wrap max-w-[22rem] h-[10.3rem] ">
									<Image
										src="/Pantheon.png"
										width={1000}
										height={1000}
										className="w-full h-full object-contain"
										alt="img"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Logocontentgrid;
