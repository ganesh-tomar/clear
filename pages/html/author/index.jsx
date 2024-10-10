import { NextSeo } from 'next-seo';
import Layout from '../../../components/layout';
import AuthorBanner from '../../../components/AuthorBanner';
import FooterCta from '../../../components/Footercta';
import ArticlesGrid from '../../../components/ArticlesGrid';

export default function articlesIndex({ menuItems }) {
    const isDark = true;
    return (
        <Layout footerMenu={menuItems} theme={'black'} isDark={isDark}>
            <NextSeo
                title="Author Index"
                description=""
            />
            <AuthorBanner contentname={'data'}/>
            <ArticlesGrid />
            <FooterCta />
            
        </Layout>
    )
}