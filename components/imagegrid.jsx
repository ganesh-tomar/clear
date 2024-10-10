import { useState } from 'react';
import { useEffect } from 'react';
import Image from 'next/image';

const Imagegrid = ({ contentName, halfscreen, smallscreen, col }) => {
	const [isSmScreen, setIsSmScreen] = useState(false);
	useEffect(() => {
		const handleResize = () => {
			setIsSmScreen(window.innerWidth < 640); // You can adjust the breakpoint as needed
		};

		handleResize(); // Set initial screen size
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	const contentData = {
		data: [
			{
				bgimg: '/office.png',
				width: '100%',
				height: '50%',
				left: '0',
				top: '0',
			},
			{
				bgimg: '/building.png',
				width: '50%',
				height: '50%',
				left: '0',
				top: 'unset',
				bottom: '0',
			},
			{
				bgimg: '/radically.png',
				width: '50%',
				height: '50%',
				right: '0',
				left: 'unset',
				top: 'unset',
				bottom: '0',
			},
		],

		twocards: [
			{
				bgimg: '/Hes.svg',
				width: '50%',
				height: '100%',
				left: '0',
				top: 'unset',
				bottom: '0',
				classR: 'up',
			},
			{
				bgimg: '/Illustration.svg',
				width: '50%',
				height: '100%',
				right: '0',
				left: 'unset',
				top: 'unset',
				bottom: '0',
				classR: 'down',
			},
		],

		onecard: [
			{
				bgimg: '/photography.png',
				width: '100%',
				height: '100%',
				left: '0',
				top: '0',
			},
		],

		threecard: [
			{
				bgimg: '/phone.png',
				width: '50%',
				height: '100%',
				left: '0',
				top: '0',
				classR: 'fullscreen',
			},
			{
				bgcolor: '#75C530',
				width: '50%',
				txt: 'Authentic',
				height: '50%',
				right: '0',
				left: 'unset',
				top: '0',
				smallscreen: true,
				classR: 'up'
			},
			{
				bgimg: '/clircless.png',
				width: '50%',
				height: '50%',
				right: '0',
				contain: 'contain',
				left: 'unset',
				bottom: '0',
				top: 'unset',
				smallscreen: true,
				classR: 'down'
			},
		],

		careerscard: [
			{
				bgimg: '/section/ImageGrid/design-team.png',
				width: '50%',
				height: '100%',
				left: '0',
				top: '0',
			},
			{
				bgimg: '/section/ImageGrid/design-team-2.png',
				width: '50%',
				height: '50%',
				right: '0',
				left: 'unset',
				top: '0',
				bottom: 'unset',
				classR: 'up',
			},
			{
				bgimg: '/section/ImageGrid/design-team-3.png',
				width: '50%',
				height: '50%',
				right: '0',
				left: 'unset',
				bottom: '0',
				top: 'unset',
				classR: 'down'
			},
		],
	};


	const content = contentData[contentName] || [];

	return (
		<section
			className={`imagegrid no-padding  ${(contentName === 'data' ||
				contentName === 'threecard' ||
				contentName === 'careerscard') && !isSmScreen
				? 'height__full'
				: 'h-[54.5rem] lg:h-[30.5rem] sm:!h-auto'
				} ${halfscreen === true ? 'height__full-nav grid lg:min-h-[60rem] sm:!min-h-[30rem]' : ''}`}
		>
			{content.map((item, index) => (
				<div
					key={index}
					className={`bg-img absolute flex flex-wrap items-center sm:!h-[25rem] ${item.left ? 'left-[0]' : ''
						} ${item.right ? 'right-[0]' : ''} ${item.bottom ? 'bottom-[0]' : ''
						} ${item.contain === 'contain' ? '!object-contain' : 'object-cover'}
					${smallscreen === true ? 'sm:min-h-[25vh]' : ''}  ${item.classR ? item.classR : ''}`}

					style={{
						width: item.width,
						height: item.height,
						background: item.bgcolor,
						left: item.left !== 'unset' ? item.left : 'auto',
						right: item.right !== 'unset' ? item.right : 'auto',
						bottom: item.bottom !== 'unset' ? item.bottom : 'auto',
						top: item.top !== 'unset' ? item.top : 'auto',
					}}
				>

					{!item.bgimg && (
						<div className="text-wrap text-center w-full">
							<h2 className="text-[white] sm:text-[30px]">{item.txt}</h2>
						</div>
					)}

					{item.bgimg && (
						<>
							<Image
								src={item.bgimg}
								width={2000}
								height={2000}
								alt="image"
								className={`w-full h-full ${item.contain === 'contain' ? '!object-contain' : 'object-cover'}`}
							/>
							{!item.bgimg && (
								<div className="text-wrap text-center w-full">
									<h2 className="text-[white]">{item.txt}</h2>
								</div>
							)}
						</>
					)}
				</div>
			))}

			<div className="container">{/* Add your container content here */}</div>
		</section>
	);
};

export default Imagegrid;
