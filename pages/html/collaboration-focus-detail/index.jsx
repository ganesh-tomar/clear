import { NextSeo } from 'next-seo';
import Layout from '../../../components/layout';
import BannerThirdLevel1 from '../../../components/BannerThirdLevel1';
import LogoSlider from '../../../components/LogoSlider';
import Imagewithcontent from '../../../components/Imagewithcontent';
import ContentGrid from '../../../components/ContentGrid';
import ColTwoSlider from '../../../components/colTwoSlider';
import FooterCta from '../../../components/Footercta';
import ColTwoImageSlider from '../../../components/ColTwoImageSlider';
import Cta from '../../../components/ctaoverlay';
import TabSlider from '../../../components/TabSlider';
import Accordion from '../../../components/Accordion'

export default function casestudiesdetailmini({ menuItems }) {
    const intro = {
        eyeBrowText: 'Working at Clear Digital',
        heading:
            'Curabitur malesuada est tempor',
        highLightedText: 'ullamcorper',
        normaltext: 'Elevating. Updating',
        underLineDark: 'dark',
        // hide:true,
        pointer: 'pointer',
        subText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
    };
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
            btnText: 'View Case Study',
            btnUrl: '/'
        },
        {
            imageSrc: '/hex.jpg',
            heading: 'Aenean aliquet malesuada quam et placerat. Suspendisse pellentesque. Interdum et malesuada fames ac ante ipsum primis in.',
            logo: '/cohesity.svg',
            author: 'Jane Doe,',
            designation: 'CEO',
            btnText: 'View Case Study',
            btnUrl: '/'
        },
        {
            heading: 'Aenean aliquet malesuada quam et placerat. Suspendisse pellentesque. Interdum et malesuada fames ac ante ipsum primis in.',
            logo: '/cohesity.svg',
            author: 'Jane Doe,',
            designation: 'CEO',
            btnText: 'View Case Study',
            btnUrl: '/'
        }
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
    const slideone = [
        {
            count: '90',
            post: '%',
            imageSrc: '',
            heading: 'Client retention rate',
            subText: 'Lorem ipsum dolor sit amet consectetur. Blandit consequat egestas nulla amet aliquam dui lacus habitant.',
        },
        {
            pre: '$',
            count: '1',
            post: 'M',
            heading: 'Budget impact',
            subText: 'Lorem ipsum dolor sit amet consectetur. Blandit consequat egestas nulla amet aliquam dui lacus habitant.',
        },
        {
            pre: '$',
            count: '1',
            post: 'M',
            heading: 'Client retention rate',
            subText: 'Lorem ipsum dolor sit amet consectetur. Blandit consequat egestas nulla amet aliquam dui lacus habitant.',
        }
    ];


    return (
        <Layout footerMenu={menuItems}>
            <NextSeo title="Collaboration Focus Detail" description="ClearDigital" />
            <BannerThirdLevel1 content={'collaboration'} pSize="medium" max="max" overlay={true} />
            <ContentGrid introName="collaboration" cards="driving" />
            <Cta heading={true} />
            <Imagewithcontent contentname={'datacollaboration'} />
            <TabSlider />
            <ColTwoImageSlider data={slideone} featuredLogos={false} contentName="collobriaion" />
            <ColTwoSlider data={slides} pb={'none'} />
            <LogoSlider contentname={'data'} />
            <ColTwoImageSlider data={insightSliderData} bgColor="bg-gray" contentName="home" />
            <Accordion />
            <FooterCta />
        </Layout>
    );
}
