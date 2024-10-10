'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import ClientData from '../../../data/clients/clients.json';
import style from '../../../components/styles/clientFilter.module.css';
import { GET_ALL_CLIENTS, GET_CLIENT_TYPES } from '../../../graphql/clients';

const crossIcon = (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9 9L15 15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
		<path d="M15 9L9 15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
);

const ClientsList = () => {
	var allClients = useQuery(GET_ALL_CLIENTS);
	const clientTypes = useQuery(GET_CLIENT_TYPES);
	const [listOpen, setListOpen] = useState(33);
	const [isMenuOpen, setMenuOpen] = useState(false);
	const [checkedServicesVal, setcheckedServicesVal] = useState([]);
	const [checkSubTechVal, setCheckSubTechVal] = useState([]);
	const [winWidth, isWinWidth] = useState(0);
	const [filteredData, setFilteredData] = useState([]);
	const [clientTypeData, setClientTypeData] = useState([]);
	const [data, setData] = useState([]);
	const [abc, setAbc] = useState('')
	const [update, setUpdate] = useState('');
	const [check, setCheck] = useState('');
	const [result, setResult] = useState('');
	const [whiteCoverDimension, setWhiteCoverDimension] = useState(`10px`)
	var a = [];
	var b = [];

	useEffect(() => {
		if (allClients.data) {
			setFilteredData(allClients?.data?.clients?.nodes);
			setData(allClients?.data?.clients?.nodes)
		}
	}, [allClients?.data]);

	useEffect(() => {
		if (clientTypes.data) {
			setClientTypeData(clientTypes?.data?.clientTypes?.nodes);
		}
	}, [clientTypes?.data]);
	function clickHandler(index) {
		if (checkedServicesVal.includes(index)) {
			setcheckedServicesVal(
				checkedServicesVal.filter((item) => item !== index),
			);
			const clientTypeList = clientTypes?.data?.clientTypes?.nodes;
			clientTypeList?.map((item) => {
				if (item?.children?.nodes?.length > 0) {
					item?.children?.nodes?.map((subCat) => {
						const subCatName = subCat?.name
						if (item?.name === index) {
							if (item?.children?.nodes?.length > 0) {
								setCheckSubTechVal([]);
							}
						}
					})
				}
			})
			setUpdate('b')
		} else {
			setcheckedServicesVal([...checkedServicesVal, index]);
			const clientTypeList = clientTypes?.data?.clientTypes?.nodes;
			clientTypeList?.map((item) => {
				if (item?.name === index) {
					if (item?.children?.nodes?.length > 0) {
						item?.children?.nodes?.map((subCat) => {
							const subCatName = subCat?.name
							checkSubTechVal.push(subCatName)
						})
					}
				}
			})
			setAbc('a')
		}
		setFilteredData([])
	}
	function listToggleHandler(e, index) {
		if (listOpen === index) {
			setListOpen(0)
		} else {
			setListOpen(index)
		}
	}

	useEffect(() => {
		console.log(checkSubTechVal);
	}, [update])

	function SubCategoryClickHandler(index) {
		if (checkSubTechVal.includes(index)) {
			setCheckSubTechVal(
				checkSubTechVal.filter((item) => item !== index),
			);
		} else {
			setCheckSubTechVal([...checkSubTechVal, index])
		}
	}
	useEffect(() => {
		var listDataVal = [];
		var filterdataTemp = [];
		data?.forEach((item) => {
			if (item?.terms?.nodes) {
				if (checkedServicesVal.length > 0 || checkSubTechVal?.length > 0) {
					listDataVal = checkedServicesVal.concat(checkSubTechVal);
					listDataVal?.map((typeValue) => {
						const filteredNodes = item?.terms?.nodes.filter((node) => node?.name === typeValue ? true : false);
						if (filteredNodes.length > 0) {
							filterdataTemp.push(item);
							setAbc('')
							setUpdate('')
							setCheck('')
						}
					})
				}
			}
		});
		if (checkedServicesVal.length > 0 || checkSubTechVal?.length > 0) {
			if (filterdataTemp.length > 0) {
				const uniqueNames = filterdataTemp.filter((val, id, array) => {
					return array.indexOf(val) == id;
				});
				setFilteredData(uniqueNames)
			}
		} else {
			setFilteredData(data);
		}
	}, [checkedServicesVal, checkSubTechVal])

	//tags click handler
	function tagsClickHandler(cegoryVal, listType) {

		if (listType == 'subCategory') {
			setCheckSubTechVal(checkSubTechVal.filter((item) => item !== cegoryVal));
		} else {
			setcheckedServicesVal(
				checkedServicesVal.filter((item) => item !== cegoryVal),
			);
		}
		setCheck('a')
		setFilteredData([])
	}
	//clear all
	function clearAllClickHandler(e) {
		e.preventDefault();
		setcheckedServicesVal([]);
		setCheckSubTechVal([]);
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
					<div className={`case-block w-[29%] lg:w-full`}>
						<p className={`${isMenuOpen ? '' : 'after:rotate-[180deg]'} relative font-bold  mb-[1.7rem] lg-up:pointer-events-none lg:!cursor-pointer lg:after:content-[''] lg:after:absolute lg:after:top-[-1/2] lg:translate-y-[-1/2] lg:after:right-[2rem] lg:after:w-[3rem] lg:after:h-[3rem] lg:after:bg-[url('/angle-icon.svg')] lg:after:bg-contain lg:after:bg-no-repeat lg:after:transition-all lg:pb-[3rem] lg:mb-0`}
							onClick={toggleMenu}
							data-cursor-expand="true">
							Filter all clients
						</p>
						<div className={`${isMenuOpen ? 'max-h-[112rem]' : 'lg:max-h-[0]'} overflow-scroll no-scrollbar filterMenus w-full transition-[max-height] duration-300 lg:m-0`}>
							<div className="mini-wrap-case flex flex-wrap justify-between mb-[1rem]">
								<div className="mini-heading">
									<p className="medium mb-[1.8rem] text-[16px]">{filteredData.length} clients</p>
								</div>
								{checkSubTechVal.length > 0 || checkedServicesVal.length > 0 && winWidth > 991 ? <div className="clear-btn font-bold z-[10]">
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
							<ul className="link-wrap-case ">
								{clientTypeData
									.filter(item => item.name !== "Featured" && item.name !== "Other")
									.map((item, index) => (
										<li
											key={index}
											dataval={item.termTaxonomyId}
											className={`relative category-item flex flex-wrap lg:!cursor-pointer w-full justify-between items-center text-white px-[3.5rem] border-t-[0.1rem] border-[#989898]`}
											data-cursor-expand="true"
										>
											{console.log(item)}

											{item?.children?.nodes?.length > 0 ? (
												<span className='lg:!cursor-pointer drop absolute top-[2rem] right-[1.5rem] w-[5rem] h-[5rem] z-[10]'
													onClick={(e) => listToggleHandler(e, index)}>
												</span>
											) : null}

											<div className='lg:!cursor-pointer categoty-wrap z-[5] py-[3rem] w-full medium bold capitalize flex items-center'
												onClick={(e) => clickHandler(item.name, e)} >
												<div className="check-box-wrap large mr-[2.1rem] pointer-events-none">
													<input
														className="checkbox-default"
														type="checkbox"
														name=""
														id={`service-${index}`}
														checked={checkedServicesVal.includes(item.name)}
													/>
													<label className='pointer-events-none' htmlFor={`service-${index}`}>.</label>
												</div>
												{item.name}
											</div>

											{item?.children?.nodes?.length > 0 ? (
												<div className={`w-full block overflow-hidden transition-[max-height] duration-300 ${listOpen === index ? 'max-h-[50rem]' : 'max-h-[0] after:rotate-[180deg]'}`}>
													<ul className={`sub-category w-full block overflow-hidden pl-[3rem] pt-[0.7rem] pb-[3rem] ${listicon} ${listOpen === index ? '' : 'after:rotate-[180deg]'}`}>
														{item?.children?.nodes?.map((elem, indx) => (
															<li
																key={indx}
																className={`flex items-center capitalize medium bold py-[1rem] text-white px-[2rem] z-[10]`}
																onClick={() => SubCategoryClickHandler(elem.name, elem.parent.node.termTaxonomyId)}
															>
																<div className="check-box-wrap large mr-[2rem] pointer-events-none">
																	<input
																		className="checkbox-default"
																		type="checkbox"
																		name=""
																		id={`service-parent-${index}-sub-${indx}`}
																		checked={checkSubTechVal.includes(elem.name)}
																	/>
																	<label htmlFor={`service-parent-${index}-sub-${indx}`}>.</label>
																</div>
																{elem.name}
															</li>
														))}
													</ul>
												</div>
											) : null}
										</li>
									))
								}


							</ul>
						</div>
					</div>
					<div className="logo-block w-[71%] pt-[0.3rem] pl-[5.5rem] lg:w-full lg:pl-0 lg:pt-0 tablet:mt-[3rem] phablet:mt-[3rem] sm:mt-[2rem]">
						<div className=''>
							{checkSubTechVal.length == 0 && checkedServicesVal.length == 0 ? winWidth > 991 ? <h3 className='mb-[1rem]'>All Clients</h3> : '' : (
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
							{filteredData?.length > 0 ? (filteredData?.map((item, index) => (
								<div className={`${item.clients.externalLink ? 'area' : ''} ${style.clientCard} group client-card flex flex-wrap items-center w-[25%] laptop:w-[33.33%] h-[20rem] tablet:h-[18rem] phablet:h-[18rem] sm:h-[16rem] laptop:h-[29rem] phablet:w-[33.33%] sm:w-1/2`} key={index}>
									<span className={`absolute w-full h-full left-0 top-0 bottom-dotted-border right-dotted-border`}></span>
									{item.clients.externalLink ? (
										<>
											<Link href={item.clients.externalLink} className='redirect'>.</Link>
											<div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
												<div className='w-full h-full relative'>
													<span style={dimensions} className='block absolute top-1/2 left-1/2 origin-center -translate-x-1/2 -translate-y-1/2 scale-[0] bg-white mix-blend-difference rounded-full group-hover:scale-[1] transition-transfrom duration-700' />
												</div>
											</div>
										</>
									) : ''}
									{item.clients.logo && (
										<div className="logo-wrap mx-[auto]" key={index}>
											<Image
												src={item.clients.logo.mediaItemUrl}
												width={1000}
												height={1000}
												alt={item.clients.logo.altText}
												className="w-full h-full object-contain"
											/>
										</div>
									)}
								</div>
							))) : (
								<div className="noresult" data-aos="fade-in" data-aos-delay="1000" data-aos-duration="1000">
									<h2>No result found</h2>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default ClientsList;
