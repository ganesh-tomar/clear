import Layout from '../../../../components/layout';
import BannerThirdLevelCaseStudy from '../components/BannerThirdLevelCaseStudy.jsx';
import BladeWithImageGrid from '../components/BladeWithImageGride.jsx';
import BladeWithImageGridLite from '../components/BladeWithImageGridLite.jsx';
import ContentGridDetail from '../components/ContentGridDetail.jsx';
import ImageGrid from '../components/ImageGrid.jsx';
import ContentGrid from '../components/ContentGrid.jsx';
import ImageSlider from '../components/ImageSlider.jsx';
import Counter from '../components/Counter.jsx';
import ColThreeImage from '../components/ColThreeImage.jsx';
import QuoteBlade from '../components/Quoteblade.jsx';
import BrandedBlade from '../components/BrandedBlade.jsx';
import Introduction from '../components/Introduction.jsx';
import LogoWithContent from '../components/LogoWithContent.jsx';
import Redirect from '../components/Redirect.jsx';
import FooterCta from '../components/FooterCta.jsx';
// import QuoteBlade from '../components/Quoteblade'

import { NextSeo } from 'next-seo';

import {
	heroBanner,
	imageBlade,
	contentGridDetail,
	imageGrid,
	contentGrid,
	imageGridTwo,
	brandedbladeVersionOne,
	brandedbladeVersion,
	imageSlider,
	counter,
	colThreeImage,
	quoteblade,
	imageGridThree,
	contentGridTwo,
	brandedbladeVersionTwo,
	brandedbladeVersionThree,
	contentGridThree,
	brandedbladeVersionFour,
	brandedbladeVersionSix,
	brandedbladeVersionSeven,
	contentGridFour,
	brandedbladeVersionFive,
	brandedblade,
	introduction,
	logoWithContent,
	redirect,
	footerCta,
	contentGridFive,
} from './data.js';

export default function Index() {
	return (
		<Layout>
			<NextSeo
				title="Viral Nation Customer Story | Clear Digital"
				description="When influencer marketing pioneer Viral Nation needed a brand and website refresh, they tapped into Clear Digital’s visual, UX and site development expertise."
			></NextSeo>
			<BannerThirdLevelCaseStudy content={heroBanner} />
			<BladeWithImageGridLite content={imageBlade} />
			<ContentGridDetail content={contentGridDetail} />
			<ImageGrid content={imageGrid} />
			<ContentGrid content={contentGrid} />
			<BrandedBlade content={brandedbladeVersionOne} />
			<BrandedBlade content={brandedbladeVersion} />
			<ImageSlider content={imageSlider} />
			<Counter content={counter} />
			<ColThreeImage content={colThreeImage} />
			<QuoteBlade content={quoteblade} />
			<ImageGrid content={imageGridThree} />
			<ContentGrid content={contentGridTwo} />
			<BrandedBlade content={brandedbladeVersionTwo} />
			{/* <ContentGrid content={contentGridFive} /> */}
			<BrandedBlade content={brandedbladeVersionThree} />
			<ContentGrid content={contentGridThree} />
			<BrandedBlade content={brandedbladeVersionFour} />
			<ContentGrid content={contentGridFour} />
			<BrandedBlade content={brandedbladeVersionFive} />
			<BrandedBlade content={brandedbladeVersionSix} />
			<BrandedBlade content={brandedbladeVersionSeven} />
			<Introduction content={introduction} />
			<LogoWithContent content={logoWithContent} />
			<Redirect content={redirect} />
			<FooterCta content={footerCta} />
		</Layout>
	);
}
