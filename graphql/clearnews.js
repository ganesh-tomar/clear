import { gql } from '@apollo/client';

export const GET_ALL_CLEARNEWS = gql`
	query AllClearNews {
		allClearNews(first: 10000) {
			nodes {
				title
				uri
				slug
				date
				contentType {
				   node {
					  name
					}
				}
				 customClearNewsTypes {
					nodes {
					  name
                      termTaxonomyId
					}
				}
                featuredClearNewsTypes {
                    nodes {
                      name
                    }
                }
				clearNews {
					description
					external
                    link
					logo {
						altText
						mediaItemUrl
					}
					title
					backgroundColor
				}
				featuredImage {
					node {
						altText
						mediaItemUrl
					}
				}
			}
		}
	}
`;


export const GET_CONTENT_TYPE = gql`
	query AllClearNews {
		allClearNews(first: 10000) {
			nodes {
				 customClearNewsTypes {
					nodes {
					  name
                      termTaxonomyId
					}
				}
			}
		}
	}
`;
