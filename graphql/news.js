import { gql } from '@apollo/client';

export const GET_LATEST_NEWS = gql`
	query latestNews {
		allClientNews(first: 3) {
			nodes {
				title
				clientNews {
					description
					extLink
					title
				}
			}
		}
	}
`;

export const GET_FEATURED_NEWS = gql`
	query featuredNews {
		allClientNews(
			first: 3
			where: { taxQuery: { taxArray: { taxonomy: CLIENTTYPE, terms: "1647" } } }
		) {
			nodes {
				title
				uri
				clientNews {
					extLink
					title
				}
				featuredImage {
					node {
						altText
						mediaItemUrl
					}
				}
				industries {
					nodes {
						name
					}
				}
				date
			}
		}
	}
`;

export const GET_CS_INDUSTRIES = gql`
	query LatestCsIndustriesS {
		industries(first: 5) {
			nodes {
				caseStudies {
					nodes {
						title
						uri
						date
						id
						caseStudyQry {
							subtitle
							logo {
								defaultLogo {
									altText
									mediaItemUrl
								}
								hoverLogo {
									altText
									mediaItemUrl
								}
							}
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
		}
	}
`;

export const GET_CS_SERVICES = gql`
	query LatestCsServices {
		services(first: 5) {
			nodes {
				caseStudies {
					nodes {
						title
						uri
						date
						id
						caseStudyQry {
							subtitle
							logo {
								defaultLogo {
									altText
									mediaItemUrl
								}
								hoverLogo {
									altText
									mediaItemUrl
								}
							}
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
		}
	}
`;

export const GET_CONTENT_TYPE = gql`
	query ClientTypes {
		customContentTypes(where: { parent: null }) {
			nodes {
				name
				children {
					nodes {
						name
						termTaxonomyId
						parent {
							node {
								termTaxonomyId
							}
						}
					}
				}
				termTaxonomyId
				ancestors {
					nodes {
						termTaxonomyId
					}
				}
			}
		}
	}
`;

export const GET_ALL_NEWS = gql`
	query AllNews {
		allClientNews(first: 10000) {
			nodes {
				title
				uri
				terms {
					nodes {
						... on CustomContentType {
							name
							termTaxonomyId
						}
					}
				}
				date
				clientNews {
					description
					extLink
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
