'use client'
import Image from 'next/image';
// import style from '../../../../styles/logowithcontent.module.css';
import style from '../../../../components/styles/logowithcontent.module.css'
import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import { GET_ALL_SERVICES, GET_ALL_INDUSTRIES, GET_ALL_CASE_STUDIES } from '../../../../graphql/caseStudy';
import { isSelectionNode } from 'graphql';

const CaseStudyFilter = ({ contentName }) => {

    // Query the terms and data
    const serviceTerms = useQuery(GET_ALL_SERVICES);
    const industryTerms = useQuery(GET_ALL_INDUSTRIES);
    const caseStudyObj = useQuery(GET_ALL_CASE_STUDIES);

    // console.log(caseStudyObj);

    const [open, setOpen] = useState(0);
    const [wholeData, setWholeData] = useState([]);
    const [activeServiceFacet, setServiceFacet] = useState();
    const [selectedService, setSelectedService] = useState('');
    const [serviceData, setServiceData] = useState('');
    const [activeIndustryFacet, setIndustryFacet] = useState();
    const [selectedIndustry, setSelectedIndustry] = useState('');
    const [industryData, setIndustryData] = useState('');
    //pagination variables
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const totalPages = Math.ceil(wholeData?.length / itemsPerPage);
    // filtervariables
    const [checkedServices, setcheckedServices] = useState([]);
    const [checkedServicesVal, setcheckedServicesVal] = useState([]);
    const [checkedIndustries, setcheckedIndustries] = useState([]);
    const [checkedIndustriesVal, setcheckedIndustriesVal] = useState([]);
    const [newService, setnewService] = useState('')
    const [newIndusry, setnewIndusry] = useState('')
    const [winWidth, isWinWidth] = useState(0);
    const [a, setA] = useState(0)

    const [myServiceArrayValue, setMyServiceArrayValue] = useState([])
    const [myServiceArray, setMyServiceArray] = useState([])
    const [isServiceData, setIsServiceData] = useState([])
    const [myIndustryArrayValue, setMyIndustryArrayValue] = useState([])
    const [myIndustryArray, setMyIndustryeArray] = useState([])
    const [isIndustryData, setIsIndustryData] = useState([])
    const [lastData, setLastData] = useState([])
    //list Handler
    const [isIndustryList, setIsIndustryList] = useState([]);
    const [isServiceList, setIsServiceList] = useState([]);
    const [isIndustryListTemp, setIsIndustryListTemp] = useState([]);
    var industryTemp = [];
    // let data
    useEffect(() => {
        if (caseStudyObj.data) {
            setWholeData(caseStudyObj?.data?.caseStudies?.nodes);
            setLastData(caseStudyObj?.data?.caseStudies?.nodes)
        }
    }, [caseStudyObj?.data]);
    const data = caseStudyObj?.data?.caseStudies?.nodes;

    useEffect(() => {
        serviceFacetList('', 'a');
        IndustryFacetList('', 'a');
    }, [data])
    
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

    const listHandler = (i) => {
        open == i ? setOpen(0) : setOpen(i);
    };
    const cross = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 9L15 15" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 9L9 15" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
    
    // const serviceFacetList = (val, index) => {
    function serviceFacetList(val, index) {
        var servideTemp = [];
        if (val == '') {
            data?.map((item) => {

                const nodeItems = item?.terms?.nodes;
                if (nodeItems?.length > 0) {
                    nodeItems?.map((list) => {
                        if (list?.taxonomyName === 'services') {
                            servideTemp?.push(list?.name);
                        }
                    })
                }
            })
        }
        setIsServiceList([...new Set(servideTemp)]);
    }

    function IndustryFacetList (val, index) {
        
        
        if (val == '') {
            data?.map((item) => {

                const nodeItems = item?.terms?.nodes;
                if (nodeItems?.length > 0) {
                    nodeItems?.map((list) => {
                        if (list?.taxonomyName === 'industries') {
                            industryTemp?.push(list?.name);
                        }
                    })
                }
            })
        }
        setIsIndustryList([...new Set(industryTemp)]);
    }


    //Service facet
    const ServiceFacetHandler = (val, listIndex) => {
        let service = []
        const serviceData = []
        const industryTemp = [];
        var filteredArrayValue = '';

        if (myServiceArray.includes(listIndex)) {
            const filteredArray = myServiceArray.filter(item => item !== listIndex);
            setMyServiceArray(filteredArray);
            filteredArrayValue = myServiceArrayValue.filter(item => item !== val);
            setMyServiceArrayValue(filteredArrayValue);
        } else {
            setMyServiceArray([...myServiceArray, listIndex]);
            setMyServiceArrayValue([...myServiceArrayValue, val]);
        }

        const servicesData = [];
        let sorted = [];
        if (isServiceData.length > 0 && myServiceArrayValue.includes(val)) {
            // console.log(filteredArrayValue);
            if(filteredArrayValue.length > 0 ) {
                // console.log(isServiceData);
                isServiceData?.map((item) => {
                    const nodedata = item?.terms?.nodes
                    // console.log(nodedata);
                    nodedata?.map((nodeItem) => {
                        // if(nodeItem?.name === )
                            filteredArrayValue?.map((listItem) => {
                                if(nodeItem?.name === listItem && nodeItem?.taxonomyName === 'services') {
                                    console.log('test');
                                    servicesData.push(item)
                                }
                            })
                    })
                })
            }
            console.log(servicesData);
            // const a = new Set(servicesData);
            // console.log(a);
          
            // const myServiceRemove = isServiceData.filter(item =>
            //     !item?.terms?.nodes?.some(itemVal => itemVal.name === val)
            // );
            // console.log(myServiceRemove);
            setIsServiceData([...new Set(servicesData)])

        } else {
            if (myServiceArrayValue.length >= 0 && isServiceData.length >= 0) {
                data?.map((item) => {
                    const nodeData = item?.terms?.nodes
                    nodeData?.map((nodeItem) => {
                        if (val == nodeItem?.name && nodeItem?.taxonomyName == 'services') {
                            // new Set(isServiceData.push(item))
                            isServiceData.push(item);        // Add the item
                            // isServiceData = [...new Set(isServiceData)];
                            nodeData?.map((indLi) => {
                                if(indLi?.taxonomyName === 'industries') {
                                    isIndustryListTemp.push(indLi?.name);
                                }
                            })
                        } 
                    })
                })
            }
        }
        setA(1)
        setIsIndustryList([...new Set(isIndustryListTemp)])
        const updatedcheckedServicesVal = [...checkedServicesVal];

        // Check or uncheck based on whether the value is already in the array
        if (updatedcheckedServicesVal.includes(val)) {
            updatedcheckedServicesVal.splice(updatedcheckedServicesVal.indexOf(val), 1); // Uncheck
        } else {
            updatedcheckedServicesVal.push(val); // Check

        }
        // Update the state variables
        setcheckedServicesVal(updatedcheckedServicesVal);
        setMyServiceArrayValue(updatedcheckedServicesVal)
        setnewService(updatedcheckedServicesVal)
        setCurrentPage(1);
        setOpen(0)

        let valWithHyphen = val.replace(/\s+/g, '-'); // Replace all spaces with hyphens
        const queryParam = encodeURIComponent(valWithHyphen); // Ensure special characters are URL-safe
        const url = new URL(window.location.href);

        // Add or update the services query parameter
        url.searchParams.set('services', queryParam);

        // Push the updated URL to the browser without reloading the page
        window.history.pushState({}, '', url);

    }


    useEffect(() => {
        if (myServiceArrayValue.length > 0) {
            const industryListTemp = []
            var isServiceTempData;
            isServiceData?.map((item) => {
                const serviceItem = item?.terms?.nodes;
                serviceItem?.map((serList) => {
                    if(serList?.taxonomyName === 'industries') {
                        industryListTemp.push(serList?.name)
                    }
                })
            })
            setIsIndustryList([...new Set(industryListTemp)]);
            // isServiceTempData = [...new Set(isServiceData)];
            // console.log(isServiceTempData);
            setWholeData(isServiceData)
        } else {
            IndustryFacetList('', '')
            setWholeData(data)
        }
    }, [myServiceArray, isServiceData])

    // useEffect(() => {
    //     console.log(isServiceList);
    //     console.log(isIndustryList);
    // })


    const normalizeParamValue = (param) => {
        return decodeURIComponent(param).replace(/-/g, ' ');
    };

    const triggerClickFromURL = () => {
        if (typeof window !== 'undefined') {
            const urlParams = new URLSearchParams(window.location.search);
            // Check both parameters
            const serviceParam = urlParams.get('services');
            const industryParam = urlParams.get('industry');
            // Determine which parameter is available
            const param = serviceParam || industryParam;
            if (param && param.trim()) {
                const normalizedParam = normalizeParamValue(param);
                // Use requestAnimationFrame to ensure DOM is fully rendered
                requestAnimationFrame(() => {
                    const matchingCheckbox = document.querySelector(`input[data-id='${normalizedParam}']`);
                    if (matchingCheckbox) {
                        const parentLi = matchingCheckbox.closest('li');
                        if (parentLi) {
                            parentLi.click();
                        }
                    }
                });
            }
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            triggerClickFromURL();
        }, 300);
        return () => clearTimeout(timer);
    }, []);



    const handleServiceCheckboxChange = (index) => {
        ServiceFacetHandler(null, index);
    };
    const handleIndustryCheckboxChange = (index) => {
        IndustryFacetHandler(null, index);
    };

    //Industry facet
    const IndustryFacetHandler = (val, listIndex) => {

        if (myIndustryArray.includes(listIndex)) {
            const filteredArray = myIndustryArray.filter(item => item !== listIndex);
            setMyIndustryeArray(filteredArray);
            const filteredArrayValue = myIndustryArrayValue.filter(item => item !== val);
            setMyIndustryArrayValue(filteredArrayValue);
        } else {
            setMyIndustryeArray([...myIndustryArray, listIndex]);
            setMyIndustryArrayValue([...myIndustryArrayValue, val])
        }
        if (isIndustryData.length > 0 && myIndustryArrayValue.includes(val)) {
            const myIndustryRemove = isIndustryData.filter(item =>
                !item?.terms?.nodes?.some(itemVal => itemVal.name === val)
            );
            setIsIndustryData(myIndustryRemove)
        } else {
            if (myIndustryArrayValue.length >= 0 && isIndustryData.length >= 0) {
                data?.map((item) => {
                    const nodeData = item?.terms?.nodes
                    nodeData?.map((nodeItem) => {

                        if (val == nodeItem?.name && nodeItem?.taxonomyName == 'industries') {
                            isIndustryData.push(item)
                        }
                    })
                })
            }
        }
        setA(1)
        const updatedcheckedIndustries = [...checkedIndustries];
        const updatedcheckedIndustriesVal = [...checkedIndustriesVal];

        // Check or uncheck based on whether the value is already in the array
        if (updatedcheckedIndustriesVal.includes(val)) {
            updatedcheckedIndustriesVal.splice(updatedcheckedIndustriesVal.indexOf(val), 1); // Uncheck
        } else {
            updatedcheckedIndustriesVal.push(val); // Check
        }

        // Update the state variables
        setcheckedIndustriesVal(updatedcheckedIndustriesVal);
        setMyIndustryArrayValue(updatedcheckedIndustriesVal)
        setnewIndusry(updatedcheckedIndustriesVal);
        setCurrentPage(1);
        setOpen(0)

        let valWithHyphen = val.replace(/\s+/g, '-'); // Replace spaces with hyphens
        const queryParam = encodeURIComponent(valWithHyphen); // Ensure the name is URL-safe
        const url = new URL(window.location.href);

        // Add or update the industry query parameter
        url.searchParams.set('industry', queryParam);

        // Push the updated URL to the browser without reloading the page
        window.history.pushState({}, '', url);

    }

    useEffect(() => {
        const concData = isServiceData.concat(isIndustryData)

        if (isServiceData.length > 0 && isIndustryData.length > 0) {
            const uniqueNames = new Set();
            const uniqueArray = concData.filter(item => {
                return item?.terms?.nodes.some(node => {
                    if (!uniqueNames.has(node?.name)) {
                        uniqueNames.add(node?.name);
                        return true;
                    }
                    return false;
                });
            });
            setWholeData(uniqueArray)
        } else if (isServiceData.length > 0 && !isIndustryData.length > 0) {
            setWholeData(isServiceData)
        } else if (!isServiceData.length > 0 && isIndustryData.length > 0) {
            setWholeData(isIndustryData)
        } else if (!myServiceArray.length > 0 && myIndustryArray.length > 0) {
            setWholeData(isIndustryData)
        }

    }, [myIndustryArray, myServiceArray])

    useEffect(() => {
        const handleClick = (e) => {
            const targetDiv = e.target.closest('div');
            if (targetDiv && !targetDiv.classList.contains(style.category)) {
                setOpen(0);
            }
        };
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);

    //selected facet click
    const selectedFacetHandler = (value, index, type) => {
        let sorted = [];
        let temp = [];
        let final = [];
        let serData = [];
        const updatedcheckedServicesVal = [...checkedServicesVal];
        const updatedcheckedIndustriesVal = [...checkedIndustriesVal];

        if (type == 'removeService') {

            updatedcheckedServicesVal.splice(updatedcheckedServicesVal.indexOf(value), 1); // Uncheck
            setMyServiceArrayValue(updatedcheckedServicesVal)

            // Update the state variables
            setcheckedServicesVal(updatedcheckedServicesVal);
            setnewService(updatedcheckedServicesVal)

            if (updatedcheckedServicesVal.length > 0) {

                sorted = data.filter((item) =>
                    item?.terms?.nodes?.some((val) =>
                        updatedcheckedServicesVal.includes(val?.name)
                    )
                );
                final = sorted;
            }
            else if (updatedcheckedIndustriesVal != '') {
                updatedcheckedIndustriesVal.map((industryVal) => {
                    sorted = data.filter(item =>
                        !item?.terms?.nodes?.some(itemVal => itemVal.name === industryVal)
                    )
                })

            }
            else {
                sorted = data; // Set sorted to the original data when updatedcheckedServicesVal is empty

            }
            setCurrentPage(1);

            if (updatedcheckedIndustriesVal.length > 0) {
                setWholeData(isIndustryData)
            } else if (updatedcheckedServicesVal.length > 0) {
                setWholeData(sorted);
            } else {
                setWholeData(lastData)
            }

        } else if (type == 'removeIndustry') {
            updatedcheckedIndustriesVal.splice(updatedcheckedIndustriesVal.indexOf(value), 1); // Uncheck

            setMyIndustryArrayValue(updatedcheckedIndustriesVal)
            // Update the state variables
            setcheckedIndustriesVal(updatedcheckedIndustriesVal);
            setnewIndusry(updatedcheckedIndustriesVal);

            if (updatedcheckedIndustriesVal.length > 0) {

                sorted = data.filter((item) => updatedcheckedIndustriesVal.includes(item.industryType));

                sorted = data.filter((item) =>
                    item?.terms?.nodes?.some((val) =>
                        updatedcheckedIndustriesVal.includes(val?.name)
                    )
                );

                final = sorted;
                if (updatedcheckedServicesVal != '') {
                    temp = data.filter((item) => updatedcheckedServicesVal.includes(item.serviceType));

                    let concatenatedArray = sorted.concat(temp);

                    final = concatenatedArray

                }
            }
            else if (updatedcheckedServicesVal != '') {
                sorted = data.filter((item) => updatedcheckedServicesVal.includes(item.serviceType));
            }
            else {
                sorted = data; // Set sorted to the original data when updatedcheckedServicesVal is empty

            }
            setCurrentPage(1);
            if (updatedcheckedServicesVal.length > 0) {
                setWholeData(isServiceData)
            } else if (updatedcheckedIndustriesVal.length > 0) {
                setWholeData(sorted);
            } else {
                setWholeData(lastData)
            }
        }
    };

    //clear All filters
    const clearAll = () => {
        setSelectedService('');
        setSelectedIndustry('');
        setcheckedServices([])
        setcheckedIndustries([])
        setcheckedServicesVal([])
        setcheckedIndustriesVal([])
        setMyServiceArrayValue([])
        setMyIndustryArrayValue([])
        setIsIndustryData([])
        setMyIndustryeArray([])
        setMyServiceArray([])
        setIsServiceData([])
        setServiceFacet(999);
        setIndustryFacet(999);
        setWholeData(data);
        setIndustryData(industryData);
        setServiceData(serviceData);
        IndustryFacetList('', '')
        setIsIndustryListTemp([])
        setnewService('')
        setnewIndusry('')
        setCurrentPage(1);
        setOpen(0)

        // Clear the URL parameters
        const url = new URL(window.location.href);
        url.searchParams.delete('services');
        url.searchParams.delete('industry');
        window.history.pushState({}, '', url);
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

    const StopPropagation = (e) => {
        e.stopPropagation();
    };

    return (
        <section className={`case-studies-filter no-padding !pb-[7rem] overflow-visible ${style.logowithcontent}`} >
            <div className="container !z-[9]">
                <div className="case-block pt-[6.5rem] pb-[7rem] flex flex-wrap items-center min-h-[22rem] md:pt-[2.5rem] md:pb-[2.5rem] md:min-h-[18rem]">
                    <div className="heading mr-[20px] md:w-full my-[1.5rem] sm:mt-0 sm:mb-[2rem]">
                        <p className={`${style.btnFont}`}>Filter by:</p>
                    </div>
                    <div data-cursor-expand="true" onClick={() => listHandler(1)} className={`${style.category} ${open == 1 ? style.show : ''} filterMenu mr-[2rem] pl-[2rem] py-[1rem] pr-[5.5rem] relative bg-gray sm:w-full sm:mr-0 my-[1.5rem] sm:mt-0 sm:mb-[2rem]`}>
                        <h6 className={`${style.btnFont}`}>Services</h6>
                        <span className={`${style.arrow} mt-0 items-center justify-center inline-flex w-[2.4rem] h-[2.4rem] right-[2rem] top-1/2 -translate-y-1/2 absolute`}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="chevron-down">
                                    <path id="Vector" d="M6 9L12 15L18 9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                            </svg>
                        </span>
                        <div onClick={StopPropagation} className={`${style.listWrap} absolute w-[32rem] z-[5] left-0 top-[105%] sm:w-full`}>
                            <ul className={` bg-gray py-[2rem]`}>
                                {isServiceList && isServiceList?.map((item, index) => {

                                    return (
                                        <li key={index} onClick={() => ServiceFacetHandler(item, index)} className={`flex items-center py-[1rem] px-[2rem]`}>
                                            <div className="check-box-wrap mr-[2rem] pointer-events-none">
                                                <input className="checkbox-default"
                                                    type="checkbox"
                                                    name=""
                                                    id={`service-${index}`}
                                                    data-id={item}
                                                    checked={myServiceArrayValue.includes(item)}
                                                    onChange={() => handleServiceCheckboxChange(index)} />
                                                <label htmlFor={`service-${index}`}>.</label>
                                            </div>
                                            {item}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div data-cursor-expand="true" onClick={() => listHandler(2)} className={`${style.category} ${open == 2 ? style.show : ''} filterMenu mr-[2rem] pl-[2rem] py-[1rem] pr-[5.5rem] relative bg-gray sm:w-full sm:mr-0 my-[1.5rem] sm:my-0`}>
                        <h6 className={`${style.btnFont}`}>Industries</h6>
                        <span className={`${style.arrow} mt-0 items-center justify-center inline-flex w-[2.4rem] h-[2.4rem] right-[2rem] top-1/2 -translate-y-1/2 absolute`}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="chevron-down">
                                    <path id="Vector" d="M6 9L12 15L18 9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                            </svg>
                        </span>
                        <div onClick={StopPropagation} className={`${style.listWrap} absolute w-[32rem] z-[5] left-0 top-[105%] sm:w-full`}>
                            <ul className={`bg-gray py-[2rem] px-[1rem]`}>
                                {isIndustryList && isIndustryList?.map((item, index) => {
                                    return (
                                        <li key={index} onClick={() => IndustryFacetHandler(item, index)} className={`flex items-center py-[1rem] px-[2rem]`}>
                                            <div className="check-box-wrap mr-[2rem] pointer-events-none">
                                                <input
                                                    className="checkbox-default"
                                                    type="checkbox"
                                                    name=""
                                                    id={`industry-${index}`}
                                                    data-id={item}
                                                    checked={myIndustryArrayValue.includes(item)}
                                                    onChange={() => handleIndustryCheckboxChange(index)} />
                                                <label htmlFor={`industry-${index}`}>.</label>
                                            </div>
                                            {item}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <div
                        className={` flex flex-wrap ${newService == '' && newIndusry == '' ? 'hidden' : 'block'} justify-between selected-facets `}
                    >
                        <ul className='p-0 flex flex-wrap items-center sm:pt-[1rem]'>
                            {Array.isArray(newService) && newService.length > 0 && newService.map((value, index) => (
                                <li
                                    key={index}
                                    data-cursor-expand="true"
                                    onClick={() => selectedFacetHandler(value, index, 'removeService')}
                                    value={value}
                                    className="relative my-[1.5rem] group sm:mb-0 sm:mt-[1rem] duration-200 mr-[1rem] inline-block py-[1.3rem] px-[1.5rem] pr-[4.2rem] rounded-[3rem] bg-black text-white"
                                >
                                    <p className="text-[16px] xxl-up:text-[1.6rem] sm:text-[13px] font-bold">
                                        {value}
                                    </p>
                                    <span className="m-0 absolute flex items-center top-[50%] translate-y-[-50%] right-[1rem] w-[2.4rem] h-[2.4rem]">
                                        {cross}
                                    </span>
                                </li>
                            ))}
                            {Array.isArray(newIndusry) && newIndusry.length > 0 && newIndusry.map((value, index) => (
                                <li
                                    key={index}
                                    data-cursor-expand="true"
                                    onClick={() => selectedFacetHandler(value, index, 'removeIndustry')}
                                    value={value}
                                    className="relative my-[1.5rem] group sm:mb-0 sm:mt-[1rem] duration-200 mr-[1rem] inline-block py-[1.3rem] px-[1.5rem] pr-[4.2rem] rounded-[3rem] bg-black text-white"
                                >
                                    <p className="text-[16px] xxl-up:text-[1.6rem] sm:text-[13px] font-bold">
                                        {value}
                                    </p>
                                    <span className="m-0 absolute flex items-center top-[50%] translate-y-[-50%] right-[1rem] w-[2.4rem] h-[2.4rem]">
                                        {cross}
                                    </span>
                                </li>
                            ))}

                            <li
                                data-cursor-expand="true"
                                onClick={() => clearAll()}
                                className="inline-block p-[1rem] sm:w-full sm:pl-0"
                            >
                                <span className="font-[700] fontInter cursor-pointer text-[1.6rem] text-pink duration-200">
                                    Clear all
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {wholeData?.length != 0 ? (
                wholeData?.slice(startIndex, endIndex).map((wrap, index) => {
                    return (
                        <div key={index} className={`${style.wrapper} border-t border-darkGray sm:min-h-[286px] py-[5rem] area height__one_third flex  w-full relative`}>
                            <Link href={wrap.uri ? wrap.uri : '/'} className="redirect !z-[6]">.</Link>
                            {wrap.featuredImage && (
                                <div
                                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${style.bgimg} dark__overlay w-full h-full overflow-hidden transition-transform duration-700`}>
                                    <Image
                                        src={wrap.featuredImage.node.mediaItemUrl}
                                        className="w-full h-full object-cover object-bottom sm:object-[70%]"
                                        width={1920}
                                        height={1920}
                                        alt={wrap.featuredImage.node.altText}
                                    />
                                </div>
                            )}
                            <div className="container ">
                                {/* <div className={`w-full relative h-full flex items-center flex-wrap`} >
                                    <div className="imgwrapper w-[50%] pl-[120px] laptop:pl-[80px] lg:pl-[60px] md:w-full md:!pl-0 ">
                                        <div className="logowrapper relative w-full h-full max-w-[19.5rem] max-h-[4.6rem] min-h-[4.6rem] lg:max-w-[10.5rem] lg:min-h-[3.6rem] lg:max-h-[3.6rem] md:mb-[3rem] sm:max-w-[10rem] sm:max-h-[2.6rem] sm:min-h-[2.6rem]">
                                            {wrap?.caseStudyQry?.logo?.defaultLogo && (
                                                <>
                                                    <Image
                                                        className="absolute transition-opacity group-hover:opacity-0 duration-200 left-0 object-contain top-0 w-auto h-full"
                                                        width={1000}
                                                        height={1000}
                                                        src={wrap.caseStudyQry.logo.defaultLogo.mediaItemUrl}
                                                        alt={wrap.caseStudyQry.logo.defaultLogo.altText}
                                                    />
                                                </>
                                            )}
                                            {wrap?.caseStudyQry?.logo?.hoverLogo && (
                                                <>
                                                    <Image
                                                        className="absolute transition-opacity duration-200 opacity-0 group-hover:opacity-100 left-0 top-0 w-auto h-full"
                                                        width={1000}
                                                        height={1000}
                                                        src={wrap.caseStudyQry.logo.hoverLogo.mediaItemUrl}
                                                        alt={wrap.caseStudyQry.logo.hoverLogo.altText}
                                                    />
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <div className="contentwrapper pl-[15px] ipad:pl-0 w-[50%] md:w-full md:pl-[0]">
                                        <div className={`${style.content} content max-w-[60rem] ipad:max-w-[100%] md:max-w-full group-hover:text-white`}>
                                            <h4 className={`heading pr-[50px] sm:pr-[0] ${style.heading}`}>
                                                {wrap.title}
                                            </h4>
                                            <p className={`letter-spacing-[-0.32px] mt-[10px] pr-[4.5rem] sm:pr-[0] tracking-[-0.32px] line-clamp-6 overflow-hidden text-ellipsis`}>
                                                {wrap?.caseStudyQry?.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                </div> */}
                                <div className='relative w-full h-full'>
                                    <div className={`w-full relative h-full top-0 left-0 z-[2] flex items-center pt-[0.5rem] flex-wrap`}>
                                        <div className={`imgwrapper w-[50%] ${wrap.logo ? 'pl-[12rem] laptop:pl-[8rem] lg:pl-[6rem] md:!pl-0' : ''} md:w-full`}>
                                            {wrap?.caseStudyQry?.logo?.defaultLogo && (
                                                <div className="logowrapper relative w-full h-full max-w-[19.5rem] max-h-[4.6rem] min-h-[4.6rem] lg:max-w-[10.5rem] lg:min-h-[3.6rem] lg:max-h-[3.6rem] md:mb-[3rem] sm:max-w-[10rem] sm:max-h-[2.6rem] sm:min-h-[2.6rem]">
                                                    <Image
                                                        className="absolute duration-200 left-0 object-contain top-0 w-auto h-full"
                                                        width={1000}
                                                        height={1000}
                                                        src={wrap.caseStudyQry.logo.defaultLogo.mediaItemUrl}
                                                        alt={wrap.caseStudyQry.logo.defaultLogo.altText}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                        <div className="contentwrapper pl-[1.5rem] ipad:pl-0 w-[50%] md:w-full md:pl-[0]">
                                            <div className={`${style.content} max-w-[60rem] content ipad:max-w-[100%] md:max-w-full text-black`}>
                                                <h4 className={`heading pr-[5rem] font-[700] lg:pr-0 sm:pr-[0] ${wrap.title ? '' : ''} ${style.heading}`}>
                                                    {wrap.title}
                                                </h4>
                                                <p className={`letter-spacing-[-0.32px] ${wrap.title ? 'mt-[3rem]' : 'mt-[1rem]'} pr-[4.5rem] lg:pr-0 sm:pr-[0] tracking-[-0.32px] line-clamp-3 xxl-up:line-clamp-2 overflow-hidden text-ellipsis`}>
                                                    {wrap?.caseStudyQry?.subtitle}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${style.bgimg} w-full absolute h-full top-0 left-0 z-[2] flex items-center pt-[0.5rem] flex-wrap `}>
                                        <div className={`imgwrapper w-[50%] ${wrap.logo ? 'pl-[12rem] laptop:pl-[8rem] lg:pl-[6rem] md:!pl-0' : ''} md:w-full`}>
                                            {wrap?.caseStudyQry?.logo?.hoverLogo && (
                                                <div className="logowrapper relative w-full h-full max-w-[19.5rem] max-h-[4.6rem] min-h-[4.6rem] lg:max-w-[10.5rem] lg:min-h-[3.6rem] lg:max-h-[3.6rem] md:mb-[3rem] sm:max-w-[10rem] sm:max-h-[2.6rem] sm:min-h-[2.6rem]">
                                                    <Image
                                                        loading='eager'
                                                        className="absolute left-0 top-0 w-auto h-full"
                                                        width={1000}
                                                        height={1000}
                                                        src={wrap.caseStudyQry.logo.hoverLogo.mediaItemUrl}
                                                        alt={wrap.caseStudyQry.logo.hoverLogo.altText}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                        <div className="contentwrapper pl-[1.5rem] ipad:pl-0 w-[50%] md:w-full md:pl-[0]">
                                            <div className={`${style.content} max-w-[60rem] content ipad:max-w-[100%] md:max-w-full text-white`}>
                                                <h4 className={`heading pr-[5rem] font-[700] lg:pr-0 sm:pr-[0] ${wrap.title ? '' : ''} ${style.heading}`}>
                                                    {wrap.title}
                                                </h4>
                                                <p className={`letter-spacing-[-0.32px] ${wrap.title ? 'mt-[3rem]' : 'mt-[1rem]'} pr-[4.5rem] lg:pr-0 sm:pr-[0] tracking-[-0.32px] line-clamp-3 xxl-up:line-clamp-2 overflow-hidden text-ellipsis`}>
                                                    {wrap?.caseStudyQry?.subtitle}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })
            ) : (
                <div className="min-h-[40rem] flex items-center justify-center" data-aos="fade-in" data-aos-delay="1000" data-aos-duration="1000">
                    <h3 className="block w-full my-[25px] text-center">
                        No Result Found
                    </h3>
                </div>
            )}
            {wholeData?.length > 8 && (
                <ul className={`pagination py-[7rem] flex justify-center border-t border-darkGray `}>
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
                                            ? 'active text-white hover:text-white bg-black font-bold'
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
                                        data-cursor-expand="true"
                                        key={i + 1}
                                        onClick={() => handlePageChange(i + 1)}
                                        className={`text-black text-[2rem] py-[1rem] px-[1.7rem] sm:px-[1.5rem] sm:py-[0.5rem] sm:text-[1rem] font-[700] flex items-center justify-center leading-[24px] mx-[1rem] transition-all duration-200 hover:text-pink ${isCurrent ? 'active text-white hover:text-white bg-black font-bold' : 'bg-gray'
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
                                        className={`text-black text-[2rem] py-[1rem] px-[1.7rem] sm:px-[1.5rem] sm:py-[0.5rem] sm:text-[1rem] font-[700] flex items-center justify-center leading-[24px] mx-[1rempx] transition-all duration-200 hover:text-pink ${isCurrent ? 'active text-white hover:text-white bg-black font-bold' : 'bg-gray'
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
        </section>
    )
}
export default CaseStudyFilter;
