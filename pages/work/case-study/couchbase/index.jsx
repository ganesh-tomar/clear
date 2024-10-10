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
                title="Couchbase: Powering extroodinary customer engagement"
                description="Couchbase helps some of the world's largest enterprises deliver extraordinary digital experiences by powering the fastest Big Data streaming."  
            />
      <BannerThirdLevelCaseStudy content={heroBanner} />
      {/* <BladeWithImageGrid content={imageBlade} /> */}
      <BrandeWIthImageGridLite content={imageBlade} />
      <ImageGrid content={imageGrid}  />
      <BrandedBlade content={brandedblade} pd={'no-padding'} />
      <Introduction content={introduction} />
      <LogoWithContent content={logoWithContent} />
      <Redirect content={redirect} />
      <FooterCta content={footerCta} />
    </Layout>
  )
}
