import Layout from '../../../../components/layout';
import BannerThirdLevelCaseStudy from '../components/BannerThirdLevelCaseStudy.jsx';
import BrandeWIthImageGridLite from '../components/BladeWithImageGridLite.jsx'
import BladeWithImageGridLiteCohesity from '../components/BladeWithImageGridLiteCohesity.jsx'
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
				title="[24]7.ai: The Digital Performance Company"
				description="[24]7.ai is dedicated to redefining customer experiences with conversational Al."
			/>
			<BannerThirdLevelCaseStudy content={heroBanner} />
			{/* <BladeWithImageGrid content={imageBlade} /> */}
			{/* <BrandeWIthImageGridLite content={imageBlade} /> */}
			<BladeWithImageGridLiteCohesity content={imageBlade}  />
			<BrandedBlade content={brandedblade} pd={'no-padding'} />
			<ImageGrid content={imageGrid} />
			<BrandedBlade content={brandedbladeVersion} pd={''} />
			<Introduction content={introduction} />
			<LogoWithContent content={logoWithContent} />
			<Redirect content={redirect} />
			<FooterCta content={footerCta} />
		</Layout>
	);
}
