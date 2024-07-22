import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import React from 'react';
import { NextSeo } from 'next-seo';
import { SINGLE_CASE_STUDY } from '../../../graphql/caseStudy';
import Layout from '../../../components/layout';
import Custom404 from '../../404';
import Head from 'next/head';
import CaseStudyRenderer from '../../../sections/CaseStudyRenderer';

const apolloClient = new ApolloClient({
	uri: 'https://dev-cleardigital.pantheonsite.io/wp/graphql',
	cache: new InMemoryCache(),
});

export async function getServerSideProps({ params, req }) {
	const uriPath = params?.slug?.join('/') || '/';
	try {
		const { data } = await apolloClient.query({
			query: SINGLE_CASE_STUDY,
			variables: { slug: uriPath },
			fetchPolicy: 'network-only',
		});
		if (!data || !data.caseStudy) {
			return { notFound: true };
		}

		const seoProps = {};

		return { props: { pageData: data, seoProps } };
	} catch (error) {
		console.error('GraphQL Error:', error);
		return { props: { error: error.message } };
	}
}

export default function SingleCaseStudy({ pageData }) {
	if (!pageData || !pageData.caseStudy) return <Custom404 />;
	const sections = pageData.caseStudy.caseStudyQry?.sections || [];
	
	return (
		<Layout>
			<Head>
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			{sections.map((section, index) => (
				<CaseStudyRenderer key={index} type={section.__typename} data={section} />
			))}
		</Layout>
	);
}
