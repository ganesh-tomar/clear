import Layout from '../../../../components/layout';
import BannerThirdLevelCaseStudy from '../components/BannerThirdLevelCaseStudy.jsx'
// import BladeWithImageGrid from '../components/BladeWithImageGride.jsx'
import BrandeWIthImageGridLite from '../components/BladeWithImageGridLite.jsx'
import BrandedBlade from '../components/BrandedBlade.jsx'
import ColThreeImage from '../components/ColThreeImage.jsx'
import ImageGrid from '../components/ImageGrid.jsx'
import Introduction from '../components/Introduction.jsx'
import LogoWithContent from '../components/LogoWithContent.jsx'
import Redirect from '../components/Redirect.jsx'
import FooterCta from '../components/FooterCta.jsx'
import { NextSeo } from 'next-seo';

import { heroBanner, imageBlade, imageGrid, brandedblade, colThreeImage, brandedbladeVersion, brandedbladeVersionTwo, introduction, logoWithContent, redirect, footerCta } from './data.js'

export default function Index() {

  return (
    <Layout>
                 <NextSeo
                title="H2O: Intelligent design for leading AI provider"
                description="When leading Al firm H2O.ai needed to revamp its brand,"  
            />
      <BannerThirdLevelCaseStudy content={heroBanner} />
      {/* <BladeWithImageGrid content={imageBlade} /> */}
      <BrandeWIthImageGridLite content={imageBlade} />
      {/* <BrandedBlade content={brandedblade} /> */}
      <ColThreeImage content={colThreeImage} />
      <BrandedBlade content={brandedbladeVersion} pd={'no-padding'} />
      <BrandedBlade content={brandedbladeVersionTwo} pd={'no-padding'} />
      <ImageGrid content={imageGrid} />
      <Introduction content={introduction} />
      <LogoWithContent content={logoWithContent} />
      <Redirect content={redirect} />
      <FooterCta content={footerCta} />
    </Layout>
  )
}
