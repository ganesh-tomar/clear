import Layout from '../../../../components/layout';
import BannerThirdLevelCaseStudy from '../components/BannerThirdLevelCaseStudy.jsx'
// import BladeWithImageGrid from '../components/BladeWithImageGride.jsx'
import BrandeWIthImageGridLite from '../components/BladeWithImageGridLite.jsx'
import Newsblade from '../components/NewsBlade.jsx';
import BrandedBlade from '../components/BrandedBlade.jsx'
import ImageGrid from '../components/ImageGrid.jsx'
import Introduction from '../components/Introduction.jsx'
import LogoWithContent from '../components/LogoWithContent.jsx'
import Redirect from '../components/Redirect.jsx'
import FooterCta from '../components/FooterCta.jsx'
import { NextSeo } from 'next-seo';

import { heroBanner, imageBlade, newsBlade, imageGrid, brandedblade, introduction, logoWithContent, redirect, footerCta } from './data.js'

export default function Index() {

  return (
    <Layout>
       <NextSeo
                title="Digimarc: Product Di.aigitization Solutions"
                description="Digimarc provides groundbreaking product digitization solutions that help top brands fight counterfeiting,"  
            />
      <BannerThirdLevelCaseStudy content={heroBanner} />
      {/* <BladeWithImageGrid content={imageBlade} /> */}
      <BrandeWIthImageGridLite content={imageBlade}  />
      <Newsblade content={newsBlade} />
      <ImageGrid content={imageGrid} />
      <BrandedBlade content={brandedblade} pd={'no-padding'} />
      <Introduction content={introduction} />
      <LogoWithContent content={logoWithContent} />
      <Redirect content={redirect} />
      <FooterCta content={footerCta} />
    </Layout>
  )
}
