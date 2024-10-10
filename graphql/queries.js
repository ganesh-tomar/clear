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
						overlayVideo
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
							lottieAnimation
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
						titleWithAnim
						lottieAnimation
						animationTitle
						preTitle
						textPosition2
						textPosition3
						subhead
						bodyWithoutEditor
						items {
							bodyWithoutEditor
							title
							logo {
								altText
								mediaItemUrl
							}
							bottomIcon {
								altText
								sourceUrl
							}
							iconAnim
							linkUrl
							subhead
							iconClass
							button {
								class
								linkText
								linkUrl
								target
							}
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
						icon {
							altText
							mediaItemUrl
						}
						button {
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
						lottieAnimation
						titleWithAnim
						animationTitle
						postTitle
						preTitle
						textPosition2
						breadcrumbs
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
						body
						isCurvedArrow
						lottieAnimation
						animationTitle
						titleWithAnim
						postTitle
						preTitle
						textPosition2
						
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
							hoverOverLink
							bigLogo
							iconAnim
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
							heading
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
						button {
							class
							linkText
							linkUrl
							target
							customClass
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
						lottieAnimation
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
						button {
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
						padding
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
						body
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
						    link
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
					... on Page_Pagebuilder_Sections_TechDescription {
						id
						body
						classes
						padding
						subhead
						title
						linkItems {
							link
							linkText
						}
						bgImage {
							altText
							sourceUrl
						}
					}
					... on Page_Pagebuilder_Sections_FooterFormCta {
						id
						bodyWithoutEditor
						classes
						padding
						title
						subtitle
						button {
							class
							linkText
							linkUrl
							target
						}
						image {
							altText
							sourceUrl
						}
						formId
					}
					... on Page_Pagebuilder_Sections_IntroWithCards {
						id
						body
						padding
						title
						classes
						button {
							class
							linkText
							linkUrl
							target
						}
					}
					... on Page_Pagebuilder_Sections_TimelineGrid {
						id
						classes
						padding
						timelineItem {
							body
							contentClass
							imageClass
							linkUrl
							subtitle
							title
							image {
								altText
								sourceUrl
							}
						}
					}
					... on Page_Pagebuilder_Sections_LeadershipGrid {
						id
						blurb
						classes
						padding
						title
						leadershipItems {
							body
							designation
							name
							linkText
							link
							hoveredImage {
								altText
								sourceUrl
							}
							image {
								altText
								sourceUrl
							}
						}
					}
					... on Page_Pagebuilder_Sections_LinksWrapper {
						id
						classes
						padding
						heading
						subheading
						items {
							titleLink
							title
						}
					}
					... on Page_Pagebuilder_Sections_View {
						view
					}
					... on Page_Pagebuilder_Sections_CardsWithReference {
						fieldGroupName
						reference {
							... on ClientNews {
								id
								title
								uri
								clientNews {
									title
									description
									extLink
								}
							}
							... on Client {
								id
								clients {
									description
									externalLink
									title
									logo {
										altText
										mediaItemUrl
									}
								}
								title
								uri
							}
						}
						title
					}
					... on Page_Pagebuilder_Sections_ListWithReference {
						id
						classes
						padding
						reference {
							... on CaseStudy {
								id
								title
								uri
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
						type
					}
					... on Page_Pagebuilder_Sections_StaticsWithContent {
						id
						classes
						padding
						items {
							heading
							title
							subtitle
							headingClass
							fullWidth
							logo {
								altText
								mediaItemUrl
							}
						}
					}
						 ... on Page_Pagebuilder_Sections_AuthorBlock {
							id
							name
							authorImage {
								altText
								sourceUrl
							}
							bredcrumb
							classes
							description
							designation
							padding
						}
					... on Page_Pagebuilder_Sections_ColThreeWithReference {
						fieldGroupName
						title
						type
						reference {
							... on ClientNews {
								id
								title
								uri
								industries {
									nodes {
										name
									}
								}
								featuredImage {
									node {
										altText
										mediaItemUrl
									}
								}
								date
								clientNews {
									extLink
									title
								}
							}
						}
						backgroundColor
					}
					... on Page_Pagebuilder_Sections_Form {
						fieldGroupName
						formId
					}
				}
			}
			commonField {
				isDark
				commonFooterCta
			}
		}
	}
`;
