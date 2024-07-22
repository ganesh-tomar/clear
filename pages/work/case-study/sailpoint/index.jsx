import Layout from '../../../../components/layout.jsx';
import BannerThirdLevelCaseStudy from '../components/BannerThirdLevelCaseStudy.jsx';
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
	brandedblade,
	imageGrid,
	introduction,
	logoWithContent,
	redirect,
	footerCta,
} from './data.js';

export default function Index() {
	return (
		<Layout>
			<NextSeo
				title="Sailpoint: The Next Generation Secure Email Cloud"
				description="Sailpoint is advancing email security by using predictive AI modeling to prevent attacks and ensure humanity prevails over evil."
			/>
			<BannerThirdLevelCaseStudy content={heroBanner} />
			<BladeWithImageGrid content={imageBlade} />
			<ImageGrid content={imageGrid} />
			<BrandedBlade content={brandedblade} />
			<Introduction content={introduction} />
			<LogoWithContent content={logoWithContent} />
			<Redirect content={redirect} />
			<FooterCta content={footerCta} />
		</Layout>
	);
}
