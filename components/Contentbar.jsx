'use client';
import Link from "next/link";

const Contentbar = () => {
	return (
		<section className="contentbar grid__parallax dark">
			<div className="container">
				<div className="wrapper w-full relative flex flex-wrap ml-[-7.5rem] lg:ml-0">
					<div className="w-[calc(50%-15rem)] content-wrap max-w-[57rem] mx-[7.5rem] lg:!w-[100%] lg:mb-[8rem] lg:mx-0 lg:max-w-[100%]">
						<h5 className="mb-[2rem] font-normal">Open positions</h5>
                        <h2 className="mb-[2rem]">Join our <span className="text-pink inline-block underline-container blackThin relative">team</span> </h2>
                        <p className="subtitle !leading-[1.5]">Lorem ipsum dolor sit amet consectetur. Pharetra dictum faucibus proin turpis sit. Tortor amet sit nunc libero non nec suscipit volutpat in viverra adipiscing.</p>
					</div>
                    <div className="w-[calc(50%-13rem)] starly max-w-[57rem] ml-[9.2rem] bg-[#E5E4E7] py-[5rem] pl-[5rem] pr-[30rem] laptop:pr-[20rem] relative lg:!w-[100%] lg:mx-0 sm:pr-[10rem] xs:pr-[7rem] sm:pl-[2rem] ">
                       <div className="btn-wrap mb-[3rem]">
                        <Link className="tertiary-btn black" href="">Art Director</Link>
                       </div>
                       <div className="btn-wrap mb-[3rem]">
                        <Link className="tertiary-btn black" href="">Copywriter</Link>
                       </div>
                       <div className="btn-wrap mb-[3rem]">
                        <Link className="tertiary-btn black" href="">Junior Designer</Link>
                       </div>
                       <div className="btn-wrap mb-[3rem]">
                        <Link className="tertiary-btn black" href="">Developer</Link>
                       </div>
                       <div className="btn-wrap ">
                        <Link className="tertiary-btn black" href="">QA Specialist</Link>
                       </div>
                    </div>
				</div>
			</div>
		</section>
	);
};
export default Contentbar;
