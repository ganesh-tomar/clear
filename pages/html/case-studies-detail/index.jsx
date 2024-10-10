import { NextSeo } from 'next-seo';
import Layout from '../../../components/layout';
import BannerThirdLevel1 from '../../../components/BannerThirdLevel1';
import Brandedblade from '../../../components/brandedblade';
import Bladewiththreeimg from '../../../components/BladewithImagegrid';
import ContentGrid from '../../../components/contentGriddetail';
import Newsblade from '../../../components/newsblade';
import Imagegrid from '../../../components/imagegrid';
import Counter from '../../../components/Counter';
import Quoteblade from '../../../components/quoteblade';
import Halfslider from '../../../components/halfslider';
import Introduction from '../../../components/introduction';
import Logowithcontent from '../../../components/logowithcontent';
import RedirectLinks from '../../../components/redirect';
import FooterCta from '../../../components/Footercta';

export default function casestudiesdetailmini({menuItems}){
    return(
        <Layout footerMenu={menuItems}>
        <NextSeo
            title="Case Studies Detail"
            description="ClearDigital"
        />
        <BannerThirdLevel1 content={'casestudiesdetailmini'}/>
        <Bladewiththreeimg contentName={'data'}/>
        <Brandedblade contentName={'datatwo'}/>
        <ContentGrid  introname="casestudy"  contentName="casestudy"  techLogo={true} colTwo={true}/>
        <Newsblade/>
        <Imagegrid contentName={'data'} halfscreen={true} />
        <ContentGrid props={'datavalue'}/>
        <Imagegrid contentName={'twocards'} col={2}/>
        <Counter/>
        <Imagegrid contentName={'onecard'}/>
        <Quoteblade />
        <Imagegrid contentName={'threecard'} halfscreen={true} />
        <ContentGrid props={'dataval'}/>
        <Halfslider/>
        <Brandedblade contentName={'datathree'}/> 
        <Introduction introname={'introdetail'}/>
        <Logowithcontent contentName={'twocards'}/>
        <RedirectLinks contentname={'detail'}/>
    
        <FooterCta />
          </Layout>
    )
}