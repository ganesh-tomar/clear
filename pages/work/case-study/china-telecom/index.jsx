import Layout from '../../../../components/layout';
import BannerThirdLevelCaseStudy from '../components/BannerThirdLevelCaseStudy.jsx';
import BrandeWIthImageGridLite from '../components/BladeWithImageGridLite.jsx'
import BladeWithImageGrid from '../components/BladeWithImageGride.jsx';
import BrandedBlade from '../components/BrandedBlade.jsx';
import ImageGrid from '../components/ImageGrid.jsx';
import Introduction from '../components/Introduction.jsx';
import LogoWithContent from '../components/LogoWithContent.jsx';
import Redirect from '../components/Redirect.jsx';
import FooterCta from '../components/FooterCta.jsx';
import { NextSeo } from 'next-seo';

import {
	heroBanner,
	imageBlade,
	imageGrid,
	brandedblade,
	imageGridVersion,
	introduction,
	logoWithContent,
	redirect,
	footerCta,
} from './data.js';

export default function Index() {
	return (
		<Layout>
			<NextSeo
				title="China Telecom Corporation Limited"
				description="With ongoing exploration and innovation, the relentless quest for perfection underlies every detail of our products and services."
			/>
			<BannerThirdLevelCaseStudy content={heroBanner} />
			<BrandeWIthImageGridLite content={imageBlade} />
			<ImageGrid content={imageGrid} />
			<BrandedBlade content={brandedblade} pd={'no-padding'} />
			<ImageGrid content={imageGridVersion} />
			<Introduction content={introduction} />
			<LogoWithContent content={logoWithContent} />
			<Redirect content={redirect} />
			<FooterCta content={footerCta} />
		</Layout>
	);
}
