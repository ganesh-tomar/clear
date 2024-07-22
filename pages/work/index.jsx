import { NextSeo } from 'next-seo';
import Layout from '../../components/layout';
import BannerSecond from '../../components/BannerSecondlevel';
import ColTwoImageSlider from '../../components/ColTwoImageSlider'
import Introduction from '../../components/introduction';
import Logowithcontent from '../../components/logowithcontent';
import Cta from '../../components/ctaoverlay';
import FooterCta from '../../components/Footercta';
import LogoSlider from '../../components/LogoSlider'
import ColTwoSlider from '../../components/colTwoSlider'

export default function Work({ menuItems }) {
    const ColTwoSliderData = [
        {
            heading: 'Aenean aliquet malesuada quam et placerat. Suspendiss pellentes. Interdum et <span class="text-pink"> malesuada </span> fames ac ante ipsum primis in. Lorem ipsum dolor sit amet consectetur. Ut consectetur proin mattis et id quam cras gravida. Ipsum ante purus.',
            prefix: '$',
            count: '20',
            denotation: 'M',
            subText: 'Lorem ipsum dolor.',
            subDescription: 'Lorem ipsum dolor sit amet consectetur amet pretium amet in mus quis',
            logo: '/Vocera_Logo_White.svg',
            author: 'Jane Doe,',
            designation: 'CEO',
            btnText: 'View Case Study',
            btnUrl: '/',
        },
        {
            imageSrc: '/hex.jpg',
            heading: 'Aenean aliquet malesuada quam et placerat. Suspendiss pellentes. Interdum et <span class="text-pink"> malesuada </span> fames ac ante ipsum primis in. Lorem ipsum dolor sit amet consectetur. Ut consectetur proin mattis et id quam cras gravida. Ipsum ante purus.',
            logo: '/Vocera_Logo_White.svg',
            author: 'Jane Doe,',
            designation: 'CEO',
            btnText: 'View Case Study',
            btnUrl: '/',
        },
        {
            heading: 'Lorem ipsum dolor sit amet consectetur. Neque nibh ac justo tortor enim <span class="text-pink"> sollicitudin. </span> Nunc praesent ipsum mattis commodo et. Est in auctor nunc nec pulvinar. Tempor ridiculus urna faucibus non mus sed. Amet sollicitudin facilisis ut eu rhoncus nisl. Sed at lorem ipsum etiam. In feugiat fringilla nisi magna ipsum nibh suspendisse id. Accumsan morbi arcu fames pellentesque eu est. Sem rhoncus egestas velit non sit.',
            logo: '/Vocera_Logo_White.svg',
            author: 'Jane Doe,',
            designation: 'CEO',
            btnText: 'View Case Study',
            btnUrl: '/',
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
                title="Work"
                description="ClearDigital"
            />

            <BannerSecond content='work' />
            <Introduction introname='intro' />
            <Logowithcontent contentName='data' />
            <Cta contentName={'work'} heading={true}/>
            <ColTwoSlider data={ColTwoSliderData} pb={'none'}/>
            <LogoSlider contentname={'data'}/>
            <ColTwoImageSlider data={insightSliderData} bgColor="bg-gray" contentName="home" />
            <FooterCta />
        </Layout>
    )
}
