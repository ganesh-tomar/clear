import { NextSeo } from 'next-seo';
import Layout from '../../../components/layout';
import BannerThirdLevel1 from '../../../components/BannerThirdLevel1';
import ColTwoImageSlider from '../../../components/ColTwoImageSlider';
import ColTwoSlider from '../../../components/colTwoSlider';
import LogoSlider from '../../../components/LogoSlider';
import FooterCta from '../../../components/Footercta';
import Intro from '../../../components/Intro';
import Cta from '../../../components/ctaoverlay';
import Introwithcards from '../../../components/introwithcards';
import StaticsWithContent from '../../../components/StaticsWithContent';

export default function casestudiesdetail({ menuItems }) {
    const intro = {
        eyeBrowText: 'Overview',
        heading:
            'Curabitur malesuada est tempor',
        highLightedText: 'ullamcorper',
        normaltext: ' maximus',
        underlineClass: 'black',
        // hide:true,
        pointer: 'pointer',
        subText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        btnText: 'The Clear Approach',
        btnUrl: '/',
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
            heading: ' Aenean aliquet malesuada quam et placerat. Suspendiss pellentes. Interdum et <span class="text-pink"> malesuada </span> fames ac ante ipsum primis in. Lorem ipsum dolor sit amet consectetur. Ut consectetur proin mattis et id quam cras gravida. Ipsum ante purus.',
            logo: '/cohesity.svg',
            author: 'Jane Doe,',
            designation: 'CEO',
            btnText: 'View Case Study',
            btnUrl: '/'
        }
    ];
    const slidesup = [
        {
            imageSrc: '/Z91_274.png',
            heading: 'Lorem ipsum dolor sit amet consectetur. Nisl cursus viverra nisi massa penatibus varius hendrerit. Rhoncus <span class="text-pink">  enimfames </span> tincidunt sit semper ac amet pharetra. Dignissim bibendum nam malesua enim dictum nam habitasse.',
            author: 'Steve Ohanians,',
            designation: ' CEO and Co-Founder of Clear Digital',
            blackQuote: true,
        },
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
            <NextSeo
                title="Outcome Overview"
                description="ClearDigital"
            />
            <BannerThirdLevel1 content={'outcome'} pSize="medium" max="max" />
            <section className="introduction no-padding-bottom  grid__parallax dark">
                <div className="container">
                    <Intro {...intro} />
                </div>
            </section>
            <StaticsWithContent Name="outcome" />
            <ColTwoSlider data={slidesup} bgColor='bg-white' txt='text-black' parallax={true} md={true} employeeQuote={true}/>
            <ColTwoImageSlider data={slideone} featuredLogos={false} contentName="collobriaion" pt={'none'} />
            <ColTwoSlider data={slides} pb={'none'} />
            <LogoSlider contentname={'data'}/>
            <Cta contentName={'outcome'} subtitle={true} />
            <Introwithcards contentname={'threecard'} />
            <FooterCta />
        </Layout>
    )
}