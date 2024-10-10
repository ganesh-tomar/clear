import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { GET_CS_INDUSTRIES, GET_CS_SERVICES } from '../../graphql/news';
import ReferenceItems from './partials/list-with-reference/ReferenceItems';
import LatestTaxonomy from './partials/list-with-reference/LatestTaxonomy';

const taxonomyHandler = (obj) => {
	let csID = [];
	let latestObj = [];
	obj.forEach(function (item, index) {
		let csNodes = item.caseStudies.nodes;
		if (csNodes.length > 0) {
			csNodes.forEach((element) => {
				if (csID.indexOf(element.id) === -1) {
					latestObj.push({
						title: element.title,
						blurb: element.caseStudyQry.subtitle,
						featured_url: element.featuredImage?.node.mediaItemUrl,
						featured_alt: element.featuredImage?.node.altText,
						logo_url: element.caseStudyQry.logo.defaultLogo?.mediaItemUrl,
						logo_alt: element.caseStudyQry.logo.defaultLogo?.altText,
						hoover_url: element.caseStudyQry.logo.hoverLogo?.mediaItemUrl,
						hoover_alt: element.caseStudyQry.logo.hoverLogo?.altText,
						date: element.date,
					});
				}
				csID.push(element.id);
			});
		}
	});
	latestObj.sort((a, b) => new Date(b.date) - new Date(a.date));
	latestObj = latestObj.slice(0, 3);
	return latestObj;
}

const ListWithReference = (data) => {
	const [industriesList, setIndustriesList] = useState([]);
	const [servicesList, setServicesList] = useState([]);
	const latestIndustries = useQuery(GET_CS_INDUSTRIES);
	const latestServices = useQuery(GET_CS_SERVICES);
	useEffect(() => {
		if (latestIndustries.data) {
			setIndustriesList(latestIndustries?.data?.industries?.nodes);
		}
	}, [latestIndustries?.data]);
	useEffect(() => {
		if (latestServices.data) {
			setServicesList(latestServices?.data?.services?.nodes);
		}
	}, [latestServices?.data]);
	let newIndustry = taxonomyHandler(industriesList);
	let newService = taxonomyHandler(servicesList);

	let componentMarkup = '';
	if (data.type == 'reference' && data.reference) {
		componentMarkup = <ReferenceItems {...data} />
	} else if (data.type == 'latest-industries') {
		componentMarkup = <LatestTaxonomy latestData={newIndustry} />
	} else if (data.type == 'latest-services') {
		componentMarkup = <LatestTaxonomy latestData={newService} />
	}

	return (
		<section className="case-studies-filter no-padding !pb-[7rem]">
			{componentMarkup}
		</section>
	);
};

export default ListWithReference;
