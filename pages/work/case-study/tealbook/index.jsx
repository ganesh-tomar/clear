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

import { heroBanner, imageBlade, imageGrid, brandedblade, brandedbladeVersion, brandedbladeVersionTwo,  introduction, logoWithContent, redirect, footerCta } from './data.js'

export default function Index() {

  return (
    <Layout>
      	      <NextSeo
                title="Tealbook: Making Supplier Data a Competitive Advantage"
                description="As an innovator in supplier data, TealBook found itself ready to take its business and its brand to the next level. "  
            />
      <BannerThirdLevelCaseStudy content={heroBanner} />
      <BrandeWIthImageGridLite content={imageBlade} />
      <BrandedBlade content={brandedblade} pd={'no-padding'} />
      <ImageGrid content={imageGrid} />
      <BrandedBlade content={brandedbladeVersion} pd={'no-padding'} />
      <BrandedBlade content={brandedbladeVersionTwo} pd={'no-padding'} />
      <Introduction content={introduction} />
      <LogoWithContent content={logoWithContent} />
      <Redirect content={redirect} />
      <FooterCta content={footerCta} />
    </Layout>
  )
}
