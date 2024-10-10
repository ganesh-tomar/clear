import { NextSeo } from 'next-seo';
import Layout from '../../../components/layout';
import BannerSecond from '../../../components/BannerSecondlevel';
import ContentGrid from '../../../components/ContentGridserviceDetail';
import ColTwoImageSlider from '../../../components/ColTwoImageSlider'
import Logowithcontent from '../../../components/logowithcontent';
import FooterCta from '../../../components/Footercta';
import AccordionWithMedia from '../../../components/AccordionWithMedia'
import Introduction from '../../../components/introduction';
// import CardGrid from "../../components/CardGrid"
import Grid from '../../../components/Grids'

export default function serviceDetail({ menuItems }) {
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
                title="Service Detail"
                description="ClearDigital"
            />
            <BannerSecond content='serviceDetail' />
            <ContentGrid underlineColor='black' />
            {/* <AccordionWithMedia /> */}
            <Logowithcontent contentName="threecards" />
            <Introduction introname='serviceDetail' gridframe={true} />
            <Grid content={'serviceDetail'} marquee={false} pt="no-padding-top" />
            <ColTwoImageSlider data={insightSliderData} bgColor="bg-gray" contentName="home" />
            <FooterCta />
        </Layout>
    )
}
