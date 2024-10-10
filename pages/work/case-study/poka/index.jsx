import Layout from '../../../../components/layout';
import BannerThirdLevelCaseStudy from '../components/BannerThirdLevelCaseStudy.jsx'
// import BladeWithImageGrid from '../components/BladeWithImageGride.jsx'
import BrandeWIthImageGridLite from '../components/BladeWithImageGridLite.jsx'
import BrandedBlade from '../components/BrandedBlade.jsx'
import BrandedBlade3 from '../components/BrandedBlade3.jsx'
import ImageGrid from '../components/ImageGrid.jsx'
import Introduction from '../components/Introduction.jsx'
import LogoWithContent from '../components/LogoWithContent.jsx'
import Redirect from '../components/Redirect.jsx'
import FooterCta from '../components/FooterCta.jsx'
import { NextSeo } from 'next-seo';

import { heroBanner, imageBlade, imageGrid, imageGridVersion, brandedblade,  introduction, logoWithContent, redirect, footerCta } from './data.js'

export default function Index() {

  return (
    <Layout>
        <NextSeo
            title="Poka: Adding up the ROI benefits."
            description="Poka offers a connected platform that empowers frontline manufacturing workers to share knowledge and find answers on the shop floor."  
        />
        <BannerThirdLevelCaseStudy content={heroBanner} />
        {/* <BladeWithImageGrid content={imageBlade} /> */}
        <BrandeWIthImageGridLite content={imageBlade} />
        <ImageGrid content={imageGrid} />
        <ImageGrid content={imageGridVersion} />
        {/* <BrandedBlade content={brandedblade} pd={'no-padding'} /> */}
        <BrandedBlade3 content={brandedblade} pd={'no-padding'} />
        <Introduction content={introduction} />
        <LogoWithContent content={logoWithContent} />
        <Redirect content={redirect} />
        <FooterCta content={footerCta} />
    </Layout>
  )
}
