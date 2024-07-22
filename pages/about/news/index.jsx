import { NextSeo } from 'next-seo';
import Layout from '../../../components/layout';
import Banner from '../../../components/insightBanner';
import NewsCards from '../../../components/NewsCards';
import Newsfilter from '../../../components/newsfilter';
import FooterCta from '../../../components/Footercta';

export default function Partners({ menuItems }) {
    return (
        <Layout footerMenu={menuItems} isDark={true}>
            <NextSeo
                title="News"
                description="ClearDigital"
            />
            <Banner/>
            <NewsCards contentname="news" />
            <Newsfilter/>
            <FooterCta  miniform={true} bgImage={'/section/FooterCta/office-img-with-dog.png'} subTitle={'Ready to get to work?'}/>
        </Layout>
    )
}