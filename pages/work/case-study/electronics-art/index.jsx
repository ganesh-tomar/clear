import Layout from '../../../../components/layout';
import BannerThirdLevelCaseStudy from '../components/BannerThirdLevelCaseStudy.jsx'
import BladeWithImageGrid from '../components/BladeWithImageGride.jsx'
import BrandedBlade from '../components/BrandedBlade.jsx'
import ImageGrid from '../components/ImageGrid.jsx'
import Introduction from '../components/Introduction.jsx'
import LogoWithContent from '../components/LogoWithContent.jsx'
import Redirect from '../components/Redirect.jsx'
import FooterCta from '../components/FooterCta.jsx'
import { NextSeo } from 'next-seo';

import { heroBanner, imageBlade, imageGrid, brandedblade, brandedbladeVersion, introduction, logoWithContent, redirect, footerCta } from './data.js'

export default function Index() {

  return (
    <Layout>
         <NextSeo
                title="EA: Custom branded event management system."
                description="Electronic Arts is a leading global interactive entertainment software company. "  
            />
      <BannerThirdLevelCaseStudy content={heroBanner} />
      <BladeWithImageGrid content={imageBlade} />
      <ImageGrid content={imageGrid} />
      <BrandedBlade content={brandedblade} />
      <BrandedBlade content={brandedbladeVersion} />
      <Introduction content={introduction} />
      <LogoWithContent content={logoWithContent} />
      <Redirect content={redirect} />
      <FooterCta content={footerCta} />
    </Layout>
  )
}
