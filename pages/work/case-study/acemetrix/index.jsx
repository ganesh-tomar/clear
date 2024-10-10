import Layout from '../../../../components/layout';
import BannerThirdLevelCaseStudy from '../components/BannerThirdLevelCaseStudy.jsx'
// import BladeWithImageGrid from '../components/BladeWithImageGride.jsx'
import BrandeWIthImageGridLite from '../components/BladeWithImageGridLite.jsx'
import BannerFooterCta from '../components/BannerFooterCta.jsx'
import BrandedBlade from '../components/BrandedBlade.jsx'
import ImageGrid from '../components/ImageGrid.jsx'
import Introduction from '../components/Introduction.jsx'
import LogoWithContent from '../components/LogoWithContent.jsx'
import Redirect from '../components/Redirect.jsx'
import FooterCta from '../components/FooterCta.jsx'
import { NextSeo } from 'next-seo';

import { heroBanner, imageBlade, bannerFooter, brandedblade, imageGrid, brandedbladeVersion, introduction, logoWithContent, redirect, footerCta } from './data.js'

export default function Index() {

  return (
    <Layout>
      <NextSeo
          title="Ace Metrix: An impactful redesign to boost engagement"
          description="Ace Metrix provides qualitative and quantitative assessment of video advertising for companies and creative agencies."  
      />
      <BannerThirdLevelCaseStudy content={heroBanner} />
      <BrandeWIthImageGridLite content={imageBlade} pd={'no-padding'}/>
      {/* <BannerFooterCta content={bannerFooter} /> */}
      <BrandedBlade content={brandedblade} pd={'no-padding'}/>
      <ImageGrid content={imageGrid} />
	    <BrandedBlade content={brandedbladeVersion} pd={'no-padding'} />
      <Introduction content={introduction} />
      <LogoWithContent content={logoWithContent} />
      <Redirect content={redirect} />
      <FooterCta content={footerCta} />
    </Layout>
  )
}
