import Layout from '../../../../components/layout';
import BannerThirdLevelCaseStudy from '../components/BannerThirdLevelCaseStudy.jsx';
// import BladeWithImageGrid from '../components/BladeWithImageGride.jsx';
import BrandeWIthImageGridLite from '../components/BladeWithImageGridLite.jsx'
import ContentGridDetail from '../components/ContentGridDetail.jsx';
import Newsblade from '../components/NewsBlade.jsx';
import BrandedBlade from '../components/BrandedBlade.jsx';
import ContentGrid from '../components/ContentGrid.jsx';
import ImageGrid from '../components/ImageGrid.jsx';
import Quoteblade from '../components/Quoteblade.jsx';
import Counter from '../components/Counter.jsx';
import Halfslider from '../components/Halfslider.jsx';
import Introduction from '../components/Introduction.jsx';
import LogoWithContent from '../components/LogoWithContent.jsx';
import Redirect from '../components/Redirect.jsx';
import FooterCta from '../components/FooterCta.jsx';
import { NextSeo } from 'next-seo';

import {
	heroBanner,
	imageBlade,
	contentGridDetail,
	newsBlade,
	brandedblade,
	contentGrid,
	imageGrid,
	counter,
	brandedbladeTwo,
	brandedbladeVersionTwo,
	quoteblade,
	brandedbladeVersionThree,
	contentGrid2,
	contentGrid3,
	imageGridTwo,
	contentGrid4,
	halfSlider,
	brandedbladeVersionFour,
	introduction,
	logoWithContent,
	redirect,
	footerCta,
} from './data.js';

export default function Index() {
	return (
		<Layout>
			<NextSeo
				title="An Ongoing Digital Partnership | Clear Digital"
				description="When security and observability leader, Splunk, changed the way they categorize their products, they turned to Clear Digital to redesign their website. With a distinctive brand voice and style, security and observability leader, Splunk, needed a design and UX partner to reimagine their site navigation and narrative."
			/>
			<BannerThirdLevelCaseStudy content={heroBanner} />
			<BrandeWIthImageGridLite content={imageBlade} />
			<ContentGridDetail content={contentGridDetail} />
			<Newsblade content={newsBlade} />
			<BrandedBlade content={brandedblade} pd={'no-padding'} />
			<ContentGrid content={contentGrid} />
			<ImageGrid content={imageGrid} />
			<Counter content={counter} />
			<BrandedBlade content={brandedbladeTwo} pd={'no-padding'} />
			{/* <Quoteblade content={quoteblade} /> */}
			<ContentGrid content={contentGrid2} />
			<BrandedBlade content={brandedbladeVersionTwo} pd={'no-padding'} />
			<Quoteblade content={quoteblade} />
			<BrandedBlade content={brandedbladeVersionThree} pd={'no-padding'} />
			<ContentGrid content={contentGrid3} />
			<ImageGrid content={imageGridTwo} />
			<ContentGrid content={contentGrid4} />
			<Halfslider content={halfSlider} />
			<BrandedBlade content={brandedbladeVersionFour} pd={'no-padding'} />
			<Introduction content={introduction} />
			<LogoWithContent content={logoWithContent} />
			<Redirect content={redirect} />
			<FooterCta content={footerCta} />
		</Layout>
	);
}
