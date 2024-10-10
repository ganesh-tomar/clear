import { NextSeo } from 'next-seo';
import Layout from '../../../components/layout';
import BannerThirdLevel1 from '../../../components/BannerThirdLevel1';
import Cta from '../../../components/ctaoverlay';
import ColTwoImageSlider from '../../../components/ColTwoImageSlider';
import ColTwoSlider from '../../../components/colTwoSlider';
import Imagewithcontent from '../../../components/Imagewithcontent';
import Introwithcards from '../../../components/introwithcards';
import FooterCta from '../../../components/Footercta';
import ContentGrid from '../../../components/ContentGrid';
import Logowithcontent from '../../../components/logowithcontent';
import TabSlider from '../../../components/TabSlider';

export default function casestudiesdetail({ menuItems }) {
    const slides = [
        {
            heading: 'Aenean aliquet malesuada quam et placerat. Suspendiss pellentes. Interdum et <span class="text-pink"> malesuada </span> fames ac ante ipsum primis in. Lorem ipsum dolor sit amet consectetur. Ut consectetur proin mattis et id quam cras gravida. Ipsum ante purus.',
            prefix: '$',
            count: '20',
            denotation: 'M',
            subText: 'Lorem ipsum dolor',
            subDescription: 'Lorem ipsum dolor sit amet consectetur amet pretium amet in mus quis',
            logo: '/Vocera_Logo_White.svg',
            author: 'Jane Doe,',
            designation: 'CEO',
            btnClass: 'whiteBtn',
            btnText: 'View Case Study',
            btnUrl: '/'
        },
    ];
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
            hiddenurl:'/',
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
            hiddenurl:'/',
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
            hiddenurl:'/',
            redirect: true,
        }
    ];
    return (
        <Layout footerMenu={menuItems}>
            <NextSeo
                title="Industry Detail"
                description="ClearDigital"
            />
            <BannerThirdLevel1 content={'industry'} pSize="medium" max="max" />
            <ContentGrid introName="industry" cards="driving" Logo={true}  pb={'none'} min={'full'} defaultpadding={true} />
            <Imagewithcontent contentname={'industry'} />
            <Cta contentName={'industry'} redesign={true} pLite='true' />
            <Logowithcontent contentName="threecards" />
            <ColTwoSlider data={slides} />
            {/* <TabSlider /> */}
            <ColTwoImageSlider data={insightSliderData} bgColor="bg-white" contentName="home" />
            <Introwithcards contentname={'threecard'} />
            <FooterCta form={true} />
        </Layout>
    )
}