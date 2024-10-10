import { gql } from '@apollo/client';

export const GET_POST = gql`
  query GetPost($id: ID!) {
    post(id: $id, idType: SLUG) {
      id
      title
      content
      date
      terms {
					edges {
							node {
								... on MessageAreaOfFocus {
										id
										name
							 }
					}
				}
			}
      author {
        node {
          name
          firstName
          lastName
           userProfile {
             userAvatar {
               sourceUrl
               altText
            }
        }
        }
      }
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
`;


export const GET_CALCULATOR_BY_SLUG = gql`
  query GetCalculatorBySlug($slug: String!) {
    calculatorBy(slug: $slug) {
      title
      content
      featuredImage {
        node {
          mediaItemUrl
          altText
        }
      }
      date
        author {
        node {
          name
          firstName
          lastName
           userProfile {
             userAvatar {
               sourceUrl
               altText
            }
        }
        }
      }
      tags {
        nodes {
          uri
          name
        }
      }
    }
  }
`;


export const GET_VIDEO_BY_SLUG = gql`
  query GetVideoBySlug($slug: String!) {
    videoBy(slug: $slug) {
      title
      content
      featuredImage {
        node {
          mediaItemUrl
          altText
        }
      }
      date
      author {
        node {
          name
          firstName
          lastName
          userProfile {
            userAvatar {
              sourceUrl
              altText
            }
          }
        }
      }
      tags {
        nodes {
          uri
          name
        }
      }
    }
  }
`;


export const GET_PODCAST_BY_SLUG = gql`
  query GetPodcastBySlug($slug: String!) {
    podcastBy(slug: $slug) {
      title
      content
      featuredImage {
        node {
          mediaItemUrl
          altText
        }
      }
      date
      author {
        node {
          name
          firstName
          lastName
          userProfile {
            userAvatar {
              sourceUrl
              altText
            }
          }
        }
      }
      tags {
        nodes {
          uri
          name
        }
      }
    }
  }
`;



export const GET_WHITEPAPER_BY_SLUG = gql`
  query GetWhitepaperBySlug($slug: String!) {
    whitepaperBy(slug: $slug) {
      title
      content
      featuredImage {
        node {
          mediaItemUrl
          altText
        }
      }
      date
      author {
        node {
          name
          firstName
          lastName
          userProfile {
            userAvatar {
              sourceUrl
              altText
            }
          }
        }
      }
      tags {
        nodes {
          uri
          name
        }
      }
    }
  }
`;

export const GET_INFOGRAPHIC_BY_SLUG = gql`
  query GetInfographicBySlug($slug: String!) {
    infographicBy(slug: $slug) {
      title
      content
      featuredImage {
        node {
          mediaItemUrl
          altText
        }
      }
      date
      author {
        node {
          name
          firstName
          lastName
          userProfile {
            userAvatar {
              sourceUrl
              altText
            }
          }
        }
      }
      tags {
        nodes {
          uri
          name
        }
      }
    }
  }
`;



export const GET_ALL_INSIGHTS = gql`
	query allInsights {
		posts(first: 10000) {
			nodes {
				featuredImage {
					node {
						altText
						mediaItemUrl
					}
				}
				link
				title
				uri
				tags {
					nodes {
						uri
						name
					}
				}
				solutions {
					nodes {
						name
						termTaxonomyId
					}
				}
				contentType {
					node {
						name
					}
				}
				date
				excerpt
			}
		}
		whitepapers(first: 10000) {
			nodes {
				featuredImage {
					node {
						altText
						mediaItemUrl
					}
				}
				link
				title
				uri
				tags {
					nodes {
						uri
						name
					}
				}
				solutions {
					nodes {
						name
						termTaxonomyId
					}
				}
				contentType {
					node {
						name
					}
				}
				date
				excerpt
			}
		}
		calculators(first: 10000) {
			nodes {
				featuredImage {
					node {
						altText
						mediaItemUrl
					}
				}
				link
				title
				uri
				tags {
					nodes {
						uri
						name
					}
				}
				solutions {
					nodes {
						name
						termTaxonomyId
					}
				}
				contentType {
					node {
						name
					}
				}
				date
				excerpt
			}
		}
		videos(first: 10000) {
			nodes {
				featuredImage {
					node {
						altText
						mediaItemUrl
					}
				}
				link
				title
				uri
				tags {
					nodes {
						uri
						name
					}
				}
				solutions {
					nodes {
						name
						termTaxonomyId
					}
				}
				contentType {
					node {
						name
					}
				}
				date
				excerpt
			}
		}
		infographics(first: 10000) {
			nodes {
				featuredImage {
					node {
						altText
						mediaItemUrl
					}
				}
				link
				title
				uri
				tags {
					nodes {
						uri
						name
					}
				}
				solutions {
					nodes {
						name
						termTaxonomyId
					}
				}
				contentType {
					node {
						name
					}
				}
				date
				excerpt
			}
		}
		podcasts(first: 10000) {
			nodes {
				featuredImage {
					node {
						altText
						mediaItemUrl
					}
				}
				link
				title
				uri
				tags {
					nodes {
						uri
						name
					}
				}
				solutions {
					nodes {
						name
						termTaxonomyId
					}
				}
				contentType {
					node {
						name
					}
				}	
				date
				excerpt
			}
		}
	}
`;