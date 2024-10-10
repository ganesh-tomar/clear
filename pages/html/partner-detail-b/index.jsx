import { NextSeo } from 'next-seo';
import Layout from '../../../components/layout';
import BannerThirdLevel1 from '../../../components/BannerThirdLevel1';
import Imagewithcontent from '../../../components/Imagewithcontent';
import Introduction from '../../../components/introduction';
import Logowithcontent from '../../../components/logowithcontent';
import FooterCta from '../../../components/Footercta';


export default function InsightsIndex({ menuItems }) {
    return (
        <Layout footerMenu={menuItems}>
            <NextSeo
                title="Partner Detail B"
                description=""
            />
            <BannerThirdLevel1 content={'partner-detail-a'} />
            <Imagewithcontent contentname={'partnerDetailA'} reverse={true} />
            <Introduction introname='partnerDetailA'  borderTop={true}/>
            <Logowithcontent contentName='onecard' />
            <FooterCta />
        </Layout>
    )
}