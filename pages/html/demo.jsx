import { NextSeo } from 'next-seo';
import Layout from '../../components/layout';
import FooterCta from '../../components/Footercta';
import HomepageHero from '../../components/HomepageHero';
export default function Home() {

    return (
        <Layout>
            <NextSeo
                title="ClearDigital"
                description="ClearDigital "
            />
            <HomepageHero />
            <FooterCta />
        </Layout>
    )
}
