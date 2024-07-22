'use client'
import Image from 'next/image';
import style from '../../styles/logowithcontent.module.css';
import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import data from '../../../data/case-studies-data.json'
import Link from 'next/link';
import { GET_ALL_SERVICES, GET_ALL_INDUSTRIES, GET_ALL_CASE_STUDIES } from '../../../graphql/caseStudy';
import { setupWorker } from 'msw';

const CaseStudyFilter = ({ contentName }) => {

    // Query the terms and data
    const serviceTerms = useQuery(GET_ALL_SERVICES);
    const industryTerms = useQuery(GET_ALL_INDUSTRIES);
    const caseStudyObj = useQuery(GET_ALL_CASE_STUDIES);

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
    // on reomve filter variables
    const [updatedService, setupdatedService] = useState('')
    const [newData, setNewData] = useState(caseStudyObj?.data?.caseStudies?.nodes)
    // console.log(wholeData);
    const [myServiceArrayValue, setMyServiceArrayValue] = useState([])
    const [myServiceArray, setMyServiceArray] = useState([])
    const [isServiceData, setIsServiceData] = useState([])
    const [myIndustryArrayValue, setMyIndustryArrayValue] = useState([])
    const [myIndustryArray, setMyIndustryeArray] = useState([])
    const [isIndustryData, setIsIndustryData] = useState([])


    console.log(myIndustryArrayValue);
    console.log(myServiceArrayValue);

    // let data
    useEffect(() => {
        // console.log(newData);
        if (caseStudyObj.data) {
            setWholeData(caseStudyObj?.data?.caseStudies?.nodes);
            // data = caseStudyObj?.data?.caseStudies?.nodes
        }
        console.log(data);
    }, [caseStudyObj?.data]);
    console.log('wholeData', wholeData);
    const data = caseStudyObj?.data?.caseStudies?.nodes
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

    function getUniqueServiceTypes(data) {
        const uniqueServiceTypes = [...new Set(data?.map(item => item?.serviceType))];
        return uniqueServiceTypes;
    }
    function getUniqueIndustryTypes(data) {
        const uniqueIndustryTypes = [...new Set(data?.map(item => item?.industryType))];
        return uniqueIndustryTypes;
    }
    const ServiceTypes = getUniqueServiceTypes(data);
    const IndustryTypes = getUniqueIndustryTypes(data);

    const listHandler = (i) => {
        open == i ? setOpen(0) : setOpen(i);
    };
    const cross = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 9L15 15" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15 9L9 15" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );

    //Service facet
    const ServiceFacetHandler = (val, listIndex) => {

        let service = []
        const serviceData = []
        // const solData = []
        // const contData = []
        if (myServiceArray.includes(listIndex)) {
            const filteredArray = myServiceArray.filter(item => item !== listIndex);
            setMyServiceArray(filteredArray);
            const filteredArrayValue = myServiceArrayValue.filter(item => item !== val);
            setMyServiceArrayValue(filteredArrayValue);
        } else {
            setMyServiceArray([...myServiceArray, listIndex]);
            setMyServiceArrayValue([...myServiceArrayValue, val])
        }

        const servicesData = [];
        let sorted = [];
        if (isServiceData.length > 0 && myServiceArrayValue.includes(val)) {
            const myServiceRemove = isServiceData.filter(item =>
                !item?.terms?.nodes?.some(itemVal => itemVal.name === val)
            );
            setIsServiceData(myServiceRemove)

        } else {

            if (myServiceArrayValue.length >= 0 && isServiceData.length >= 0) {
                data?.map((item) => {
                    const nodeData = item?.terms?.nodes
                    nodeData?.map((nodeItem) => {
                        if (val == nodeItem?.name && nodeItem?.taxonomyName == 'services') {
                            isServiceData.push(item)
                        }
                    })
                })
            }
        }
        setA(1)

        const updatedcheckedServices = [...checkedServices];
        const updatedcheckedServicesVal = [...checkedServicesVal];

        // Check or uncheck based on whether the value is already in the array
        if (updatedcheckedServicesVal.includes(val)) {
            updatedcheckedServicesVal.splice(updatedcheckedServicesVal.indexOf(val), 1); // Uncheck
        } else {
            updatedcheckedServicesVal.push(val); // Check
        }

        // Update the state variables
        setcheckedServicesVal(updatedcheckedServicesVal);
        // console.log(updatedcheckedServicesVal);
        setnewService(updatedcheckedServicesVal)
        // if (val === 'removeService') {
        //     sorted = [];
        //     console.log(sorted);
        // } else {
        if (updatedcheckedServicesVal.length > 0) {
            sorted = data?.filter((item) =>
                updatedcheckedServicesVal.includes(item.serviceType)
            );
        } else if (newIndusry != '') {
            sorted = data?.filter((item) => newIndusry.includes(item.industryType));
        } else {
            sorted = data; // Set sorted to the original data when updatedcheckedServicesVal is empty
        }
        // }

        setServiceData(sorted);
        // let temp = []
        // let final = sorted;
        // console.log(final);
        // if (newIndusry != '') {
        //     // console.log(newIndusry);
        //     temp = data.filter((item) => newIndusry.includes(item.industryType));
        //     // console.log(temp);
        //     let concatenatedArray = sorted.concat(temp);
        //     // console.log(concatenatedArray);
        //     final = concatenatedArray
        //     // console.log('concatenated : ', final);
        // }
        setCurrentPage(1);
        // var noDuplicateds = final?.filter(
        //     (elem, index, self) => index === self.findIndex((t) => t.id === elem.id),
        // );
        // // console.log(noDuplicateds);
        // setWholeData(noDuplicateds?.length == 0 ? data : noDuplicateds);
        setOpen(0)
        setWholeData(servicesData)
    }

    useEffect(() => {
        if (myServiceArrayValue.length > 0) {
            setWholeData(isServiceData)
        } else {
            setWholeData(data)
        }
    }, [myServiceArray, isServiceData])

    const handleServiceCheckboxChange = (index) => {
        ServiceFacetHandler(null, index);
    };
    const handleIndustryCheckboxChange = (index) => {
        IndustryFacetHandler(null, index);
    };


    var updatedcheckedIndustries;
    var updatedcheckedIndustriesVal;


    //Industry facet
    const IndustryFacetHandler = (val, listIndex) => {
        console.log(val);
        let service = []
        const serviceData = []
        // const solData = []
        // const contData = []
        if (myIndustryArray.includes(listIndex)) {
            const filteredArray = myIndustryArray.filter(item => item !== listIndex);
            setMyIndustryeArray(filteredArray);
            const filteredArrayValue = myIndustryArrayValue.filter(item => item !== val);
            setMyIndustryArrayValue(filteredArrayValue);
        } else {
            setMyIndustryeArray([...myIndustryArray, listIndex]);
            setMyIndustryArrayValue([...myIndustryArrayValue, val])
        }

        const servicesData = [];
        let sorted = [];
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



        // let sorted = [];
        const updatedcheckedIndustries = [...checkedIndustries];
        const updatedcheckedIndustriesVal = [...checkedIndustriesVal];

        // Check or uncheck based on whether the value is already in the array
        if (updatedcheckedIndustriesVal.includes(val)) {
            updatedcheckedIndustriesVal.splice(updatedcheckedIndustriesVal.indexOf(val), 1); // Uncheck
        } else {
            updatedcheckedIndustriesVal.push(val); // Check
        }

        // // Update the state variables
        setcheckedIndustriesVal(updatedcheckedIndustriesVal);
        setnewIndusry(updatedcheckedIndustriesVal);
        if (val === 'removeService') {
            sorted = [];
        } else {
            if (updatedcheckedIndustriesVal.length > 0) {
                sorted = data.filter((item) =>
                    updatedcheckedIndustriesVal.includes(item.industryType)
                );
            } else if (newService != '') {
                sorted = data.filter((item) => newIndusry.includes(item.serviceType));
            } else {
                sorted = data; // Set sorted to the original data when updatedcheckedServicesVal is empty
            }
        }

        setIndustryData(sorted);
        let temp = []
        let final = sorted;
        if (newService != '') {
            temp = data.filter((item) => newService.includes(item.serviceType));
            let concatenatedArray = sorted.concat(temp);
            final = concatenatedArray
        }
        setCurrentPage(1);
        var noDuplicateds = final.filter(
            (elem, index, self) => index === self.findIndex((t) => t.id === elem.id),
        );
        // setWholeData(noDuplicateds.length == 0 ? data : noDuplicateds);
        setOpen(0)
    }

    // useEffect(() => {
    //     // if(myIndustryArray.length > 0 ) {
    //     //     setWholeData(isIndustryData)
    //     // } else {
    //     //     setWholeData(data)
    //     // }
    //     console.log(isIndustryData);
    // }, [myIndustryArray, isIndustryData])

    useEffect(() => {

        console.log(isServiceData);
        console.log(isIndustryData);

        const concData = isServiceData.concat(isIndustryData)
        console.log(concData);
        // const uniqueArray = Array.from(new Set(concData.map(item => item?.terms?.nodes.some(itemVal.name))))
        //     .map(name => concData.find(item => item.name === name));

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
        // console.log(type);
        let sorted = [];
        let temp = [];
        let final = [];
        const updatedcheckedServicesVal = [...checkedServicesVal];
        const updatedcheckedIndustriesVal = [...checkedIndustriesVal];
        // console.log(updatedcheckedIndustriesVal);
        if (type == 'removeService') {
            // console.log(updatedcheckedServicesVal);
            updatedcheckedServicesVal.splice(updatedcheckedServicesVal.indexOf(value), 1); // Uncheck
            // console.log(updatedcheckedServicesVal);

            // Update the state variables
            setcheckedServicesVal(updatedcheckedServicesVal);
            setnewService(updatedcheckedServicesVal)

            if (updatedcheckedServicesVal.length > 0) {
                // console.log(sorted);
                sorted = data.filter((item) => updatedcheckedServicesVal.includes(item.serviceType));
                // console.log(sorted);
                final = sorted;
                // console.log(final);
                if (updatedcheckedIndustriesVal != '') {
                    // console.log(updatedcheckedIndustriesVal);
                    temp = data.filter((item) => updatedcheckedIndustriesVal.includes(item.industryType));
                    // console.log(temp);
                    let concatenatedArray = sorted.concat(temp);
                    // console.log(concatenatedArray);
                    final = concatenatedArray
                    // console.log(final);
                }
            }
            else if (updatedcheckedIndustriesVal != '') {
                sorted = data.filter((item) => updatedcheckedIndustriesVal.includes(item.industryType));
                // console.log(sorted);
            }
            else {
                sorted = data; // Set sorted to the original data when updatedcheckedServicesVal is empty
                // console.log(sorted);
            }
            setCurrentPage(1);
            var noDuplicateds = final.filter(
                (elem, index, self) => index === self.findIndex((t) => t.id === elem.id),
            );
            // console.log(noDuplicateds);
            if (isIndustryData.length > 0) {
                setWholeData(isIndustryData)
            } else if (isServiceData.length > 0) {
                setWholeData(noDuplicateds.length == 0 ? data : noDuplicateds);
            } else {
                setWholeData(data)
            }

        } else if (type == 'removeIndustry') {
            // console.log(updatedcheckedIndustriesVal);
            updatedcheckedIndustriesVal.splice(updatedcheckedIndustriesVal.indexOf(value), 1); // Uncheck
            // console.log(updatedcheckedIndustriesVal);

            // Update the state variables
            setcheckedIndustriesVal(updatedcheckedIndustriesVal);
            setnewIndusry(updatedcheckedIndustriesVal);

            if (updatedcheckedIndustriesVal.length > 0) {
                // console.log(sorted);
                sorted = data.filter((item) => updatedcheckedIndustriesVal.includes(item.industryType));
                // console.log(sorted);
                final = sorted;
                // console.log(final);
                if (updatedcheckedServicesVal != '') {
                    // console.log(updatedcheckedServicesVal);
                    temp = data.filter((item) => updatedcheckedServicesVal.includes(item.serviceType));
                    // console.log(temp);
                    let concatenatedArray = sorted.concat(temp);
                    // console.log(concatenatedArray);
                    final = concatenatedArray
                    // console.log(final);
                }
            }
            else if (updatedcheckedServicesVal != '') {
                sorted = data.filter((item) => updatedcheckedServicesVal.includes(item.serviceType));
                // console.log(sorted);
            }
            else {
                sorted = data; // Set sorted to the original data when updatedcheckedServicesVal is empty
                // console.log(sorted);
            }
            setCurrentPage(1);
            var noDuplicateds = final.filter(
                (elem, index, self) => index === self.findIndex((t) => t.id === elem.id),
            );
            // console.log(noDuplicateds);
            // setWholeData(myServiceArray);
            if (isServiceData.length > 0) {
                setWholeData(isServiceData)
            } else if (isIndustryData.length > 0) {
                setWholeData(noDuplicateds.length == 0 ? data : noDuplicateds);
            } else {
                setWholeData(data)
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
        setServiceFacet(999);
        setIndustryFacet(999);
        setWholeData(data);
        setIndustryData(industryData);
        setServiceData(serviceData);
        setnewService('')
        setnewIndusry('')
        setCurrentPage(1);
        setOpen(0)
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

    useEffect(() => {
        console.log(wholeData);
    }, [a])

    return (
        <section className="case-studies-filter no-padding">
            <div className="container !z-[9]">
                <div className="case-block pt-[6.5rem] pb-[7rem] flex flex-wrap items-center min-h-[22rem]">
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
                                {serviceTerms && serviceTerms.data && serviceTerms.data.services.nodes.map((item, index) => {
                                    // {console.log(item);}
                                    return (
                                        <li key={index} onClick={() => ServiceFacetHandler(item.name, index)} className={`flex items-center py-[1rem] px-[2rem]`}>
                                            <div className="check-box-wrap mr-[2rem] pointer-events-none">
                                                <input className="checkbox-default"
                                                    type="checkbox"
                                                    name="" 
                                                    id={`service-${index}`}
                                                    checked={myServiceArrayValue.includes(item.name)}
                                                    onChange={() => handleServiceCheckboxChange(index)} />
                                                <label htmlFor={`service-${index}`}>.</label>
                                            </div>
                                            {item.name}
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
                                {industryTerms && industryTerms.data && industryTerms.data.industries.nodes.map((item, index) => {
                                    //    {console.log(item);}
                                    return (
                                        <li key={index} onClick={() => IndustryFacetHandler(item.name, index)} className={`flex items-center py-[1rem] px-[2rem]`}>
                                            <div className="check-box-wrap mr-[2rem] pointer-events-none">
                                                <input
                                                    className="checkbox-default"
                                                    type="checkbox"
                                                    name=""
                                                    id={`industry-${index}`}
                                                    checked={myIndustryArrayValue.includes(item.name)}
                                                    onChange={() => handleIndustryCheckboxChange(index)} />
                                                <label htmlFor={`industry-${index}`}>.</label>
                                            </div>
                                            {item.name}
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
                        <div
                            key={index}
                            className={`${style.wrapper} group border-t border-darkGray py-[5rem] area height__one_third flex  w-full relative border-darkGray`}
                        >
                            <Link
                                href={wrap.link ? wrap.link : '/'}
                                className="redirect !z-[6]"
                            >
                                .
                            </Link>
                            {wrap.featuredImage && (
                                <div
                                    className={`absolute top-0 left-0 w-full h-full ${style.bgimg} opacity-0 after:content-[''] after:bg-black after:absolute after:opacity-50 after:w-full after:h-full after:top-0 after:left-0  group-hover:opacity-100 transition-opacity duration-200`}
                                >
                                    {/* <Link href={wrap.redirect} className='redirect !z-[6]' target='_blank'>.</Link> */}
                                    <Image
                                        src={wrap.featuredImage.node.mediaItemUrl}
                                        className="w-full h-full object-cover object-bottom sm:object-[70%]"
                                        width={1000}
                                        height={1000}
                                        alt={wrap.featuredImage.node.altText}
                                    />
                                </div>
                            )}

                            <div className="container">
                                <div
                                    className={`w-full relative h-full flex items-center flex-wrap`}
                                >
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
                                        <div
                                            className={`${style.content} content max-w-[60rem] ipad:max-w-[100%] md:max-w-full group-hover:text-white`}
                                        >
                                            <h4
                                                className={`heading pr-[50px] sm:pr-[0] ${style.heading}`}
                                            >
                                                {wrap.title}
                                            </h4>
                                            <p
                                                className={` letter-spacing-[-0.32px] mt-[10px] pr-[4.5rem] sm:pr-[0] tracking-[-0.32px] `}
                                            >
                                                {wrap?.caseStudyQry?.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                </div>
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
            {wholeData?.length > 8 && (
                <ul className={`pagination py-[7rem] flex justify-center border-t border-darkGray`}>
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
