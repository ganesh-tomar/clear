'use client';
import Image from 'next/image';
import Link from 'next/link';

const Contactoverview = () => {
	return (
		<section className="contactoverview min-h-[69rem] lg:min-h-[60rem] sm:!min-h-[50rem] padding-md dark__overlay flex-row">
			<div className="bg-img">
				<Image src="/clear-rectangle.png" width={1000} height={1000} alt='img' className='w-full h-full object-cover' fetchPriority="high"/>
			</div>
			<div className="container">
				<div className="wrapper w-full flex flex-col justify-between lg:justify-start h-full">
					<div className="heading-wrapper relative lg:mb-[5rem]">
						<div className="tab-wrap relative mb-[2rem]">
							<span className="tab px-[1rem] inline-block py-[0.5rem] bg-black text-[16px] font-bold text-white">
								Headquarters
							</span>
						</div>
						<h2 className="h1 text-white">San Jose, CA</h2>
					</div>
					<div className="link-wrapper max-w-[47rem] xm:max-w-[64rem]">
						<h5 className='text-white mb-[3rem]'>1570 The Alameda, Suite 330 San Jose, CA 95126</h5>
						<p className="link-wrap mb-[1rem]">
							<Link href="mailto:info@cleardigital.com" className='text-white'>info@cleardigital.com</Link>
						</p>
						<p className="link-wrap mb-[1rem]">
							<Link href="tel:408.246.0000" className='text-white'>408.246.0000</Link>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Contactoverview;
