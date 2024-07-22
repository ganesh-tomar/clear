import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import React from 'react';
import { NextSeo } from 'next-seo';
import { GET_PAGE_DATA } from '../graphql/queries';
import SectionRenderer from '../sections/SectionRenderer';
import Layout from '../components/layout';
import Custom404 from './404';
import Head from 'next/head';

const apolloClient = new ApolloClient({
  uri: 'https://dev-cleardigital.pantheonsite.io/wp/graphql',
  cache: new InMemoryCache(),
});

export async function getServerSideProps({ params, req }) {
  const uriPath = params?.uri?.join('/') || '/';
  
  try {
    const { data } = await apolloClient.query({
      query: GET_PAGE_DATA,
      variables: { uri: uriPath },
      fetchPolicy: 'network-only',
    });
    if (!data || !data.pageBy) {
      return { notFound: true };
    }
   
    const seoProps = {};

    return { props: { pageData: data, seoProps } };
    
  } catch (error) {
    console.error("GraphQL Error:", error);
    return { props: { error: error.message } };
  }
}

export default function PageComponent({ pageData, seoProps, error }) {
  if (error) return <p className='pt-[100px] text-center'>Error: something went wrong please wait or try again</p>;
  if (!pageData || !pageData.pageBy) return <Custom404 />;

  const sections = pageData.pageBy.pageBuilder?.sections || [];

  return (
    <Layout>
      <NextSeo {...seoProps} />
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Clear Digital is a web design agency" />
        <meta name="twitter:description" content="Clear Digital is a web design agency" />
      </Head>
      
      {sections.map((section, index) => (
        <SectionRenderer key={index} type={section.__typename} data={section} />
      ))}
    </Layout>
  );
}
