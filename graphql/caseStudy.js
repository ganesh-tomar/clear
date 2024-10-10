import { gql } from '@apollo/client';
import { EXPORT_DETAIL } from 'next/dist/shared/lib/constants';

export const SINGLE_CASE_STUDY = gql`
	query getSingleCaseStudy($slug: ID!) {
		caseStudy(id: $slug, idType: SLUG) {
			title
			uri
			caseStudyQry {
				fieldGroupName
				sections {
					... on CaseStudy_Casestudyqry_Sections_PageBlock {
						block {
							type
							project
						}
					}
					... on CaseStudy_Casestudyqry_Sections_PaginationBlock {
						id
						classes
						padding
						paginationLinks {
							nextLabel
							nextLink
							previousLabel
							previousLink
						}
					}
					... on CaseStudy_Casestudyqry_Sections_Cta {
						id
						body
						classes
						subtitle
						title
						link {
							class
							linkText
							linkUrl
							target
						}
						padding
						image {
							altText
							mediaItemUrl
						}
					}
				}
			}
		}
	}
`;

export const GET_ALL_SERVICES = gql`
	query serviceTerms {
		services(first: 10000) {
			nodes {
				name
				slug
			}
		}
	}
`;

export const GET_ALL_INDUSTRIES = gql`
	query industryTerms {
		industries(first: 10000) {
			nodes {
				name
				slug
			}
		}
	}
`;

export const GET_ALL_CASE_STUDIES = gql`
	query allCaseStudies {
		caseStudies(first: 10000) {
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
				caseStudyQry {
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
					subtitle
				}
				terms {
					nodes {
						... on Industry {
							id
							name
							taxonomyName
							termTaxonomyId
						}
						... on Service {
							id
							name
							termTaxonomyId
							taxonomyName
						}
					}
				}
			}
		}
	}
`;
