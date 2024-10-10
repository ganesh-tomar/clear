import Layout from '../../../../components/layout';
import BannerThirdLevelCaseStudy from '../components/BannerThirdLevelCaseStudy.jsx';
// import BladeWithImageGrid from '../components/BladeWithImageGride.jsx';
import BrandeWIthImageGridLite from '../components/BladeWithImageGridLite.jsx'
import BladeWithImageGridLiteCohesity from '../components/BladeWithImageGridLiteCohesity.jsx'
import BrandedBlade from '../components/BrandedBlade2.jsx';
import ImageGrid from '../components/ImageGrid.jsx';
import Introduction from '../components/Introduction.jsx';
import LogoWithContent from '../components/LogoWithContent.jsx';
import Redirect from '../components/Redirect.jsx';
import FooterCta from '../components/FooterCta.jsx';
import Newsblade from '../components/NewsBlade.jsx';
import Bannerfooter from '../components/BannerFooterCta.jsx'
import { NextSeo } from 'next-seo';

import {
	heroBanner,
	imageBlade,
	footerCta2,
	newsBlade,
	imageGrid,
	brandedblade,
	brandedblade2,
	brandedblade3,
	brandedblade4,
	introduction,
	logoWithContent,
	redirect,
	footerCta,
	bannerFooter
} from './data.js';

export default function Index() {
	return (
		<Layout>
			<NextSeo
				title="Cohesity: Data management realigned and redefined"
				description="With its breakthrough approach, Cohesity has changed the enterprise-scale data management conversation. From its start-up roots, the company has matured and expanded its reach, and found itself in need of a brand refresh to better capture its modern, market-leading solutions. With a long-standing relationship with Clear Digital, the company knew who to come to for help updating its logo, refining the brand look and feel, and humanizing its digital presence."
			/>
			<BannerThirdLevelCaseStudy content={heroBanner} />
			{/* <BrandeWIthImageGridLite content={imageBlade} /> */}
			<BladeWithImageGridLiteCohesity content={imageBlade} />
			<Bannerfooter content={bannerFooter} />
			<Newsblade content={newsBlade} />
			<BrandedBlade content={brandedblade} pd={'no-padding'} />
			<ImageGrid content={imageGrid} />
			<BrandedBlade content={brandedblade2} pd={'no-padding'} />
			<BrandedBlade content={brandedblade3} pd={'no-padding'} />
			<BrandedBlade content={brandedblade4} pd={'no-padding'} />
			<Introduction content={introduction} />
			<LogoWithContent content={logoWithContent} />
			<Redirect content={redirect} />
			<FooterCta content={footerCta} />
		</Layout>
	);
}
