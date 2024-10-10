import { NextSeo } from 'next-seo';
import Layout from '../../../components/layout';
import BannerThirdLevel1 from '../../../components/BannerThirdLevel1'
import FooterCta from '../../../components/Footercta';
import Timeline from '../../../components/Timeline';

export default function casestudiesdetail({ menuItems }) {

    return (
        <Layout footerMenu={menuItems} theme={'white'}>
            <NextSeo
                title="History"
                description="ClearDigital"
            />
             <BannerThirdLevel1 content={'history'} psize="medium" max="max" /> 
            <Timeline />
            <FooterCta bgImage={'/section/FooterCta/office-img-with-dog.png'} subTitle={'Ready to get to work?'}/>
        </Layout>
    )
}