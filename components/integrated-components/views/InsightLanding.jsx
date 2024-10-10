import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import style from '../../../components/styles/insightCard.module.css';
import styles from '../../../components/styles/insightLanding.module.css';
import { useQuery } from '@apollo/client';
import { GET_ALL_INSIGHTS, GET_ALL_TOPICS, GET_ALL_SERVICES } from '../../../graphql/insight';

import Router, { useRouter } from 'next/router';

const decodeHtmlEntities = (str) => {
    const txt = document.createElement('textarea');
    txt.innerHTML = str;
    return txt.value;
};

const cleanText = (text, limit) => {
    let plainText = text.replace(/<[^>]+>/g, '');
    plainText = decodeHtmlEntities(plainText);
    return (plainText.length > limit) ? plainText.slice(0, limit - 1) + '...' : plainText;
};

export default function InsightLanding() {
    const allInsights = useQuery(GET_ALL_INSIGHTS);

    const [open, setopen] = useState(0);
    const topicTerms = useQuery(GET_ALL_TOPICS);
    const serviceTerms = useQuery(GET_ALL_SERVICES);
    const [topicListData, setTopicListData] = useState([]);
    const [serviceListData, setServiceListData] = useState([]);
    const [contentListData, setContentListData] = useState([]);
    const [wholeData, setWholeData] = useState([]);
    const [overlay, setoverlay] = useState(false)
    const [searchTerm, setSearchTerm] = useState('');

    const [winWidth, isWinWidth] = useState(0);

    const [sortedData, setSortedData] = useState();
    const [searchData, setSearchData] = useState();
    const [totalPages, setTotalPages] = useState();

    const router = useRouter();
    useEffect(() => {
        if (allInsights.data) {

            let insightData = insightsCTS.map((item, index) => {
                if (item == 'podcasts') {
                    return allInsights.data[item].nodes || [];
                } else {
                    return allInsights.data[`${item}s`].nodes || [];
                }
            });
            let mergedArray = insightData.reduce((acc, curr) => acc.concat(curr), []);
            setWholeData(mergedArray);
            setSortedData(mergedArray);
            setSearchData(mergedArray);
            data = mergedArray

        }
    }, [allInsights?.data]);


    //window width
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

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    useEffect(() => {

        let tp = Math.ceil(sortedData?.length / itemsPerPage);
        setTotalPages(tp)
    }, [wholeData, sortedData]);
    let data

    const [topicData, settopicData] = useState('')
    const [solutionData, setsolutionData] = useState('')
    const [contentTypeData, setcontentTypeData] = useState('');

    const [filteredTopicList, setfFilteredTopicList] = useState([])
    const [filteredSolutionList, setfilteredSolutionList] = useState([])
    const [filteredContentTypeList, setfilteredContentTypeList] = useState([])
    let insightsCTS = [
        'calculator',
        'infographic',
        'podcasts',
        'post',
        'video',
        'whitepaper',
    ];



    useEffect(() => {
        if (topicTerms.data) {
            setTopicListData(topicTerms?.data?.messageAreaOfFocuses?.nodes);
        }
    }, [topicTerms?.data]);
    useEffect(() => {
        if (serviceTerms.data) {
            setServiceListData(serviceTerms?.data?.services?.nodes);
        }
    }, [serviceTerms?.data]);

    //topic facet handler
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
            var sortedSol = solutionData.filter((item) =>
                item?.messageAreaOfFocuses?.nodes?.some((val) =>
                    checkedTopics.map((selectedTopic) => (selectedTopic.includes(val?.name)))
                )
            );

            var sortedContent = contentTypeData.filter((item) =>
                item?.messageAreaOfFocuses?.nodes?.some((val) =>
                    checkedTopics.map((selectedTopic) => (selectedTopic.includes(val?.name)))
                )
            );
            if (checkedTopics != '') {
                sorted = findCommonElements(sortedSol, sortedContent);
            } else {
                sorted = findCommonElements(solutionData, contentTypeData);
            }
        } else if (solutionData != '' && contentTypeData == '') {

            sorted = solutionData.filter((item) =>
                item?.messageAreaOfFocuses?.nodes?.some((val) =>
                    checkedTopics.map((selectedTopic) => (selectedTopic.includes(val?.name)))
                )
            );
            prevData = solutionData;
            const updatedSolutionsData = getUniqueSolutions(solutionData)

            // setsolutionListData(updatedSolutionsData)
        } else if (solutionData == '' && contentTypeData != '') {
            sorted = contentTypeData.filter((item) =>
                item?.messageAreaOfFocuses?.nodes?.some((val) =>
                    checkedTopics.map((selectedTopic) => (selectedTopic.includes(val?.name)))
                )
            );

            prevData = contentTypeData;
            const updatedContentTypeData = getUniqueContentTypes(contentTypeData)

            // setcontentListData(updatedContentTypeData)
        } else if (solutionData == '' && contentTypeData == '') {

            sorted = wholeData.filter((item) =>
                item?.messageAreaOfFocuses?.nodes?.some((val) =>
                    checkedTopics.some((selectedT) =>
                        selectedT.toLowerCase() === val?.name.toLowerCase()
                    )
                )
            );
        } else {

            sorted = wholeData; // Set sorted to the original data when updatedcheckedServicesVal is empty
        }

        const UpdatedsolutionData = [...sorted, ...solutionData];
        const UpdatedcontentTypeData = [...sorted, ...contentTypeData];
        const updatedListData = [...sorted, ...solutionData, ...contentTypeData]
        const bothListData = [...solutionData, ...contentTypeData];

        if (checkedTopics.length > 0) {
            getUniqueSolutions(UpdatedsolutionData);
            getUniqueContentTypes(UpdatedcontentTypeData);
            settopicData(sorted);
        }
        else {
            if (solutionData != '' && contentTypeData != '') {

                getUniqueSolutions(updatedListData);
                getUniqueContentTypes(updatedListData);
            } else if (solutionData == '' && contentTypeData != '') {
                getUniqueContentTypes(wholeData);
                sorted = wholeData.filter((item) =>
                    filteredContentTypeList.includes((item?.contentType?.node?.name).toLowerCase())
                );
            } else if (solutionData != '' && contentTypeData == '') {
                getUniqueSolutions(wholeData);
                sorted = wholeData.filter((item) =>
                    item?.services?.nodes?.some((val) =>
                        checkedSolutions.includes(val?.name)
                    )
                );
            } else if (solutionData == '' && contentTypeData == '') {
                getUniqueSolutions(wholeData);
                getUniqueContentTypes(wholeData);
                getUniqueTopics(wholeData)
            }
            settopicData('');
        }


        if (sorted == '' && prevData != '') {
            var noDuplicateds = prevData.filter(
                (elem, index, self) => index === self.findIndex((t) => t.date === elem.date),
            );
        }
        else {
            var noDuplicateds = sorted.filter(
                (elem, index, self) => index === self.findIndex((t) => t.date === elem.date),
            );
        }
        setCurrentPage(1)
        setSortedData(noDuplicateds.length == 0 ? wholeData : noDuplicateds);
        setSearchData(noDuplicateds.length == 0 ? wholeData : noDuplicateds);
        // console.log(checkedTopics)
        // const { pid, ...newQuery } = router.query;
        // router.push({
        //     pathname: router.pathname,
        //     query: { ...newQuery, topic: checkedTopics.join(",") }
        // }, undefined, { scroll: false });

        // if (checkedTopics.length === 0) {
        //     delete newQuery.topic;
        //     router.push({
        //         pathname: router.pathname,
        //         query: newQuery,
        //     }, undefined, { scroll: false });
        // }
    };
    const handleTopicCheckboxChange = (index) => {
        TopicFacethandler(null, index);
    };

    //solution facet handler
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
                item?.services?.nodes?.some((val) =>
                    checkedSolutions.includes(val?.name)
                )
            );
            var sortedContent = contentTypeData.filter((item) =>
                item?.services?.nodes?.some((val) =>
                    checkedSolutions.includes(val?.name)
                )
            );
            if (checkedSolutions != '') {
                sorted = findCommonElements(sortedTopic, sortedContent);
            } else {
                sorted = findCommonElements(topicData, contentTypeData);
            }

        } else if (topicData != '' && contentTypeData == '') {
            sorted = topicData.filter((item) =>
                item?.services?.nodes?.some((val) =>
                    checkedSolutions.includes(val?.name)
                )
            );
            prevData = topicData;
            const updatedTopicData = getUniqueTopics(topicData)

            // settopicListData(updatedTopicData)
        } else if (topicData == '' && contentTypeData != '') {
            sorted = contentTypeData.filter((item) =>
                item?.services?.nodes?.some((val) =>
                    checkedSolutions.includes(val?.name)
                )
            );
            // sorted = contentTypeData.filter((item) =>
            //  checkedSolutions.includes(item.solutionType.toLowerCase())
            // );
            prevData = contentTypeData;
            const updatedContentTypeData = getUniqueContentTypes(contentTypeData)

            // setcontentListData(updatedContentTypeData)
        } else if (topicData == '' && contentTypeData == '') {
            sorted = wholeData.filter((item) =>
                item?.services?.nodes?.some((val) =>
                    checkedSolutions.includes(val?.name)
                )
            );

        } else {
            sorted = wholeData;
        }

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

                getUniqueTopics(updatedListData);
                getUniqueContentTypes(updatedListData);
                setsolutionData(bothListData);
            } else if (topicData == '' && contentTypeData != '') {
                getUniqueContentTypes(data);
                sorted = wholeData.filter((item) =>
                    filteredContentTypeList.includes((item?.contentType?.node?.name).toLowerCase())
                );
                // sorted = wholeData.filter((item) =>
                //  filteredContentTypeList.includes(item.contentType.toLowerCase())
                // );
            } else if (topicData != '' && contentTypeData == '') {
                getUniqueTopics(wholeData);

                sorted = wholeData.filter((item) =>
                    item?.messageAreaOfFocuses?.nodes?.some((val) =>
                        filteredTopicList.some((selectedT) =>
                            selectedT.toLowerCase() === val?.name.toLowerCase()
                        )
                    )
                );
                // sorted = data.filter((item) =>
                //  filteredTopicList.includes(item.topicType.toLowerCase())
                // );
            } else if (topicData == '' && contentTypeData == '') {
                getUniqueTopics(wholeData)
                getUniqueContentTypes(wholeData);
                getUniqueSolutions(wholeData);
            }
            setsolutionData('');

        }

        var noDuplicateds
        if (sorted == '' && prevData != '') {
            noDuplicateds = prevData.filter(
                (elem, index, self) => index === self.findIndex((t) => t.id === elem.id),
            );
        }
        else {
            noDuplicateds = sorted.filter(
                (elem, index, self) => index === self.findIndex((t) => t.date === elem.date),
            );
        }
        setCurrentPage(1)
        setSortedData(noDuplicateds.length == 0 ? wholeData : noDuplicateds);
        setSearchData(noDuplicateds.length == 0 ? wholeData : noDuplicateds);
    };
    const handleSolutionCheckboxChange = (index) => {
        SolutionFacethandler(null, index);
    };

    /* content type facet handler*/
    const ContentTypeFacethandler = (index, val) => {
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

            var sortedTopic = topicData.filter((item) =>
                checkedContentTypes.includes((item?.contentType?.node?.name).toLowerCase())
            );
            var sortedSolutions = solutionData.filter((item) =>
                checkedContentTypes.includes((item?.contentType?.node?.name).toLowerCase())
            );
            if (checkedContentTypes != '') {
                sorted = findCommonElements(sortedTopic, sortedSolutions);
            } else {
                sorted = findCommonElements(topicData, solutionData);
            }

        } else if (topicData != '' && solutionData == '') {

            sorted = topicData.filter((item) =>
                checkedContentTypes.includes((item?.contentType?.node?.name).toLowerCase())
            );
            prevData = topicData;
            const updatedTopicData = getUniqueTopics(topicData)
            // settopicListData(updatedTopicData)
        } else if (topicData == '' && solutionData != '') {
            sorted = solutionData.filter((item) =>
                checkedContentTypes.includes((item?.contentType?.node?.name).toLowerCase())
            );
            prevData = solutionData;
            const updatedSolutionData = getUniqueSolutions(solutionData)
            // setsolutionListData(updatedSolutionData)
        } else if (topicData == '' && solutionData == '') {

            sorted = wholeData.filter((item) =>
                checkedContentTypes.includes((item?.contentType?.node?.name)?.toLowerCase())
            );

        } else {
            sorted = wholeData; // Set sorted to the original data when updatedcheckedServicesVal is empty
        }

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
                getUniqueTopics(updatedListData);
                getUniqueSolutions(updatedListData);
                // setcontentTypeData(bothListData);
            } else if (topicData == '' && solutionData != '') {
                getUniqueSolutions(data);
                sorted = wholeData.filter((item) =>
                    filteredSolutionList.includes(item?.solutionType?.toLowerCase())
                );
            } else if (topicData != '' && solutionData == '') {
                getUniqueTopics(data);
                sorted = wholeData.filter((item) =>
                    filteredTopicList.includes(item?.topicType?.toLowerCase())
                );
            } else if (topicData == '' && solutionData == '') {
                getUniqueTopics(wholeData);
                getUniqueSolutions(wholeData);
                getUniqueContentTypes(wholeData);

            }
            setcontentTypeData('');
        }


        if (sorted == '' && prevData != '') {
            var noDuplicateds = prevData.filter(
                (elem, index, self) => index === self.findIndex((t) => t.date === elem.date),
            );
        }
        else {
            var noDuplicateds = sorted.filter(
                (elem, index, self) => index === self.findIndex((t) => t.date === elem.date),
            );
        }
        setCurrentPage(1)
        setSortedData(noDuplicateds.length == 0 ? wholeData : noDuplicateds);
        setSearchData(noDuplicateds.length == 0 ? wholeData : noDuplicateds);
    };

    const handleContentTypeCheckboxChange = (index) => {
        ContentTypeFacethandler(null, index);
    };

    //unique data
    function getUniqueTopics(data) {

        const uniqueTopicTypes = [...new Set(data?.map((item) => item?.messageAreaOfFocuses?.nodes))]
            .filter((topicType) => topicType?.name !== '').sort();
        // settopicListData(uniqueTopicTypes);
        return uniqueTopicTypes;
    }
    function getUniqueSolutions(data) {

        const uniqueSolutionTypes = [...new Set(data?.map((item) => item?.services?.nodes))]
            .filter((solutionType) => solutionType?.name !== '').sort();
        // setsolutionListData(uniqueSolutionTypes);
        return uniqueSolutionTypes;
    }
    function getUniqueContentTypes(data) {
        const uniqueContentTypes = [...new Set(data.map((item) => item.contentType?.node?.name))]
            .filter((contentType) => contentType !== '').sort();
        // setcontentListData(uniqueContentTypes)
        return uniqueContentTypes;
    }

    const listHandler = (i) => {
        open == i ? setopen(0) : setopen(i);
    };

    //pagination handler
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        const sectionElement = document.getElementsByClassName(
            'insightLanding',
        )[0];
        if (sectionElement) {
            window.scrollTo({
                top: sectionElement.offsetTop,
                behavior: 'smooth',
            });
        }
    };
    const toggleOverlay = (e) => {
        e.preventDefault();
        setoverlay(!overlay)
    }
    // cardData.types?.nodes?.map((topicVal)=>topicVal.name.toLowerCase().includes(searchTerm.toLowerCase()))
    useEffect(() => {

        let filteredCards
        if (searchTerm) {
            filteredCards = searchTerm
                ? searchData.filter(
                    (cardData) =>
                        cardData.types?.nodes?.map((topicVal) => topicVal.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
                        cardData.solutionType?.nodes?.map((topicVal) => topicVal.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
                        cardData.contentType?.node?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        cardData?.title?.toLowerCase().includes(searchTerm.toLowerCase(),) ||
                        cardData?.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        cardData?.__typename?.toLowerCase().includes(searchTerm.toLowerCase()),)
                : wholeData;

            setSortedData(filteredCards);
        } else {
            setSortedData(sortedData);
        }


    }, [searchTerm]);

    return (
        <section className="insightLanding bg-black padding-top-l">
            <div className="container">
                <div className="outer flex lg:flex-wrap">
                    <div className="leftCol w-[29%] lg:w-full">
                        <h3 className="mb-[5rem]">All Insights</h3>
                        <div className="searchOuter mb-[2.8rem]">
                            <div className="searchWrap relative">
                                <form
                                    className={`relative`}
                                    onSubmit={(e) => e.preventDefault()}
                                >
                                    <label htmlFor="search" className="hidden">
                                        .
                                    </label>
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
                                        <div>
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
                                className={`${styles.filterLabel} after:lg-up:hidden relative font-bold mb-[1.7rem] lg-up:pointer-events-none lg:!cursor-pointer lg:translate-y-[-1/2] lg:py-[3rem] lg:mb-0`}
                                data-cursor-expand="true"
                            >
                                Filter all insights
                            </p>
                        </div>
                        <div
                            className={`lg:max-h-[0] overflow-scroll no-scrollbar filterMenus w-full transition-[max-height] duration-300 `}
                        >
                            <div className="filterOuter">
                                <div className="mini-wrap-case flex flex-wrap justify-between mb-[1.1rem] mt-0">
                                    <div className="mini-heading">
                                        <p className="small mb-[1.8rem]">
                                            {sortedData?.length} results
                                        </p>
                                    </div>
                                </div>

                                <div className="filterBlock topicFilter border-t-[0.1rem] border-[#989898]">
                                    <span
                                        data-cursor-expand="true"
                                        className={`${styles.filterLabel} inline-block w-full text-white text-[16px] xxl-up:text-[1.6rem] font-bold px-[3.3rem] py-[3rem]`}
                                        onClick={() => listHandler(1)}
                                    >
                                        By Topic
                                    </span>
                                    <div
                                        className={`optionWrap ${open == 1 ? 'max-h-[50rem]' : 'max-h-0'
                                            } transition-all duration-300 overflow-scroll`}
                                    >
                                        <ul className={`pb-[2rem]`}>
                                            {topicListData.map((item, index) => (
                                                <li
                                                    data-cursor-expand="true"
                                                    key={index}
                                                    className={`flex items-center capitalize text-[16px] xxl-up:text-[1.6rem] font-bold pl-[3.3rem] pr-[1rem] py-[1rem] text-white z-[10]`}
                                                    onClick={() => TopicFacethandler(index, item.name)}
                                                >
                                                    <div className="check-box-wrap large mr-[2rem] pointer-events-none">
                                                        <input
                                                            className="checkbox-default"
                                                            type="checkbox"
                                                            name=""
                                                            id={`topic-${index}`}
                                                            checked={filteredTopicList.includes(item.name)}
                                                            onChange={() => handleTopicCheckboxChange(index)}
                                                        />
                                                        <label htmlFor={`topic-${index}`}>.</label>
                                                    </div>
                                                    {item.name}
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
                                        By Service
                                    </span>
                                    <div
                                        className={`optionWrap ${open == 2 ? 'max-h-[50rem]' : 'max-h-0'
                                            } transition-all duration-300 overflow-scroll`}
                                    >
                                        <ul className={`pb-[2rem]`}>
                                            {serviceListData?.map((elem, index) => (
                                                <li
                                                    data-cursor-expand="true"
                                                    key={index}
                                                    className={`flex items-center capitalize text-[16px] xxl-up:text-[1.6rem] font-bold pl-[3.3rem] pr-[1rem] py-[1rem] text-white z-[10]`}
                                                    onClick={() => SolutionFacethandler(index, elem.name)}
                                                >
                                                    <div className="check-box-wrap large mr-[2rem] pointer-events-none">
                                                        <input
                                                            className="checkbox-default"
                                                            type="checkbox"
                                                            name=""
                                                            id={`topic-${index}`}
                                                            checked={filteredSolutionList.includes(elem?.name)}
                                                            onChange={() => handleSolutionCheckboxChange(index)}
                                                        />
                                                        <label htmlFor={`topic-${index}`}>.</label>
                                                    </div>
                                                    {elem.name}
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
                                            {insightsCTS?.map((elem, index) => (
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
                        <h3 className="mb-[2rem]">All Insights</h3>
                        <div className="cardsWrapper w-[calc(100%+3rem)] flex flex-wrap ml-[-1.5rem]">
                            {sortedData?.length != 0 ? (
                                sortedData?.slice(startIndex, endIndex)?.map((card, index) => {
                                    const uniqueKey = `card_${index}_${card?.id || Date.now()}`; // Prefer card's unique ID or use Date.now() as fallback

                                    // Define a card component to reuse
                                    const renderCard = (card, index, uniqueKey) => (
                                        <div key={uniqueKey}
                                            className={`insightCard ${style.card} ${card?.messageAreaOfFocuses?.length === 0 ? 'justify-end' : 'justify-between'} group w-[calc(50%-3rem)] mx-[1.5rem] mb-[3rem] max-h-[45rem] min-h-[45rem] overflow-hidden sm:max-h-[34rem] sm:min-h-[34rem] sm:w-[calc(100%-3rem)]`}
                                            id={`card-${index}`}>
                                            {card?.link && <Link href={card?.uri} className="redirect">.</Link>}
                                            {card?.featuredImage ? (
                                                <div className="bg-img">
                                                    <Image
                                                        src={card?.featuredImage.node.mediaItemUrl}
                                                        width={1000}
                                                        height={1000}
                                                        className="w-full h-full object-cover group-hover:scale-[1] transition-transform duration-300 scale-[1.2]"
                                                        alt={card?.featuredImage.node.altText}
                                                    />
                                                </div>
                                            ) : (
                                                <div className="bg-img">
                                                    <Image
                                                        src='/insights/default.png'
                                                        width={1000}
                                                        height={1000}
                                                        className="w-full h-full object-cover group-hover:scale-[1] transition-transform duration-300 scale-[1.2]"
                                                        alt='default'
                                                    />
                                                </div>
                                            )}
                                            <div className={`${style.tab} p-[5rem] pb-0 laptop:pt-[3rem] lg:p-[3rem] md:pt-[3rem] md:px-[2rem] xs:!px-[1rem] md:pb-0`}>
                                                {card?.contentType && (
                                                    <span className="truncate capitalize font-bold py-[0.5rem] px-[1rem] bg-black text-white text-[16px] xs:text-[14px] xs:px-[1rem] xxl-up:text-[1.6rem] inline-block mr-[1rem]">
                                                        {card?.contentType.node.name}
                                                    </span>
                                                )}
                                                {card?.messageAreaOfFocuses && card?.messageAreaOfFocuses.nodes.length > 0 && (
                                                    <span className="truncate line-clamp-1 max-w-[73%] font-bold py-[0.5rem] px-[1rem] bg-black text-white text-[16px] xs:text-[14px] xs:px-[1rem] xxl-up:text-[1.6rem] inline-block mr-[1rem]">
                                                        {card?.messageAreaOfFocuses.nodes[0].name}
                                                    </span>
                                                )}
                                            </div>
                                            <div className={`insightCardBlackOverlay ${style.blackOverlay} absolute bottom-0 p-[5rem] w-full md:!py-[3rem] md:!px-[2rem]`}>
                                                {card?.title && (
                                                    <h4 className={`${style.desc} ${card?.featuredImage ? 'text-white' : 'text-black'}`}>
                                                        {card?.title}
                                                    </h4>
                                                )}
                                                <div className={`hiddenContent ${style.hiddencontent} mt-0 h-0 opacity-0`}>
                                                    {card?.excerpt &&
                                                        <p className={`medium text-white line-clamp-2 ${style.medium}`}>
                                                            {cleanText(card?.excerpt, 100)}
                                                        </p>
                                                    }
                                                    <Link href={card?.uri || '/'} className="tertiary-btn mt-[3rem] sm:mt-[1.8rem]">Read more</Link>
                                                </div>
                                            </div>
                                        </div>
                                    );

                                    return (
                                        <React.Fragment key={uniqueKey}>
                                            {renderCard(card, index, uniqueKey)}
                                            {index === 2 && (
                                                <div key={`signup_${uniqueKey}`}
                                                    className={`${style.pinkcard} grid__parallax pt-[4.7rem] pb-[3rem] px-[4.5rem] text-white w-[calc(50%-3rem)] justify-between mx-[1.5rem] border-pink border-[0.5rem] mb-[3rem] lg:px-[3rem] lg:py-[3rem] relative flex-col flex overflow-hidden min-h-[45rem] max-h-[45rem] sm:min-h-[40rem] sm:max-h-[40rem] sm:w-[calc(100%-3rem)]`}>
                                                    <span className='max-w-[7.3rem] max-h-[6.8rem] w-full h-full absolute right-[5rem] laptop:right-[1rem] laptop:top-[10rem] lg:max-w-[73px] lg:max-h-[68px] sm:!max-w-[60px] sm:!max-h-[60px] lg:right-0'>
                                                        <Image src='/mail_white.png' alt='mail_white' width={1000} height={1000} className='w-full h-full object-cover' />
                                                    </span>
                                                    <span className='max-w-[8rem] max-h-[9.7rem] sm:max-h-[8rem] sm:max-w-[7rem] w-full h-full  absolute right-[3rem] bottom-[30%] lg:right-0'>
                                                        <Image src='/arrow_white.png' alt='arrow_white' width={1000} height={1000} className='w-full h-full object-cover' />
                                                    </span>
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
                                                </div>
                                            )}
                                        </React.Fragment>
                                    );
                                })
                            ) : (
                                <div className="min-h-[40rem] flex items-center justify-center">
                                    <h3 className="block w-full my-[25px] text-center">
                                        No Result Found
                                    </h3>
                                </div>
                            )}
                        </div>
                        {sortedData?.length > 9 && (
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
        </section>
    );
}

