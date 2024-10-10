// pages/author/[slug].js
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GET_AUTHOR_DETAILS } from "../../graphql/author";
import Layout from "../../components/layout";
import style from "../../components/styles/insightCard.module.css";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

// Set up Apollo Client
const apolloClient = new ApolloClient({
  uri: "https://dev-cleardigital.pantheonsite.io/wp/graphql",
  cache: new InMemoryCache(),
});

export async function getServerSideProps({ params }) {
  const { slug } = params;
  try {
    const { data } = await apolloClient.query({
      query: GET_AUTHOR_DETAILS,
      variables: { slug },
    });

    const author = data?.user;
    // Return 404 if author is not found
    if (!author) {
      return {
        notFound: true,
      };
    }

    const isDark = author?.isDark || false;
    const commonFooterCta = author?.commonFooterCta || false;

    return {
      props: {
        author,
        isDark,
        commonFooterCta,
      },
    };
  } catch (error) {
    console.error("Error fetching author data:", error);

    return {
      notFound: true,
    };
  }
}

const AuthorDetail = ({ author, isDark, commonFooterCta }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(author.posts.nodes.length / itemsPerPage);
  const [winWidth, isWinWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      isWinWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const handlePageChange = (newPage) => {
    setTimeout(() => {
      setCurrentPage(newPage);
    }, 600);

    const sectionElement = document.getElementsByClassName("ArticlesGrid")[0];
    const headerHeight = document.querySelector("header")?.offsetHeight;
    // document.body.style.overflowY = "hidden";

    if (sectionElement) {
      window.scrollTo({
        top: sectionElement.offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
  };
  if (!author) {
    return <p>Author not found.</p>;
  }

  return (
    <Layout isDark={true} commonFooterCta={true}>
      <Head>
        <title>{`${author.name || ""} - Author`}</title>{" "}
        {/* Ensure name is valid */}
        <meta
          name="description"
          content={`Posts by ${author.firstName} ${author.lastName}`}
        />
      </Head>
      {/* Author Info Section */}
      <section
        className={`reverse authorbanner imgwithcontent grid__parallax dark default-padding-bottom`}
      >
        <div className="breadcrumbs w-full">
          <div className="container">
            <ul className="absolute top-[20%] z-[10]  lg:top-[10%]">
              <li className="inline relative text-[14px] xl-up:text-[1.4rem] list font-normal leading-[24px] mr-[1.4rem] pr-[1rem] laptop:pr-[1.5rem] text-[white] ">
                <Link
                  className="text-black hover:text-pink transition-all"
                  href="/insights"
                >
                  Insights
                </Link>
              </li>
              <li className="inline relative text-[14px] xl-up:text-[1.4rem] list font-normal leading-[24px] mr-[1.4rem] pr-[1rem] laptop:pr-[1.5rem] text-black ">
                Authors
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div
            className={`items-center pt-[105px] wrapper w-full relative flex flex-wrap lg:ml-[0]`}
          >
            <div
              className={`col-image relative w-full h-full max-h-[54rem] max-w-[45rem] tablet:mb-[5rem] phablet:mb-[5rem] sm:mb-[3rem]`}
            >
              <div className="img-wrapper relative w-full h-full overflow-hidden">
                {author?.userProfile?.userAvatar?.sourceUrl && (
                  <Image
                    width={1000}
                    height={1000}
                    className="w-full h-full"
                    src={author?.userProfile?.userAvatar?.sourceUrl}
                    alt={author?.userProfile?.userAvatar?.altText}
                  />
                )}
              </div>
            </div>
            <div
              className={`lg:pr-0 pl-[15rem] lg:pt-0 content-wrapper relative w-[calc(100%-45rem)] lg:max-w-[100%] lg:pl-[0] lg:mx-[auto] lg:w-full`}
            >
              <h3 className="mb-[1rem]">
                {author.firstName} {author.lastName}
              </h3>
              <h4 className="mb-[3rem] font-medium">
                {author?.userProfile?.userPosition}
              </h4>
              {author.description ? <p>{author.description}</p> : ""}
            </div>
          </div>
        </div>
      </section>

      {/* Author's Recent Articles */}
      <section
        className="ArticlesGrid insightLanding bg-black padding-top-l"
        id="ArticlesGrid"
      >
        <div className="container">
          <div className="outer block sm:max-w-[314px] xm:m-auto phablet:max-w-[400px] tablet:max-w-[736px] laptopsmall:max-w-[925px] lg:flex-wrap">
            <div className="rightCol w-100 lg:mt-[3rem]">
              <h3 className="mb-[5rem]">Recent Articles</h3>
              {author.posts.nodes.length > 0 ? (
                <div className="cardsWrapper  w-[calc(100%+4.3rem)]  lg:w-[calc(100%+2.6rem)] flex flex-wrap ml-[-1.4rem] lg:ml-[-1.3rem]">
                  {console.log(author.posts.nodes.length)}
                  {author.posts.nodes
                    .slice(startIndex, endIndex)
                    .map((post, index) => {
                      return (
                        <div
                          key={post.id}
                          className={`${style.card} ${
                            author.posts.nodes.length === 1
                              ? `w-[calc(45%-3rem)] laptop-landscape:w-[calc(65%-3rem)]  phablet:w-[calc(65%-3rem)]  `
                              : `w-[calc(33%-3rem)]`
                          } relative insightCard group justify-between  xm:w-[calc(50%-3rem)] mx-[1.5rem] max-h-[45rem] xm:!min-h-full sm:h-[28.4rem] phablet:h-[57.5rem] tablet:h-[35.1rem] laptopsmall:h-[456px] phablet:max-h-[39.6rem] laptopsmall:max-h-[456px] overflow-hidden min-h-[45rem] mb-[3rem] md:!w-[calc(100%-3rem)]`}
                          id="card"
                        >
                          <Link
                            className="redirect"
                            href={`/insights/${post.slug}`}
                          >
                            .
                          </Link>
                          <div className="bg-img">
                            {post?.featuredImage?.node.sourceUrl ? (
                              <Image
                                width={1000}
                                height={1000}
                                src={post?.featuredImage?.node.sourceUrl}
                                alt={post.title}
                                className="w-full h-full object-cover group-hover:scale-[1] transition-transform duration-300 scale-[1.2]"
                                style={{ color: "transparent" }}
                              />
                            ) : (
                              <Image
                                width={1000}
                                height={1000}
                                src="https://www.cleardigital.com/wp-content/uploads/2024/08/Latest-Brand-featured.png"
                                alt="poster"
                                className="w-full h-full object-cover group-hover:scale-[1] transition-transform duration-300 scale-[1.2]"
                                style={{ color: "transparent" }}
                              />
                            )}
                          </div>
                          <div
                            className={`${style.tab} insightCard_tab p-[5rem] pb-0 laptop:pt-[3rem] lg:p-[3rem] md:pt-[3rem] md:px-[2rem] xs:!px-[1rem] md:pb-0`}
                          >
                            <span className="truncate font-bold py-[0.5rem] px-[1rem] bg-black text-white text-[16px] sm:text-[14px] xs:px-[1rem] xxl-up:text-[1.6rem] inline-block mr-[1rem]">
                              Article
                            </span>
                          </div>
                          <div
                            className={`${style.blackOverlay} insightCardBlackOverlay absolute bottom-0 insightCard_blackOverlay laptop:pt-[2rem] xs:!px-[1rem] p-[5rem] pt-[2.5rem] md:!pt-[0] lg:p-[3rem] w-full md:py-[3rem] md:px-[2rem]`}
                          >
                            <h4
                              className={`${style.desc} insightCard_desc text-white"`}
                            >
                              {post.title}
                            </h4>
                            <div
                              className={`${style.hiddencontent} hiddenContent insightCard_hiddencontent mt-0 h-0 opacity-0`}
                            >
                              <p
                                className={`${style.medium} medium text-white mb-[5rem] md:text-[14px] sm:mb-[2rem] laptop:mb-[3rem] insightCard_medium`}
                              >
                                By {author.name} on{" "}
                                {new Date(post.date).toLocaleDateString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  }
                                )}
                              </p>
                              <Link
                                className="tertiary-btn mt-0 sm:mt-[1.8rem] ipad:!absolute ipad:left-[30px] sm:!left-[20px] xs:!left-[10px] ipad:bottom-[30px] md:!bottom-[20px]"
                                href={`/insights/${post.slug}`}
                              >
                                Read more
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              ) : (
                <p>No posts by this author.</p>
              )}
              {author.posts.nodes.length > 15 && (
                <ul
                  className={`pagination pt-[2rem] flex justify-center w-full`}
                >
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="prev-button flex items-center justify-center w-[4.4rem] h-[40px] xm-up:h-[48px] text-[0] disabled:hidden group sm:h-[3rem]"
                  >
                    .
                    <div className="iconWrap transform -rotate-180">
                      <div
                        className={`relative ${
                          currentPage === 1 &&
                          "opacity-[0.2] pointer-events-none"
                        }`}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="Arrow_Right">
                            <path
                              className={`group-hover:lg-up:stroke-pink transition`}
                              id="Vector"
                              d="M4.16675 10H15.8334"
                              stroke="#fff"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              className={`group-hover:lg-up:stroke-pink transition`}
                              id="Vector_2"
                              d="M10 4.16675L15.8333 10.0001L10 15.8334"
                              stroke="#fff"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
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
                            className={`text-black text-[2rem] py-[1rem] px-[1.7rem] sm:px-[1.5rem] sm:py-[0.5rem] sm:text-[1rem] font-[700] flex items-center justify-center leading-[24px] mx-[1rem] transition-all duration-300 hover:text-pink h-[40px] w-[40px] xm-up:h-[48px] xm-up:w-[48px] ${
                              isCurrent
                                ? "active text-white hover:text-white bg-pink font-bold"
                                : "bg-gray"
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
                        (currentPage === totalPages - 2 &&
                          i + 1 === totalPages - 1)
                      ) {
                        return (
                          <li
                            key={`dots-${i + 1}`}
                            onClick={() => handlePageChange(i + 1)}
                            className={`text-white text-[2rem] sm:px-[0] sm:py-[0] sm:mx-[0.3rem] sm:text-[1.5rem] font-[700] flex items-center justify-center leading-[24px] mx-[1rem] h-[40px] w-[40px] xm-up:h-[48px] xm-up:w-[48px]`}
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
                            className={`text-white text-[2rem] font-[700] sm:px-[0] sm:py-[0] sm:mx-[0.3rem] sm:text-[1.5rem] flex items-center justify-center leading-[24px] mx-[1rem] h-[40px] w-[40px] xm-up:h-[48px] xm-up:w-[48px]`}
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
                            className={`text-black text-[2rem] py-[1rem] px-[1.7rem] sm:px-[1.5rem] sm:py-[0.5rem] sm:text-[1rem] font-[700] flex items-center justify-center leading-[24px] mx-[1rem] transition-all duration-200 hover:text-pink h-[40px] w-[40px] xm-up:h-[48px] xm-up:w-[48px] ${
                              isCurrent
                                ? "active text-white hover:text-white bg-pink font-bold"
                                : "bg-gray"
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
                            className={`text-white text-[2rem] sm:px-[1.5rem] sm:py-[0.5rem] sm:text-[1rem] font-[700] flex items-center justify-center leading-[24px] mx-[1rem] h-[40px] w-[40px] xm-up:h-[48px] xm-up:w-[48px]`}
                          >
                            ...
                          </li>
                        );
                      } else if (i + 1 === 1) {
                        return (
                          <li
                            key={i + 1}
                            onClick={() => handlePageChange(i + 1)}
                            className={`text-black text-[2rem] py-[1rem] px-[1.7rem] sm:px-[1.5rem] sm:py-[0.5rem] sm:text-[1rem] font-[700] flex items-center justify-center leading-[24px] mx-[1rempx] transition-all duration-200 hover:text-pink h-[40px] w-[40px] xm-up:h-[48px] xm-up:w-[48px] ${
                              isCurrent
                                ? "active text-white hover:text-white bg-pink font-bold"
                                : "bg-gray"
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
                            className={`text-white text-[2rem] font-[700] sm:px-[1.5rem] sm:py-[0.5rem] sm:text-[1rem] flex items-center justify-center leading-[24px] mx-[1rem] h-[40px] w-[40px] xm-up:h-[48px] xm-up:w-[48px]`}
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
                    className="next-button w-[4.4rem] flex items-center justify-center h-[40px] xm-up:h-[48px] text-[0] disabled:hidden group sm:h-[3rem]"
                  >
                    .
                    <div className={`iconWrap`}>
                      <div
                        className={`relative ${
                          currentPage === totalPages &&
                          "opacity-[0.2] pointer-events-none"
                        }`}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="Arrow_Right">
                            <path
                              className={`group-hover:lg-up:stroke-pink transition`}
                              id="Vector"
                              d="M4.16675 10H15.8334"
                              stroke="#fff"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              className={`group-hover:lg-up:stroke-pink transition`}
                              id="Vector_2"
                              d="M10 4.16675L15.8333 10.0001L10 15.8334"
                              stroke="#fff"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </button>
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AuthorDetail;
