import Link from 'next/link';
import Image from 'next/image';
import Lottie from 'react-lottie';
import { BannerLottieService } from '../services/BannerLottieService';

export default function BannerSecondLevel2({ black_overlay, backgroundImage, link, subhead, title, bodyWithoutEditor, classes }) {

	let lottieOption = "";
if (subhead === undefined || subhead === null) {
     lottieOption = "";
  } else {
     lottieOption = subhead.toLowerCase().trim();
  }
return (
	<section
		className={`${black_overlay ? ' dark__overlay ' : ''
			} ${classes} overflow-hidden bg-black Banner-second height__full grid__parallax flex items-center`}
	>
		{backgroundImage?.sourceUrl ? (
			<div
				className={`bg-img`}
			>
				<Image
					className="object-bottom xxl-down:object-center"
					src={backgroundImage.sourceUrl}
					width={1600}
					height={1090}
					alt={backgroundImage.altText}
				/>
			</div>
		) :
			(<div className={`bg-img`}>
				<Lottie
					options={{
						loop: false,
						autoplay: true,
						animationData: BannerLottieService(lottieOption),
						rendererSettings: {
							preserveAspectRatio: 'xMidYMid slice',
						},
					}}
					className="lottie"
				/>
			</div>)
		}


		<div className="container">
			<div className="content-wrap pt-[85px] relative z-[3]  max-w-[141rem] xxl-up:pb-[0] xxl-down:pb-[0] sm:pt-[50px]">
				{subhead &&
					<h6 className="subtitle mb-[2rem]">{subhead}</h6>
				}
				{title &&
					<h1 className='text-white cursor-auto' dangerouslySetInnerHTML={{ __html: title }} ></h1>
				}
				{bodyWithoutEditor && (
					<h4 className="medium-light mt-[3rem] max-w-[105rem]" dangerouslySetInnerHTML={{ __html: bodyWithoutEditor }}></h4>
				)}
				{link.linkUrl && (
					<div className="btn-wrap mt-[2.6rem]">
						<Link href={link.linkUrl} className={link.class}>
							{link.linkText}
						</Link>
					</div>
				)}
			</div>
		</div>
	</section>
);
}
