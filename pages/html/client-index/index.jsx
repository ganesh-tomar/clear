import { NextSeo } from 'next-seo';
import Layout from '../../../components/layout';
import BannerThirdLevel1 from '../../../components/BannerThirdLevel1';
import Filter from '../../../components/filter';
import FooterCta from '../../../components/Footercta';
import ContentGrid from '../../../components/contentGriddetail'

export default function casestudiesdetail({ menuItems }) {

    return (
        <Layout footerMenu={menuItems}>
            <NextSeo
                title="Client Index"
                description="ClearDigital"
            />
            <BannerThirdLevel1 content={'clientindex'} logoSlider={true} />
            <ContentGrid introname="clientindex" contentName="count" logosIcon='true' />
            <Filter />
            <FooterCta />
        </Layout>
    )
}