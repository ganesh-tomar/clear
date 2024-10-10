'use client';
import Image from 'next/image';
import Link from 'next/link';

const NewsCards = ({ contentname }) => {
	const carddata = {
		award: [
			{
				intro: 'Making headlines—Clear Digital in the news',
				bgimg: '/blue-pattern.jpg',
				heading:
					'Lorem ipsum dolor sit amet consectetur. Aliquam ac semper massa luctus etal utot pellentesque orci.',
				tab: 'Media Coverage',
				subtxt: 'February 3, 2024',
				externalimg: true,
				url: '/',
				linkText: '',
				redirect: true,
				color: 'text-white',
				overlay: true,
			},
			{
				bgimg: '/redcircle.png',
				heading:
					'Lorem ipsum dolor sit amet consectetur. Aliquam ac semper massa luctus etal utot pellentesque orci.',
				tab: 'Announcement',
				subtxt: 'February 3, 2024',
				url: '/',
				linkText: '',
				redirect: true,
				color: 'text-white',
				overlay: true,
			},
			{
				heading:
					'Lorem ipsum dolor sit amet consectetur. Aliquam ac semper massa luctus etal utot pellentesque orci. Aliquam ac semper massa luctus etal utot pellentesque orci.',
				tab: 'Press Release',
				subtxt: 'February 3, 2024',
				url: '/',
				linkText: '',
				redirect: true,
				color: 'text-black',
				border: true,
				bgcolor: 'bg-white',
				blackoverlay: true,
			},
		],
		news: [
			{
				intro: 'Top News',
				heading:
					'Lorem ipsum dolor sit amet consectetur. Aliquam ac semper massa luctus etal utot pellentesque orci.',
				tab: 'Media Coverage',
				subtxt: 'February 3, 2024',
				externalimg: '/external-link.svg',
				url: '/',
				linkText: '',
				redirect: true,
				color: 'text-white',
				bgcolor: 'bg-gray',
				overlay: true,
				absoluteimg: '/Forbes-logo 1.png',
			},
			{
				bgimg: '/redcircle.png',
				heading:
					'Lorem ipsum dolor sit amet consectetur. Aliquam ac semper massa luctus etal utot pellentesque orci.',
				tab: 'Announcement',
				subtxt: 'February 3, 2024',
				url: '/',
				linkText: '',
				redirect: true,
				color: 'text-white',
				overlay: true,
			},
			{
				heading:
					'Lorem ipsum dolor sit amet consectetur. Aliquam ac semper massa luctus etal utot pellentesque orci.',
				tab: 'Press Release',
				subtxt: 'February 3, 2024',
				url: '/',
				linkText: '',
				redirect: true,
				color: 'text-white',
				border: true,
				bgcolor: 'bg-white',
				overlay: true,
			},
		],
	};

	const content = carddata[contentname] || [];

	return (
		<section
			className={`${
				contentname === 'award' ? 'bg-gray' : 'grid__parallax dark pt-0'
			} default-padding newscards `}
		>
			<div className="container">
				{content.length > 0 && (
					<div className="intro mb-[5rem]">
						<h3>{content[0].intro}</h3>
					</div>
				)}

				<div className="wrapper ml-[-1.5rem]  w-[calc(100%+3rem)] sm:w-full flex flex-wrap sm:ml-0">
					{content.map((item, index) => (
						<div
							className={`${item.overlay ? 'overlay' : ''} ${
								item.bgcolor ? item.bgcolor : ''
							} ${
								item.blackoverlay
									? '!justify-start overlayblack md:!justify-between'
									: ''
							} ${item.border ? 'border border-black' : ''} ${
								item.bgimg
									? 'col-three max-w-[45rem] w-[calc(33.33%-3rem)] lg:w-[calc(50%-3rem)] sm:!w-full md:min-h-[40rem]  mx-[1.5rem] min-h-[45rem]  relative flex flex-col justify-between lg:mb-[2rem] sm:mx-0'
									: ' col-three max-w-[45rem] lg:w-[calc(50%-3rem)] w-[calc(33.33%-3rem)] sm:!w-full md:min-h-[40rem] mx-[1.5rem] min-h-[45rem] relative flex flex-col justify-between lg:mb-[2rem] sm:mx-0 overflow-hidden'
							} z-[5]`}
							key={index}
							data-cursor-expand
						>
							<Link
								href={item.url}
								className="redirect"
								target={item.externalimg ? '_blank' : '_self'}
							>
								.
							</Link>
							{item.bgimg ? (
								<div className="bg-img">
									<Image
										src={item.bgimg}
										width={1000}
										height={1000}
										alt="img"
										className="w-full h-full object-cover"
									/>
								</div>
							) : (
								''
							)}

							{item.absoluteimg ? (
								<div className="img-wrap max-w-[13.7rem] max-h-[3.5rem] top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute">
									<Image
										src={item.absoluteimg}
										width={1000}
										height={1000}
										className="w-full h-full object-cover"
										alt="img"
									/>
								</div>
							) : (
								''
							)}

							<div
								className={
									item.bgimg
										? 'tab-wrapper p-[5rem] flex flex-wrap justify-between ipad:p-[4rem]'
										: 'tab-wrapper p-[5rem] pb-[3rem] flex flex-wrap justify-between ipad:p-[4rem]'
								}
							>
								<div className="tab-wrap relative">
									<span className="font-bold py-[0.5rem] px-[1rem] bg-black text-white text-[16px] xxl-up:text-[1.6rem] inline-block mr-[1rem]">
										{item.tab}
									</span>
								</div>
								{item.externalimg ? (
									<div className="img-wrap min-w-[3rem] min-h-[3rem]">
										<svg
											width="30"
											height="30"
											viewBox="0 0 30 30"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M22.5 16.25V23.75C22.5 24.413 22.2366 25.0489 21.7678 25.5178C21.2989 25.9866 20.663 26.25 20 26.25H6.25C5.58696 26.25 4.95107 25.9866 4.48223 25.5178C4.01339 25.0489 3.75 24.413 3.75 23.75V10C3.75 9.33696 4.01339 8.70107 4.48223 8.23223C4.95107 7.76339 5.58696 7.5 6.25 7.5H13.75"
												stroke="#FA198C"
												strokeWidth="2"
												strokeLinecap="round"
												stroke-linejoin="round"
												className='ipad:stroke-[#fff]'
											/>
											<path
												d="M18.75 3.75H26.25V11.25"
												stroke="#FA198C"
												strokeWidth="2"
												strokeLinecap="round"
												stroke-linejoin="round"
												className='ipad:stroke-[#fff]'
											/>
											<path
												d="M12.5 17.5L26.25 3.75"
												stroke="#FA198C"
												strokeWidth="2"
												strokeLinecap="round"
												stroke-linejoin="round"
												className='ipad:stroke-[#fff]'
											/>
										</svg>
									</div>
								) : (
									''
								)}
							</div>
							<div
								className={
									item.bgimg
										? 'blackoverlay p-[5rem] !pt-0 ipad:p-[4rem]'
										: 'blackoverlay p-[5rem] !pt-0 ipad:p-[4rem] z-[5]'
								}
							>
								<p
									className={item.color ? item.color + ' small  mb-[2rem]' : ''}
								>
									{item.subtxt}
								</p>
								<h4 className={`h4 ${item.color ? item.color : ''}`}>
									{item.heading}
								</h4>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default NewsCards;
