import Layout from '../../../../components/layout';
import BannerThirdLevelCaseStudy from '../components/BannerThirdLevelCaseStudy.jsx'
// import BladeWithImageGrid from '../components/BladeWithImageGride.jsx'
import BrandeWIthImageGridLite from '../components/BladeWithImageGridLite.jsx'
import BannerFoother from '../components/BannerFooterCta.jsx'
import BrandedBlade from '../components/BrandedBlade.jsx'
import ImageGrid from '../components/ImageGrid.jsx'
import Introduction from '../components/Introduction.jsx'
import LogoWithContent from '../components/LogoWithContent.jsx'
import Redirect from '../components/Redirect.jsx'
import FooterCta from '../components/FooterCta.jsx'
import { NextSeo } from 'next-seo';

import { heroBanner, imageBlade, bannerFooter, imageGrid, brandedblade, brandedbladeVersion, imageGridVersion, introduction, logoWithContent, redirect, footerCta } from './data.js'

export default function Index() {

  return (
    <Layout>
        <NextSeo
                title="Surescripts: Leading the Way in Medical"
                description="As a company dedicated to making healthcare better for all, Surescripts plays an essential role in a vital market."  
            />
      <BannerThirdLevelCaseStudy content={heroBanner} />
      <BrandeWIthImageGridLite content={imageBlade} />
      <BannerFoother content={bannerFooter}/>
      <ImageGrid content={imageGrid} />
      <BrandedBlade content={brandedblade} pd={'no-padding'} />
      <BrandedBlade content={brandedbladeVersion} pd={'no-padding'} />
      <ImageGrid content={imageGridVersion} />
      <Introduction content={introduction} />
      <LogoWithContent content={logoWithContent} />
      <Redirect content={redirect} />
      <FooterCta content={footerCta} />
    </Layout>
  )
}
