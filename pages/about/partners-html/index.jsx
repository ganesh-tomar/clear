import { NextSeo } from 'next-seo';
import Layout from '../../../components/layout';
import BannerThirdLevel1 from '../../../components/BannerThirdLevel1';
import ContentGrid from '../../../components/ContentGrid';
import ColThreewithIntro from '../../../components/ColThreeWithIntro';
import LinkWrapper from '../../../components/LinkWrapper';
import FooterCta from '../../../components/Footercta';

export default function Partners({ menuItems }) {
    return (
        <Layout footerMenu={menuItems}>
            <NextSeo
                title="Partners"
                description="ClearDigital"
            />
            <BannerThirdLevel1 content={'Partners'} psize="medium" max="max" />
            <ContentGrid introName="Partners" cards="driving" min={'full'} />
            <ColThreewithIntro/>
            <LinkWrapper/>
            <FooterCta bgImage={'/section/FooterCta/office-img-with-dog.png'} subTitle={'Ready to get to work?'}/>
        </Layout>
    )
}