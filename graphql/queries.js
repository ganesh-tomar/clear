// graphql/queries.js
import { gql } from '@apollo/client';

export const GET_PAGE_DATA = gql`
	query GetPageData($uri: String!) {
		pageBy(uri: $uri) {
			pageId
			uri
			title(format: RAW)
			seo {
				canonical
				title
				metaDesc
				metaKeywords
				opengraphImage {
				  altText
				  mediaDetails {
					height
					width
				  }
				}
			  }
			pageBuilder {
				sections {
					... on Page_Pagebuilder_Sections_HeroBanner {
						title
						subhead
						video {
							videoUrl
							videoThumbnail {
								mediaItemUrl
							}
						}
						link {
							target
							linkUrl
							linkText
							class
						}
						classes
						id
						padding
					}
					... on Page_Pagebuilder_Sections_ImageWithSlider {
						fieldGroupName
						items {
							imageVideo
							title
							videoUrl
							videoPoster {
								altText
								mediaItemUrl
							}
							image {
								altText
								mediaItemUrl
							}
							logo {
								altText
								mediaItemUrl
							}
							link {
								class
								linkText
								linkUrl
								target
							}
							animationTitle
							postTitle
							preTitle
						}
						classes
						id
						padding
					}
					... on Page_Pagebuilder_Sections_IntroWithContent {
						fieldGroupName
						title
						subhead
						bodyWithoutEditor
						items {
							bodyWithoutEditor
							title
							logo {
								altText
								mediaItemUrl
							}
							linkUrl
							subhead
						}
						classes
						id
						padding
					}
					... on Page_Pagebuilder_Sections_TabsWithSlider {
						fieldGroupName
						title
						items {
							body
							bodyWithoutEditor
							title
							image {
								altText
								mediaItemUrl
							}
							subtitle
							subhead
						}
						classes
						id
						padding
					}
					... on Page_Pagebuilder_Sections_TestimonialSlider {
						fieldGroupName
						backgroundColor
						textColor
						items {
							authorName
							body
							designation
							image {
								altText
								mediaItemUrl
							}
							link {
								class
								linkText
								linkUrl
								target
							}
							logo {
								altText
								mediaItemUrl
							}
							type
							textWithPrefix {
								denotation
								number
								prefix
								description
								subHeading
							}
						}
						classes
						id
						padding
					}
					... on Page_Pagebuilder_Sections_LogoSlider {
						fieldGroupName
						items {
							logo {
								altText
								mediaItemUrl
							}
						}
						classes
						id
						padding
					}
					... on Page_Pagebuilder_Sections_Cta {
						fieldGroupName
						subtitle
						title
						body
						image {
							altText
							mediaItemUrl
						}
						link {
							class
							linkText
							linkUrl
							target
						}
						classes
						id
						padding
					}
					... on Page_Pagebuilder_Sections_ColTwoWithSlider {
						bodyWithoutEditor
						fieldGroupName
						title
						link {
							class
							linkText
							linkUrl
							target
						}
						reference {
							... on Post {
								id
								title
								uri
								featuredImage {
									node {
										altText
										mediaItemUrl
									}
								}
								contentType {
									node {
										name
									}
								}
								author {
									node {
										firstName
										lastName
									}
								}
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
							}
						}
						classes
						id
						padding
						logos {
							logo {
								altText
								mediaItemUrl
							}
						}
						subtitle
					}
					... on Page_Pagebuilder_Sections_BannerSecond {
						bodyWithoutEditor
						fieldGroupName
						subhead
						title
						backgroundImage {
							altText
							sourceUrl
						}
						link {
							linkUrl
							linkText
							target
							class
						}
						padding
						id
						classes
					}
					... on Page_Pagebuilder_Sections_ColumnGrid {
						fieldGroupName
						gridItems {
							title
							blurb
							isAnim
							iconAnim
							icon {
								altText
								sourceUrl
							}
							link
							linkText
						}
						classes
						id
						padding
					}
					... on Page_Pagebuilder_Sections_StickyNav {
						fieldGroupName
						items {
							sectionId
							text
						}
						classes
						id
						padding
					}
					... on Page_Pagebuilder_Sections_AccordionWithImage {
						fieldGroupName
						title
						image {
							altText
							mediaItemUrl
						}
						items {
							bodyWithoutEditor
							title
						}
						classes
						id
						padding
					}
					... on Page_Pagebuilder_Sections_IntroBlock {
						id
						titleClass
						title
						padding
						eyebrow
						classes
						blurb
						isCurvedArrow
						link {
							class
							linkText
							linkUrl
							target
						}
					}
					... on Page_Pagebuilder_Sections_ImageBlock {
						id
						classes
						padding
						image {
							altText
							sourceUrl
						}
					}
					... on Page_Pagebuilder_Sections_MarqueeText {
						fieldGroupName
					}
					... on Page_Pagebuilder_Sections_LogoWithText {
						fieldGroupName
						items {
							bodyWithoutEditor
							title
							backgroundImage {
								altText
								mediaItemUrl
							}
							hoverLogo {
								altText
								mediaItemUrl
							}
							link {
								class
								linkText
								linkUrl
								target
							}
							logo {
								altText
								mediaItemUrl
							}
						}
						classes
						id
						padding
					}
					... on Page_Pagebuilder_Sections_PageBlock {
						fieldGroupName
						block {
							type
						}
					}
					... on Page_Pagebuilder_Sections_BannerThird {
						id
						backgroundImage {
							altText
							sourceUrl
						}
						bodyWithoutEditor
						classes
						padding
						subhead
						title
						breadcrumbs
						link {
							class
							linkText
							linkUrl
							target
						}
						logo {
							image {
								altText
								mediaItemUrl
							}
						}
						animationTitle
						postTitle
						preTitle
					}
					... on Page_Pagebuilder_Sections_WideScreenImg {
						id
						padding
						classes
						items {
						  logo {
							altText
							sourceUrl
						  }
						  isBigImg
						}
					  }
					  ... on Page_Pagebuilder_Sections_ImageWithContent {
						id
						blurb
						classes
						eyebrow
						padding
						title
						body
						isReverse
						link {
						  class
						  linkText
						  linkUrl
						  target
						}
						image {
						  altText
						  sourceUrl
						}
					  }
					... on Page_Pagebuilder_Sections_PaginationBlock {
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
					... on Page_Pagebuilder_Sections_Image {
						imageItems {
						  image {
							altText
							sourceUrl
						  }
						}
					  }
					  ... on Page_Pagebuilder_Sections_ImageGrid {
						id
						padding
						classes
						items {
						  bigImage
						  logo {
							altText
							sourceUrl
						  }
						}
					  }
					  ... on Page_Pagebuilder_Sections_IconWithTitle {
						fieldGroupName
						item {
						  image {
							altText
							sourceUrl
						  }
						  link {
							linkUrl
						  }
						  title
						}
					  }
					  ... on Page_Pagebuilder_Sections_ContentBar {
						id
						bodyWithoutEditor
						classes
						padding
						subhead
						title
						link {
						  class
						  linkText
						  linkUrl
						  target
						}
						gridItems {
						  link
						  linkText
						}
					  }
					  ... on Page_Pagebuilder_Sections_Faq {
						fieldGroupName
						item {
						  body
						  title
						}
					  }
					  ... on Page_Pagebuilder_Sections_ContentWithLogos {
						fieldGroupName
						content {
						  body
						  title
						  blurb
						  link {
							class
							linkText
							linkUrl
							target
						  }
						}
						images {
						  image {
							altText
							sourceUrl
						  }
						}
					  }
					  ... on Page_Pagebuilder_Sections_IntroWithCardSlider {
						id
						bodyWithoutEditor
						classes
						padding
						subtitle
						title
						link {
						  class
						  linkText
						  linkUrl
						  target
						}
						sliderItem {
						  count
						  prefix
						  prefixImage {
							altText
							sourceUrl
						  }
						  subdescription
						  subtext
						  suffix
						}
					  }
					  ... on Page_Pagebuilder_Sections_ScrollWithText {
						id
						classes
						padding
						contentitem {
						  textDirection
						  textItem1 {
							colorClass
							text1
						  }
						  textItem2 {
							colorClass
							text2
						  }
						  textItem3 {
							colorClass
							text3
						  }
						}
					  }
					... on Page_Pagebuilder_Sections_View {
						view
					}
				}
			}
			commonField {
				isDark
			  }
		}
	}
`;
