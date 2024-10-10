import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import InsightsData from '../data/insights/insights.json';
import style from '../components/styles/insightCard.module.css';
import styles from '../components/styles/insightLanding.module.css';

export default function InsightLanding() {
	var data = InsightsData;
	const [open, setopen] = useState(0);
	const [wholeData, setWholeData] = useState(data);
	const [isMenuOpen, setMenuOpen] = useState(false);
	const [overlay, setoverlay] = useState(false)
	//pagination variables
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 9;
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const totalPages = Math.ceil(wholeData.length / itemsPerPage);
	const [winWidth, isWinWidth] = useState(0);
	const [searchTerm, setSearchTerm] = useState('');
	// Topic filter variables
	const [topicListData, settopicListData] = useState([])
	const [filteredTopicList, setfFilteredTopicList] = useState([])
	const [topicData, settopicData] = useState('')

	// Solution filter variables
	const [solutionListData, setsolutionListData] = useState([])
	const [filteredSolutionList, setfilteredSolutionList] = useState([])
	const [solutionData, setsolutionData] = useState('')

	// ContentType filter variables
	const [contentListData, setcontentListData] = useState([])
	const [filteredContentTypeList, setfilteredContentTypeList] = useState([])
	const [contentTypeData, setcontentTypeData] = useState('');

	const crossIcon = (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M9 9L15 15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M15 9L9 15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);

	// console.log(wholeData.length);
	// console.log(filteredSolutionList);
	// console.log(filteredSolutionList.length, solutionListData.length);
	// console.log('topicListData', topicListData);
	// console.log('topicData', topicData);
	// console.log('solutionListData', solutionListData);
	// console.log('solutionData', solutionData);
	// console.log('contentListData', contentListData);
	// console.log('contentTypeData', contentTypeData);



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

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};
	const listHandler = (i) => {
		open == i ? setopen(0) : setopen(i);
	};

	function getUniqueTopics(data) {
		console.log('getUniqueTopics', data);
		const uniqueTopicTypes = [...new Set(data.map((item) => item.topicType.toLowerCase()))]
			.filter((topicType) => topicType.toLowerCase() !== '').sort();
		settopicListData(uniqueTopicTypes);
		return uniqueTopicTypes;
	}
	function getUniqueSolutions(data) {
		console.log('getUniqueSolutions', data);
		const uniqueSolutionTypes = [...new Set(data.map((item) => item.solutionType.toLowerCase()))]
			.filter((solutionType) => solutionType.toLowerCase() !== '').sort();
		setsolutionListData(uniqueSolutionTypes);
		console.log(uniqueSolutionTypes);
		return uniqueSolutionTypes;
	}
	function getUniqueContentTypes(data) {
		console.log('getUniqueContentTypes', data);
		const uniqueContentTypes = [...new Set(data.map((item) => item.contentType.toLowerCase()))]
			.filter((contentType) => contentType.toLowerCase() !== '').sort();
		setcontentListData(uniqueContentTypes)
		return uniqueContentTypes;
	}

	useEffect(() => {
		if (solutionData == '') {
			const uniqueTopics = getUniqueTopics(data);
			settopicListData(uniqueTopics);
		} else if (solutionData !== '') {
			const uniqueTopics = getUniqueTopics(solutionData);
			settopicListData(uniqueTopics);
		}
		if (topicData == '') {
			const uniqueSolutions = getUniqueSolutions(data);
			setsolutionListData(uniqueSolutions);
		} else if (solutionData !== '') {
			const uniqueSolutions = getUniqueSolutions(topicData);
			setsolutionListData(uniqueSolutions);
		}
		if (contentTypeData == '') {
			const uniqueContents = getUniqueContentTypes(data);
			setcontentListData(uniqueContents);
		} else if (contentTypeData !== '') {
			const uniqueContents = getUniqueContentTypes(contentTypeData);
			setcontentListData(uniqueContents);
		}
	}, []);


	const handlePageChange = (newPage) => {
		setCurrentPage(newPage);
		const sectionElement = document.getElementsByClassName(
			'case-studies-filter',
		)[0];
		if (sectionElement) {
			window.scrollTo({
				top: sectionElement.offsetTop,
				behavior: 'smooth',
			});
		}
	};


	function findCommonElements(arr1, arr2) {
		return arr1.filter(element => arr2.includes(element));
	}

	const TopicFacethandler = (index, val) => {
		let sorted = [];
		var prevData = [];
		const checkedTopics = [...filteredTopicList];
		if (checkedTopics.includes(val)) {
			checkedTopics.splice(checkedTopics.indexOf(val), 1); // Uncheck
		} else {
			checkedTopics.push(val); // Check
		}
		setfFilteredTopicList(checkedTopics);


		if (solutionData != '' && contentTypeData != '') {
			// console.log("Sol && Content");
			// console.log(solutionData);
			// console.log(contentTypeData);
			var sortedSol = solutionData.filter((item) =>
				checkedTopics.includes(item.topicType.toLowerCase())
			);
			var sortedContent = contentTypeData.filter((item) =>
				checkedTopics.includes(item.topicType.toLowerCase())
			);
			if (checkedTopics != '') {
				sorted = findCommonElements(sortedSol, sortedContent);
			} else {
				sorted = findCommonElements(solutionData, contentTypeData);
			}
		} else if (solutionData != '' && contentTypeData == '') {
			// console.log("Sol ");
			sorted = solutionData.filter((item) =>
				checkedTopics.includes(item.topicType.toLowerCase())
			);
			prevData = solutionData;
			const updatedSolutionsData = getUniqueSolutions(solutionData)
			// console.log(updatedSolutionsData);
			setsolutionListData(updatedSolutionsData)
		} else if (solutionData == '' && contentTypeData != '') {
			// console.log("Content ");
			sorted = contentTypeData.filter((item) =>
				checkedTopics.includes(item.topicType.toLowerCase())
			);
			prevData = contentTypeData;
			const updatedContentTypeData = getUniqueContentTypes(contentTypeData)
			// console.log(updatedContentTypeData);
			setcontentListData(updatedContentTypeData)
		} else if (solutionData == '' && contentTypeData == '') {
			// console.log("From All");
			// console.log("From All");
			// console.log("From All");
			sorted = data.filter((item) =>
				checkedTopics.includes(item.topicType.toLowerCase())
			);
		} else {
			sorted = data; // Set sorted to the original data when updatedcheckedServicesVal is empty
		}
		console.log("checkedTopics", checkedTopics);
		console.log("filteredSolutionList", filteredSolutionList);
		console.log("filteredContentTypeList", filteredContentTypeList);

		const UpdatedsolutionData = [...sorted, ...solutionData];
		const UpdatedcontentTypeData = [...sorted, ...contentTypeData];
		const updatedListData = [...sorted, ...solutionData, ...contentTypeData]
		const bothListData = [...solutionData, ...contentTypeData];
		console.log("checkedTopics.length", checkedTopics.length);
		if (checkedTopics.length > 0) {
			getUniqueSolutions(UpdatedsolutionData);
			getUniqueContentTypes(UpdatedcontentTypeData);
			settopicData(sorted);
		}
		else {
			if (solutionData != '' && contentTypeData != '') {
				console.log("here");
				getUniqueSolutions(updatedListData);
				getUniqueContentTypes(updatedListData);
			} else if (solutionData == '' && contentTypeData != '') {
				getUniqueContentTypes(data);
				sorted = data.filter((item) =>
					filteredContentTypeList.includes(item.contentType.toLowerCase())
				);
			} else if (solutionData != '' && contentTypeData == '') {
				getUniqueSolutions(data);
				sorted = data.filter((item) =>
					filteredSolutionList.includes(item.solutionType.toLowerCase())
				);
			} else if (solutionData == '' && contentTypeData == '') {
				getUniqueSolutions(data);
				getUniqueContentTypes(data);
				getUniqueTopics(data)
			}
			settopicData('');
		}


		console.log("solutionListData", solutionListData);
		console.log("contentListData", contentListData);


		if (sorted == '' && prevData != '') {
			var noDuplicateds = prevData.filter(
				(elem, index, self) => index === self.findIndex((t) => t.id === elem.id),
			);
		}
		else {
			var noDuplicateds = sorted.filter(
				(elem, index, self) => index === self.findIndex((t) => t.id === elem.id),
			);
		}

		setCurrentPage(1)
		setWholeData(noDuplicateds.length == 0 ? data : noDuplicateds);
	};
	const handleTopicCheckboxChange = (index) => {
		TopicFacethandler(null, index);
	};

	const SolutionFacethandler = (index, val) => {
		let sorted = [];
		var prevData = [];
		var temp = [];
		const checkedSolutions = [...filteredSolutionList];
		if (checkedSolutions.includes(val)) {
			checkedSolutions.splice(checkedSolutions.indexOf(val), 1); // Uncheck
		} else {
			checkedSolutions.push(val); // Check
		}
		setfilteredSolutionList(checkedSolutions)



		if (topicData != '' && contentTypeData != '') {
			var sortedTopic = topicData.filter((item) =>
				checkedSolutions.includes(item.solutionType.toLowerCase())
			);
			var sortedContent = contentTypeData.filter((item) =>
				checkedSolutions.includes(item.solutionType.toLowerCase())
			);
			if (checkedSolutions != '') {
				sorted = findCommonElements(sortedTopic, sortedContent);
			} else {
				sorted = findCommonElements(topicData, contentTypeData);
			}

		} else if (topicData != '' && contentTypeData == '') {
			sorted = topicData.filter((item) =>
				checkedSolutions.includes(item.solutionType.toLowerCase())
			);
			prevData = topicData;
			const updatedTopicData = getUniqueTopics(topicData)
			// console.log(updatedTopicData);
			settopicListData(updatedTopicData)
		} else if (topicData == '' && contentTypeData != '') {
			sorted = contentTypeData.filter((item) =>
				checkedSolutions.includes(item.solutionType.toLowerCase())
			);
			prevData = contentTypeData;
			const updatedContentTypeData = getUniqueContentTypes(contentTypeData)
			// console.log(updatedContentTypeData);
			setcontentListData(updatedContentTypeData)
		} else if (topicData == '' && contentTypeData == '') {
			sorted = data.filter((item) =>
				checkedSolutions.includes(item.solutionType.toLowerCase())
			);
		} else {
			sorted = data; // Set sorted to the original data when updatedcheckedServicesVal is empty
		}
		console.log("checkedSolutions.length", checkedSolutions.length);
		const UpdatedUniqueTopics = [...sorted, ...topicData];
		const UpdatedcontentTypeData = [...sorted, ...contentTypeData];
		const updatedListData = [...sorted, ...topicData, ...contentTypeData]
		const bothListData = [...topicData, ...contentTypeData];
		if (checkedSolutions.length > 0) {
			getUniqueTopics(UpdatedUniqueTopics)
			getUniqueContentTypes(UpdatedcontentTypeData);
			setsolutionData(sorted)
		} else {
			if (topicData != '' && contentTypeData != '') {
				console.log("here");
				getUniqueTopics(updatedListData);
				getUniqueContentTypes(updatedListData);
				// setsolutionData(bothListData);
			} else if (topicData == '' && contentTypeData != '') {
				getUniqueContentTypes(data);
				sorted = data.filter((item) =>
					filteredContentTypeList.includes(item.contentType.toLowerCase())
				);
			} else if (topicData != '' && contentTypeData == '') {
				getUniqueTopics(data);
				sorted = data.filter((item) =>
					filteredTopicList.includes(item.topicType.toLowerCase())
				);
			} else if (topicData == '' && contentTypeData == '') {
				getUniqueTopics(data)
				getUniqueContentTypes(data);
				getUniqueSolutions(data);
			}
			setsolutionData('');

		}





		if (sorted == '' && prevData != '') {
			var noDuplicateds = prevData.filter(
				(elem, index, self) => index === self.findIndex((t) => t.id === elem.id),
			);
		}
		else {
			var noDuplicateds = sorted.filter(
				(elem, index, self) => index === self.findIndex((t) => t.id === elem.id),
			);
		}
		setCurrentPage(1)
		setWholeData(noDuplicateds.length == 0 ? data : noDuplicateds);
	};
	const handleSolutionCheckboxChange = (index) => {
		SolutionFacethandler(null, index);
	};

	const ContentTypeFacethandler = (index, val) => {
		// console.log('');
		// console.log('im in solutions');
		let sorted = [];
		var prevData = [];
		var temp = [];
		const checkedContentTypes = [...filteredContentTypeList];
		if (checkedContentTypes.includes(val)) {
			checkedContentTypes.splice(checkedContentTypes.indexOf(val), 1); // Uncheck
		} else {
			checkedContentTypes.push(val); // Check
		}
		setfilteredContentTypeList(checkedContentTypes)



		if (topicData != '' && solutionData != '') {
			// console.log("Topic && Solution");
			// console.log(topicData);
			// console.log(solutionData);
			var sortedTopic = topicData.filter((item) =>
				checkedContentTypes.includes(item.contentType.toLowerCase())
			);
			var sortedSolutions = solutionData.filter((item) =>
				checkedContentTypes.includes(item.contentType.toLowerCase())
			);
			if (checkedContentTypes != '') {
				sorted = findCommonElements(sortedTopic, sortedSolutions);
			} else {
				sorted = findCommonElements(topicData, solutionData);
			}

		} else if (topicData != '' && solutionData == '') {
			// console.log("from  topic ");
			sorted = topicData.filter((item) =>
				checkedContentTypes.includes(item.contentType.toLowerCase())
			);
			prevData = topicData;
			const updatedTopicData = getUniqueTopics(topicData)
			// console.log(updatedTopicData);
			settopicListData(updatedTopicData)
		} else if (topicData == '' && solutionData != '') {
			sorted = solutionData.filter((item) =>
				checkedContentTypes.includes(item.contentType.toLowerCase())
			);
			prevData = solutionData;
			const updatedSolutionData = getUniqueSolutions(solutionData)
			// console.log(updatedSolutionData);
			setsolutionListData(updatedSolutionData)
		} else if (topicData == '' && solutionData == '') {
			sorted = data.filter((item) =>
				checkedContentTypes.includes(item.contentType.toLowerCase())
			);
		} else {
			sorted = data; // Set sorted to the original data when updatedcheckedServicesVal is empty
		}
		console.log("checkedContentTypes.length", checkedContentTypes.length);
		const updatedListData = [...sorted, ...topicData, ...solutionData]
		const UpdatedUniqueTopics = [...sorted, ...topicData];
		const UpdatedsolutionData = [...sorted, ...solutionData];
		const bothListData = [...topicData, ...solutionData];

		if (checkedContentTypes.length > 0) {
			getUniqueTopics(UpdatedUniqueTopics)
			getUniqueSolutions(UpdatedsolutionData);
			setcontentTypeData(sorted)
		}
		else {

			if (topicData != '' && solutionData != '') {
				console.log("here");
				getUniqueTopics(updatedListData);
				getUniqueSolutions(updatedListData);
				// setcontentTypeData(bothListData);
			} else if (topicData == '' && solutionData != '') {
				getUniqueSolutions(data);
				sorted = data.filter((item) =>
					filteredSolutionList.includes(item.solutionType.toLowerCase())
				);
			} else if (topicData != '' && solutionData == '') {
				getUniqueTopics(data);
				sorted = data.filter((item) =>
					filteredTopicList.includes(item.topicType.toLowerCase())
				);
			} else if (topicData == '' && solutionData == '') {
				getUniqueTopics(data);
				getUniqueSolutions(data);
				getUniqueContentTypes(data);

			}
			setcontentTypeData('');
		}





		if (sorted == '' && prevData != '') {
			var noDuplicateds = prevData.filter(
				(elem, index, self) => index === self.findIndex((t) => t.id === elem.id),
			);
		}
		else {
			var noDuplicateds = sorted.filter(
				(elem, index, self) => index === self.findIndex((t) => t.id === elem.id),
			);
		}
		setCurrentPage(1)
		setWholeData(noDuplicateds.length == 0 ? data : noDuplicateds);
	};
	const handleContentTypeCheckboxChange = (index) => {
		ContentTypeFacethandler(null, index);
	};

	function tagsClickHandler(cegoryVal, listType) {
		if (listType == 'topic') {
			setfFilteredTopicList(filteredTopicList.filter((item) => item !== cegoryVal));
			TopicFacethandler(listType, cegoryVal)
		} else if (listType == 'solution') {
			setfilteredSolutionList(filteredSolutionList.filter((item) => item !== cegoryVal));
			SolutionFacethandler(listType, cegoryVal)
		} else if (listType == 'contentType') {
			setfilteredContentTypeList(filteredContentTypeList.filter((item) => item !== cegoryVal));
			ContentTypeFacethandler(listType, cegoryVal)
		}
	}

	const ClearAll = () => {
		settopicData('')
		setsolutionData('')
		setcontentTypeData('')
		setfFilteredTopicList([])
		setfilteredSolutionList([])
		setfilteredContentTypeList([])
		getUniqueSolutions(data);
		getUniqueContentTypes(data);
		getUniqueTopics(data)
		setWholeData(data)
		setCurrentPage(1)
	}

	const toggleOverlay = (e) => {
		e.preventDefault();
		setoverlay(!overlay)
	}
	useEffect(() => {
		const filteredCards = searchTerm
			? wholeData.filter(
				(cardData) =>
					cardData.topicType?.toLowerCase().includes(searchTerm.toLowerCase()) ||
					cardData.solutionType?.toLowerCase().includes(searchTerm.toLowerCase()) ||
					cardData.contentType?.toLowerCase().includes(searchTerm.toLowerCase()) ||
					cardData.heading?.toLowerCase().includes(searchTerm.toLowerCase(),) ||
					cardData.subText.toLowerCase().includes(searchTerm.toLowerCase()) ||
					cardData.caption.toLowerCase().includes(searchTerm.toLowerCase()),)
			: data;
		setWholeData(filteredCards);
	}, [searchTerm]);


	return (
		<>
			<section className="insightLanding bg-black padding-top-l">
				<div className="container">
					<div className="outer flex lg:flex-wrap">
						<div className="leftCol w-[29%] lg:w-full">
							{winWidth > 991 ? '' : <h3 className="mb-[5rem]">All Insights</h3>}
							<div className="searchOuter mb-[2.8rem]">
								<div className="searchWrap relative">
									<form className={`relative`} onSubmit={(e) => e.preventDefault()}>
										<label htmlFor="search" className='hidden'>.</label>
										<input
											type="search"
											id="search"
											aria-label="first link"
											name="search"
											className={`${styles.search} bg-transparent text-white border-[0.2rem] p-[1rem] pr-[5rem] border-white w-full h-[7rem]`}
											value={searchTerm}
											onChange={(e) => setSearchTerm(e.target.value)}
										/>
										<button
											type="submit"
											className="searchCta searchIcon absolute w-full h-full max-h-[2.5rem] max-w-[2.5rem] top-1/2 right-[2rem] -translate-y-1/2"
										>

											<div >
												<Image
													src={`/search_icon_white.svg`}
													width={1000}
													height={1000}
													className="w-full h-full"
													alt="search_icon"
												/>
											</div>
										</button>
									</form>
								</div>
							</div>
							<div className="resultWrap">
								<p
									className={`${isMenuOpen ? styles.active : ''} ${styles.filterLabel} after:lg-up:hidden relative font-bold mb-[1.7rem] lg-up:pointer-events-none lg:!cursor-pointer lg:translate-y-[-1/2] lg:py-[3rem] lg:mb-0`}
									onClick={toggleMenu}
									data-cursor-expand="true"
								>
									Filter all insights
								</p>
								{winWidth > 991 ? (
									<div className="mini-wrap-case flex flex-wrap justify-between mb-[1.1rem] mt-0">
										<div className="mini-heading">
											<p className="small mb-[1.8rem]">{wholeData?.length} results</p>
										</div>
										<div className="clear-btn font-bold z-[10]">
											<span
												className="text-pink inline-block lg:!cursor-pointer text-[16px] xxl-up:text-[1.6rem] font-bold"
												onClick={(e) => ClearAll(e)}
												data-cursor-expand="true"
											>
												Clear all
											</span>
										</div>
									</div>
								) : (
									''
								)}
							</div>
							<div className={`${isMenuOpen ? 'max-h-[112rem]' : 'lg:max-h-[0]'} overflow-scroll no-scrollbar filterMenus w-full transition-[max-height] duration-300 `}>
								<div className="filterOuter">
									{winWidth > 991 ? (
										''
									) : (
										<div className="mini-wrap-case flex flex-wrap justify-between mb-[1.1rem] mt-0">
											<div className="mini-heading">
												<p className="small mb-[1.8rem]">{wholeData?.length} results</p>
											</div>
										</div>
									)}
									<div className="filterBlock topicFilter border-t-[0.1rem] border-[#989898]">
										<span
											data-cursor-expand="true"
											className={`${styles.filterLabel} ${open == 1 ? styles.active : ''
												} inline-block w-full text-white text-[16px] xxl-up:text-[1.6rem] font-bold px-[3.3rem] py-[3rem]`}
											onClick={() => listHandler(1)}
										>
											By Topic
										</span>
										<div
											className={`optionWrap ${open == 1 ? 'max-h-[50rem]' : 'max-h-0'
												} transition-all duration-300 overflow-scroll`}
										>
											<ul className={`pb-[2rem]`}>
												{topicListData?.map((elem, index) => (
													<li
														data-cursor-expand="true"
														key={index}
														className={`flex items-center capitalize text-[16px] xxl-up:text-[1.6rem] font-bold pl-[3.3rem] pr-[1rem] py-[1rem] text-white z-[10]`}
														onClick={() => TopicFacethandler(index, elem)}
													>
														<div className="check-box-wrap large mr-[2rem] pointer-events-none">
															<input
																className="checkbox-default"
																type="checkbox"
																name=""
																id={`topic-${index}`}
																checked={filteredTopicList.includes(elem)}
																onChange={() => handleTopicCheckboxChange(index)}
															/>
															<label htmlFor={`topic-${index}`}>.</label>
														</div>
														{elem}
													</li>
												))}
											</ul>
										</div>
									</div>
									<div className="filterBlock solutionFilter border-t-[0.1rem] border-[#989898]">
										<span
											data-cursor-expand="true"
											className={`${styles.filterLabel}  ${open == 2 ? styles.active : ''
												} inline-block w-full text-white text-[16px] xxl-up:text-[1.6rem] font-bold px-[3.3rem] py-[3rem]`}
											onClick={() => listHandler(2)}
										>
											By Solution
										</span>
										<div
											className={`optionWrap ${open == 2 ? 'max-h-[50rem]' : 'max-h-0'
												} transition-all duration-300 overflow-scroll`}
										>
											<ul className={`pb-[2rem]`}>
												{solutionListData?.map((elem, index) => (
													<li
														data-cursor-expand="true"
														key={index}
														className={`flex items-center capitalize text-[16px] xxl-up:text-[1.6rem] font-bold pl-[3.3rem] pr-[1rem] py-[1rem] text-white z-[10]`}
														onClick={() => SolutionFacethandler(index, elem)}
													>
														<div className="check-box-wrap large mr-[2rem] pointer-events-none">
															<input
																className="checkbox-default"
																type="checkbox"
																name=""
																id={`topic-${index}`}
																checked={filteredSolutionList.includes(elem)}
																onChange={() => handleSolutionCheckboxChange(index)}
															/>
															<label htmlFor={`topic-${index}`}>.</label>
														</div>
														{elem}
													</li>
												))}
											</ul>
										</div>
									</div>
									<div className="filterBlock contentTypeFilter border-t-[0.1rem] border-[#989898]">
										<span
											data-cursor-expand="true"
											className={`${styles.filterLabel}  ${open == 3 ? styles.active : ''
												} inline-block w-full text-white text-[16px] xxl-up:text-[1.6rem] font-bold px-[3.3rem] py-[3rem]`}
											onClick={() => listHandler(3)}
										>
											By Content Type
										</span>
										<div
											className={`optionWrap ${open == 3 ? 'max-h-[50rem]' : 'max-h-0'
												} transition-all duration-300 overflow-scroll`}
										>
											<ul className={`pb-[2rem]`}>
												{contentListData?.map((elem, index) => (
													<li
														data-cursor-expand="true"
														key={index}
														className={`flex items-center capitalize text-[16px] xxl-up:text-[1.6rem] font-bold pl-[3.3rem] pr-[1rem] py-[1rem] text-white z-[10]`}
														onClick={() => ContentTypeFacethandler(index, elem)}
													>
														<div className="check-box-wrap large mr-[2rem] pointer-events-none">
															<input
																className="checkbox-default"
																type="checkbox"
																name=""
																id={`topic-${index}`}
																checked={filteredContentTypeList.includes(elem)}
																onChange={() => handleContentTypeCheckboxChange(index)}
															/>
															<label htmlFor={`topic-${index}`}>.</label>
														</div>
														{elem}
													</li>
												))}
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="rightCol w-[calc(71%-7rem)] ml-[7rem] lg:w-full lg:ml-0 lg:mt-[3rem]">
							{filteredTopicList?.length == 0 && filteredSolutionList?.length == 0 && filteredContentTypeList?.length == 0 ? winWidth > 991 ? <h3 className='mb-[2rem]'>All Insights</h3> : '' : (
								<div className='lg:mb-[5rem]'>
									<ul className="lg-up:mb-[3.5rem]">
										{filteredTopicList?.map((elem, i) => {
											return (
												<li
													key={i}
													className="relative px-[1.5rem] mb-[1.5rem] pr-[4.2rem] text-[16px] xxl-up:text-[1.6rem] capitalize font-bold inline-block mr-[1rem] py-[1.3rem] rounded-[3rem] bg-white text-black"
													onClick={() => tagsClickHandler(elem.toLowerCase(), 'topic')}
													data-cursor-expand="true"
												>
													{elem}
													<span className="absolute flex items-center top-[50%] translate-y-[-50%] right-[1rem] w-[2.4rem] h-[2.4rem]">
														{crossIcon}
													</span>
												</li>
											);
										})}
										{filteredSolutionList?.map((elem, i) => {
											return (
												<li
													key={i}
													className="relative px-[1.5rem] mb-[1.5rem] pr-[4.2rem] inline-block text-[16px] xxl-up:text-[1.6rem] capitalize font-bold mr-[1rem] py-[1.3rem] rounded-[3rem] bg-white text-black"
													onClick={() => tagsClickHandler(elem.toLowerCase(), 'solution')}
													data-cursor-expand="true"
												>
													{elem}
													<span className="absolute flex items-center top-[50%] translate-y-[-50%] right-[1rem] w-[2.4rem] h-[2.4rem]">
														{crossIcon}
													</span>
												</li>
											);
										})}
										{filteredContentTypeList?.map((elem, i) => {
											return (
												<li
													key={i}
													className="relative px-[1.5rem] mb-[1.5rem] pr-[4.2rem] inline-block text-[16px] xxl-up:text-[1.6rem] capitalize font-bold mr-[1rem] py-[1.3rem] rounded-[3rem] bg-white text-black"
													onClick={() => tagsClickHandler(elem.toLowerCase(), 'contentType')}
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
									{winWidth > 991 ? (
										''
									) : (
										<div className="clear-btn mt-[1.5rem] mb-[5rem] font-bold z-[10]">
											<span
												className="text-pink inline-block lg:!cursor-pointer text-[16px] xxl-up:text-[1.6rem] font-bold"
												href=""
												onClick={(e) => ClearAll(e)}
												data-cursor-expand="true"
											>
												Clear all
											</span>
										</div>
									)}
								</div>
							)}

							<div className="cardsWrapper w-[calc(100%+3rem)] flex flex-wrap ml-[-1.5rem]">
								{wholeData?.length != 0 ? (
									wholeData?.slice(startIndex, endIndex).map((card, index) => {
										const uniqueKey = `card_${index}_${Date.now()}`;
										if (index == 3) {
											return [
												<div key={uniqueKey}
													className={`${style.pinkcard} grid__parallax pt-[4.7rem] pb-[3rem] px-[4.5rem] text-white w-[calc(50%-3rem)] justify-between mx-[1.5rem] border-pink border-[0.5rem] mb-[3rem] lg:px-[3rem] lg:py-[3rem] insghtCard relative flex-col flex overflow-hidden min-h-[45rem] max-h-[45rem] sm:min-h-[40rem] sm:max-h-[40rem] group sm:w-[calc(100%-3rem)]`}
												>
													<span className='max-w-[7.3rem] max-h-[6.8rem] w-full h-full absolute right-[5rem] laptop:right-[1rem] laptop:top-[10rem] lg:max-w-[73px] lg:max-h-[68px] sm:!max-w-[60px] sm:!max-h-[60px] lg:right-0'><Image src='/mail_white.png' alt='mail_white' width={1000} height={1000} className='w-full h-full object-cover' /></span>
													<span className='max-w-[8rem] max-h-[9.7rem] sm:max-h-[8rem] sm:max-w-[7rem] w-full h-full  absolute right-[3rem] bottom-[30%] lg:right-0'><Image src='/arrow_white.png' alt='arrow_white' width={1000} height={1000} className='w-full h-full object-cover' /></span>
													<h3 className="pr-[2rem] laptop:text-[34px] lg:pr-[4rem]">
														Get our latest Insights in your inbox
													</h3>
													<div className="btnWrap text-center mt-[6rem] relative z-[1]">
														<Link
															href={'/'}
															className="btn pink lg:text-center sm:w-full lg:!text-[20px] !py-[1rem] w-full"
															onClick={(e) => toggleOverlay(e)}
														>
															Sign up
														</Link>
													</div>
												</div>,
												<div
													key={`${index}-${uniqueKey}`}
													className={`${card?.imageSrc ? '' : 'bg-[#E5E4E7]'} ${style.card
														} insightCard ${card?.categories?.length == 0
															? 'justify-end'
															: 'justify-between'
														} w-[calc(50%-3rem)] mx-[1.5rem] max-h-[45rem] sm:max-h-[40rem] overflow-hidden  min-h-[45rem] sm:min-h-[40rem] mb-[3rem] sm:w-[calc(100%-3rem)]`}
													id="card"
												>
													{card.redirect === true ? (
														<Link
															href={`${card.hiddenurl ? card.hiddenurl : '/'}`}
															className="redirect"
														>
															.
														</Link>
													) : (
														''
													)}
													{card?.imageSrc ? (
														<div className="bg-img">
															<Image
																src={card?.imageSrc}
																width={1000}
																height={1000}
																className="w-full h-full object-cover"
																alt="bg-image"
															/>
														</div>
													) : (
														''
													)}
													<div
														className={`${style.tab} p-[5rem] pb-0 laptop:pt-[3rem] lg:p-[3rem] md:pt-[3rem] md:px-[2rem] xs:!px-[1rem] md:pb-0`}
													>
														{card?.contentType ?
															<span
																className="font-bold py-[0.5rem] px-[1rem] bg-black text-white text-[16px] xs:text-[14px] xs:px-[1rem] xxl-up:text-[1.6rem] inline-block mr-[1rem]"
															>
																{card?.contentType}
															</span> : ''
														}
														{card?.topicType ?
															<span
																className="font-bold py-[0.5rem] px-[1rem] bg-black text-white text-[16px] xs:text-[14px] xs:px-[1rem] xxl-up:text-[1.6rem] inline-block mr-[1rem]"
															>
																{card?.topicType}
															</span> : ''
														}
													</div>

													<div
														className={`${card?.imageSrc
															? `insightCardBlackOverlay ${style.blackOverlay} laptop:pt-[2rem]`
															: ''
															} p-[5rem] pt-[2.5rem] lg:p-[3rem] w-full md:py-[3rem] md:px-[2rem]`}
													>
														{card?.heading ? (
															<h4
																className={`${style.desc} ${card?.imageSrc ? 'text-white' : 'text-black'
																	}`}
															>
																{card?.id}{card?.heading}
															</h4>
														) : (
															''
														)}
														<div
															className={`${card?.imageSrc
																? `hiddenContent ${style.hiddencontent}`
																: ''
																} mt-0 h-0 opacity-0`}
														>
															<p
																className={`${card?.caption
																	? `medium text-white mb-[5rem] sm:mb-[2rem] laptop:mb-[1rem] ${style.medium}`
																	: ''
																	}`}
															>
																{card?.caption}
															</p>
															{card.linkLabel ? (
																<Link
																	href={card?.url ? card?.url : '/'}
																	className={` tertiary-btn mt-0 sm:mt-[1.8rem]`}
																>
																	{card?.linkLabel}
																</Link>
															) : (
																''
															)}
														</div>
														{card?.subText ? (
															<p
																className={`${card?.imageSrc ? 'text-white' : 'text-black'
																	} mt-[2rem]`}
															>
																{card?.subText}
															</p>
														) : (
															''
														)}
													</div>
												</div>
											];
										} else {
											return (
												<div
													key={uniqueKey}
													className={`${card?.imageSrc ? '' : 'bg-[#E5E4E7]'} ${style.card
														} ${style.insight} insightCard ${card?.categories?.length == 0 ? 'justify-end' : 'justify-between'
														} w-[calc(50%-3rem)] mx-[1.5rem] max-h-[45rem] sm:max-h-[34rem] overflow-hidden  min-h-[45rem] sm:min-h-[34rem] mb-[3rem] sm:w-[calc(100%-3rem)]`}
													id="card"
												>
													{card?.redirect === true ? (
														<Link
															href={`${card?.hiddenurl ? card?.hiddenurl : '/'}`}
															className="redirect"
														>
															.
														</Link>
													) : (
														''
													)}
													{card?.imageSrc && (
														<div className="bg-img">
															<Image
																src={card?.imageSrc}
																width={1000}
																height={1000}
																className="w-full h-full object-cover"
																alt="bg-image"
															/>
														</div>
													)}
													<div
														className={`${style.tab} p-[5rem] pb-0 laptop:pt-[3rem] lg:p-[3rem] md:pt-[3rem] md:px-[2rem] xs:!px-[1rem] md:pb-0`}
													>
														{card?.contentType ?
															<span
																className="truncate font-bold py-[0.5rem] px-[1rem] bg-black text-white text-[16px] xs:text-[14px] xs:px-[1rem] xxl-up:text-[1.6rem] inline-block mr-[1rem]"
															>
																{card?.contentType}
															</span> : ''
														}
														{card?.topicType ?
															<span
																className="truncate line-clamp-1 max-w-[73%] font-bold py-[0.5rem] px-[1rem] bg-black text-white text-[16px] xs:text-[14px] xs:px-[1rem] xxl-up:text-[1.6rem] inline-block mr-[1rem]"
															>
																{card?.topicType}
															</span> : ''
														}
													</div>

													<div
														className={`${card?.imageSrc
															? `insightCardBlackOverlay ${style.blackOverlay} laptop:pt-[2rem] xs:!px-[1rem]`
															: ''
															} p-[5rem] pt-[2.5rem] lg:p-[3rem] w-full md:py-[3rem] md:px-[2rem]`}
													>
														{card?.heading && (
															<h4
																className={`${style.desc} ${card?.imageSrc ? 'text-white' : 'text-black'
																	}`}
															>
																{card?.id} {card?.heading}
															</h4>
														)}
														<div
															className={`${card?.imageSrc
																? `hiddenContent ${style.hiddencontent}`
																: ''
																} mt-0 h-0 opacity-0`}
														>
															<p
																className={`${card?.caption
																	? ` medium text-white mb-[5rem] sm:mb-[2rem] laptop:mb-[1rem] ${style.medium}`
																	: ''
																	}`}
															>
																{card?.caption}
															</p>
															{card?.linkLabel && (
																<Link
																	href={card?.url ? card?.url : '/'}
																	className={` tertiary-btn mt-0 sm:mt-[1.8rem]`}
																>
																	{card?.linkLabel}
																</Link>
															)}
														</div>
														{card?.subText && (
															<p
																className={`${card?.imageSrc ? 'text-white' : 'text-black'
																	} mt-[2rem]`}
															>
																{card?.subText}
															</p>
														)}
													</div>
												</div>
											);
										}
									})
								) : (
									<div className="min-h-[40rem] flex items-center justify-center">
										<h3 className="block w-full my-[25px] text-center">
											No Result Found
										</h3>
									</div>
								)}
								{wholeData?.length > 10 && (
									<ul
										className={`pagination pt-[2rem] flex justify-center w-full`}
									>
										<button
											onClick={() => handlePageChange(currentPage - 1)}
											disabled={currentPage === 1}
											className="prev-button flex items-center justify-center w-[4.4rem] h-[4.4rem] text-[0] disabled:hidden group sm:h-[3rem]"
										>
											.
											<div className="iconWrap transform -rotate-180">
												<div
													className={`relative ${currentPage === 1 &&
														'opacity-[0.2] pointer-events-none'
														}`}
												>
													<svg
														width="20"
														height="20"
														viewBox="0 0 20 20"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<g id="Arrow_Right">
															<path
																className={`group-hover:lg-up:stroke-pink transition`}
																id="Vector"
																d="M4.16675 10H15.8334"
																stroke="#fff"
																strokeWidth="2"
																strokeLinecap="round"
																strokeLinejoin="round"
															/>
															<path
																className={`group-hover:lg-up:stroke-pink transition`}
																id="Vector_2"
																d="M10 4.16675L15.8333 10.0001L10 15.8334"
																stroke="#fff"
																strokeWidth="2"
																strokeLinecap="round"
																strokeLinejoin="round"
															/>
														</g>
													</svg>
												</div>
											</div>
										</button>
										{Array.from({ length: totalPages }, (_, i) => {
											const isCurrent = i + 1 === currentPage;
											// console.log(isCurrent);
											// console.log(totalPages);
											// console.log(i);
											// console.log(currentPage);
											if (winWidth < 596 && totalPages > 4) {
												if (
													i + 1 === 1 ||
													(currentPage === 1 && i < 2) ||
													(currentPage === 2 && i === 0) ||
													i + 1 === currentPage ||
													i + 1 === totalPages ||
													(totalPages === currentPage && i + 1 === totalPages - 1)
												) {
													return (
														<li
															data-cursor-expand="true"
															key={i + 1}
															onClick={() => handlePageChange(i + 1)}
															className={`text-black text-[2rem] py-[1rem] px-[1.7rem] sm:px-[1.5rem] sm:py-[0.5rem] sm:text-[1rem] font-[700] flex items-center justify-center leading-[24px] mx-[1rem] transition-all duration-300 hover:text-pink ${isCurrent
																? 'active text-white hover:text-white bg-pink font-bold'
																: 'bg-gray'
																}`}
														>
															{i + 1}
														</li>
													);
												} else if (
													(currentPage === 1 && i === 2) ||
													(currentPage === 3 && i === 1) ||
													// (currentPage === 3 && i === 4) ||
													(i + 1 === currentPage - 2 && i + 1 > 1) ||
													(i + 1 === currentPage + 2 && i + 1 < totalPages) ||
													(currentPage === totalPages - 2 &&
														i + 1 === totalPages - 1)
												) {
													return (
														<li
															key={`dots-${i + 1}`}
															onClick={() => handlePageChange(i + 1)}
															className={`text-white text-[2rem] sm:px-[0] sm:py-[0] sm:mx-[0.3rem] sm:text-[1.5rem] font-[700] flex items-center justify-center leading-[24px] mx-[1rem]`}
														>
															...
														</li>
													);
												} else if (
													totalPages === currentPage &&
													i + 1 === totalPages - 1
												) {
													return (
														<li
															key={`dots-${i + 1}`}
															onClick={() => handlePageChange(i + 1)}
															className={`text-white text-[2rem] font-[700] sm:px-[0] sm:py-[0] sm:mx-[0.3rem] sm:text-[1.5rem] flex items-center justify-center leading-[24px] mx-[1rem]`}
														>
															...
														</li>
													);
												}
											} else {
												if (
													i + 1 === 1 ||
													(currentPage === 1 && i < 4) ||
													(currentPage === 2 && i < 4) ||
													(currentPage === 3 && i < 4) ||
													(currentPage === 4 && i === 0) ||
													i + 1 === currentPage - 1 ||
													i + 1 === currentPage ||
													i + 1 === currentPage + 1 ||
													i + 1 === totalPages ||
													(totalPages === currentPage && i + 1 === totalPages - 2)
												) {
													return (
														<li
															data-cursor-expand="true"
															key={i + 1}
															onClick={() => handlePageChange(i + 1)}
															className={`text-black text-[2rem] py-[1rem] px-[1.7rem] sm:px-[1.5rem] sm:py-[0.5rem] sm:text-[1rem] font-[700] flex items-center justify-center leading-[24px] mx-[1rem] transition-all duration-200 hover:text-pink ${isCurrent
																? 'active text-white hover:text-white bg-pink font-bold'
																: 'bg-gray'
																}`}
														>
															{i + 1}
														</li>
													);
												} else if (
													(currentPage === 1 && i === 4) ||
													(currentPage === 2 && i === 4) ||
													(currentPage === 3 && i === 4) ||
													(i + 1 === currentPage - 2 && i + 1 > 1) ||
													(i + 1 === currentPage + 2 && i + 1 < totalPages) ||
													(currentPage === totalPages && i + 1 === totalPages - 2)
												) {
													return (
														<li
															key={`dots-${i + 1}`}
															onClick={() => handlePageChange(i + 1)}
															className={`text-white text-[2rem] sm:px-[1.5rem] sm:py-[0.5rem] sm:text-[1rem] font-[700] flex items-center justify-center leading-[24px] mx-[1rem]`}
														>
															...
														</li>
													);
												} else if (i + 1 === 1) {
													return (
														<li
															key={i + 1}
															onClick={() => handlePageChange(i + 1)}
															className={`text-black text-[2rem] py-[1rem] px-[1.7rem] sm:px-[1.5rem] sm:py-[0.5rem] sm:text-[1rem] font-[700] flex items-center justify-center leading-[24px] mx-[1rempx] transition-all duration-200 hover:text-pink ${isCurrent
																? 'active text-white hover:text-white bg-pink font-bold'
																: 'bg-gray'
																}`}
														>
															{i + 1}
														</li>
													);
												} else if (
													totalPages === currentPage &&
													i + 1 === totalPages - 3
												) {
													return (
														<li
															key={`dots-${i + 1}`}
															onClick={() => handlePageChange(i + 1)}
															className={`text-white text-[2rem] font-[700] sm:px-[1.5rem] sm:py-[0.5rem] sm:text-[1rem] flex items-center justify-center leading-[24px] mx-[1rem]`}
														>
															...
														</li>
													);
												}
											}
											return null;
										})}

										<button
											onClick={() => handlePageChange(currentPage + 1)}
											disabled={currentPage === totalPages}
											className="next-button  w-[4.4rem] flex items-center justify-center h-[4.4rem] text-[0] disabled:hidden group sm:h-[3rem]"
										>
											.
											<div className={`iconWrap`}>
												<div
													className={`relative ${currentPage === totalPages &&
														'opacity-[0.2] pointer-events-none'
														}`}
												>
													<svg
														width="20"
														height="20"
														viewBox="0 0 20 20"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<g id="Arrow_Right">
															<path
																className={`group-hover:lg-up:stroke-pink transition`}
																id="Vector"
																d="M4.16675 10H15.8334"
																stroke="#fff"
																strokeWidth="2"
																strokeLinecap="round"
																strokeLinejoin="round"
															/>
															<path
																className={`group-hover:lg-up:stroke-pink transition`}
																id="Vector_2"
																d="M10 4.16675L15.8333 10.0001L10 15.8334"
																stroke="#fff"
																strokeWidth="2"
																strokeLinecap="round"
																strokeLinejoin="round"
															/>
														</g>
													</svg>
												</div>
											</div>
										</button>
									</ul>
								)}
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className={`${styles.overlayForm} dark__overlay extra_dark ${overlay ? '' : 'opacity-0 invisible'}`}>
				<div className="container">
					<div className={`${styles.overlayFormOuter} max-w-[93rem] bg-black p-[4rem] md:p-[3rem] border-[2px] border-white z-[1] md:h-[80vh] md:overflow-scroll`}>
						<div className={`${styles.closeIcon} absolute w-[30px] h-[30px] right-[2rem] top-[2rem] z-30 md:top-[1rem] md:right-[1rem] md:w-[20px] md:h-[20px]`}>
							<a href="#" onClick={(e) => toggleOverlay(e)}>
								<svg className='w-full h-full' viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
									<path d="M18.75 11.25L11.25 18.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
									<path d="M11.25 11.25L18.75 18.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</a>
						</div>
						<div className="overlayFormWrap flex w-[calc(100%+2rem)] -ml-[1rem] sm:flex-wrap">
							<div className="contentCol w-[calc(50%-2rem)] sm:w-full mx-[1] sm:mb-[3rem]">
								<h3 className={`text-white`}>Stay <span className='text-pink'>updated</span> with Clear Digital</h3>
								<p className={`text-white mt-[2rem]`}>Lorem ipsum dolor sit amet etal dolor consectetur. Lobortis congue venenatis ultricies venenatis leo a nunc. Molestie nullam.</p>
								<span className={`text-white mt-[2rem] text-[12px] inline-block max-w-[26rem]`}>Privacy statement lorem ipsum dolor sit amet consectetur adisciping etal</span>
							</div>
							<div className="formCol w-[calc(50%-2rem)] sm:w-full mx-[1rem]">
								<form action="">
									<div className="row w-full flex flex-wrap">
										<div className="area w-full mb-[3rem] laptop:mb-[1rem] sm:mb-[1rem]">
											<label htmlFor="" className='text-[14px] xxl-up:text-[1.4rem] text-white font-normal mb-[10px] block'>First name</label>
											<input type="text" className='bg-black p-[2rem] sm:p-[1rem] w-full h-[7rem] border-2 border-solid border-white text-white laptop:h-[40px] lg:h-[50px]' />
										</div>
										<div className="area w-full mb-[3rem] laptop:mb-[1rem] sm:mb-[1rem]">
											<label htmlFor="" className='text-[14px] xxl-up:text-[1.4rem] text-white font-normal mb-[10px] block'>Last name</label>
											<input type="text" className='bg-black p-[2rem] sm:p-[1rem] w-full h-[7rem] border-2 border-solid border-white text-white laptop:h-[40px] lg:h-[50px]' />
										</div>
										<div className="area w-full mb-[3rem] laptop:mb-[1rem] sm:mb-[1rem]">
											<label htmlFor="" className='text-[14px] xxl-up:text-[1.4rem] text-white font-normal mb-[10px] block'>Email</label>
											<input type="email" className='bg-black p-[2rem] sm:p-[1rem] w-full h-[7rem] border-2 border-solid border-white text-white laptop:h-[40px] lg:h-[50px]' />
										</div>
										<div className="area w-full mb-[3rem] sm:mb-[1rem]">
											<label htmlFor="" className='text-[14px] xxl-up:text-[1.4rem] text-white font-normal mb-[10px] block'>Country</label>
											<input type="text" className='bg-black p-[2rem] sm:p-[1rem] w-full h-[7rem] border-2 border-solid border-white text-white laptop:h-[40px] lg:h-[50px]' />
										</div>
										<div className="btn-wrap w-full">
											<button type='submit' className='w-full btn pink white-bordered'>Submit</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
