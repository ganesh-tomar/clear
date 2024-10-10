'use client';
import Image from 'next/image';
import NewsData from '../data/news/news.json';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

// Ensure the plugin is registered only on the client-sid
if (typeof window !== 'undefined') {
	gsap.registerPlugin(ScrollToPlugin);
}

const Newsfilter = () => {
	const crossIcon = (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M9 9L15 15"
				stroke="black"
				strokeWidth="2"
				strokeLinecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M15 9L9 15"
				stroke="black"
				strokeWidth="2"
				strokeLinecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);

	const [FilterData, setFilterData] = useState(NewsData);
	//selected items
	const [topicListData, settopicListData] = useState(NewsData);
	const [topicData, settopicData] = useState([]);
	const [yearData, setyearData] = useState([]);
	const [isActive, setisActive] = useState(0);
	const [contentTypeVal, setcontentTypeVal] = useState([]);
	const [yearTypeVal, setyearTypeVal] = useState([]);

	// console.log(contentTypeVal);

	// pagination var
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 10;
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = Math.min(startIndex + itemsPerPage, FilterData.length);
	const totalPages = Math.ceil(FilterData.length / itemsPerPage);
	const [winWidth, isWinWidth] = useState(0);
	const [searchTerm, setSearchTerm] = useState('');

	const [searchquery, setsearchquery] = useState('');
	const [selectedTopic, setselectedTopic] = useState([]);
	const [selectedyear, setselectedyear] = useState([]);

	const uniqueTabs = [...new Set(topicListData.map((item) => item.tab))];

	const contenttype = uniqueTabs.sort();

	const uniqueyears = [...new Set(topicListData.map((item) => item.year))];

	const yeartype = uniqueyears.sort();

	const toggleactive = (i) => {
		isActive == i ? setisActive(0) : setisActive(i);
	};

	const scrollTop = useRef();
	const sectionRef = useRef();
	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		if (window.scrollY > 200) {
	// 			sectionRef.current.style.display = 'block';
	// 		} else {
	// 			sectionRef.current.style.display = 'none';
	// 		}
	// 	};
	// 	window.addEventListener('scroll', handleScroll);
	// 	return () => {
	// 		window.removeEventListener('scroll', handleScroll);
	// 	};
	// }, []);

	// console.log('selectedTopic', selectedTopic);
	// console.log('selectedyear', selectedyear);
	// console.log('FilterData', FilterData);
	// console.log('topicData', topicData);
	// console.log('yearData', yearData);
	useEffect(() => {
		const handleResize = () => {
			isWinWidth(window.innerWidth);
		};
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	const handlePageChange = (newPage) => {
		setCurrentPage(newPage);
		const sectionElement = document.getElementById("newsFilterBlogs");
		console.log(sectionElement.offsetTop);
		if (sectionElement) {
			// window.scrollTo({
			// 	top: '1000px',
			// 	behavior: "smooth",
			// });
			gsap.to(window, { duration: 1, scrollTo: { y: sectionElement.offsetTop } });
		}
	};
	// const sectionElement = document.getElementById("blogFilter");
	// if (sectionElement) {
	// 	window.scrollTo({
	// 	  top: sectionElement.offsetTop,
	// 	  behavior: "smooth", 
	// 	});
	// }


	const handleinputchange = (e) => {
		setsearchquery(e.target.value);
		const filterd = NewsData.filter(
			(item) =>
				item.tab.toLowerCase().includes(searchquery.toLowerCase()) ||
				item?.heading.toLowerCase().includes(searchquery.toLowerCase()),
		);
		setFilterData(filterd);
	};

	const Topicfetchhandler = (index, val) => {
		// console.log('Clicked value:', val);
		let checkTopic;
		checkTopic = val;
		let filteredData = [];
		let temp = [];

		if (selectedyear == '') {
			filteredData = NewsData.filter((item) => item.tab === val);
			setselectedTopic(checkTopic);
		} else {
			temp = NewsData.filter((item) => item.year === selectedyear);
			// console.log(selectedyear);
			filteredData = temp.filter((item) => item.tab === val);
			setselectedTopic(checkTopic);
		}
		settopicData(filteredData);
		setFilterData(filteredData);
	};
	const handleTopicCheckboxChange = (index) => {
		Topicfetchhandler(null, index);
	};

	const yearfetchhandler = (index, val) => {
		// console.log('Clicked value:', val);
		let checkYear;
		checkYear = val;
		let filteredData = [];
		let temp = [];
		if (selectedTopic == '') {
			filteredData = NewsData.filter((item) => item.year === val);
			setselectedyear(checkYear);
		} else {
			temp = NewsData.filter((item) => item.tab === selectedTopic);
			// console.log(temp);
			filteredData = temp.filter((item) => item.year === val);
			setselectedyear(checkYear);
		}
		setFilterData(filteredData);
		setyearData(filteredData);
	};
	// const handleYearCheckboxChange = (index) => {
	// 	yearfetchhandler(null, index);
	// };

	const handleYearCheckboxChange = (index) => {
		yearfetchhandler(null, index);
	};

	//tags click handler
	const tagsClickHandler = (categoryVal, listType) => {
		// console.log(categoryVal,listType); /
		if (listType === 'category') {
			setselectedTopic('');
			// console.log(selectedyear,'ye');
			if (selectedyear != '') {
				const filteredData = NewsData.filter(
					(item) => item.year === selectedyear,
				);
				// console.log(filteredData);
				setFilterData(filteredData);
			} else {
				setFilterData(NewsData);
			}
		} else {
			setselectedyear('');
			// console.log(selectedTopic,'ye');
			if (selectedTopic != '') {
				const filteredData = NewsData.filter(
					(item) => item.tab === selectedTopic,
				);
				// console.log(filteredData);
				setFilterData(filteredData);
			} else {
				setFilterData(NewsData);
			}
		}
	};
	// }

	const ClearAll = () => {
		setFilterData(NewsData);
		setsearchquery('');
		setselectedTopic('');
		setselectedyear('');
		setCurrentPage(1);
	};

	return (
		<section className="newsfilter bg-black block" id='newsFilterBlogs' >
			<div className="container">
				<div className="outer flex w-full lg:flex-wrap">
					<div className="left-col w-[29%] lg:w-full lg:mb-[2rem]">
						<div className="searchouter mb-[2.7rem]">
							<div className="searchwrap relative">
								<input
									data-cursor-expand
									type="text"
									className="bg-transparent border-[0.2rem] border-white w-full h-[7rem] text-white p-[2rem] pr-[5rem]"
									value={searchquery}
									onChange={handleinputchange}
								/>
								<div className="search-icon absolute w-full h-full max-w-[2.5rem] max-h-[2.5rem] top-1/2 right-[2rem] -translate-y-1/2">
									<Image
										src={`/search_icon_white.svg`}
										width={1000}
										height={1000}
										className="w-full h-full"
										alt="search_icon"
									/>
								</div>
							</div>
						</div>
						<div className="result-wrap">
							<p className="font-bold mb-[1.8rem]">Filter all News</p>
							<div className="mini-wrap-case flex flex-wrap justify-between mt-0 mb-[2.8rem]">
								<div className="mini-heading">
									<p className="small">{FilterData.length} results </p>
								</div>
								<div className="clear-btn">
									<span
										className="text-pink inline-block text-[16px] xxl-up:text-[1.6rem] font-bold"
										onClick={(e) => ClearAll(e)}
										data-cursor-expand="true"
									>
										Clear all
									</span>
								</div>
							</div>
						</div>
						<div className="filter-menus overflow-hidden w-full  transition-[max-height] duration-300 ">
							<div className="filter-block border-t-[0.1rem] border-[#989898] ">
								<span
									className={`${isActive == 1 ? 'active' : ''
										} inline-block w-full text-white text-[16px] xxl-up:text-[1.6rem] font-bold py-[3.3rem] relative`}
									data-cursor-expand="true"
									onClick={() => toggleactive(1)}
								>
									By Content Type
								</span>
								<div
									className={`${isActive == 1 ? 'max-h-[50rem]' : 'max-h-0'
										} optional-wrap transition-all duration-300 overflow-hidden `}
								>
									<ul className="pb-[3rem]">
										{contenttype.map((tab, index, name) => (
											// console.log(name);
											<li
												className="text-white text-[16px] xxl-up:text-[1.6rem] font-bold py-[1rem] px-[2rem]  items-center relative "
												key={index}
											>
												<div
													className="circle-box inline-block"
													data-cursor-expand
													onClick={() => Topicfetchhandler(index, tab)}
												>
													<div className="circle-box-wrap large mr-[2rem] pointer-events-none inline top-[0.5rem] relative">
														<input
															type="radio"
															className="w-[2.5rem] h-[2.5rem] rounded-[100%]"
															id={`topic-${index}`}
															name={name}
															checked={selectedTopic == tab}
															onChange={() => handleTopicCheckboxChange(index)}
														/>
														<label
															htmlFor={`topic-${index}`}
															className="opacity-0"
														>
															.
														</label>
													</div>
													{tab}
												</div>
											</li>
										))}
									</ul>
								</div>
							</div>
							<div className="filter-block border-t-[0.1rem] border-[#989898]">
								<span
									className={`${isActive == 2 ? 'active ' : ''
										} inline-block w-full text-white text-[16px] xxl-up:text-[1.6rem] font-bold py-[3.3rem] relative`}
									data-cursor-expand="true"
									onClick={() => toggleactive(2)}
								>
									By Year
								</span>
								<div
									className={`${isActive == 2 ? 'max-h-[50rem]' : 'max-h-0'
										} optional-wrap transition-all duration-300 overflow-hidden `}
								>
									<ul className="pb-[3rem]">
										{yeartype.map((year, index, name) => (
											// console.log(name);
											<li
												className="text-white text-[16px] xxl-up:text-[1.6rem] font-bold py-[1rem] px-[2rem] flex items-center relative "
												key={index}
											>
												<div
													className="circle-box inline-block"
													data-cursor-expand
													onClick={() => yearfetchhandler(index, year)}
												>
													<div className="circle-box-wrap large mr-[2rem] pointer-events-none inline top-[0.5rem] relative">
														<input
															type="radio"
															className="w-[2.5rem] h-[2.5rem] rounded-[100%]"
															id={`topic-${index}`}
															name={name}
															checked={selectedyear == year}
															onChange={() => handleYearCheckboxChange(index)}
														/>
														<label
															htmlFor={`topic-${index}`}
															className="opacity-0"
														>
															.
														</label>
													</div>
													{year}
												</div>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="right-col w-[calc(71%-7rem)] ml-[7rem] lg:w-full lg:ml-0">
						<div className="title mb-[5rem]">
							{selectedTopic.length == 0 && selectedyear.length == 0 ? (
								<h3 className="text-white">All News</h3>
							) : (
								<ul>
									{selectedTopic.length > 0 && (
										<li
											className="relative px-[1.5rem] mb-[1.5rem] pr-[4.2rem] inline-block text-[16px] xxl-up:text-[1.6rem] font-bold mr-[1rem] py-[1.3rem] rounded-[3rem] bg-white text-black"
											onClick={(e) => {
												e.stopPropagation();
												tagsClickHandler(selectedTopic, 'category');
											}}
											data-cursor-expand="true"
										>
											{selectedTopic}
											<span className="absolute flex items-center top-[50%] translate-y-[-50%] right-[1rem] w-[2.4rem] h-[2.4rem]">
												{crossIcon}
											</span>
										</li>
									)}
									{selectedyear.length > 0 && (
										<li
											className="relative px-[1.5rem] mb-[1.5rem] pr-[4.2rem] inline-block text-[16px] xxl-up:text-[1.6rem] font-bold mr-[1rem] py-[1.3rem] rounded-[3rem] bg-white text-black"
											onClick={(e) => {
												e.stopPropagation();
												tagsClickHandler(selectedyear, 'year');
											}}
											data-cursor-expand="true"
										>
											{selectedyear}
											<span className="absolute flex items-center top-[50%] translate-y-[-50%] right-[1rem] w-[2.4rem] h-[2.4rem]">
												{crossIcon}
											</span>
										</li>
									)}
								</ul>
							)}
						</div>
						<div className="cardswrapper flex flex-wrap w-[calc(100%+30px)] ml-[-15px] sm:w-full sm:ml-0">
							{FilterData.length != 0 ? (
								FilterData.slice(startIndex, endIndex).map((item, index) => {
									return (
										<div
											className={`${item.overlay ? 'overlay' : ''} ${item.bgcolor ? item.bgcolor : ''
												} ${item.blackoverlay ? 'overlayblack ' : ''} ${item.border ? 'border border-black' : ''
												} ${item.bgimg
													? 'col-three max-w-[45rem] w-[calc(50%-3rem)] lg:w-[calc(50%-3rem)] sm:!w-full md:min-h-[40rem]  mx-[1.5rem] min-h-[45rem]  relative flex flex-col justify-between lg:mb-[2rem] sm:mx-0'
													: ' col-three max-w-[45rem] lg:w-[calc(50%-3rem)] w-[calc(50%-3rem)] sm:!w-full md:min-h-[40rem] mx-[1.5rem] min-h-[45rem]  relative flex flex-col justify-between lg:mb-[2rem] sm:mx-0'
												} z-[5] mb-[3rem]`}
											data-cursor-expand
											key={index}
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
																className="ipad:stroke-[#fff]"
															/>
															<path
																d="M18.75 3.75H26.25V11.25"
																stroke="#FA198C"
																strokeWidth="2"
																strokeLinecap="round"
																stroke-linejoin="round"
																className="ipad:stroke-[#fff]"
															/>
															<path
																d="M12.5 17.5L26.25 3.75"
																stroke="#FA198C"
																strokeWidth="2"
																strokeLinecap="round"
																stroke-linejoin="round"
																className="ipad:stroke-[#fff]"
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
														? 'blackoverlay p-[5rem] !pt-0 ipad:p-[4rem] z-[5]'
														: 'blackoverlay p-[5rem] !pt-0 ipad:p-[4rem] z-[5]'
												}
											>
												<p
													className={`${item.color
														? item.color + ' small black mb-[2rem]'
														: ''
														} ${item.overlay ? '!text-white' : ''}`}
												>
													{item.subtxt}
												</p>
												<h4
													className={`black h4 ${item && item.color ? item.color : ''
														} ${item.overlay ? '!text-white' : ''}`}
												>
													{item.heading}
												</h4>
											</div>
										</div>
									);
								})
							) : (
								<div className="min-h-[40rem] flex items-center justify-center">
									<h3 className="block w-full my-[25px] text-center">
										No Result Found
									</h3>
								</div>
							)}
							{FilterData.length > 10 && (
								<ul
									className={`pagination pt-[2rem] flex justify-center w-full`}
								>
									{Array.from({ length: totalPages }, (_, i) => {
										const isCurrent = i + 1 === currentPage;
										return (
											<li
												data-cursor-expand="true"
												key={i + 1}
												onClick={() => {
													handlePageChange(i + 1);
													window.scrollTo({ top: 0, behavior: 'smooth' });
												}}

												className={`text-black text-[2rem] py-[1rem] px-[1.7rem] sm:px-[1.5rem] sm:py-[0.5rem] sm:text-[1rem] font-[700] flex items-center justify-center leading-[24px] mx-[1rem] transition-all duration-300 hover:text-pink ${isCurrent
													? 'active text-white hover:text-white bg-pink font-bold'
													: 'bg-gray'
													}`}
												ref={sectionRef}
											>
												{i + 1}
											</li>
										);
									})}
								</ul>
							)}
						</div>
					</div>
				</div>
			</div>

		</section>
	);
};
export default Newsfilter;
