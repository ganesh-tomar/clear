import Layout from '../../../../components/layout';
import BannerThirdLevelCaseStudy from '../components/BannerThirdLevelCaseStudy.jsx'
// import BladeWithImageGrid from '../components/BladeWithImageGride.jsx'
import BrandeWIthImageGridLite from '../components/BladeWithImageGridLite.jsx'
import ImageGrid from '../components/ImageGrid.jsx'
import BrandedBlade from '../components/BrandedBlade.jsx'
import BrandedBlade3 from '../components/BrandedBlade3.jsx'
import Introduction from '../components/Introduction.jsx'
import LogoWithContent from '../components/LogoWithContent.jsx'
import Redirect from '../components/Redirect.jsx'
import FooterCta from '../components/FooterCta.jsx'
import { NextSeo } from 'next-seo';

import { heroBanner, imageGridVersion, imageBlade, imageGrid, brandedblade, introduction, logoWithContent, redirect, footerCta } from './data.js'

export default function Index() {

  return (
    <Layout>
                            <NextSeo
                title="Hortonworks: Website Redesign and Brand Launch. "
                description="Hortonworks, a leader in big data management, chose their website as the best way to launch their new visual brand,"  
            />
      <BannerThirdLevelCaseStudy content={heroBanner} />
      <BrandeWIthImageGridLite content={imageBlade} />
      {/* <ImageGrid content={imageGridVersion} /> */}
      <ImageGrid content={imageGrid} />
      {/* <BrandedBlade content={brandedblade} pd={'no-padding'} /> */}
      <BrandedBlade3 content={brandedblade} pd={'no-padding'} />
      <Introduction content={introduction} />
      <LogoWithContent content={logoWithContent} />
      <Redirect content={redirect} />
      <FooterCta content={footerCta} />
    </Layout>
  )
}
