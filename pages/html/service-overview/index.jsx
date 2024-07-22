import { NextSeo } from 'next-seo';
import Layout from '../../../components/layout';
import BannerSecond from '../../../components/BannerSecondlevel';
import Sticky from '../../../components/sticky2'
import Cta from '../../../components/ctaoverlay';
import FooterCta from '../../../components/Footercta';
import Accordion from '../../../components/Accordion'
import LogoSlider from '../../../components/LogoSlider';
import ColTwoSlider from '../../../components/colTwoSlider';
import Grid from '../../../components/Grids';
import ScrollTxt from '../../../components/ScrollTxt';
import ImageBlock from '../../../components/ImageBlock';
import Intro from '../../../components/Intro';

export default function serviceOverview({ menuItems }) {
    const slides = [
        {
            imageSrc: '/hex.jpg',
            heading: 'Aenean aliquet malesuada quam et placerat. Suspendiss pellentes. Interdum et <span class="text-pink"> malesuada </span> fames ac ante ipsum primis in. Lorem ipsum dolor sit amet consectetur. Ut consectetur proin mattis et id quam cras gravida. Ipsum ante purus.',
            logo: '/Vocera_Logo_White.svg',
            author: 'Jane Doe,',
            designation: 'CEO',
            btnText: 'View Case Study',
            btnUrl: '/'
        },
        {
            heading: 'Aenean aliquet malesuada quam et placerat. Suspendiss pellentes. Interdum et <span class="text-pink"> malesuada </span> fames ac ante ipsum primis in. Lorem ipsum dolor sit amet consectetur. Ut consectetur proin mattis et id quam cras gravida. Ipsum ante purus.',
            prefix: '$',
            count: '113',
            denotation: '%',
            subText: 'Lorem ipsum dolor.',
            subDescription: 'Lorem ipsum dolor sit amet consectetur amet pretium amet in mus quis',
            logo: '/Vocera_Logo_White.svg',
            author: 'Jane Doe,',
            designation: 'CEO',
            btnText: 'View Case Study',
            btnUrl: '/'
        },
        {
            heading: 'Aenean aliquet malesuada quam et placerat. Suspendiss pellentes. Interdum et <span class="text-pink"> malesuada </span> fames ac ante ipsum primis in. Lorem ipsum dolor sit amet consectetur. Ut consectetur proin mattis et id quam cras gravida. Ipsum ante purus.',
            logo: '/Vocera_Logo_White.svg',
            author: 'Jane Doe,',
            designation: 'CEO',
            btnText: 'View Case Study',
            btnUrl: '/'
        }
    ];
    const foundation = {
        normaltext: 'Strategic Branding & Positioning',
        subText:
            'Lorem ipsum dolor sit amet consectetur. Molestie quisque eget vitae sed arcu. Ipsum urna proin erat quis. Integer elementum risus integer non. Massa hac velit non etiam quis.',
        doodle: true,
        doodleClass: 'foundationDoodle'
    };
    const expression = {
        normaltext: 'Digital Experiences & Creative',
        subText:
            'Lorem ipsum dolor sit amet consectetur. Molestie quisque eget vitae sed arcu. Ipsum urna proin erat quis. Integer elementum risus integer non. Massa hac velit non etiam quis.',
        doodle: true,
        doodleClass: 'expressionDoodle'
    };
    const integration = {
        normaltext: 'Technology Infrastructure & Support',
        subText:
            'Lorem ipsum dolor sit amet consectetur. Molestie quisque eget vitae sed arcu. Ipsum urna proin erat quis. Integer elementum risus integer non. Massa hac velit non etiam quis.',
        doodle: true,
        doodleClass: 'integrationDoodle'
    };
    return (
        <Layout footerMenu={menuItems}>
            <NextSeo
                title="Services"
                description="ClearDigital"
            />
            <BannerSecond content='serviceOverview' />
            <Sticky />
            <ScrollTxt />
            <ImageBlock />
            <section className="introduction grid__parallax dark padding-small-bottom" id='foundation'>
                <div className="container">
                    <Intro {...foundation} titleMaxW={'max-w-[72rem]'} />
                </div>
            </section>
            <Grid content={'foundation'} marquee={false} pt={'no-padding'} />
            <section className="introduction grid__parallax dark padding-small" id='expression'>
                <div className="container">
                    <Intro {...expression} titleMaxW={'max-w-[72rem]'} />
                </div>
            </section>
            <Grid content={'expression'} marquee={false} pt={'no-padding'} />
            <section className="introduction grid__parallax dark padding-small" id='integration'>
                <div className="container">
                    <Intro {...integration} titleMaxW={'max-w-[98rem]'} />
                </div>
            </section>
            <Grid content={'integration'} marquee={false} pt={'no-padding-top'} />
            <Cta heading={true} />
            <ColTwoSlider data={slides} pb={'none'} />
            <LogoSlider contentname={'data'} />
            <Accordion />
            <FooterCta />

        </Layout>
    )
}
