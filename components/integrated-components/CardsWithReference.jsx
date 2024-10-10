import React from 'react';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { GET_LATEST_NEWS } from '../../graphql/news';

const CardsWithReference = (data) => {
	const [servicesList, setServicesList] = useState([]);
	const latestNews = useQuery(GET_LATEST_NEWS);
	useEffect(() => {
		if (latestNews.data) {
			setServicesList(latestNews?.data?.allClientNews?.nodes);
		}
	}, [latestNews?.data]);

	let referenceObj = [];
	data?.reference?.map((item, index) => {
		if (item.hasOwnProperty('clientNews')) {
			referenceObj.push({
				'title': item?.clientNews?.title,
				'uri': item?.clientNews?.extLink,
				'description': item?.clientNews?.description,
			});
		} else if (item.hasOwnProperty('clients')) {
			referenceObj.push({
				'title': item?.clients?.title,
				'uri': item?.clients?.externalLink ? item?.clients?.externalLink : item?.uri,
				'description': item?.clients?.description,
			});
		}
	});
	return (
		<section className="introwithcards bg-gray">
			<div className="container">
				{data.title &&
					<h3 className="mb-[5rem]">{data.title}</h3>
				}
				<div className="wrapper w-colThreeWrapper flex flex-wrap ml-[-1.5rem] sm:ml-0 sm:w-full">
					{referenceObj.length > 0 ?
						<>
							{referenceObj.map((item, index) => (

								< div className="card group relative w-[calc(33.33%-3rem)] lg:w-[calc(50%-3rem)] sm:!w-full lg:mb-[2rem]  mx-[1.5rem] min-h-[45rem] lg:min-h-[34rem] bg-[#FFFFFF] pt-[5rem] pr-[4rem] pb-[11rem] pl-[5rem] lg:pt-[4rem] lg:pr-[4rem] lg:pl-[4rem] sm:mx-0 sm:!min-h-[30rem] sm:!px-[2rem]" key={index} >
									{item?.uri &&
										<Link className="redirect" href={item?.uri} target="_blank">
											.
										</Link>
									}
									<h4 className="mb-[1rem] sm:text-[20px]">
										{item.title}
									</h4>
									<p>{item.description}</p>
									{item.uri &&
										<div className="absolute right-[5rem] md:right-[2.6rem] bottom-[5rem] w-[3rem] h-[3rem] m-0">
											<svg
												className="overflow-visible w-full h-full"
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
													strokeLinejoin="round"
												/>
												<path
													d="M18.75 3.75H26.25V11.25"
													stroke="#FA198C"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
													className="group-hover:translate-x-[7px] group-hover:-translate-y-[7px] transition-transform duration-300"
												/>
												<path
													d="M12.5 17.5L26.25 3.75"
													stroke="#FA198C"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
													className="group-hover:translate-x-[7px] group-hover:-translate-y-[7px] transition-transform duration-300"
												/>
											</svg>
										</div>
									}
								</div>
							))}
						</>
						:
						<>
							{servicesList?.map((item, index) => (
								<div className="card group relative w-[calc(33.33%-3rem)] lg:w-[calc(50%-3rem)] sm:!w-full lg:mb-[2rem]  mx-[1.5rem] min-h-[45rem] lg:min-h-[34rem] bg-[#FFFFFF] pt-[5rem] pr-[4rem] pb-[11rem] pl-[5rem] lg:pt-[4rem] lg:pr-[4rem] lg:pl-[4rem] sm:mx-0 sm:!min-h-[30rem] sm:!px-[2rem]" key={index}>
									{item?.clientNews?.extLink &&
										<Link className="redirect" href={item?.clientNews?.extLink} target="_blank">
											.
										</Link>
									}
									<h4 className="mb-[1rem] sm:text-[20px]">
										{item?.clientNews?.title}
									</h4>
									<p>{item?.clientNews?.description}</p>
									{item?.clientNews?.extLink &&
										<div className="absolute right-[5rem] bottom-[5rem] w-[3rem] h-[3rem] m-0">
											<svg
												className="overflow-visible w-full h-full"
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
													strokeLinejoin="round"
												/>
												<path
													d="M18.75 3.75H26.25V11.25"
													stroke="#FA198C"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
													className="group-hover:translate-x-[7px] group-hover:-translate-y-[7px] transition-transform duration-300"
												/>
												<path
													d="M12.5 17.5L26.25 3.75"
													stroke="#FA198C"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
													className="group-hover:translate-x-[7px] group-hover:-translate-y-[7px] transition-transform duration-300"
												/>
											</svg>
										</div>
									}
								</div>
							))}
						</>
					}

				</div>
			</div>
		</section >
	);
};

export default CardsWithReference;
