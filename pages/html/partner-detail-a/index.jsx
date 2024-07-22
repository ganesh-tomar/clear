import { NextSeo } from 'next-seo';
import Layout from '../../../components/layout';
import BannerThirdLevel1 from '../../../components/BannerThirdLevel1';
import Imagewithcontent from '../../../components/Imagewithcontent';
import Introduction from '../../../components/introduction';
import Logowithcontent from '../../../components/logowithcontent';
import ColTwoImageSlider from '../../../components/ColTwoImageSlider'
import FooterCta from '../../../components/Footercta';


export default function InsightsIndex({ menuItems }) {
    const insightSliderData = [
        {
            imageSrc: '/insight_card.png',
            heading: 'Ensure Your Brand’s Direction by Auditing These 5 Key Areas of Your B2B Digital Strategy',
            subText: '',
            url: '/',
            linkText: '',
            categories: ['Article', 'Digital Strategy',],
            medium: 'By Steve Ohanians on June 29, 2023',
            hiddenlink: 'Read more',
            hiddenurl: '/',
            redirect: true,
        },
        {
            imageSrc: '/insight_card.png',
            heading: '5 Strategies Your B2B Company Should Apply to Weather a Tough Economy',
            subText: '',
            url: '/',
            linkText: '',
            categories: ['Article', 'Digital Strategy',],
            medium: 'By Steve Ohanians on June 29, 2023',
            hiddenlink: 'Read more',
            hiddenurl: '/',
            redirect: true,
        },
        {
            imageSrc: '/insight_card.png',
            heading: 'Ensure Your Brand’s Direction by Auditing These 5 Key Areas of Your B2B Digital Strategy',
            subText: '',
            url: '/',
            linkText: '',
            categories: '',
            medium: 'By Steve Ohanians on June 29, 2023',
            hiddenlink: 'Read more',
            hiddenurl: '/',
            redirect: true,
        }
    ];
    return (
        <Layout footerMenu={menuItems}>
            <NextSeo
                title="Partner Detail A"
                description=""
            />
            <BannerThirdLevel1 content={'partner-detail-a'} logoSlider={true} />
            <Imagewithcontent contentname={'partnerDetailA'} reverse={true} />
            <Introduction introname='partnerDetailA' borderTop={true}/>
            <Logowithcontent contentName='twocards' borderB={false}/>
            <ColTwoImageSlider data={insightSliderData} bgColor="bg-gray" featuredLogos={false} contentName="partnerDetail" />
            <FooterCta />
        </Layout>
    )
}