'use client';
import Image from 'next/image';
import Link from 'next/link';

const AuthorBlock = ({ data }) => {

	return (
		<section className={`reverse authorbanner imgwithcontent grid__parallax dark  default-padding-bottom`}>
			<div className="breadcrumbs w-full">
				<div className="container">
					{data?.bredcrumb && (
						<ul className={`absolute top-[20%] z-[10]  lg:top-[10%]`}>
							<div dangerouslySetInnerHTML={{ __html: data?.bredcrumb }}></div>

						</ul>
					)}
				</div>
			</div>
			<div className="container">
				<div className={`items-center pt-[105px] wrapper w-full relative flex flex-wrap lg:ml-[0] `}>
					<div className={`col-image relative w-full h-full max-h-[54rem] max-w-[45rem] tablet:mb-[5rem] phablet:mb-[5rem] sm:mb-[3rem]`} >
						<div className="img-wrapper relative w-full h-full  overflow-hidden">
							{data?.authorImage?.sourceUrl && (
								<Image
									src={data?.authorImage?.sourceUrl}
									width={1000}
									height={1000}
									alt={data?.authorImage?.altText}
									className={`w-100 h-auto object-contain mx-auto' : 'w-full h-full object-cover`}
								/>
							)}
						</div>
					</div>
					<div className={` lg:pr-0 pl-[15rem] lg:pt-0 content-wrapper relative w-[calc(100%-45rem)] lg:max-w-[100%] lg:pl-[0] lg:mx-[auto] lg:w-full`}>
						<h3 className="mb-[1rem]">
							{data.name}
						</h3>
						{data?.designation ? <h4 className="mb-[3rem] font-medium">{data?.designation}</h4> : ''}
						{data?.description ? <p className="">{data?.description}</p> : ''}
					</div>
				</div>
			</div>
		</section>

	);
};

export default AuthorBlock;
