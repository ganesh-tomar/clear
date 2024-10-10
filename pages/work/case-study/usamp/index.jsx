import Layout from '../../../../components/layout';
import BannerThirdLevelCaseStudy from '../components/BannerThirdLevelCaseStudy.jsx';
// import BladeWithImageGrid from '../components/BladeWithImageGride.jsx';
import BrandeWIthImageGridLite from '../components/BladeWithImageGridLite.jsx'
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
	imageGridVersion,
	brandedblade,
	introduction,
	logoWithContent,
	redirect,
	footerCta,
} from './data.js';

export default function Index() {
	return (
		<Layout>
			<NextSeo
				title="uSamp Instant.ly: Sophisticated identity for a sophisticated platform."
				description="As a leader in niche panel reach, uSamp’s Instant.ly connects with all demographics."
			/>
			<BannerThirdLevelCaseStudy content={heroBanner} />
			<BrandeWIthImageGridLite content={imageBlade} />
			<ImageGrid content={imageGrid} />
			<ImageGrid content={imageGridVersion} />
			<BrandedBlade content={brandedblade} pd={'no-padding'} />

			<Introduction content={introduction} />
			<LogoWithContent content={logoWithContent} />
			<Redirect content={redirect} />
			<FooterCta content={footerCta} />
		</Layout>
	);
}
