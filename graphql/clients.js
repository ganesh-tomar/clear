import { gql } from '@apollo/client';

export const GET_ALL_CLIENTS = gql`
	query ClientsList {
		clients(first: 10000) {
			nodes {
				clients {
					externalLink
					logo {
						altText
						mediaItemUrl
					}
				}
				terms {
					nodes {
						... on ClientType {
							id
							name
							children {
								nodes {
									name
									id
								}
							}
							ancestors {
								nodes {
									name
									termTaxonomyId
								}
							}
						}
					}
				}
			}
		}
	}
`;

export const GET_CLIENT_TYPES = gql`
	query ClientTypes {
		clientTypes(where: { parent: null }) {
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
