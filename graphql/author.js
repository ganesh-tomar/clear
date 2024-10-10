import { gql } from '@apollo/client';
import { EXPORT_DETAIL } from 'next/dist/shared/lib/constants';

export const GET_AUTHOR_DETAILS = gql`
	query GetAuthorDetails($slug: ID!) {
		user(id: $slug, idType: SLUG) {
			    avatar {
                   url
                }
                id
                description
                name
                firstName
                lastName
                posts(first: 10000) {
                 nodes {
                    id
                    title
                    slug
                    excerpt
                    featuredImage {
                      node {
                        sourceUrl
                      }
                    }
                      date
		         }
                    
                }
               userProfile {
                  userAvatar {
                    altText
                    sourceUrl
                  }
                  userPosition
                  userLink {
                    url
                  }
                }
             }
       }

`;