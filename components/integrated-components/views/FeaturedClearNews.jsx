import { useQuery } from '@apollo/client';
import { GET_ALL_CLEARNEWS } from '../../../graphql/clearnews';
import Link from 'next/link';
import Image from 'next/image';

// Function to format date (assuming you already have this function)
const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString(undefined, options);
};

const NewsComponent = () => {
  // Apollo query to fetch data
  const { loading, error, data } = useQuery(GET_ALL_CLEARNEWS);

  // Check for loading state
  if (loading) return <p>Loading...</p>;

  // Check for errors
  if (error) return <p>Error: {error.message}</p>;

  // Ensure that data exists and nodes are available
  if (!data || !data.allClearNews || !data.allClearNews.nodes) {
    return <p>No data available</p>;
  }

  // Filter nodes for featured news
  const featuredNews = data.allClearNews.nodes
    .filter((node) =>
      node?.featuredClearNewsTypes?.nodes?.some((featuredNode) => featuredNode.name === "Featured")
    )
    .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date (latest first)
    .slice(0, 3); // Limit to latest 3 news items

  return (
    <section className=" newscards pt-0 grid__parallax dark">
      <div className="container">
        <div className="intro mb-[5rem]"><h3>Top News</h3></div>
        <div className="wrapper ml-[-1.5rem] w-[calc(100%+3rem)] sm:w-full flex flex-wrap sm:ml-0">
          {featuredNews.length > 0 ? (
            featuredNews.map((newsItem, index) => (
              <div
                className={`
                  ${
                    newsItem.featuredImage
                      ? 'overlay col-three max-w-[45rem] w-[calc(33.33%-3rem)] lg:w-[calc(50%-3rem)] sm:!w-full md:min-h-[40rem]  mx-[1.5rem] min-h-[45rem]  relative flex flex-col justify-between lg:mb-[2rem] sm:mx-0'
                      : 'bg-white !justify-start overlayblack md:!justify-between border border-black col-three max-w-[45rem] lg:w-[calc(50%-3rem)] w-[calc(33.33%-3rem)] sm:!w-full md:min-h-[40rem] mx-[1.5rem] min-h-[45rem] relative flex flex-col justify-between lg:mb-[2rem] sm:mx-0 overflow-hidden'
                  }
                  z-[5]
                `}
                key={index}
                data-cursor-expand
              >
                <Link
                  href={newsItem.clearNews.link}
                  className="redirect"
                  target={newsItem.clearNews.external ? '_blank' : '_self'}
                >
                  {/* News title */}
                </Link>

                {newsItem.featuredImage ? (
                  <div className="bg-img">
                    <Image
                      src={newsItem.featuredImage.node.mediaItemUrl}
                      width={1000}
                      height={1000}
                      alt={newsItem.featuredImage.node.altText}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  ''
                )}

                <div
                  className={
                    newsItem.featuredImage
                      ? 'tab-wrapper p-[5rem] flex flex-wrap justify-between ipad:p-[4rem]'
                      : 'tab-wrapper p-[5rem] pb-[3rem] flex flex-wrap justify-between ipad:p-[4rem]'
                  }
                >
                  {newsItem.customClearNewsTypes?.nodes?.length > 0 && (
                    <div className="tab-wrap relative">
                      <span className="font-bold py-[0.5rem] px-[1rem] bg-black text-white text-[16px] xxl-up:text-[1.6rem] inline-block mr-[1rem]">
                        {newsItem.customClearNewsTypes.nodes[0].name}
                      </span>
                    </div>
                  )}

                  {newsItem.clearNews?.external && (
                    <div className="img-wrap min-w-[3rem] min-h-[3rem]">
                      <svg
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
                          className="ipad:stroke-[#fff]"
                        />
                        <path
                          d="M18.75 3.75H26.25V11.25"
                          stroke="#FA198C"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="ipad:stroke-[#fff]"
                        />
                        <path
                          d="M12.5 17.5L26.25 3.75"
                          stroke="#FA198C"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="ipad:stroke-[#fff]"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                <div
                  className={
                    newsItem.featuredImage
                      ? 'blackoverlay p-[5rem] !pt-0 ipad:p-[4rem] ipad:h-[27.4rem] phablet:h-[24.4rem] sm:!h-[19.4rem]'
                      : 'blackoverlay p-[5rem] !pt-0 ipad:p-[4rem] ipad:h-[27.4rem] phablet:h-[24.4rem] z-[5] sm:!h-[19.4rem]'
                  }
                >
                  {!newsItem.featuredImage && (
                    <p
                      className={`small mb-[2rem] ${
                        newsItem.featuredImage ? 'text-white' : 'text-black'
                      }`}
                    >
                      {formatDate(newsItem.date)}
                    </p>
                  )}
                  <h4
                    className={`h4 ${
                      newsItem.featuredImage ? 'text-white' : 'text-black'
                    }`}
                  >
                    {newsItem?.title}
                  </h4>
                </div>
              </div>
            ))
          ) : (
            <p>No featured news available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsComponent;
