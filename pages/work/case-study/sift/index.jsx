import React from 'react';
import { NextSeo } from 'next-seo';
import Layout from '../../../../components/layout';
import BannerThirdLevelCaseStudy from '../components/BannerThirdLevelCaseStudy.jsx'
import BladeWithImageGrid from '../components/BladeWithImageGride.jsx'
import BrandeWIthImageGridLite from '../components/BladeWithImageGridLite.jsx'
import BrandedBlade from '../components/BrandedBlade.jsx'
import ContentGridDetail from '../components/ContentGridDetail.jsx'
import ImageGrid from '../components/ImageGrid.jsx'
import ContentGrid from '../components/ContentGrid.jsx';
// import ImageWithContent from '../components/ImagewithContent.jsx'
import ImagewithContent from '../components/ImageWithContent.jsx';
// import ImageWithContent from '../components/MageWithContent.jsx';
import Counter from '../components/Counter.jsx'
import Quoteblade from '../components/Quoteblade.jsx';
import Halfslider from '../components/Halfslider.jsx';
import Introduction from '../components/Introduction.jsx'
import LogoWithContent from '../components/LogoWithContent.jsx'
import Redirect from '../components/Redirect.jsx'
import FooterCta from '../components/FooterCta.jsx'

import BladeWithImageGridLite from '../components/BladeWithImageGridLite.jsx';

import { heroBanner, imageBlade, brandedblade, contentGridDetail, brandedbladeVersion, imageGrid, contentGrid, imageWithContent, imageGridVersion, counter, quoteblade, brandedbladeVersionTwo, imageGridVersionTwo, contentGridVersion, halfSlider, brandedbladeVersionThree, introduction, logoWithContent, redirect, footerCta } from './data.js'

export default function Index() {
	return (
		<Layout>
		      <NextSeo
                title="Sift: Data management realigned and redefined"
                description="Sed ligula massa, finibus et ultricies vel, molestie ut sem."
            />
			<BannerThirdLevelCaseStudy content={heroBanner} />
			{/* <BladeWithImageGridLite content={imageBlade} /> */}
			<BrandeWIthImageGridLite content={imageBlade} />
			<BrandedBlade content={brandedblade} pd={'no-padding'} />
			<ContentGridDetail content={contentGridDetail} />
			<ImageGrid content={imageGrid} />
			<ContentGrid content={contentGrid} />
			<ImagewithContent data={imageWithContent} pd={'no-padding-bottom lg:!pb-[5rem]'} />
			<ImageGrid content={imageGridVersion} />
			<Counter content={counter} />
			<BrandedBlade content={brandedbladeVersion} pd={'no-padding'} />
			<Quoteblade content={quoteblade}/>
			<BrandedBlade content={brandedbladeVersionTwo} pd={'no-padding'} />
			<ImageGrid content={imageGridVersionTwo} />
			<ContentGrid content={contentGridVersion} />
			<Halfslider content={halfSlider} />
			<BrandedBlade content={brandedbladeVersionThree} pd={'no-padding'} />
			<Introduction content={introduction} />
			<LogoWithContent content={logoWithContent} />
			<Redirect content={redirect} />
			<FooterCta content={footerCta} />
		</Layout>
	);
}
