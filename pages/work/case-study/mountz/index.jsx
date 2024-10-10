import Layout from '../../../../components/layout';
import BannerThirdLevelCaseStudy from '../components/BannerThirdLevelCaseStudy.jsx'
// import BladeWithImageGrid from '../components/BladeWithImageGride.jsx'\
import BrandeWIthImageGridLite from '../components/BladeWithImageGridLite.jsx'
import BrandedBlade from '../components/BrandedBlade.jsx'
import ImageGrid from '../components/ImageGrid.jsx'
import Introduction from '../components/Introduction.jsx'
import LogoWithContent from '../components/LogoWithContent.jsx'
import Redirect from '../components/Redirect.jsx'
import FooterCta from '../components/FooterCta.jsx'
import { NextSeo } from 'next-seo';

import { heroBanner, imageBlade, brandedbladeOne, imageGrid, brandedblade, brandedbladeVersion, introduction, logoWithContent, redirect, footerCta } from './data.js'

export default function Index() {

  return (
    <Layout>
            <NextSeo
                title="Mountz: Torque Tools engineered in Silicon Valley"
                description="When Mountz, Inc., The Torque Tool Specialists came to Clear Digital wanting to develop a visual brand that better reflected their leadership in the torque market and their Silicon Valley heritage, we were ready."  
            />
      <BannerThirdLevelCaseStudy content={heroBanner} />
      {/* <BladeWithImageGrid content={imageBlade} /> */}
      <BrandeWIthImageGridLite content={imageBlade} />
      {/* <BrandedBlade content={brandedbladeOne} pd={'no-padding'} /> */}
      <ImageGrid content={imageGrid} />
      <BrandedBlade content={brandedblade} pd={'no-padding'} />
	    <BrandedBlade content={brandedbladeVersion} pd={'no-padding'} />
      <Introduction content={introduction} />
      <LogoWithContent content={logoWithContent} />
      <Redirect content={redirect} />
      <FooterCta content={footerCta} />
    </Layout>
  )
}
