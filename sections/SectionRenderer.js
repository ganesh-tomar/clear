import HeroBanner from '../components/integrated-components/HeroBanner.jsx';
import ImageWithSlider from '../components/integrated-components/ImageWithSlider.jsx';
import IntroWithContent from '../components/integrated-components/IntroWithContent.jsx';
import TabsWithSlider from '../components/integrated-components/TabsWithSlider.jsx';
import TestimonialSlider from '../components/integrated-components/TestimonialSlider.jsx';
import LogoWithSlider from '../components/integrated-components/LogoWithSlider.jsx'; 
import CtaWithText from '../components/integrated-components/CtaWithText.jsx';
import ColTwoWithSlider from '../components/integrated-components/ColTwoWithSlider.jsx';
import AccordionWithImage from '../components/integrated-components/AccordionWithImage.jsx';
import BannerSecondLevel2 from '../components/integrated-components/BannerSecondlevel2.jsx';
import StickyNav from '../components/integrated-components/sticky.jsx';
import ColumnGrid from '../components/integrated-components/Grids.jsx';
import LogoWithText from '../components/integrated-components/LogoWithText.jsx';
import IntroBlock from '../components/integrated-components/Intro.jsx';
import ImageBlock from '../components/integrated-components/ImageBlock.jsx';
import MarqueeText from '../components/ScrollTxt.jsx';
import PageBlock from '../components/PageBlock.jsx';
import PaginationBlock from '../components/PaginationBlock.jsx';
import ViewComponent from '../components/integrated-components/views/ViewComponent.jsx';
import BannerThirdLevel2 from '../components/integrated-components/BannerThirdLevel2.jsx';
import WideScreenImg from '../components/integrated-components/Widescreenimg.jsx';
import ImageWithContent from '../components/integrated-components/Imagewithcontent.jsx';
import LogoGrid from '../components/integrated-components/LogoGrid.jsx';
import GridImage from '../components/integrated-components/GridImage.jsx';
import IconWithTitle from '../components/integrated-components/IconWithTitle.jsx';
import ContentGrid from '../components/integrated-components/ContentGrid.jsx';
import FaqAccordion from '../components/integrated-components/FaqAccordion.jsx';
import ContentWithLogos from '../components/integrated-components/ContentWithLogos.jsx';
import IntroWithCardSlider from '../components/integrated-components/IntroWithCardSlider.jsx';
import ScrollWithText from '../components/integrated-components/ScrollWithText.jsx';
import TechDescription from '../components/integrated-components/TechDescription.jsx';
import FooterFormCta from '../components/integrated-components/FooterFormCta.jsx';
import IntroWithCards from '../components/integrated-components/views/IntroWithCards.jsx';
import TimelineGrid from '../components/integrated-components/TimelineGrid.jsx';
import LeadershipGrid from '../components/integrated-components/LeadershipGrid.jsx';
import CardsWithReference from '../components/integrated-components/CardsWithReference.jsx';
import LinksWrapper from '../components/integrated-components/LinksWrapper.jsx';
import ListWithReference from '../components/integrated-components/ListWithReference.jsx';
import ColThreeWithReference from '../components/integrated-components/ColThreeWithReference.jsx';
import StaticsWithContent from '../components/integrated-components/StaticsWithContent.jsx';
import AuthorBlock from '../components/integrated-components/AuthorBlock.jsx';
import FormWithFields from "../components/integrated-components/FormWithFields.jsx";

