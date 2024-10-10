'use client';
import Link from 'next/link';

const RedirectLinks = ({ props, contentname, content }) => {
	return (
		<section className="redirectLinks bg-[black]  py-[5.6rem] lg:py-[4rem] sm:!py-[3rem]">
			<div className="container">
				<div className="wrapper w-full relative flex flex-wrap justify-between items-center">
					{content?.content.map((item, index) => (
						<div Key={index} className={`${index === 1 ? 'lg-up:text-right lg:block' : ''} ${props === true ? 'lg:w-full' : ''} ${index === 0 && props === true ? 'lg:hidden' : 'sm:hidden'} btnWrap sm:w-full sm:mb-[0rem] sm:hidden`}
						 >
							<Link
								className={`${index === 1 ? ' lg:!pr-[1rem] laptopsmall:!pr-0' : 'pl-[2.2rem]'} ${index === 0 ? 'left' : ''}  tertiary-btn  !pr-[0]  text-[white]`} 
								href={item?.buttonUrl}
							>
								{item.txt}
							</Link>
							{props === true ? (
								<p className={` mt-[1rem] text-[1.4rem] laptop:text-[12px] lg:text-[12px]  text-white`}>
									{item.subtxt}
								</p>
							) : (
								''
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
export default RedirectLinks;
