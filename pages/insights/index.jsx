import { NextSeo } from 'next-seo';
import Layout from '../../components/layout';
import Banner from '../../components/insightBanner';
import FooterCta from '../../components/Footercta';
import InsightLanding from '../../components/InsightLanding';

export default function InsightsIndex({ menuItems }) {
    const isDark = true;
    return (
        <Layout footerMenu={menuItems} theme={'black'} isDark={isDark}>
            <NextSeo
                title="Insights Index"
                description=""
            />
            <Banner slider={true} />
            <InsightLanding />
            <FooterCta />
        </Layout>
    )
}