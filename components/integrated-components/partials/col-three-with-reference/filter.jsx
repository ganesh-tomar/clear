'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import ClientData from '../data/clients/clients.json';
import style from '../components/styles/clientFilter.module.css'

const crossIcon = (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9 9L15 15" stroke="black" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" />
		<path d="M15 9L9 15" stroke="black" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" />
	</svg>
);

const Filter = () => {
	var allClients = ClientData;
	const [listOpen, setListOpen] = useState(33);
	const [isMenuOpen, setMenuOpen] = useState(false);
	const [checkedServicesVal, setcheckedServicesVal] = useState([]);
	const [checkSubTechVal, setCheckSubTechVal] = useState([]);
	const [winWidth, isWinWidth] = useState(0);
	const [filteredData, setFilteredData] = useState(allClients);
	const [whiteCoverDimension, setWhiteCoverDimension] = useState(`10px`)


	//subcategory list
	const [techSublist, setTechSublist] = useState();

	var categoryList = allClients.filter(
		(thing, index, self) =>
			index === self.findIndex((t) => t.category === thing.category),
	);
	let subCategoryData = categoryList.map((cat) => {
		return allClients.filter((elem) => elem.category == cat.category);
	});

	let temptechlist = subCategoryData[1].filter(
		(thing, index, self) =>
			index === self.findIndex((t) => t.subCategory === thing.subCategory),
	);

	useEffect(() => {
		var tempArray = [];
		if (checkedServicesVal.length != 0) {
			checkedServicesVal.map((cat, i) => {
				if (cat != 'case studies') {
					let t = allClients.filter((item) => item.category == cat);
					t.map((elem) => {
						tempArray.push(elem);
					});
				}
			})
		}
		if (checkSubTechVal.length != 0) {
			checkSubTechVal.map((subcat, i) => {
				let t = allClients.filter((item) => item.subCategory == subcat);
				t.map((elem) => {
					tempArray.push(elem);
				});
			});
		}
		if (checkedServicesVal.includes("case studies")) {
			let arrayToFetch = (tempArray.length == 0 ? allClients : tempArray)
			let t = arrayToFetch.filter((item) => item.hasOwnProperty('ctaLink'));
			tempArray = t
		}
		tempArray = tempArray.filter(
			(thing, index, self) =>
				index === self.findIndex((t) => t.id === thing.id),
		);
		setFilteredData(tempArray.length == 0 ? allClients : tempArray);
	}, [checkedServicesVal]);

	//sub category filter
	useEffect(() => {
		var tempArray = [];
		if (checkSubTechVal.length != 0) {
			checkSubTechVal.map((subcat, i) => {
				let t = allClients.filter((item) => item.subCategory == subcat);
				t.map((elem) => {
					tempArray.push(elem);
				});
			});
		}
		if (checkedServicesVal.length != 0) {
			checkedServicesVal.map((cat, i) => {
				if (cat != 'case studies') {
					let t = allClients.filter((item) => item.category == cat);
					t.map((elem) => {
						tempArray.push(elem);
					});
				}
			});
		}
		if (checkedServicesVal.includes("case studies")) {
			let arrayToFetch = (tempArray.length == 0 ? allClients : tempArray)
			let t = arrayToFetch.filter((item) => item.hasOwnProperty('ctaLink'));
			tempArray = t
		}
		tempArray = tempArray.filter(
			(thing, index, self) =>
				index === self.findIndex((t) => t.id === thing.id),
		);
		setFilteredData(tempArray.length == 0 ? allClients : tempArray);
	}, [checkSubTechVal]);

	function clickHandler(index) {
		if (checkedServicesVal.includes(index)) {
			setcheckedServicesVal(
				checkedServicesVal.filter((item) => item !== index),
			);
			if (index == 'technology') {
				setCheckSubTechVal([]);
			}
		} else {
			setcheckedServicesVal([...checkedServicesVal, index]);
			if (index == 'technology') {
				temptechlist.map((item) => {
					checkSubTechVal.push((item.subCategory))
				})
			}
		}
	}
	useEffect(() => {
		if (checkedServicesVal.includes('technology')) {
			document.querySelector(".filter ul li[dataval='technology']").classList.remove('minus')
		}
	}, [checkedServicesVal])
	//technology sub category
	function SubCategoryClickHandler(index, parentCategory) {
		if (parentCategory == 'technology') {

			if (checkSubTechVal.includes(index)) {
				setCheckSubTechVal(checkSubTechVal.filter((item) => item !== index));
				setcheckedServicesVal(checkedServicesVal.filter((item) => item !== 'technology'));
			} else {
				setCheckSubTechVal([...checkSubTechVal, index]);
			}

		}
	}
	useEffect(() => {
		if ((checkSubTechVal.length > 0 && checkSubTechVal.length < temptechlist.length)) {
			document.querySelector(".filter ul li[dataval='technology']").classList.add('minus')
		} else {
			if (checkSubTechVal.length == temptechlist.length) {
				checkedServicesVal.push(('technology'))
				document.querySelector(".filter ul li[dataval='technology']").classList.remove('minus')
			}
			document.querySelector(".filter ul li[dataval='technology']").classList.remove('minus')
		}

	}, [checkSubTechVal])

	//tags click handler
	function tagsClickHandler(cegoryVal, listType) {

		if (listType == 'subCategory') {
			setCheckSubTechVal(checkSubTechVal.filter((item) => item !== cegoryVal));
		} else {
			setcheckedServicesVal(
				checkedServicesVal.filter((item) => item !== cegoryVal),
			);
		}
	}
	//clear all
	function clearAllClickHandler(e) {
		e.preventDefault();
		setcheckedServicesVal([]);
		setCheckSubTechVal([]);
	}

	//toggle list
	function listToggleHandler(e, index) {
		setListOpen(listOpen == index ? 33 : index);
	}
	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};
	useEffect(() => {
		const handleResize = () => {
			isWinWidth(window.innerWidth);
			const cardWidth = document.querySelector('.filter .logo-wrapper .client-card')?.offsetWidth;
			const cardHeight = document.querySelector('.filter .logo-wrapper .client-card')?.offsetHeight;
			if (cardWidth > cardHeight) {
				setWhiteCoverDimension(cardWidth)
			} else {
				setWhiteCoverDimension(cardHeight)
			}
		};
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	});

	const dimensions = {
		width: `${whiteCoverDimension * 1.5}px`,
		height: `${whiteCoverDimension * 1.5}px`,
	};


	var services = [];
	const listicon =
		"after:content-[''] after:absolute after:top-[3rem] after:right-[2rem] after:w-[3rem] after:h-[3rem] after:bg-[url('/angle-icon.svg')] after:bg-contain after:bg-no-repeat after:transition-all";
	return (
		<section className="filter bg-black client-filter">
			<div className="container">
				<div className="wrapper w-full flex flex-wrap">
					{winWidth > 991 ? '' : <h3 className=''>All Clients</h3>}

					<div className={`case-block w-[29%] lg:w-full`}>
						<p className={`${isMenuOpen
							? ''
							: 'after:rotate-[180deg]'
							} relative font-bold mb-[1.7rem] lg-up:pointer-events-none lg:!cursor-pointer lg:after:content-[''] lg:after:absolute lg:after:top-[-1/2] lg:translate-y-[-1/2] lg:after:right-[2rem] lg:after:w-[3rem] lg:after:h-[3rem] lg:after:bg-[url('/angle-icon.svg')] lg:after:bg-contain lg:after:bg-no-repeat lg:after:transition-all lg:py-[3rem] lg:mb-0`}
							onClick={toggleMenu}
							data-cursor-expand="true"
						>Filter all clients</p>
						<div className={`${isMenuOpen
							? 'max-h-[112rem]'
							: 'lg:max-h-[0]'
							} overflow-scroll filterMenus w-full transition-[max-height] duration-300 `}

						>
							<div className="mini-wrap-case flex flex-wrap justify-between mb-[1rem]">
								<div className="mini-heading">
									<p className="medium mb-[1.8rem]">{filteredData.length} clients</p>
								</div>
								{winWidth > 991 ? <div className="clear-btn font-bold z-[10]">
									<span
										className="text-pink inline-block lg:!cursor-pointer text-[16px] xxl-up:text-[1.6rem] font-bold"
										href=""
										onClick={(e) => clearAllClickHandler(e)}
										data-cursor-expand="true"
									>
										Clear all
									</span>
								</div> : ''}
							</div>
							<ul className="link-wrap-case">
								{categoryList.map((item, index) => (
									<li
										key={index} dataval={item.category}
										className={`relative category-item flex flex-wrap lg:!cursor-pointer w-full justify-between items-center  text-white px-[3.5rem] border-t-[0.1rem] border-[#989898]`}
										data-cursor-expand="true"
									>
										{item.category == 'technology' ? <span className='lg:!cursor-pointer drop absolute top-[2rem] right-[1.5rem] w-[5rem] h-[5rem]  z-[10]' onClick={(e) => listToggleHandler(e, index)}></span> : ''}

										<div className='lg:!cursor-pointer categoty-wrap z-[5] py-[3rem] w-full medium bold capitalize flex items-center' onClick={(e) => clickHandler(item.category, e)}>
											<div className="check-box-wrap large mr-[2.1rem] pointer-events-none">
												<input
													className="checkbox-default"
													type="checkbox"
													name=""
													id={`service-${index}`}
													checked={checkedServicesVal.includes(item.category)}
												/>
												<label className='pointer-events-none' htmlFor={`service-${index}`}>.</label>
											</div>
											{item.category}
										</div>

										{item.category == 'technology' ? (
											<div className={`w-full block overflow-hidden transition-[max-height] duration-300 ${listOpen == index
												? 'max-h-[50rem]'
												: 'max-h-[0] after:rotate-[180deg]'
												}`}>
												<ul
													className={`sub-category w-full block overflow-hidden pl-[3rem] pt-[0.7rem] pb-[3rem] ${listicon} ${listOpen == index
														? ''
														: 'after:rotate-[180deg]'
														}`}
												>
													{temptechlist.map((elem, indx) => {
														return (
															<li
																key={indx}
																className={`flex items-center capitalize medium bold py-[1rem] text-white px-[2rem] z-[10]`}
																onClick={() =>
																	SubCategoryClickHandler(
																		elem.subCategory,
																		'technology',
																	)
																}
															>
																<div className="check-box-wrap large mr-[2rem] pointer-events-none">
																	<input
																		className="checkbox-default"
																		type="checkbox"
																		name=""
																		id={`service-${indx}`}
																		checked={
																			checkSubTechVal.includes(elem.subCategory)
																		}
																	/>
																	<label htmlFor={`service-${indx}`}>.</label>
																</div>
																{elem.subCategory}
															</li>
														);
													})}
												</ul>
											</div>
										) : (
											''
										)}
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className="logo-block w-[71%] pt-[0.3rem] pl-[5.5rem] lg:w-full lg:pl-0 lg:pt-0 lg:mt-[3rem]">
						{/* {winWidth > 991 ? <h3 className='mb-[2rem]'>All Clients</h3> : ''} */}
						<div className='lg-up:min-h-[10rem]'>
							{checkSubTechVal.length == 0 && checkedServicesVal.length == 0 ? winWidth > 991 ? <h3 className='mb-[2rem]'>All Clients</h3> : '' : (
								<>
									<div className='lg:mb-[5rem]'>
										<ul className="lg-up:mb-[3.5rem]">
											{checkSubTechVal.map((elem, i) => {
												return (
													<li
														key={i}
														className="relative px-[1.5rem] mb-[1.5rem] pr-[4.2rem] text-[16px] xxl-up:text-[1.6rem] font-bold inline-block mr-[1rem] py-[1.3rem] rounded-[3rem] bg-white text-black"
														onClick={() => tagsClickHandler(elem, 'subCategory')}
														data-cursor-expand="true"
													>
														{elem}
														<span className="absolute flex items-center top-[50%] translate-y-[-50%] right-[1rem] w-[2.4rem] h-[2.4rem]">
															{crossIcon}
														</span>
													</li>
												);
											})}
											{checkedServicesVal.map((elem, i) => {
												return (
													<li
														key={i}
														className="relative px-[1.5rem] mb-[1.5rem] pr-[4.2rem] inline-block text-[16px] xxl-up:text-[1.6rem] font-bold mr-[1rem] py-[1.3rem] rounded-[3rem] bg-white text-black"
														onClick={() => tagsClickHandler(elem, 'category')}
														data-cursor-expand="true"
													>
														{elem}
														<span className="absolute flex items-center top-[50%] translate-y-[-50%] right-[1rem] w-[2.4rem] h-[2.4rem]">
															{crossIcon}
														</span>
													</li>
												);
											})}
										</ul>
										{winWidth > 991 ? '' : <div className="clear-btn mt-[1.5rem] font-bold z-[10]">
											<span
												className="text-pink inline-block lg:!cursor-pointer text-[16px] xxl-up:text-[1.6rem] font-bold"
												href=""
												onClick={(e) => clearAllClickHandler(e)}
												data-cursor-expand="true"
											>
												Clear all
											</span>
										</div>}
									</div>
								</>

							)}
						</div>

						<div className="logo-wrapper w-full relative flex overflow-hidden flex-wrap items-center">
							{filteredData.map((item, index) => (
								<div className={`${item.hasOwnProperty("ctaLink") ? 'area' : ''} ${style.clientCard} group client-card flex flex-wrap items-center w-[25%] laptop:w-[33.33%] h-[20rem] tablet:h-[18rem] phablet:h-[18rem] sm:h-[16rem] laptop:h-[29rem] phablet:w-[33.33%] sm:w-1/2`} key={index}>
									<span className={`absolute w-full h-full left-0 top-0 bottom-dotted-border right-dotted-border`}></span>
									{item.hasOwnProperty("ctaLink") ? (
										<>
											<Link href="" className='redirect'>.</Link>
											<div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
												<div className='w-full h-full relative'>
													<span style={dimensions} className='block absolute top-1/2 left-1/2 origin-center -translate-x-1/2 -translate-y-1/2 scale-[0] bg-white mix-blend-difference rounded-full group-hover:scale-[1] transition-transfrom duration-700' />
												</div>
											</div>
										</>
									) : ''}
									<div className="logo-wrap mx-[auto] max-w-[21rem] h-[8.4rem]" key={index}>
										<Image
											src={item.clientImage}
											width={1000}
											height={1000}
											alt="image"
											className="w-full h-full object-contain"
										/>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Filter;
