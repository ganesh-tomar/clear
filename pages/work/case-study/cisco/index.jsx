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

import { heroBanner, imageBlade, brandedbladeVersionFourth, brandedblade, imageGrid, brandedbladeVersion, introduction, logoWithContent, redirect, footerCta } from './data.js'

export default function Index() {

  return (
    <Layout>
       <NextSeo
                title="Cisco: DNA for Mobility launch campaign"
                description="When IT and networking leader Cisco launched their new Digital Networking Architecture (DNA) software-defined network (SD-WAN) solution,"  
            />
      <BannerThirdLevelCaseStudy content={heroBanner} />
      <BrandeWIthImageGridLite content={imageBlade} />
      {/* <BrandedBlade content={brandedbladeVersionFourth} pd={'no-padding'} /> */}
      <BrandedBlade content={brandedblade} pd={'no-padding'} />
      <ImageGrid content={imageGrid} />
	    <BrandedBlade content={brandedbladeVersion} pd={'no-padding'} />
      <Introduction content={introduction} />
      <LogoWithContent content={logoWithContent} />
      <Redirect content={redirect} />
      <FooterCta content={footerCta} />
    </Layout>
  )
}
