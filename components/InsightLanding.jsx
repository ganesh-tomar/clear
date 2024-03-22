import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import InsightsData from '../data/insights/insights.json';
import style from '../components/styles/insightCard.module.css';

export default function InsightLanding() {
    var allInsights = InsightsData;
    const [open, setopen] = useState(0)
    const [wholeData, setWholeData] = useState(allInsights);
    //pagination variables
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const totalPages = Math.ceil(wholeData.length / itemsPerPage);

    const [winWidth, isWinWidth] = useState(0);
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

    function getUniqueTopics(data) {
        const uniqueTopicTypes = [...new Set(data.map(item => item.topicType))]
            .filter(topicType => topicType !== '');
        return uniqueTopicTypes;
    }

    function getUniqueSolutions(data) {
        const uniqueSolutionTypes = [...new Set(data.map(item => item.solutionType))]
            .filter(solutionType => solutionType !== '');
        return uniqueSolutionTypes;
    }
    function getUniqueContentTypes(data) {
        const uniqueContentTypes = [...new Set(data.map(item => item.contentType))]
            .filter(contentType => contentType !== '');
        return uniqueContentTypes;
    }

    const TopicList = getUniqueTopics(allInsights);
    const SolutionList = getUniqueSolutions(allInsights);
    const ContentTypeList = getUniqueContentTypes(allInsights);
    console.log(ContentTypeList);


    const listHandler = (i) => {
        open == i ? setopen(0) : setopen(i);
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        const sectionElement = document.getElementsByClassName('case-studies-filter')[0];
        if (sectionElement) {
            window.scrollTo({
                top: sectionElement.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className="insightLanding bg-black">
            <div className="container">
                <div className="outer flex">
                    <div className="leftCol w-[29%]">
                        <div className="searchOuter mb-[2.7rem]">
                            <div className="searchWrap">
                                <input type="text" id="insightSearch" className='bg-transparent border-[0.2rem] border-white w-full h-[7rem]' />
                            </div>
                        </div>
                        <div className="resultWrap">
                            <p className={`relative font-bold mb-[1.7rem] lg-up:pointer-events-none lg:!cursor-pointer lg:after:content-[''] lg:after:absolute lg:after:top-[-1/2] lg:translate-y-[-1/2] lg:after:right-[2rem] lg:after:w-[3rem] lg:after:h-[3rem] lg:after:bg-[url('/angle-icon.svg')] lg:after:bg-contain lg:after:bg-no-repeat lg:after:transition-all lg:py-[3rem] lg:mb-0`}
                                data-cursor-expand
                            >Filter all insights</p>
                            <div className="mini-wrap-case flex flex-wrap justify-between mb-[1.1rem]">
                                <div className="mini-heading">
                                    <p className="medium mb-[1.8rem]">200 clients</p>
                                </div>
                            </div>
                        </div>
                        <div className="filterOuter">
                            <div className="filterBlock border-t-[0.1rem] border-[#989898]">
                                <span data-cursor-expand className={`inline-block w-full text-white font-bold px-[3.3rem] py-[3rem]`} onClick={() => listHandler(1)}>By Topic</span>
                                <div className={`optionWrap ${open == 1 ? 'max-h-[50rem]' : 'max-h-0'} transition-all duration-300 overflow-scroll`}>
                                    <ul className={`pb-[2rem]`}>
                                        {TopicList.map((elem, index) => (
                                            <li
                                                data-cursor-expand
                                                key={index}
                                                className={`flex items-center capitalize medium bold px-[2rem] py-[1rem] text-white z-[10]`}
                                                onClick={() => handleCheckboxToggle(index)}
                                            >
                                                <div className="check-box-wrap large mr-[2rem] pointer-events-none">
                                                    <input
                                                        className="checkbox-default"
                                                        type="checkbox"
                                                        name=""
                                                        id={`topic-${index}`}
                                                    // checked={elem.checked} // Assuming each topic has a 'checked' property
                                                    // onChange={() => handleCheckboxChange(index)}
                                                    />
                                                    <label htmlFor={`topic-${index}`}>.</label>
                                                </div>
                                                {elem}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="filterBlock border-t-[0.1rem] border-[#989898]">
                                <span data-cursor-expand className={`inline-block w-full text-white font-bold px-[3.3rem] py-[3rem]`} onClick={() => listHandler(2)}>By Solution</span>
                                <div className={`optionWrap ${open == 2 ? 'max-h-[50rem]' : 'max-h-0'} transition-all duration-300 overflow-scroll`}>
                                    <ul className={`pb-[2rem]`}>
                                        {SolutionList.map((elem, index) => (
                                            <li
                                                data-cursor-expand
                                                key={index}
                                                className={`flex items-center capitalize medium bold px-[2rem] py-[1rem] text-white z-[10]`}
                                                onClick={() => handleCheckboxToggle(index)}
                                            >
                                                <div className="check-box-wrap large mr-[2rem] pointer-events-none">
                                                    <input
                                                        className="checkbox-default"
                                                        type="checkbox"
                                                        name=""
                                                        id={`topic-${index}`}
                                                    // checked={elem.checked} // Assuming each topic has a 'checked' property
                                                    // onChange={() => handleCheckboxChange(index)}
                                                    />
                                                    <label htmlFor={`topic-${index}`}>.</label>
                                                </div>
                                                {elem}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="filterBlock border-t-[0.1rem] border-[#989898]">
                                <span data-cursor-expand className={`inline-block w-full text-white font-bold px-[3.3rem] py-[3rem]`} onClick={() => listHandler(3)}>By Content Type</span>
                                <div className={`optionWrap ${open == 3 ? 'max-h-[50rem]' : 'max-h-0'} transition-all duration-300 overflow-scroll`}>
                                    <ul className={`pb-[2rem]`}>
                                        {ContentTypeList.map((elem, index) => (
                                            <li
                                                data-cursor-expand
                                                key={index}
                                                className={`flex items-center capitalize medium bold px-[2rem] py-[1rem] text-white z-[10]`}
                                                onClick={() => handleCheckboxToggle(index)}
                                            >
                                                <div className="check-box-wrap large mr-[2rem] pointer-events-none">
                                                    <input
                                                        className="checkbox-default"
                                                        type="checkbox"
                                                        name=""
                                                        id={`topic-${index}`}
                                                    // checked={elem.checked} // Assuming each topic has a 'checked' property
                                                    // onChange={() => handleCheckboxChange(index)}
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
                    <div className="rightCol w-[calc(71%-7rem)] ml-[7rem]">
                        <div className="title min-h-[11.1rem]">
                            <h3>All Insights</h3>
                        </div>
                        <div className="cardsWrapper w-[calc(100%+3rem)] flex flex-wrap ml-[-1.5rem]">
                            {wholeData.length != 0 ? (
                                wholeData.slice(startIndex, endIndex).map((card, index) => {
                                    if (index == 3) {
                                        return (
                                            <>
                                                <div className={`grid__parallax pt-[4.7rem] pb-[3rem] px-[4.5rem] text-white w-[calc(50%-3rem)] mx-[1.5rem] border-pink border-[0.5rem] mb-[3rem] insghtCard relative flex-col flex flex-wrap overflow-hidden h-[45rem] group`}>
                                                    <h3 className='pr-[2rem]'>Get our latest Insights in your inbox</h3>
                                                    <div className="btnWrap text-center mt-[6rem] relative z-[1]">
                                                        <Link href={'/'} className="btn pink lg:text-center sm:w-full lg:!text-[20px] !py-[1rem] w-full">Sign up</Link>
                                                    </div>
                                                </div>
                                                <div
                                                    key={index}
                                                    className={`${card.imageSrc ? '' : 'bg-[#E5E4E7]'} ${style.card} insightCard ${card.categories?.length == 0 ? 'justify-end' : 'justify-between'} w-[calc(50%-3rem)] mx-[1.5rem] mb-[3rem]`}
                                                    id="card"
                                                >
                                                    {card.redirect === true ? (
                                                        <Link href={`${card.hiddenurl ? card.hiddenurl : '/'}`} className="redirect">
                                                            .
                                                        </Link>
                                                    ) : (
                                                        ''
                                                    )}
                                                    {card.imageSrc ? (
                                                        <div className="bg-img">
                                                            <Image
                                                                src={card.imageSrc}
                                                                width={1000}
                                                                height={1000}
                                                                className="w-full h-full object-cover"
                                                                alt=""
                                                            />
                                                        </div>
                                                    ) : (
                                                        ''
                                                    )}
                                                    {card.categories?.length > 0 ? (
                                                        <div className={`p-[5rem] pb-0 md:pt-[3rem] md:px-[2rem] md:pb-0`}>
                                                            {card.categories.map((category, index) => (
                                                                <span
                                                                    key={index}
                                                                    className="font-bold py-[0.5rem] px-[1rem] bg-black text-white text-[16px] xxl-up:text-[1.6rem] inline-block mr-[1rem]"
                                                                >
                                                                    {category}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    ) : (
                                                        ''
                                                    )}

                                                    <div
                                                        className={`${card.imageSrc
                                                            ? `insightCardBlackOverlay ${style.blackOverlay} laptop:p-[4rem]`
                                                            : ''
                                                            } p-[5rem] pt-[2.5rem] w-full md:py-[3rem] md:px-[2rem]`}
                                                    >
                                                        {card.heading ? (
                                                            <h4
                                                                className={`${style.desc} ${card.imageSrc ? 'text-white' : 'text-black'
                                                                    }`}
                                                            >
                                                                {card.heading}
                                                            </h4>
                                                        ) : (
                                                            ''
                                                        )}
                                                        <div
                                                            className={`${card.imageSrc ? `hiddenContent ${style.hiddencontent}` : ''
                                                                } mt-0 h-0 opacity-0`}
                                                        >
                                                            <p
                                                                className={`${card.caption
                                                                    ? 'medium text-white mb-[4.4rem] sm:mb-[2rem] laptop:mb-[2.2rem]'
                                                                    : ''
                                                                    }`}
                                                            >
                                                                {card.caption}
                                                            </p>
                                                            {card.linkLabel ? (
                                                                <Link
                                                                    href={card.url ? card.url : '/'}
                                                                    className={` tertiary-btn sm:mt-[1.8rem]`}
                                                                >
                                                                    {card.linkLabel}
                                                                </Link>
                                                            ) : (
                                                                ''
                                                            )}
                                                        </div>
                                                        {card.subText ? (
                                                            <p
                                                                className={`${card.imageSrc ? 'text-white' : 'text-black'} mt-[2rem]`}
                                                            >
                                                                {card.subText}
                                                            </p>
                                                        ) : (
                                                            ''
                                                        )}
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }
                                    return (
                                        <div
                                            key={index}
                                            className={`${card.imageSrc ? '' : 'bg-[#E5E4E7]'} ${style.card} insightCard ${card.categories?.length == 0 ? 'justify-end' : 'justify-between'} w-[calc(50%-3rem)] mx-[1.5rem] mb-[3rem]`}
                                            id="card"
                                        >
                                            {card.redirect === true ? (
                                                <Link href={`${card.hiddenurl ? card.hiddenurl : '/'}`} className="redirect">
                                                    .
                                                </Link>
                                            ) : (
                                                ''
                                            )}
                                            {card.imageSrc ? (
                                                <div className="bg-img">
                                                    <Image
                                                        src={card.imageSrc}
                                                        width={1000}
                                                        height={1000}
                                                        className="w-full h-full object-cover"
                                                        alt=""
                                                    />
                                                </div>
                                            ) : (
                                                ''
                                            )}
                                            {card.categories?.length > 0 ? (
                                                <div className={`p-[5rem] pb-0 md:pt-[3rem] md:px-[2rem] md:pb-0`}>
                                                    {card.categories.map((category, index) => (
                                                        <span
                                                            key={index}
                                                            className="font-bold py-[0.5rem] px-[1rem] bg-black text-white text-[16px] xxl-up:text-[1.6rem] inline-block mr-[1rem]"
                                                        >
                                                            {category}
                                                        </span>
                                                    ))}
                                                </div>
                                            ) : (
                                                ''
                                            )}

                                            <div
                                                className={`${card.imageSrc
                                                    ? `insightCardBlackOverlay ${style.blackOverlay} laptop:p-[4rem]`
                                                    : ''
                                                    } p-[5rem] pt-[2.5rem] w-full md:py-[3rem] md:px-[2rem]`}
                                            >
                                                {card.heading ? (
                                                    <h4
                                                        className={`${style.desc} ${card.imageSrc ? 'text-white' : 'text-black'
                                                            }`}
                                                    >
                                                        {card.heading}
                                                    </h4>
                                                ) : (
                                                    ''
                                                )}
                                                <div
                                                    className={`${card.imageSrc ? `hiddenContent ${style.hiddencontent}` : ''
                                                        } mt-0 h-0 opacity-0`}
                                                >
                                                    <p
                                                        className={`${card.caption
                                                            ? 'medium text-white mb-[4.4rem] sm:mb-[2rem] laptop:mb-[2.2rem]'
                                                            : ''
                                                            }`}
                                                    >
                                                        {card.caption}
                                                    </p>
                                                    {card.linkLabel ? (
                                                        <Link
                                                            href={card.url ? card.url : '/'}
                                                            className={` tertiary-btn sm:mt-[1.8rem]`}
                                                        >
                                                            {card.linkLabel}
                                                        </Link>
                                                    ) : (
                                                        ''
                                                    )}
                                                </div>
                                                {card.subText ? (
                                                    <p
                                                        className={`${card.imageSrc ? 'text-white' : 'text-black'} mt-[2rem]`}
                                                    >
                                                        {card.subText}
                                                    </p>
                                                ) : (
                                                    ''
                                                )}
                                            </div>
                                        </div>
                                    )
                                })
                            ) : (
                                <div className="min-h-[40rem] flex items-center justify-center">
                                    <h3 className="block w-full my-[25px] text-center">
                                        No Result Found
                                    </h3>
                                </div>
                            )}
                            {/* {InsightsData.map((card, index) => (
                                <>
                                    {index === 3 && (
                                        <div className={`grid__parallax pt-[4.7rem] pb-[3rem] px-[4.5rem] text-white w-[calc(50%-3rem)] mx-[1.5rem] border-pink border-[0.5rem] mb-[3rem] insghtCard relative flex-col flex flex-wrap overflow-hidden h-[45rem] group`}>
                                            <h3 className='pr-[2rem]'>Get our latest Insights in your inbox</h3>
                                            <div className="btnWrap text-center mt-[6rem]">
                                                <Link href={'/'} className="btn pink lg:text-center sm:w-full lg:!text-[20px] !py-[1rem] w-full">Sign up</Link>
                                            </div>
                                        </div>
                                    )}
                                    <div
                                        key={index}
                                        className={`${style.card} ${card.imageSrc ? '' : 'bg-[#E5E4E7]'} ${card.categories?.length == 0 ? 'justify-end' : 'justify-between'}
                                     w-[calc(50%-3rem)] mx-[1.5rem] mb-[3rem] insghtCard relative flex-col flex flex-wrap overflow-hidden h-[45rem] group`}
                                    >
                                        {card.redirect === true ? (
                                            <Link href={`${card.linkUrl ? card.linkUrl : '/'}`} className="redirect">
                                                .
                                            </Link>
                                        ) : (
                                            ''
                                        )}
                                        {card.imageSrc ? (
                                            <div className="bg-img">
                                                <Image
                                                    src={card.imageSrc}
                                                    width={1000}
                                                    height={1000}
                                                    className="w-full h-full object-cover"
                                                    alt=""
                                                />
                                            </div>
                                        ) : (
                                            ''
                                        )}
                                        <div className='w-full h-full relative'>
                                            {card.categories?.length > 0 ? (
                                                <div className={`p-[5rem] md:pt-[3rem] md:px-[2rem] md:pb-0 group-hover:pb-0 transition-all duration-300`}>
                                                    {card.categories.map((category, index) => (
                                                        <span
                                                            key={index}
                                                            className="font-bold py-[0.5rem] px-[1rem] bg-black text-white text-[16px] xxl-up:text-[1.6rem] inline-block mr-[1rem]"
                                                        >
                                                            {category}
                                                        </span>
                                                    ))}
                                                </div>
                                            ) : (
                                                ''
                                            )}
                                            <div className={`${card.imageSrc ? `insightCardBlackOverlay relative ${style.blackOverlay} laptop:p-[4rem]` : ''} ${style.cardContent} p-[5rem] group-hover:pt-[4.3rem] w-full md:py-[3rem] md:px-[2rem]`}>
                                                {card.heading ? (<h4 className={`${style.desc} ${card.imageSrc ? 'text-white' : 'text-black'}`}>{card.heading}</h4>
                                                ) : (
                                                    ''
                                                )}

                                                <div className={`${card.imageSrc ? `hiddenContent ${style.hiddencontent}` : ''} mt-[2rem] opacity-0`}>
                                                    <p className={`${card.caption ? 'medium text-white mb-[4.4rem] sm:mb-[2rem] laptop:mb-[2.2rem]  group-hover:mb-[5.1rem]  transition-all duration-300' : ''}`}>{card.caption}</p>
                                                    <Link href={`${card.linkUrl ? card.linkUrl : '/'}`} className={`${card.linkLabel ? 'tertiary-btn ' : ''}`}>{card.linkLabel}</Link>
                                                </div>

                                                {card.subText ? (<p className={`${card.imageSrc ? 'text-white' : 'text-black'} ${card.count ? '' : ' mb-[3rem]'} ${card.count ? '' : 'sm:hidden'} mt-[2rem]`}>{card.subText}</p>
                                                ) : (
                                                    ''
                                                )}

                                                {card.linkText ? (<Link href={card.url ? card.url : '/'} className={` tertiary-btn sm:mt-[1.8rem]`}>{card.linkText}</Link>
                                                ) : (
                                                    ''
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))} */}
                            {wholeData.length > 10 && (
                                <ul className={`pagination py-[7rem] flex justify-center w-full`}>
                                    <button
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        className="prev-button flex items-center justify-center w-[4.4rem] h-[4.4rem] text-[0] disabled:hidden group sm:h-[3rem]"
                                    >
                                        .
                                        <div className="iconWrap transform -rotate-180">
                                            <div
                                                className={`relative ${currentPage === 1 && 'opacity-[0.2] pointer-events-none'
                                                    }`}
                                            >
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g id="Arrow_Right">
                                                        <path className={`group-hover:lg-up:stroke-pink transition`} id="Vector" d="M4.16675 10H15.8334" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path className={`group-hover:lg-up:stroke-pink transition`} id="Vector_2" d="M10 4.16675L15.8333 10.0001L10 15.8334" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
                                                        data-cursor-expand
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
                                                (currentPage === totalPages - 2 && i + 1 === totalPages - 1)

                                            ) {
                                                return (
                                                    <li
                                                        key={`dots-${i + 1}`}
                                                        onClick={() => handlePageChange(i + 1)}
                                                        className={`text-black text-[2rem] sm:px-[0] sm:py-[0] sm:mx-[0.3rem] sm:text-[1.5rem] font-[700] flex items-center justify-center leading-[24px] mx-[1rem]`}
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
                                                        className={`text-black text-[2rem] font-[700] sm:px-[0] sm:py-[0] sm:mx-[0.3rem] sm:text-[1.5rem] flex items-center justify-center leading-[24px] mx-[1rem]`}
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
                                                        data-cursor-expand
                                                        key={i + 1}
                                                        onClick={() => handlePageChange(i + 1)}
                                                        className={`text-black text-[2rem] py-[1rem] px-[1.7rem] sm:px-[1.5rem] sm:py-[0.5rem] sm:text-[1rem] font-[700] flex items-center justify-center leading-[24px] mx-[1rem] transition-all duration-200 hover:text-pink ${isCurrent ? 'active text-white hover:text-white bg-pink font-bold' : 'bg-gray'
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
                                                        className={`text-black text-[2rem] sm:px-[1.5rem] sm:py-[0.5rem] sm:text-[1rem] font-[700] flex items-center justify-center leading-[24px] mx-[1rem]`}
                                                    >
                                                        ...
                                                    </li>
                                                );
                                            } else if (i + 1 === 1) {
                                                return (
                                                    <li
                                                        key={i + 1}
                                                        onClick={() => handlePageChange(i + 1)}
                                                        className={`text-black text-[2rem] py-[1rem] px-[1.7rem] sm:px-[1.5rem] sm:py-[0.5rem] sm:text-[1rem] font-[700] flex items-center justify-center leading-[24px] mx-[1rempx] transition-all duration-200 hover:text-pink ${isCurrent ? 'active text-white hover:text-white bg-pink font-bold' : 'bg-gray'
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
                                                        className={`text-black text-[2rem] font-[700] sm:px-[1.5rem] sm:py-[0.5rem] sm:text-[1rem] flex items-center justify-center leading-[24px] mx-[1rem]`}
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
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g id="Arrow_Right">
                                                        <path className={`group-hover:lg-up:stroke-pink transition`} id="Vector" d="M4.16675 10H15.8334" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path className={`group-hover:lg-up:stroke-pink transition`} id="Vector_2" d="M10 4.16675L15.8333 10.0001L10 15.8334" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
    )
}
