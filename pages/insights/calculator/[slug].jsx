import React, { useState, useEffect } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Layout from "../../../components/layout";
import { GET_CALCULATOR_BY_SLUG } from "../../../graphql/posts";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import style from "../../../components/styles/insightCard.module.css";
import HubSpotForm from "../../../components/HubSpotForm";

// Set up Apollo Client
const apolloClient = new ApolloClient({
  uri: "https://dev-cleardigital.pantheonsite.io/wp/graphql",
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
    // Fetch the specific calculator content by slug
    const { data: calculatorData } = await apolloClient.query({
      query: GET_CALCULATOR_BY_SLUG,
      variables: { slug },
    });

    // If calculator is not found, return 404
    if (!calculatorData.calculatorBy) {
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

    // Exclude the current post (calculator) from the list of latest posts
    const recentPosts = latestPosts
      .filter((latestPost) => latestPost.slug !== slug)
      .slice(0, 3);

    // Return the calculator data and recent posts as props
    return {
      props: {
        calculator: calculatorData.calculatorBy,
        recentPosts, // Pass recentPosts to the component
        form,
      },
    };
  } catch (error) {
    console.error("Error fetching calculator data:", error);
    return {
      notFound: true,
    };
  }
}

const CalculatorDetail = ({ calculator, recentPosts, formID }) => {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [fullUrl, setFullUrl] = useState("");

  useEffect(() => {
    if (calculator) {
      if (typeof window !== "undefined") {
        // Build full URL using window.location
        setFullUrl(window.location.href);
      }
    }
  }, [calculator]);

  return (
    <Layout commonFooterCta={true}>
      <Head>
        <title>{calculator?.title} - Calculator</title>
        <meta
          name="description"
          content={`Calculator created by ${calculator?.author?.node?.name}`}
        />
      </Head>

      {/* Banner Section */}
      <section className="dark__overlay grid__parallax overflow-hidden insights-banner lg-up:min-h-[80rem] lg:min-h-[65rem] lg-up:justify-between flex items-center bg-black">
        {calculator?.featuredImage && (
          <div className="bg-img !w-[100%] !z-0">
            <Image
              alt={calculator?.featuredImage?.node.altText}
              width="1600"
              height="1090"
              className="object-bottom xxl-down:object-center"
              src={
                calculator?.featuredImage?.node?.mediaItemUrl ||
                "/default-image.jpg"
              }
            />
          </div>
        )}
        <div className="breadcrumbs relative w-full">
          <div className="container">
            <ul className="absolute top-[-0.7rem] laptop:top-[2.4rem] z-[10] lg:pt-[30px]">
              <li
                className={`inline relative text-[14px] list font-normal leading-[24px] mr-[1rem] pr-[0.5rem] text-[white] `}
              >
                <Link
                  href={`/insights`}
                  className={`hover:text-pink transition-all`}
                >
                  Insights
                </Link>
              </li>
              <li
                className={`inline relative text-[14px] list font-normal leading-[24px] mr-[1rem ] pr-[0.5rem] text-[white] `}
              >
                <span>Article</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="container">
          <div className={`content-wrap max-w-[117rem] lg:pt-[8rem]`}>
            <h1 className="h2 text-white">{calculator?.title}</h1>
          </div>
        </div>
      </section>

      <section className="insightsContent padding-top-md">
        <div className="container">
          <div className="wrapper w-full flex flex-wrap ">
            <div className="content-wrap w-[calc(100%-45rem)] lg:w-full lg:pr-0 pr-[12rem] ">
              {windowWidth && windowWidth >= 991 ? (
                ""
              ) : (
                <div className="card relative max-w-[45rem] w-full mb-[5rem] ">
                  <div className="authorDetails w-full flex flex-wrap mb-[2.9rem] items-center">
                    <div className="img-wrap max-w-[9rem] max-h-[9rem] w-full h-full rounded-[50%] mr-[3rem]">
                      <Image
                        src={
                          calculator?.author?.node?.userProfile?.userAvatar
                            ?.sourceUrl
                        }
                        width={2000}
                        height={2000}
                        className="w-full h-full object-contain rounded-full"
                        alt={
                          calculator?.author?.node?.userProfile?.userAvatar
                            ?.altText
                        }
                      />
                    </div>
                    <div className="authorDesc w-[calc(100%-12rem)]">
                      <p>
                        By{" "}
                        <Link
                          href={`/author/${calculator?.author?.node?.name}`}
                          className="underline"
                        >
                          {calculator?.author?.node?.firstName}{" "}
                          {calculator?.author?.node?.lastName}
                        </Link>
                      </p>
                      <p className="small !m-0">
                        {new Date(calculator?.date).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="tab-wrapper w-full flex flex-wrap mb-[4rem]">
                    {calculator.tags.nodes.map((tag) => (
                      <Link key={tag.id} href={tag.uri}>
                        <span className="tab px-[1rem] font-bold py-[0.5rem] bg-black medium text-white mr-[1rem] mb-[1rem] relative">
                          {tag.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="social-wrap flex flex-wrap">
                    <div className="img-wrap relative max-w-[4rem] max-h-[4rem] mr-[2rem] hover:fill-purple transition-all duration-300 ease-in-out">
                      <Link
                        className="redirect"
                        href={`https://www.linkedin.com/shareArticle?mini=true&url=${fullUrl}&title=${calculator.title}&summary=&source=${fullUrl}`}
                        target="_blank"
                      >
                        .
                      </Link>
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full object-contain svg"
                      >
                        <g clipPath="url(#clip0_4331_2167)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.5509 28.5399V15.6662H11.2725V28.5398H15.5509V28.5399ZM13.4121 13.9092C14.9037 13.9092 15.8328 12.9198 15.8328 11.6845C15.8046 10.4217 14.9037 9.46021 13.4401 9.46021C11.9763 9.46024 11.0195 10.4217 11.0195 11.6845C11.0195 12.9199 11.9481 13.9092 13.384 13.9092L13.4121 13.9092ZM17.9189 28.5399C17.9189 28.5399 17.975 16.8741 17.9189 15.6663H22.198V17.5332H22.1696C22.7323 16.6547 23.746 15.364 26.054 15.364C28.8698 15.364 30.9804 17.2039 30.9804 21.1582V28.5399H26.702V21.652 9C26.702 19.9224 26.0829 18.7415 24.5341 18.7415C23.3523 18.7415 22.648 19.5376 22.3387 20.3071C22.2256 20.581 22.198 20.9658 22.198 21.3505V28.5399H17.9189Z"
                            fill="black"
                            className="svg-white"
                          />
                        </g>
                        <circle
                          cx="20"
                          cy="20"
                          r="19"
                          stroke="black"
                          strokeWidth="2"
                          className="circle"
                        />
                        <defs>
                          <clipPath id="clip0_4331_2167">
                            <rect
                              width="20"
                              height="20"
                              fill="white"
                              transform="translate(11 9)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="img-wrap relative max-w-[4rem] max-h-[4rem] mr-[2rem]">
                      <Link
                        className="redirect"
                        href={`https://www.facebook.com/sharer.php?u=${fullUrl}&t=${calculator.title}`}
                        target="_blank"
                      >
                        .
                      </Link>
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full object-contain svg"
                      >
                        <g clipPath="url(#clip0_4331_2172)">
                          <path
                            d="M14.7982 20.7172H17.2098V30.6452C17.2098 30.8412 17.3686 31 17.5646 31H21.6535C21.8495 31 22.0083 30.8412 22.0083 30.6452V20.764H24.7806C24.9608 20.764 25.1125 20.6287 25.1331 20.4497L25.5541 16.7947C25.5657 16.6941 25.5338 16.5934 25.4666 16.518C25.3992 16.4425 25.3028 16.3992 25.2017 16.3992H22.0084V14.1081C22.0084 13.4175 22.3803 13.0672 23.1138 13.0672C23.2184 13.0672 25.2017 13.0672 25.2017 13.0672C25.3977 13.0672 25.5566 12.9083 25.5566 12.7124V9.35746C25.5566 9.16145 25.3977 9.00263 25.2017 9.00263H22.3243C22.304 9.00163 22.259 9 22.1925 9C21.6933 9 19.9579 9.09801 18.5871 10.3591C17.0682 11.7566 17.2794 13.4299 17.3298 13.72V16.3992H14.7982C14.6022 16.3992 14.4434 16.558 14.4434 16.754V20.3623C14.4434 20.5583 14.6022 20.7172 14.7982 20.7172Z"
                            fill="black"
                            className="svg-white"
                          />
                        </g>
                        <circle
                          cx="20"
                          cy="20"
                          r="19"
                          stroke="black"
                          strokeWidth="2"
                          className="circle"
                        />
                        <defs>
                          <clipPath id="clip0_4331_2172">
                            <rect
                              width="22"
                              height="22"
                              fill="white"
                              transform="translate(9 9)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="img-wrap relative max-w-[4rem] max-h-[4rem] ">
                      <Link
                        className="redirect"
                        href={`https://twitter.com/share?url=${fullUrl}`}
                        target="_blank"
                      >
                        .
                      </Link>
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full object-contain svg"
                      >
                        <circle
                          cx="20"
                          cy="20"
                          r="19"
                          stroke="black"
                          strokeWidth="2"
                          className="circle"
                        />
                        <path
                          d="M26.0355 11.666H28.9873L22.5385 19.0366L30.125 29.0662H24.1848L19.5323 22.9833L14.2087 29.0662H11.2551L18.1528 21.1826L10.875 11.666H16.966L21.1715 17.2261L26.0355 11.666ZM24.9995 27.2994H26.6351L16.0772 13.34H14.322L24.9995 27.2994Z"
                          fill="black"
                          className="svg-white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
              <div dangerouslySetInnerHTML={{ __html: calculator?.content }} />
            </div>
            <div className="sticky-bar max-w-[45rem] lg:max-w-full w-full relative">
              <div className="sticky-wrap sticky top-0">
                {windowWidth && windowWidth <= 991 ? (
                  ""
                ) : (
                  <div className="card relative max-w-[45rem] w-full mb-[5rem] ">
                    <div className="authorDetails w-full flex flex-wrap mb-[2.9rem] items-center">
                      <div className="img-wrap max-w-[9rem] max-h-[9rem] w-full h-full rounded-[50%] mr-[3rem]">
                        <Image
                          src={
                            calculator?.author?.node?.userProfile?.userAvatar
                              ?.sourceUrl
                          }
                          width={2000}
                          height={2000}
                          className="w-full h-full object-contain rounded-full"
                          alt={
                            calculator?.author?.node?.userProfile?.userAvatar
                              ?.altText
                          }
                        />
                      </div>
                      <div className="authorDesc w-[calc(100%-12rem)]">
                        <p>
                          By{" "}
                          <Link
                            href={`/author/${calculator?.author?.node?.name}`}
                            className="underline"
                          >
                            {calculator?.author?.node?.firstName}{" "}
                            {calculator?.author?.node?.lastName}
                          </Link>
                        </p>
                        <p className="small">
                          {new Date(calculator.date).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="tab-wrapper w-full flex flex-wrap mb-[4rem]">
                      {calculator.tags.nodes.map((tag) => (
                        <Link key={`${tag.id}-${tag.name}`} href={tag.uri}>
                          <span className="tab px-[1rem] font-bold py-[0.5rem] bg-black medium text-white mr-[1rem] mb-[1rem] relative">
                            {tag.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="social-wrap flex flex-wrap">
                      <div className="img-wrap relative max-w-[4rem] max-h-[4rem] mr-[2rem] hover:fill-purple transition-all duration-300 ease-in-out">
                        <Link
                          className="redirect"
                          href={`https://www.linkedin.com/shareArticle?mini=true&url=${fullUrl}&title=${calculator.title}&summary=&source=${fullUrl}`}
                          target="_blank"
                        >
                          .
                        </Link>
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-full h-full object-contain svg"
                        >
                          <g clipPath="url(#clip0_4331_2167)">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.5509 28.5399V15.6662H11.2725V28.5398H15.5509V28.5399ZM13.4121 13.9092C14.9037 13.9092 15.8328 12.9198 15.8328 11.6845C15.8046 10.4217 14.9037 9.46021 13.4401 9.46021C11.9763 9.46024 11.0195 10.4217 11.0195 11.6845C11.0195 12.9199  11.9481 13.9092 13.384 13.9092L13.4121 13.9092ZM17.9189 28.5399C17.9189 28.5399 17.975 16.8741 17.9189 15.6663H22.198V17.5332H22.1696C22.7323 16.6547 23.746 15.364 26.054 15.364C28.8698 15.364 30.9804 17.2039 30.9804 21.1582V28.5399H26.702V21.6529C26.702 19.9224 26.0829 18.7415 24.5341 18.7415C23.3523 18.7415 22.648 19.5376 22.3387 20.3071C22.2256 20.581 22.198 20.9658 22.198 21.3505V28.5399H17.9189Z"
                              fill="black"
                              className="svg-white"
                            />
                          </g>
                          <circle
                            cx="20"
                            cy="20"
                            r="19"
                            stroke="black"
                            strokeWidth="2"
                            className="circle"
                          />
                          <defs>
                            <clipPath id="clip0_4331_2167">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(11 9)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="img-wrap relative max-w-[4rem] max-h-[4rem] mr-[2rem]">
                        <Link
                          className="redirect"
                          href={`https://www.facebook.com/sharer.php?u=${fullUrl}&t=${calculator.title}`}
                          target="_blank"
                        >
                          .
                        </Link>
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-full h-full object-contain svg"
                        >
                          <g clipPath="url(#clip0_4331_2172)">
                            <path
                              d="M14.7982 20.7172H17.2098V30.6452C17.2098 30.8412 17.3686 31 17.5646 31H21.6535C21.8495 31 22.0083 30.8412 22.0083 30.6452V20.764H24.7806C24.9608 20.764 25.1125 20.6287 25.1331 20.4497L25.5541 16.7947C25.5657 16.6941 25.5338 16.5934 25.4666 16.518C25.3992 16.4425 25.3028 16.3992 25.2017 16.3992H22.0084V14.1081C22.0084 13.4175 22.3803 13.0672 23.1138 13.0672C23.2184 13.0672 25.2017 13.0672 25.2017 13.0672C25.3977 13.0672 25.5566 12.9083 25.5566 12.7124V9.35746C25.5566 9.16145 25.3977 9.00263 25.2017 9.00263H22.3243C22.304 9.00163 22.259 9 22.1925 9C21.6933 9 19.9579 9.09801 18.5871 10.3591C17.0682 11.7566 17.2794 13.4299 17.3298 13.72V16.3992H14.7982C14.6022 16.3992 14.4434 16.558 14.4434 16.754V20.3623C14.4434 20.5583 14.6022 20.7172 14.7982 20.7172Z"
                              fill="black"
                              className="svg-white"
                            />
                          </g>
                          <circle
                            cx="20"
                            cy="20"
                            r="19 "
                            stroke="black"
                            strokeWidth="2"
                            className="circle"
                          />
                          <defs>
                            <clipPath id="clip0_4331_2172">
                              <rect
                                width="22"
                                height="22"
                                fill="white"
                                transform="translate(9 9)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="img-wrap relative max-w-[4rem] max-h-[4rem] ">
                        <Link
                          className="redirect"
                          href={`https://twitter.com/share?url=${fullUrl}`}
                          target="_blank"
                        >
                          .
                        </Link>
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-full h-full object-contain svg"
                        >
                          <circle
                            cx="20"
                            cy="20"
                            r="19"
                            stroke="black"
                            strokeWidth="2"
                            className="circle"
                          />
                          <path
                            d="M26.0355 11.666H28.9873L22.5385 19.0366L30.125 29.0662H24.1848L19.5323 22.9833L14.2087 29.0662H11.2551L18.1528 21.1826L10.875 11.666H16.966L21.1715 17.2261L26.0355 11.666ZM24.9995 27.2994H26.6351L16.0772 13.34H14.322L24.9995 27.2994Z"
                            fill="black"
                            className="svg-white"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
                <div className="form-wrapper relative bg-black lg:w-full mb-[3rem] p-[5rem] sm:p-[4rem]">
                  <HubSpotForm formID={formID} />
                </div>

                {/* Recent Articles Section */}
                {recentPosts.length > 0 && (
                  <div className="cardsWrapper">
                    {recentPosts.map((post, index) => (
                      <div
                        key={`${post.id}-${post.slug}`}
                        className={`${style.card} group`}
                        id={`recentPostInsightCard-${index}`}
                      >
                        <Link
                          className="redirect"
                          href={`/insights/${post?.slug}`}
                        >
                          .
                        </Link>
                        <div className="bg-img">
                          {post?.featuredImage?.node?.sourceUrl ? (
                            <Image
                              width={2000}
                              height={2000}
                              src={post?.featuredImage?.node.sourceUrl}
                              alt={post?.title}
                              className="w-full h-full object-cover"
                              style={{ color: "transparent" }}
                            />
                          ) : (
                            <Image
                              width={2000}
                              height={2000}
                              src="https://www.cleardigital.com/wp-content/uploads/2024/08/Latest-Brand-featured.png"
                              alt="poster"
                              className="w-full h-full object-cover"
                              style={{ color: "transparent" }}
                            />
                          )}
                        </div>

                        <div
                          className={`${style.tab} p-[5rem] ipad:p-[4rem] md:!pt-[3rem] md:!px-[2rem] md:!pb-0`}
                        >
                          <span
                            className={`font-bold py-[0.5rem] px-[1rem] bg-black text-white text-[16px] xxl-up:text-[1.6rem] inline-block mr-[1rem]`}
                          >
                            Article
                          </span>
                        </div>

                        <div
                          className={`insightCardBlackOverlay ${style.blackOverlay} absolute bottom-0 p-[5rem] w-full md:!py-[3rem] md:!px-[2rem]`}
                        >
                          <h4 className={`${style.desc} text-white`}>
                            {post?.title}
                          </h4>

                          <div
                            className={`hiddenContent   ${style.hiddencontent} relative  mt-0 h-0 opacity-0`}
                          >
                            <p className="medium text-white">
                              By {post?.author?.node?.name} on{" "}
                              {new Date(post?.date).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )}
                            </p>

                            <Link
                              className="tertiary-btn"
                              href={`/insights/${post?.slug}`}
                            >
                              Read more
                            </Link>
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

export default CalculatorDetail;
