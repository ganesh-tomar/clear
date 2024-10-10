import { NextSeo } from 'next-seo';
import Layout from '../../../components/layout';
import BannerThirdLevel1 from '../../../components/BannerThirdLevel1';
import Widescreenimg from '../../../components/Widescreenimg';
import Intro from '../../../components/Intro';
import Brandedblade from '../../../components/brandedblade';
import Imagewithcontent from '../../../components/Imagewithcontent';
import Imagegrid from '../../../components/imagegrid';
import ContentGrid from '../../../components/ContentGrid';
import Detail from '../../../components/contentGriddetail';
import ColTwoSlider from '../../../components/colTwoSlider';
import Contentbar from '../../../components/Contentbar';
import FooterCta from '../../../components/Footercta';
import ScrollTxt from '../../../components/ScrollTxt';

export default function casestudiesdetailmini({ menuItems }) {
    const intro = {
        eyeBrowText: 'Working at Clear Digital',
        heading:
            'Where inspiration, ambition and fun come ',
        highLightedText: 'together',
        pointer: 'pointer',
        doodleClass: 'roundArrowDoodle',
        underlineVisibiltiy: false,
        subText:
        'We are a work hard, play hard kind of culture. We’re passionate about what we do and the time we get to spend together. It’s a team as diverse as the clients we serve, united by our love for the possibilities of digital and the inspiration we find all around us. Whether it’s our weekly happy hours, virtual winetasting and arts tours, or our book club—we find ways to come together, learn new things, and enjoy the ride.',
    };

    const slidesOne = [
        {
            imageSrc: '/cap.png',
            heading: 'The variety of work we do and the clients we get to work with.',
            author: 'Stephanie Fry,',
            designation: 'Senior Visual Designer',
            url: '/',
            linkText: 'Watch Behind the Build',
            blackQuote: true,
        },
    ];

    const slideTwo = [
        {
            imageSrc: '/crap.png',
            heading: 'I really enjoy that I get to have my hands on every aspect of development, from start fo finish; from high-level strategy to rolling up my metaphorical sleeves and working with the code myself.',
            // logo: '/cohesity.svg',
            author: 'Connor Bourke,',
            designation: 'Developer',
            blackQuote: true,
        },
        {
            imageSrc: '/cap.png',
            heading: 'I really enjoy that I get to have my hands on every aspect of development, from start fo finish; from high-level strategy to rolling up my metaphorical sleeves and working with the code myself.',
            // logo: '/cohesity.svg',
            author: 'Stephanie Fry,',
            designation: ' Senior Visual Designer',
            blackQuote: true,
        },
        {
            imageSrc: '/crap.png',
            heading: 'I really enjoy that I get to have my hands on every aspect of development, from start fo finish; from high-level strategy to rolling up my metaphorical sleeves and working with the code myself.',
            // logo: '/cohesity.svg',
            author: 'Connor Bourke,',
            designation: 'Developer',
            blackQuote: true,
        },
    ];

    return (
        <Layout footerMenu={menuItems} isDark={true}>
            <NextSeo title="Careers" description="ClearDigital" />
            <BannerThirdLevel1 content={'careers'} psize="medium" bgcolor="bg-white" dark={true} smallpaddingbottom={true} hfull={false} />
            <Widescreenimg />
            <section className="introduction no-padding-top  grid__parallax dark">
                <div className="container">
                    <Intro {...intro} />
                </div>
            </section>
            <Brandedblade contentName={'careers'} />
            <ColTwoSlider data={slidesOne} bgColor='bg-white' txt='text-black' parallax={true} employeeQuote={true} />
            <ScrollTxt />
            <Detail introname="careers" biglogo={true} min='full' />
            <Imagewithcontent contentname={'carrers'} reverse={true} pt='pt-0' />
            <Imagegrid contentName={'careerscard'} halfscreen={true} />
            <ContentGrid introName="careers" cards="careers" fourcards={true} pb='none' hFull={false} />
            <ColTwoSlider data={slideTwo} bgColor='bg-white' txt='text-black' parallax={true} ptop={true} pb={'none'} employeeQuote={true} />
            <Contentbar />
            <FooterCta bgImage={'/section/FooterCta/office-img-with-dog.png'} subTitle={'Ready to get to work?'} />
        </Layout>
    );
}
