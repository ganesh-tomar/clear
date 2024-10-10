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
 
    const { pageBy } = data;


    const defaultImage = {
      url: 'https://www.cleardigital.com/favicon.svg', // default image URL
      width: 800,
      height: 600,
      alt: 'Clear Digital',
    };
    const defaultTitle = "Clear Digital";
    const defaultDescription = "Website Design in San Jose, Silicon Valley Digital Agency | Clear Digital"; 
   
    const seoProps = {
      title: data.pageBy.seo.title || defaultTitle,
      description: data.pageBy.seo.metaDesc || defaultDescription,
      canonical: data.pageBy.seo.canonical,
      openGraph: {
        url: data.pageBy.seo.canonical,
        title: data.pageBy.seo.title || defaultTitle,
        description: data.pageBy.seo.metaDesc || defaultDescription,
        images: data.pageBy.seo.opengraphImage ? [
          {
            url: data.pageBy.seo.opengraphImage.sourceUrl,
            width: data.pageBy.seo.opengraphImage.mediaDetails.width,
            height: data.pageBy.seo.opengraphImage.mediaDetails.height,
            alt: data.pageBy.seo.title,
          }
        ] : [defaultImage],
      },
    };

    return { 
      props: { 
        pageData: data, 
        seoProps, 
        isDark: pageBy?.commonField?.isDark || false,
        commonFooterCta: pageBy?.commonField?.commonFooterCta || false,
      } 
    };
  } catch (error) {
    console.error("GraphQL Error:", error);
    return { props: { error: error.message } };
  }
}

export default function PageComponent({ pageData, seoProps, error, isDark, commonFooterCta }) {
  if (error) return <p className='pt-[100px] text-center'>Error: something went wrong please wait or try again</p>;
  if (!pageData || !pageData.pageBy) return <Custom404 />;

  const sections = pageData.pageBy.pageBuilder?.sections || [];

  return (
    <Layout isDark={isDark} commonFooterCta={commonFooterCta}>
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
