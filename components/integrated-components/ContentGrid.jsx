'use client';
import Link from "next/link";

const ContentBar = ({ title, subhead, bodyWithoutEditor, classes, padding, gridItems }) => {
	return (
		<section className={`contentbar grid__parallax dark ${classes} ${padding}`}>
			<div className="container">
				<div className="wrapper w-full relative flex flex-wrap ml-[-7.5rem] lg:ml-0">
					<div className="w-[calc(50%-15rem)] content-wrap max-w-[57rem] mx-[7.5rem] lg:!w-[100%] lg:mb-[8rem] lg:mx-0 lg:max-w-[100%]">
						<h5 className="mb-[2rem] font-normal">{subhead}</h5>
						<h2 className="mb-[2rem]" dangerouslySetInnerHTML={{ __html: title }} />
						<p className="subtitle !leading-[1.5]">{bodyWithoutEditor}</p>
					</div>
					<div className="w-[calc(50%-13rem)] starly max-w-[57rem] ml-[9.2rem] max-h-[38rem] bg-[#E5E4E7] py-[5rem] pl-[5rem] pr-[30rem] laptop:pr-[20rem] relative lg:!w-[100%] lg:mx-0 sm:pr-[10rem] xs:pr-[7rem] sm:pl-[2rem] ">
						{gridItems.map((item, index) => (
							<div key={index} className="btn-wrap mb-[3rem]">
								<Link className="tertiary-btn black" href={item.link}>{item.linkText}</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContentBar;
