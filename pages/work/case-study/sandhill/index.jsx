import Layout from '../../../../components/layout.jsx';
import BannerThirdLevelCaseStudy from '../components/BannerThirdLevelCaseStudy.jsx'
// import BladeWithImageGrid from '../components/BladeWithImageGride.jsx'
import BrandeWIthImageGridLite from '../components/BladeWithImageGridLite.jsx'
import BrandedBlade from '../components/BrandedBlade.jsx'
import ImageGrid from '../components/ImageGrid.jsx'
import Introduction from '../components/Introduction.jsx'
import LogoWithContent from '../components/LogoWithContent.jsx'
import Redirect from '../components/Redirect.jsx'
import FooterCta from '../components/FooterCta.jsx'
import InfographicSlider from '../components/InfographicSlider.jsx';
import { NextSeo } from 'next-seo';

import { heroBanner, imageBlade, imageGrid, brandedblade, brandedbladeVersion, introduction, logoWithContent, redirect, footerCta, infographicSlider } from './data.js'

export default function Index() {

  return (
    <Layout>
              <NextSeo
                title="Sand Hill: Refreshing Silicon Valley Wealth Management"
                description="When Sand Hill Global Advisors wanted to update its brand and digital presence,"  
            />
      <BannerThirdLevelCaseStudy content={heroBanner} />
      {/* <BladeWithImageGrid content={imageBlade} /> */}
      <BrandeWIthImageGridLite content={imageBlade} />
      <ImageGrid content={imageGrid} />
      <InfographicSlider content={infographicSlider}/>
      <BrandedBlade content={brandedblade} pd={'no-padding'} />
	    <BrandedBlade content={brandedbladeVersion} pd={'no-padding'} />
      <Introduction content={introduction} />
      <LogoWithContent content={logoWithContent} />
      <Redirect content={redirect} />
      <FooterCta content={footerCta} />
     
    </Layout>
  )
}
