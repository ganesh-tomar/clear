import { NextSeo } from 'next-seo';
import Layout from '../../../components/layout';
import BannerThirdLevel1 from '../../../components/BannerThirdLevel1';
import NewsCards from '../../../components/NewsCards';
import Intro from '../../../components/Intro';
import Logowithcontent from '../../../components/logowithcontent';
import FooterCta from '../../../components/Footercta';

export default function Work({ menuItems }) {
    const intro = {
        eyeBrowText: 'Our Awards',
        heading:
            'We’re thrilled to have received 100+ industry',
        highLightedText: 'awards',
        normaltext: '',
        underlineClass: 'black',
        pointer: 'pointer',
        subText:
            'When you truly love what you do, recognition for your work is just the icing on the cake. (But we’ll take that extra slice.) ',
    };
	return (
		<Layout footerMenu={menuItems}>
			<NextSeo title="Awards" description="ClearDigital" />

			<BannerThirdLevel1 content={'awards'} psize="medium" />
            <section className="introduction  grid__parallax dark">
                <div className="container">
                <Intro {...intro} Logo={true} />
                </div>
            </section>
			<Logowithcontent contentName="award" />
			<NewsCards contentname="award"/>
			<FooterCta bgImage={'/section/FooterCta/office-img-with-dog.png'} subTitle={'Ready to get to work?'}/>
		</Layout>
	);
}
