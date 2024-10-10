'use client';
import Intro from './Intro';
import Techlogo from './TechnologyLogos'
import ColTwoContent from './ColTwoContent';

const ContentGriddetail = ({ props, pb, min, content }) => {
	return (
		<section className={`ContentGriddetail ${props ? 'bg-black' : 'grid__parallax dark  height__full bg-white'} z-[2] ${pb === 'none' ? 'pb-0' : ''} ${min === 'full' ? '!min-h-[100%]' : ''}`}>
			<div className="container">
				<Intro  {...content} />
				<div className="wrapper w-full relative mt-[5rem] sm:mt-[3rem] flex flex-wrap ml-[-1rem] sm:ml-0">
					<ColTwoContent contentName="casestudy" data={content} />
				</div>
				<Techlogo data={content?.logoSlider} />
			</div>
		</section>
	);
};
export default ContentGriddetail;