import Layout from '../../../../components/layout';
import BannerThirdLevelCaseStudy from '../components/BannerThirdLevelCaseStudy.jsx'
// import BladeWithImageGrid from '../components/BladeWithImageGride.jsx'
import BrandeWIthImageGridLite from '../components/BladeWithImageGridLite.jsx'
import BrandedBlade from '../components/BrandedBlade.jsx'
import ImageGrid from '../components/ImageGrid.jsx'
import Introduction from '../components/Introduction.jsx'
import LogoWithContent from '../components/LogoWithContent.jsx'
import Redirect from '../components/Redirect.jsx'
import FooterCta from '../components/FooterCta.jsx'
import { NextSeo } from 'next-seo';

import { heroBanner, imageBlade, imageGrid, brandedblade, introduction, logoWithContent, redirect, footerCta } from './data.js'

export default function Index() {

  return (
    <Layout>
             <NextSeo
                title="EyeQue: At-home Vision Testing"
                description="Eyeque is on a mission to bring affordable eye care to everyone with its revolutionary at- home vision test and personal vision tracker. "  
            />
      <BannerThirdLevelCaseStudy content={heroBanner} />
      <BrandeWIthImageGridLite content={imageBlade} />
      <BrandedBlade content={brandedblade} pd={'no-padding'} />
      <ImageGrid content={imageGrid} />
      <Introduction content={introduction} />
      <LogoWithContent content={logoWithContent} />
      <Redirect content={redirect} />
      <FooterCta content={footerCta} />
    </Layout>
  )
}
