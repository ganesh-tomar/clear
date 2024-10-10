import Layout from '../../../../components/layout.jsx';
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
	brandedbladeVersion,
	introduction,
	logoWithContent,
	redirect,
	footerCta,
} from './data.js';

export default function Index() {
	return (
		<Layout>
			<NextSeo
				title="Nile: The Digital Performance Company"
				description="Nile is dedicated to redefining customer experiences with conversational Al."
			/>
			<BannerThirdLevelCaseStudy content={heroBanner} />
			{/* <BladeWithImageGrid content={imageBlade} /> */}
			<BrandeWIthImageGridLite content={imageBlade} />
			<ImageGrid content={imageGrid} />
			<BrandedBlade content={brandedblade} pd={'no-padding'} />
			<ImageGrid content={imageGridVersion} />
			<BrandedBlade content={brandedbladeVersion} pd={'no-padding'} />
			<Introduction content={introduction} />
			<LogoWithContent content={logoWithContent} />
			<Redirect content={redirect} />
			<FooterCta content={footerCta} />
		</Layout>
	);
}
