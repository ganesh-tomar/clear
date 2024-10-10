'use client';
import Image from 'next/image';

const StaticsWithContent = ({ Name }) => {
	const content = {
		outcome: [
			{
				width: '',
				boldtxt: '$5B',
				heading: 'IPO Valuation',
				paragraph:
					'We refined Hippo Insurance’s website experience, helping them achieve a $5B IPO valuation.',
				logo: '/Hippo.png',
				secondcolboldtxt: '$3.7B',
				secondcolheading: 'Post-Rebrand Valuation',
				secondcolparagraph:
					'We partnered with Cohesity for a successful rebranding, resulting in a $3.7 billion valuation.',
				secondcollogo: '/Cohesity_Logo.png',
				secondcol: true,
			},
			{
				width: 'full',
				boldtxt: '$2.8B',
				heading: 'Capital Raised',
				paragraph:
					'Over the past five years, our clients have raised a whopping $2.8B in capital.',
			},
		],
	};

	const Data = content[Name] || [];

	return (
		<section className="staticswithcontent grid__parallax dark">
			<div className="container">
				<div className="wrapper relative flex flex-wrap">
					{Data.map((item, index) => {
						if (item.width === 'full') {
							return (
								<div
									className="card-wrap relative pt-[5rem] w-staticsfullwidth flex flex-wrap justify-between ml-[-3.75rem] lg:ml-0 "
									key={index}
								>
									<div className="wrap-case w-staticshalfwidth lg:w-full lg:mx-0 lg:mb-[2rem] max-w-[59rem]  mx-[3.75rem]">
										<h1 className="text-[25rem] lg:text-[22rem] sm:!text-[12rem] font-light">{item.boldtxt}</h1>
									</div>
									<div className="text-wrap w-staticshalfwidth lg:w-full lg:mx-0 max-w-[57rem] mx-[3.75rem]">
										<h4 className="mb-[2rem]">{item.heading}</h4>
										<p className="max-w-[45rem]">{item.paragraph}</p>
									</div>
								</div>
							);
						} else {
							return (
								<div
									className="card relative w-staticsfullwidth  mb-[9rem] flex flex-wrap sm:mb-[4rem] sm:ml-0 justify-between ml-[-3.75rem] "
									key={index}
								>
									<div className="card-wrap pt-[5rem] relative w-staticshalfwidth sm:w-full sm:mx-0 sm:mb-[4rem] max-w-[57rem] mx-[3.75rem]">
										<h2 className="checkmark large mb-[5rem] relative inline-block">
											{item.boldtxt}
										</h2>
										<h4 className="mb-[2rem]">{item.heading}</h4>
										<p className="max-w-[45rem]">{item.paragraph}</p>
										<div className="button-icon max-w-[16.4rem] h-[3.4rem] mt-[1.8rem]">
											<Image
												src={item.logo}
												alt={item.heading}
												className="w-full h-full object-contain object-left"
												width={1000}
												height={1000}
											/>
										</div>
									</div>
									<div className="card-wrap pt-[5rem] relative w-staticshalfwidth sm:w-full sm:mx-0 max-w-[57rem] mx-[3.75rem]">
										<h2 className="checkmark large mb-[5rem] relative inline-block">
											{item.secondcolboldtxt}
										</h2>
										<h4 className="mb-[2rem]">{item.secondcolheading}</h4>
										<p className="max-w-[45rem]">{item.secondcolparagraph}</p>
										<div className="button-icon max-w-[16.4rem] h-[3.4rem] mt-[1.8rem]">
											<Image
												src={item.secondcollogo}
												alt={item.secondcolheading}
												className="w-full h-full object-contain object-left"
												width={1000}
												height={1000}
											/>
										</div>
									</div>
								</div>

								// {item.secondcol && (
								// 	<>
								// 		<div className="wrap-case w-staticshalfwidth max-w-[59rem] mx-[3.75rem]">
								// 			<h1 className="text-[25rem] font-light">
								// 				{item.secondcolboldtxt}
								// 			</h1>
								// 			<Image
								// 				src={item.secondcollogo}
								// 				alt={item.secondcolheading}
								// 				width={1000}
								// 				height={1000}
								// 			/>
								// 		</div>
								// 		<div className="text-wrap w-staticshalfwidth max-w-[57rem] mx-[3.75rem] pl-[4rem]">
								// 			<h4 className="mb-[2rem]">{item.secondcolheading}</h4>
								// 			<p className="max-w-[45rem]">{item.secondcolparagraph}</p>
								// 		</div>
								// 	</>
								// )}
							);
						}
					})}
				</div>
			</div>
		</section>
	);
};

export default StaticsWithContent;
