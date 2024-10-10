import React, { useState, useEffect } from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Layout from '../../../components/layout';
import { GET_VIDEO_BY_SLUG } from '../../../graphql/posts';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import style from '../../../components/styles/insightCard.module.css';
import HubSpotForm from '../../../components/HubSpotForm';

// Set up Apollo Client
const apolloClient = new ApolloClient({
  uri: 'https://dev-cleardigital.pantheonsite.io/wp/graphql',
  cache: new InMemoryCache(),
});

// GraphQL query to fetch the latest 4 posts
const GET_LATEST_POSTS = gql`
  query GetLatestPosts {
    posts(first: 4) {
      nodes {
        id
        title
        slug
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
        author {
          node {
            name
          }
        }
      }
    }
  }
`;

export async function getServerSideProps({ params }) {
  const { slug } = params;

  try {
    // Fetch the specific video content by slug
    const { data: videoData } = await apolloClient.query({
      query: GET_VIDEO_BY_SLUG,  // Corrected the query name
      variables: { slug },
    });

    // If video is not found, return 404
    if (!videoData.videoBy) {
      return {
        notFound: true,
      };
    }

    // Fetch the latest 4 posts
    const { data: latestPostsData } = await apolloClient.query({
      query: GET_LATEST_POSTS,
    });

    const latestPosts = latestPostsData?.posts?.nodes || [];
    const formID = "39b05380-722b-4e46-b867-7db1166deea5";

    // Exclude the current post (video) from the list of latest posts
    const recentPosts = latestPosts.filter((latestPost) => latestPost.slug !== slug).slice(0, 3);

    // Return the video data and recent posts as props
    return {
      props: {
        video: videoData.videoBy,
        recentPosts, // Pass recentPosts to the component
        formID
      },
    };
  } catch (error) {
    console.error('Error fetching video data:', error);
    return {
      notFound: true,
    };
  }
}

const VideoDetail = ({ video, recentPosts, formID }) => {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!video) {
    return <div>Content not found</div>;
  }

  const [fullUrl, setFullUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Build full URL using window.location
      setFullUrl(window.location.href);
    }
  }, []);

  return (
    <Layout commonFooterCta={true}>
      <Head>
        <title>{video?.title} - Video</title>
        <meta name="description" content={`Video created by ${video?.author?.node?.name}`} />
      </Head>

      {/* Banner Section */}
      <section className="dark__overlay grid__parallax overflow-hidden insights-banner lg-up:min-h-[80rem] lg:min-h-[65rem] lg-up:justify-between flex items-center bg-black">
        {video?.featuredImage && (
          <div className="bg-img !w-[100%] !z-0">
            <Image
              alt={video?.featuredImage?.node?.altText || 'Video thumbnail'}
              width="1600"
              height="1090"
              className="object-bottom xxl-down:object-center"
              src={video?.featuredImage?.node?.mediaItemUrl || '/default-image.jpg'}
            />
          </div>
        )}
        {/* Breadcrumbs */}
        <div className="breadcrumbs relative w-full">
          <div className="container">
            <ul className="absolute top-[-0.7rem] laptop:top-[2.4rem] z-[10] lg:pt-[30px]">
              <li className={`inline relative text-[14px] list font-normal leading-[24px] mr-[1rem] pr-[0.5rem] text-[white]`}>
                <Link href={`/insights`} className={`hover:text-pink transition-all`}>Insights</Link>
              </li>
              <li className={`inline relative text-[14px] list font-normal leading-[24px] mr-[1rem] pr-[0.5rem] text-[white]`}>
                <span>Video</span>
              </li>
            </ul>
          </div>
        </div>
        {/* Title */}
        <div className="container">
          <div className={`content-wrap max-w-[117rem] lg:pt-[8rem]`}>
            <h1 className="h2 text-white">{video?.title}</h1>
          </div>
        </div>
      </section>

      <section className="insightsContent padding-top-md">
        <div className="container">
          <div className="wrapper w-full flex flex-wrap">
            <div className="content-wrap w-[calc(100%-45rem)] lg:w-full lg:pr-0 pr-[12rem]">
              <div dangerouslySetInnerHTML={{ __html: video?.content }} />
            </div>
            <div className="sticky-bar max-w-[45rem] lg:max-w-full w-full relative">
              <div className="sticky-wrap sticky top-0">
                {/* Author details */}
                <div className="card relative max-w-[45rem] w-full mb-[5rem]">
                  <div className="authorDetails w-full flex flex-wrap mb-[2.9rem] items-center">
                    <div className="img-wrap max-w-[9rem] max-h-[9rem] w-full h-full rounded-[50%] mr-[3rem]">
                      {video?.author?.node?.userProfile?.userAvatar?.sourceUrl && (
                        <Image
                          src={video?.author?.node?.userProfile?.userAvatar?.sourceUrl}
                          width={2000}
                          height={2000}
                          className="w-full h-full object-contain rounded-full"
                          alt={video?.author?.node?.userProfile?.userAvatar?.altText || 'Author Avatar'}
                        />
                      )}
                    </div>
                    <div className="authorDesc w-[calc(100%-12rem)]">
                      <p>By <Link href={`/author/${video?.author?.node?.name}`} className="underline">{video?.author?.node?.firstName} {video?.author?.node?.lastName}</Link></p>
                      <p className="small">
                        {new Date(video?.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="form-wrapper relative bg-black lg:w-full mb-[3rem] p-[5rem] sm:p-[4rem]">
                  <HubSpotForm formID={formID} />
                </div>

                {/* Recent Articles Section */}
                {recentPosts.length > 0 && (
                  <div className="cardsWrapper">
                    {recentPosts.map((post, index) => (
                      <div key={index} className={`${style.card} group`} id={`recentPostInsightCard-${index}`}>
                        <Link className="redirect" href={`/insights/${post?.slug}`}>.</Link>
                        <div className="bg-img">
                          <Image
                            width={2000}
                            height={2000}
                            src={post?.featuredImage?.node?.sourceUrl || 'https://www.cleardigital.com/wp-content/uploads/2024/08/Latest-Brand-featured.png'}
                            alt={post?.title}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className={`${style.tab} p-[5rem] ipad:p-[4rem] md:!pt-[3rem] md:!px-[2rem] md:!pb-0`}>
                          <span className={`font-bold py-[0.5rem] px-[1rem] bg-black text-white text-[16px] xxl-up:text-[1.6rem] inline-block mr-[1rem]`}>
                            Article
                          </span>
                        </div>

                        <div className={`insightCardBlackOverlay ${style.blackOverlay} absolute bottom-0 p-[5rem] w-full md:!py-[3rem] md:!px-[2rem]`}>
                          <h4 className={`${style.desc} text-white`}>{post?.title}</h4>
                          <div className={`hiddenContent ${style.hiddencontent} relative mt-0 h-0 opacity-0`}>
                            <p className="medium text-white">
                              By {post?.author?.node?.name} on {new Date(post?.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                              })}
                            </p>
                            <Link className="tertiary-btn" href={`/insights/${post?.slug}`}>Read more</Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VideoDetail;
