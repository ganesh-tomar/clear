import { NextSeo } from 'next-seo';
import Layout from '../../../components/layout';
import BannerThirdLevel1 from '../../../components/BannerThirdLevel1';
import Bladewiththreeimg from '../../../components/BladewithImagegrid';
import BladeWithImageGridLite from '../../work/case-study/components/BladeWithImageGridLite'
import Newsblade from '../../../components/newsblade';
import Imagegrid from '../../../components/imagegrid';
import Introduction from '../../../components/introduction';
import Logowithcontent from '../../../components/logowithcontent';
import RedirectLinks from '../../../components/redirect';
import FooterCta from '../../../components/Footercta';

export default function casestudiesdetailmini({ menuItems }) {
    const baldeThreeImageData = {
        bgColor: 'bg-[#00124D]',
        bgImage: '/sift/sift_logo.svg',
        bgImageAlt: 'choesity-white',
        imageUrl: '/cohesity/cohesity-img-2.png',
        imageAlt: 'Phones',
        mobile: '/sift/Laptop_dark.png'
    }
    return (
        <Layout footerMenu={menuItems}>
            <NextSeo
                title="Case Studies Detailmini"
                description="ClearDigital"
            />
            <BannerThirdLevel1 content={'casestudiesdetailmini'} />
            {/* <Bladewiththreeimg contentName={'data'} /> */}
            <BladeWithImageGridLite content={baldeThreeImageData} />
            <Newsblade />
            <Imagegrid contentName={'data'} />
            <Introduction introname={'introdetail'} />
            <Logowithcontent contentName={'twocards'} />
            <RedirectLinks contentname={'detail'}/>
            <FooterCta />
        </Layout>
    )
}