const SectionRenderer = ({ type, data, formID }) => {
	switch (type) {
		case 'Page_Pagebuilder_Sections_HeroBanner':
			return <HeroBanner {...data} />;
		case 'Page_Pagebuilder_Sections_ImageWithSlider':
			return <ImageWithSlider {...data} />;
		case 'Page_Pagebuilder_Sections_IntroWithContent':
			return <IntroWithContent {...data} />;
		case 'Page_Pagebuilder_Sections_TabsWithSlider':
			return <TabsWithSlider {...data} />;
		case 'Page_Pagebuilder_Sections_TestimonialSlider':
			return <TestimonialSlider {...data} />;
		case 'Page_Pagebuilder_Sections_LogoSlider':
			return <LogoWithSlider {...data} />;
		case 'Page_Pagebuilder_Sections_ColTwoWithSlider':
			return <ColTwoWithSlider {...data} />;
		case 'Page_Pagebuilder_Sections_Cta':
			return <CtaWithText {...data} />;
		case 'Page_Pagebuilder_Sections_AccordionWithImage':
			return <AccordionWithImage {...data} />;
		case 'Page_Pagebuilder_Sections_BannerSecond':
			return <BannerSecondLevel2 {...data} />;
		case 'Page_Pagebuilder_Sections_StickyNav':
			return <StickyNav {...data} />;
		case 'Page_Pagebuilder_Sections_ColumnGrid':
			return <ColumnGrid {...data} />;
		case 'Page_Pagebuilder_Sections_AccordionWithImage':
			return <AccordionWithImage {...data} />;
		case 'Page_Pagebuilder_Sections_LogoWithText':
			return <LogoWithText {...data} />;
		case 'Page_Pagebuilder_Sections_IntroBlock':
			return <IntroBlock {...data} />;
		case 'Page_Pagebuilder_Sections_ImageBlock':
			return <ImageBlock {...data} />;
		case 'Page_Pagebuilder_Sections_MarqueeText':
			return <MarqueeText />;
		case 'Page_Pagebuilder_Sections_PageBlock':
			return <PageBlock {...data} />;
		case 'Page_Pagebuilder_Sections_PaginationBlock':
			return <PaginationBlock {...data} />;
		case 'Page_Pagebuilder_Sections_View':
			return <ViewComponent {...data} />;
		case 'Page_Pagebuilder_Sections_BannerThird':
			 return <BannerThirdLevel2 {...data} />;
		case 'Page_Pagebuilder_Sections_ImageWithContent':
			 return <ImageWithContent {...data} />;
	    case 'Page_Pagebuilder_Sections_WideScreenImg':
			 return <WideScreenImg {...data} />;
		case 'Page_Pagebuilder_Sections_Image':
			 return <LogoGrid {...data} />;
		case 'Page_Pagebuilder_Sections_ImageGrid':
			 return <GridImage {...data} />;
		case 'Page_Pagebuilder_Sections_IconWithTitle':
			 return <IconWithTitle {...data} />;
		case 'Page_Pagebuilder_Sections_ContentBar':
			 return <ContentGrid {...data} />;	
		case 'Page_Pagebuilder_Sections_Faq':
			 return <FaqAccordion {...data} />;	
		case 'Page_Pagebuilder_Sections_ContentWithLogos':
			 return <ContentWithLogos {...data} />;
	    case 'Page_Pagebuilder_Sections_IntroWithCardSlider':
			 return <IntroWithCardSlider {...data} />;	
		case 'Page_Pagebuilder_Sections_ScrollWithText':
			 return <ScrollWithText data = {data}/>;	
		case 'Page_Pagebuilder_Sections_TechDescription':
			 return <TechDescription {...data}/>;	 
		case 'Page_Pagebuilder_Sections_FooterFormCta':
			return <FooterFormCta data = {data}/>;	
		case 'Page_Pagebuilder_Sections_IntroWithCards':
			return <IntroWithCards data = {data}/>;		
		case 'Page_Pagebuilder_Sections_TimelineGrid':
			return <TimelineGrid {...data}/>;
		case 'Page_Pagebuilder_Sections_LeadershipGrid':
			return <LeadershipGrid {...data}/>;
		case 'Page_Pagebuilder_Sections_CardsWithReference':
			return <CardsWithReference {...data}/>;
		case 'Page_Pagebuilder_Sections_LinksWrapper':
			return <LinksWrapper {...data}/>;	
		case 'Page_Pagebuilder_Sections_ListWithReference':
			return <ListWithReference {...data}/>;	
		case 'Page_Pagebuilder_Sections_ColThreeWithReference':
			return <ColThreeWithReference {...data}/>;	
		case 'Page_Pagebuilder_Sections_StaticsWithContent':
			return <StaticsWithContent data = {data}/>;
		case 'Page_Pagebuilder_Sections_AuthorBlock':
			return <AuthorBlock data = {data}/>;		
		case 'Page_Pagebuilder_Sections_Form':
			return <FormWithFields formID = {formID} />;	
		// Add more cases if needed for other section types
		default:
			return null;
	}
};

export default SectionRenderer;

