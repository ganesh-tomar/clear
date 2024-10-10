import PageBlock from '../components/PageBlock.jsx';
import PaginationBlock from '../components/PaginationBlock.jsx';
import CtaWithText from '../components/integrated-components/CtaWithText.jsx';

const CaseStudyRenderer = ({ type, data }) => {
	switch (type) {
		case 'CaseStudy_Casestudyqry_Sections_PageBlock':
			return <PageBlock {...data} />;
		case 'CaseStudy_Casestudyqry_Sections_PaginationBlock':
			return <PaginationBlock {...data} />;
		case 'CaseStudy_Casestudyqry_Sections_Cta':
			return <CtaWithText {...data} />;

		// Add more cases if needed for other section types
		default:
			return null;
	}
};

export default CaseStudyRenderer;
