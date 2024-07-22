import { NextSeo } from 'next-seo';
import Layout from '../../../components/layout';
import Banner from '../../../components/insightsdetailBanner';
import InsightsContent from '../../../components/InsightsContent';
import RedirectLinks from '../../../components/redirect';
import FooterCta from '../../../components/Footercta';


export default function casestudiesdetail({ menuItems }) {
    return (
        <Layout footerMenu={menuItems}>
            <NextSeo
                title="Insights Detail"
                description="ClearDigital"
            />
            <Banner content={'insights'} />
            <InsightsContent />
            <RedirectLinks props={true} contentname={'insights'} />
            <FooterCta form={true} />
        </Layout>
    )
}