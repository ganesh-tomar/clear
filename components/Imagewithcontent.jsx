'use client';
import Image from 'next/image';
import Link from 'next/link';

const Imagewithcontent = ({ contentname, reverse, underlineClass, pt }) => {
	const contentdata = {
		data: [
			{
				imgSrc: '/cleardigital.png',
				imgAlt: 'img',
				subtitle: 'Lorem ipsum',
				underlineClass: "black",
				txt: 'Website',
				sp: 'Effectiveness',
				title: ' Engine™',
				description:
					'Lorem ipsum dolor sit amet consectetur. Pharetra dictum faucibus proin turpis sit. Tortor amet sit nunc libero non nec suscipit volutpat in. Viverra adipiscing dolor amet vitae. Malesuada vitae consectetur erat risus ac nibh. Lectus egestas adipiscing interdum hendrerit vitae consequat odio. Mattis imperdiet vitae tellus fringilla. Magna.',
			},
		],
		datacollaboration: [
			{
				imgSrc: '/cleardigital.png',
				imgAlt: 'img',
				subtitle: 'Lorem ipsum',
				underlineClass: "black",
				txt: 'How We ',
				sp: ' Deliver',
				description:
					'Lorem ipsum dolor sit amet consectetur. Pharetra dictum faucibus proin turpis sit. Tortor amet sit nunc libero non nec suscipit volutpat in. Viverra adipiscing dolor amet vitae. Malesuada vitae consectetur erat risus ac nibh. Lectus egestas adipiscing interdum hendrerit vitae consequat odio. Mattis imperdiet vitae tellus fringilla. Magna.',
			},
		],
		industry: [
			{
				imgSrc: '/cleardigital.png',
				imgAlt: 'img',
				subtitle: 'Lorem ipsum',
				underlineClass: "black",
				underlinevisibilty: false,
				sp: '',
				title: 'Headline on how we can help ',
				description:
					'Lorem ipsum dolor sit amet consectetur. Pharetra dictum faucibus proin turpis sit. Tortor amet sit nunc libero non nec suscipit volutpat in. Viverra adipiscing dolor amet vitae malesuada vitae.',
			},
		],
		carrers: [
			{
				imgSrc: '/section/ImgWithContent/planing.png',
				imgAlt: 'img',
				subtitle: 'Internship Program',
				underlineClass: "blackMedium bpm",
				// sp: ' ',
				title: 'Build digital experience and do cool $#!^',
				description:
					'Our paid (yup, you read that right) part-time internship program is the perfect way to see what it’s like to work in a dynamic digital agency. You’ll get hands-on experience working on real projects. Whether you’re a designer, developer, project manager or marketer, we want your enthusiasm and drive. You’ll have a mentor and plenty of interaction with everyone on the team to help you hone your skills and make a difference.',
				link: 'Apply for the Program',
				black: 'true',
			},
		],
		partnerDetailA: [
			{
				imgSrc: '/drupal_logo.svg',
				imgAlt: 'drupal_logo',
				logoImage: true,
				subtitle: 'Lorem ipsum',
				underlineClass: "",
				sp: '',
				title: 'Headline About Our Partner Lorem Ipsu Dolor Sit Amet',
				description:
					'Lorem ipsum dolor sit amet consectetur. Pharetra dictum faucibus proin turpis sit. Tortor amet sit nunc libero non nec suscipit volutpat in. Viverra adipiscing dolor amet vitae malesuada vitae.',
				link: '',
				black: 'true',
			},
		],
		approach: [
			{
				imgSrc: '/trio_logos.svg',
				imgAlt: 'trio_logos',
				logoImage: true,
				subtitle: 'Lorem ipsum',
				underlineClass: "",
				sp: '',
				title: 'Headline About How We Drive Success for Our Clients',
				description:
					'Lorem ipsum dolor sit amet consectetur. Pharetra dictum faucibus proin turpis sit. Tortor amet sit nunc libero non nec suscipit volutpat in. Viverra adipiscing dolor amet vitae malesuada vitae.',
				link: '',
				black: 'true',
			},
		],
	};

	const content = contentdata[contentname] || [];

	return (
		<section
			className={`
			${reverse === true ? 'reverse' : ''} 
			${pt ? pt : ''}
			imgwithcontent grid__parallax dark`}
		>
			<div className="container">
				{content.map((item) => (
					<div
						key={item.subtitle} // Use a unique key for each element
						className={`${reverse === true ? 'flex-row-reverse lg:justify-end' : ''} ${item.logoImage === true ? 'items-center' : ''} wrapper w-full relative flex flex-wrap lg:ml-[0] `}
					>
						<div className={`${reverse === true ? '' : 'bulb'} col-image relative w-full h-full max-h-[54rem] max-w-[69rem] tablet:mb-[5rem] phablet:mb-[5rem] sm:mb-[3rem]`} >
							<div className="img-wrapper relative w-full h-full  overflow-hidden">
								<Image
									src={item.imgSrc}
									width={1000}
									height={1000}
									alt={item.imgAlt}
									className={`${item.logoImage === true ? 'w-auto h-auto object-contain mx-auto xxl-up:w-[33rem] xxl-up:h-[28rem]' : 'w-full h-full object-cover'}`}
								/>
							</div>
						</div>
						<div
							className={`${reverse === true ? 'pr-[15rem] lg:pr-0' : 'pl-[15rem]'} ${item.logoImage === true && reverse === true ? '' : 'pt-[3.7rem] lg:pt-0'}
							content-wrapper relative w-[calc(100%-69rem)] lg:max-w-[100%] lg:pl-[0] lg:mx-[auto] lg:w-full`}
						>

							{item.subtitle ? <h6 className="subtitle mb-[2rem]">{item.subtitle}</h6> : ''}

							<h3 className="mb-[3rem]">
								{item.txt}
								<span className={`relative inline-block ${item.underlinevisibilty === false ? '' : 'underline-container '} ${item.underlineClass ? item.underlineClass : ' '}`}>
									{item.sp}
								</span>
								{item.title}
							</h3>

							{item.description ? <p className="">{item.description}</p> : ''}

							{item.link ? <div className="link-wrap mt-[3rem]">
								<Link
									className={`${item.black === 'true' ? 'black' : ''
										} tertiary-btn !text-black`}
									href=""
								>
									{item.link}
								</Link>
							</div> : ''}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Imagewithcontent;
