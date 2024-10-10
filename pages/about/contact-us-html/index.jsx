import { NextSeo } from 'next-seo';
import Layout from '../../../components/layout';
import Cta from '../../../components/ctaoverlay';
import LogoWithContent from '../../../components/logowithcontent'
import LogoSlider from '../../../components/LogoSlider';
import Contactoverview from '../../../components/contactoverview';
import Multipileform from '../../../components/Multistepform';
import IconwithSlider from '../../../components/IconwithSlider';



export default function casestudiesdetailmini({ menuItems }) {


    return (
        <Layout footerMenu={menuItems} isDark={true}>
            <NextSeo title="Contact Us" description="ClearDigital" />
            <Multipileform />
            <LogoSlider contentname={'datawhite'} bgcolor={'bg-white grid__parallax dark'} pt={'none'} showGradient={false} />
            {/* <IconwithSlider/> */}
            {/* <IconWithSliderSwipper /> */}
            <Contactoverview />
            <LogoWithContent contentName='contactus' fontLite={true} />
            <Cta contentName={'driving'} heading={true} />

        </Layout>
    );
}
