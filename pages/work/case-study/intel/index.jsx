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

import { heroBanner, imageBlade, brandedbladeVersion, brandedblade, imageGrid, imageGridVersion, introduction, logoWithContent, redirect, footerCta } from './data.js'

export default function Index() {

  return (
    <Layout>
                          <NextSeo
                title="Intel Security: Enriching digital experiences."
                description="When tech giant Intel created their Intel Security division by acquiring security leader McAfee,"
            />
      <BannerThirdLevelCaseStudy content={heroBanner} />
      {/* <BladeWithImageGrid content={imageBlade} /> */}
      <BrandeWIthImageGridLite content={imageBlade} />
      {/* <BrandedBlade content={brandedbladeVersion} pd={'no-padding'} /> */}
      <BrandedBlade content={brandedblade} pd={'no-padding'} />
      <ImageGrid content={imageGrid} />
      <ImageGrid content={imageGridVersion} />
      <Introduction content={introduction} />
      <LogoWithContent content={logoWithContent} />
      <Redirect content={redirect} />
      <FooterCta content={footerCta} />
    </Layout>
  )
}
