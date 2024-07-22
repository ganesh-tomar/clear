import { NextSeo } from 'next-seo';
import Layout from '../../../components/layout';
import BannerSecond from '../../../components/BannerSecondlevel';
import Imagewithcontent from '../../../components/Imagewithcontent';
import LogoWithDetail from '../../../components/LogoWithDetail';
import ColTwoImageSlider from '../../../components/ColTwoImageSlider'
import FooterCta from '../../../components/Footercta';
// import Dummy from '../../components/dummy';

export default function Approach({ menuItems }) {
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
            <NextSeo title="Approach" description="ClearDigital" />
            <BannerSecond content='approach' />
            <Imagewithcontent contentname={'approach'} reverse={true} />
            <LogoWithDetail contentname={'approach'} pb='pb-0' pt='pt-0'/>
            <ColTwoImageSlider data={insightSliderData} bgColor="bg-gray" contentName="home" />
            <FooterCta />
            {/* <Dummy/> */}
        </Layout>
    );
}
