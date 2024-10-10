import Layout from '../../../../components/layout.jsx';
import BannerThirdLevelCaseStudy from '../components/BannerThirdLevelCaseStudy.jsx';
// import BladeWithImageGrid from '../components/BladeWithImageGride.jsx';
import BrandeWIthImageGridLite from '../components/BladeWithImageGridLite.jsx'
import BrandedBlade from '../components/BrandedBlade.jsx'
import ContentGridDetail from '../components/ContentGridDetail.jsx';
import IntroWithColThree from '../components/IntroWithColThree.jsx';
import Newsblade from '../components/NewsBlade.jsx';
import ContentGrid from '../components/ContentGrid.jsx';
import Counter from '../components/Counter.jsx'
import Bannerfooter from '../components/BannerFooterCta.jsx'
import ImageGrid from '../components/ImageGrid.jsx'
import Quoteblade from '../components/Quoteblade.jsx';
import Halfslider from '../components/Halfslider.jsx';
import Introduction from '../components/Introduction.jsx';
import LogoWithContent from '../components/LogoWithContent.jsx';
import Redirect from '../components/Redirect.jsx';
import FooterCta from '../components/FooterCta.jsx';
import { NextSeo } from 'next-seo';

import {
	heroBanner,
	imageBlade,
	brandedblade,
	contentGridDetail,
	newsBlade,
	contentGrid,
	imageGrid,
	contentGridVersion,
	bannerFooter,
	contentGridVersionTwo,
	counter,
	brandedbladeVersion,
	quoteblade,
	brandedbladeVersionTwo,
	imageGridVersion,
	contentGrid2,
	halfSlider,
	imageGridVersionTwo,
	introduction,
	logoWithContent,
	redirect,
	footerCta,
} from './data.js';

export default function Index() {
	return (
		<Layout>
			<NextSeo
				title="A Refreshed SailPoint Brand | Clear Digital"
				description="When unified security identity leader, SailPoint, found itself with an outdated website, the company turned to Clear Digital to bring their new brand to life."
			/>
			<BannerThirdLevelCaseStudy content={heroBanner} />
			<BrandeWIthImageGridLite content={imageBlade} />
			<ContentGridDetail content={contentGridDetail} />
			<Newsblade content={newsBlade} />
			<ContentGrid content={contentGrid} />
			<BrandedBlade content={brandedblade} pd={'no-padding'} />
			<IntroWithColThree content={''} />
			<ContentGrid content={contentGridVersion} />
			<ImageGrid content={imageGrid} />
			<Counter content={counter}/>
			<Bannerfooter content={bannerFooter} />
			<ContentGrid content={contentGridVersionTwo} />
			<BrandedBlade content={brandedbladeVersion} pd={'no-padding'} />
			<Quoteblade content={quoteblade} />
			<BrandedBlade content={brandedbladeVersionTwo} pd={'no-padding'} />
			<ImageGrid content={imageGridVersion} />
			<Halfslider content={halfSlider} />
			<ContentGrid content={contentGrid2} />
			<ImageGrid content={imageGridVersionTwo} />
			<Introduction content={introduction} />
			<LogoWithContent content={logoWithContent} />
			<Redirect content={redirect} />
			<FooterCta content={footerCta} />
		</Layout>
	);
}
