import Layout from '../../../../components/layout';
import BannerThirdLevelCaseStudy from '../components/BannerThirdLevelCaseStudy.jsx';
import BladeWithImageGrid from '../components/BladeWithImageGride.jsx';
import BrandedBlade from '../components/BrandedBlade.jsx';
import ImageGrid from '../components/ImageGrid.jsx';
import Introduction from '../components/Introduction.jsx';
import LogoWithContent from '../components/LogoWithContent.jsx';
import Redirect from '../components/Redirect.jsx';
import FooterCta from '../components/FooterCta.jsx';
import ContentGridDetail from '../components/ContentGridDetail.jsx';
import ContentGrid from '../components/ContentGrid.jsx';
import Newsblade from '../components/NewsBlade.jsx';
import CustomerStoryWithCounter from '../components/CustomerStoryWithCounter.jsx';
import Counter from '../components/Counter.jsx';
import Quoteblade from '../components/Quoteblade.jsx';
import BladeWithImageGridLite from '../components/BladeWithImageGridLite.jsx';
import { NextSeo } from 'next-seo';

import {
	heroBanner,
	imageBlade,
	contentGridDetail,
	newsBlade,
	contentGrid,
	imageGrid,
	customerStory,
	counter,
	imageGrid2,
	quoteblade,
	imageGrid3,
	brandedblade,
	contentGrid2,
	brandedblade2,
	contentGrid3,
	brandedblade3,
	brandedblade4,
	introduction,
	logoWithContent,
	redirect,
	footerCta,
} from './data.js';

export default function Index() {
	return (
		<Layout>
			<NextSeo
				title="Habu Customer Story | Clear Digital"
				description="Habu used a website redesign to showcase its dramatic new visual style and increase its market presence. It was a fast-track development with big impact."
			/>
			<BannerThirdLevelCaseStudy content={heroBanner} />
			<BladeWithImageGridLite content={imageBlade} />
			<ContentGridDetail content={contentGridDetail} />
			<Newsblade content={newsBlade} />
			<ContentGrid content={contentGrid} />
			<ImageGrid content={imageGrid} />
			{/* <CustomerStoryWithCounter content={customerStory} /> */}
			<Counter content={counter} />
			{/* <ImageGrid content={imageGrid2} /> */}
			{/* <ImageGrid content={imageGrid3} /> */}
			<BrandedBlade content={brandedblade} pd={'no-padding'} />
			<Quoteblade content={quoteblade} />
			<BrandedBlade content={brandedblade2} pd={'no-padding'} />
			<ContentGrid content={contentGrid2} />
			<BrandedBlade content={brandedblade3} pd={'no-padding'} />
			<ContentGrid content={contentGrid3} />
			<BrandedBlade content={brandedblade4} pd={'no-padding'} />
			<Introduction content={introduction} />
			<LogoWithContent content={logoWithContent} />
			<Redirect content={redirect} />
			<FooterCta content={footerCta} />
		</Layout>
	);
}
