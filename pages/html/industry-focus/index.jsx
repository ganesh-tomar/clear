import { NextSeo } from 'next-seo';
import Layout from '../../../components/layout';
import BannerThirdLevel1 from '../../../components/BannerThirdLevel1';
import Introduction from '../../../components/introduction';
import ColTwoSlider from '../../../components/colTwoSlider';
import Introwithcards from '../../../components/introwithcards';
import FooterCta from '../../../components/Footercta';
import LogoSlider from '../../../components/LogoSlider';
import TechOverview from '../../../components/TechDescription';
import LogoWithContent from '../../../components/logowithcontent'

export default function IndustryFocus({ menuItems }) {
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
    return (
        <Layout footerMenu={menuItems}>
            <NextSeo
                title="Industry Focus"
                description="ClearDigital"
            />
            <BannerThirdLevel1 content={'industryFocus'} pSize="medium" max="max" />
            <Introduction introname='industryFocus' />
            <TechOverview />
            <LogoWithContent contentName='industryFocus' />
            <ColTwoSlider data={slides} pb={'none'} />
            <LogoSlider contentname={'data'} />
            <Introwithcards contentname={'threecard'} />
            <FooterCta />
        </Layout>
    )
}