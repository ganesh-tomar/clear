import { gql } from '@apollo/client';

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
				messageAreaOfFocuses {
					nodes {
						uri
						name
					}
				}
				services {
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
				messageAreaOfFocuses {
					nodes {
						uri
						name
					}
				}
				services {
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
				messageAreaOfFocuses {
					nodes {
						uri
						name
					}
				}
				services {
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
				messageAreaOfFocuses {
					nodes {
						uri
						name
					}
				}
				services {
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
				messageAreaOfFocuses {
					nodes {
						uri
						name
					}
				}
				services {
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
				messageAreaOfFocuses {
					nodes {
						uri
						name
					}
				}
				services {
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

export const GET_ALL_TOPICS = gql`
	query allMessageAreaOfFocuses {
		messageAreaOfFocuses(first: 1000) {
			nodes {
				name
				termTaxonomyId
			}
		}
	}
`;

export const GET_ALL_SERVICES = gql`
	query allServices {
		services(first: 10000) {
			nodes {
				name
				termTaxonomyId
			}
		}
	}
`;
