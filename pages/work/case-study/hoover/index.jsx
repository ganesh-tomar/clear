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
	brandedblade,
	brandedbladeVersionOne,
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
				title="HOOVER INSTITUTION"
				description="Seeking to improve the human condition by advancing ideas that promote economic opportunity and prosperity while securing and safeguarding peace for America and all mankind."
			/>
			<BannerThirdLevelCaseStudy content={heroBanner} />
			{/* <BladeWithImageGrid content={imageBlade} /> */}
			<BrandeWIthImageGridLite content={imageBlade} />
			<BrandedBlade content={brandedblade} pd={'no-padding'} />
			<BrandedBlade content={brandedbladeVersionOne}  pd={'no-padding'}/>
			<ImageGrid content={imageGrid} />
			<BrandedBlade content={brandedbladeVersion} pd={'no-padding'} />
			<Introduction content={introduction} />
			<LogoWithContent content={logoWithContent} />
			<Redirect content={redirect} />
			<FooterCta content={footerCta} />
		</Layout>
	);
}
