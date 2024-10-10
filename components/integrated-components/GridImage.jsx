import { useState, useEffect } from 'react';
import Image from 'next/image';

const ImageGrid = ({ items, halfscreen, smallscreen }) => {
	const [isSmScreen, setIsSmScreen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsSmScreen(window.innerWidth < 640); // Adjust the breakpoint as needed
		};

		handleResize(); // Set initial screen size
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const getStylesByIndex = (index) => {
		switch (index) {
			case 0:
				return {
					width: '50%',
					height: '100%',
					left: '0',
					top: '0',
				};
			case 1:
				return {
					width: '50%',
					height: '50%',
					left: 'auto',
					right: '0',
					top: '0',
					bottom: 'auto',
				};
			case 2:
				return {
					width: '50%',
					height: '50%',
					left: 'auto',
					right: '0',
					bottom: '0',
					top: 'auto',
				};
			default:
				return {};
		}
	};

	return (
		<section
			className={`imagegrid no-padding height__full-nav grid lg:min-h-[60rem] sm:!min-h-[30rem] ${!halfscreen && isSmScreen ? 'sm:!h-auto' : 'h-[54.5rem] lg:h-[30.5rem]'
				}`}
		>
			{items.map((item, index) => {
				const styles = getStylesByIndex(index);

				return (
					<div
						key={index}
						className={`bg-img absolute flex flex-wrap items-center sm:!h-[25rem] ${smallscreen ? 'sm:min-h-[25vh]' : ''
							}`}
						style={{
							...styles,
							background: item.bgcolor || 'transparent',
						}}
					>
						{item?.logo && item?.logo?.sourceUrl ? (
							<Image
								src={item?.logo?.sourceUrl}
								width={2000}
								height={2000}
								alt={item?.logo?.altText || 'image'}
								className={`w-full h-full ${item?.bigImage ? 'object-cover' : ''}`}
							/>
						) : (
							<div className="text-wrap text-center w-full">
								<h2 className="text-[white] sm:text-[30px]">{item?.txt}</h2>
							</div>
						)}
					</div>
				);
			})}
		</section>
	);
};

export default ImageGrid;
