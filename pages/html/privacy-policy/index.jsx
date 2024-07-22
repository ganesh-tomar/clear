import { NextSeo } from 'next-seo';
import Layout from '../../../components/layout';
import PrivacyPolicy from '../../../components/PrivacyPolicyContent';

export default function Partners({ menuItems }) {
    return (
        <Layout footerMenu={menuItems} isDark={true}>
            <NextSeo
                title="Privacy Policy"
                description="ClearDigital"
            />
            <PrivacyPolicy />
        </Layout>
    )
}