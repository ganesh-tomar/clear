'use client';
import Link from 'next/link';

const data = {
	insights: [
		{
			txt: 'Previous article',
			subtxt: '3 Key Takeaways from the Top Fortune 500 B2B Tech Homepages ',
		},
		{
			txt: 'Next article',
			subtxt: 'Lessons from 5 SaaS Companies to Boost Website Conversions for Your B2B',
		},
	],
	detail: [
		{
			txt: 'Previous case study',
		},
		{
			txt: 'Next case study',
		},
	],
};


const RedirectLinks = ({ props, contentname }) => {

    const content = data[contentname];
	return (
		<section className="redirectLinks bg-[black]  py-[5.6rem] lg:py-[4rem] sm:!py-[3rem]">
			<div className="container">
				<div className="wrapper w-full relative flex flex-wrap justify-between">
					{content.map((item, index) => (
						<div
							className={`  ${index === 1 ? 'lg-up:text-right  lg:block' : ''} ${props === true ? 'lg:w-full' : ''} ${index === 0 && props === true ? 'lg:hidden' : 'sm:hidden'} btnWrap mt-5 sm:w-full sm:mb-[2rem] sm:hidden`}
						Key={index} >
							<Link
								className={`${index === 1 ? '!pr-[3rem]' : 'pl-[3rem]'} ${index === 0 ? 'left' : ''}  tertiary-btn  !pr-[0]  text-[white]`} 
								href="/case-studies-detail#"
							>
								{item.txt}
							</Link>
							{props === true ? (
								<p className={`${index === 1 ? 'pr-[3rem]' : 'pl-[3rem]'} mt-[1rem] text-[1.4rem] laptop:text-[12px] lg:text-[12px]  text-white`}>
									{item.subtxt}
								</p>
							) : (
								''
							)}
						</div>
					))}

					{/* <div
						className={`${
							props === true ? 'lg:w-full' : ''
						}  btnWrap mt-5 sm:w-full sm:mt-0 text-right`}
					>
						<Link
							className="tertiary-btn text-[white] !pr-[2.5rem]"
							href="/case-studies-detail#"
						>
							Next case study
						</Link>
						{props === true ? (
							<p className="mt-[1rem] text-[1.4rem] pr-[3rem] text-white">
								Lessons from 5 SaaS Companies to Boost Website Conversions for
								Your B2B{' '}
							</p>
						) : (
							''
						)}
					</div> */}
				</div>
			</div>
		</section>
	);
};
export default RedirectLinks;
