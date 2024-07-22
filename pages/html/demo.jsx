import { NextSeo } from 'next-seo';
import Layout from '../../components/layout';
import FooterCta from '../../components/Footercta';
import HomepageHero from '../../components/HomepageHero';
import Demo from '../../components/Demo';
export default function Home() {

    return (
        <Layout>
            <NextSeo
                title="ClearDigital"
                description="ClearDigital "
            />
            <HomepageHero />
            <Demo/>
            <FooterCta />
        </Layout>
    )
}
