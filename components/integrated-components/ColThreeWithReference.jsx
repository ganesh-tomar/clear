'use client';
import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import ReferenceItems from './partials/col-three-with-reference/ReferenceItems';
import FeaturedItems from './partials/col-three-with-reference/FeaturedItems';
import { GET_FEATURED_NEWS } from '../../graphql/news';

const ColThreeWithReference = (data) => {
	//console.log(data);
	const [featuredNewsList, setFeaturedNewsList] = useState([]);
	const featuredNews = useQuery(GET_FEATURED_NEWS);
	useEffect(() => {
		// console.log('featuredNews', featuredNews);
		if (featuredNews.data) {
			setFeaturedNewsList(featuredNews?.data?.allClientNews?.nodes);
		}
	}, [featuredNews?.data]);
	let componentMarkup = '';
	if (data.type == 'reference' && data.reference) {
		componentMarkup = <ReferenceItems {...data} />
	} else {
		componentMarkup = <FeaturedItems newsList={featuredNewsList} />
	}
	return (
		<section
			className={`newscards ${data?.backgroundColor && data?.backgroundColor != 'none' ? data?.backgroundColor : 'grid__parallax dark pt-0'} default-padding`}
			id={data?.id}>
			<div className="container">
				{data?.title &&
					<div className="intro mb-[5rem]">
						<h3>{data?.title}</h3>
					</div>
				}

				<div className="wrapper ml-[-1.5rem]  w-[calc(100%+3rem)] sm:w-full flex flex-wrap sm:ml-0">
					{componentMarkup}
				</div>
			</div>
		</section>
	);
};

export default ColThreeWithReference;
