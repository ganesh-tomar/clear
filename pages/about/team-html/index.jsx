import { NextSeo } from 'next-seo';
import Layout from '../../../components/layout';
import BannerThirdLevel from '../../../components/BannerThirdLevel1';
import Leadership from '../../../components/leadership';
import Imagegrid from '../../../components/imagegrid';
import Team from '../../../components/team';
import Contentbar from '../../../components/Contentbar';
import FooterCta from '../../../components/Footercta';

export default function Partners({ menuItems }) {
	return (
		<Layout footerMenu={menuItems}  isDark={true}>
			<NextSeo title="Team" description="ClearDigital" />
			 <BannerThirdLevel
				content={'team'}
				psize="medium"
				bgcolor="bg-white"
				dark={true}
                max="max"
				hfull={false}
                overlay={true} 
			/> 
      <Leadership/>
			<Imagegrid contentName={'careerscard'} halfscreen={true} />
			<Team/>
			<Contentbar />
			<FooterCta bgImage={'/section/FooterCta/office-img-with-dog.png'} subTitle={'Ready to get to work?'}/>
		</Layout>
	);
}
