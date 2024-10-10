import { useState } from 'react';
import Customcheckbox from './Customcheckbox';
import style from '../components/styles/customcheckbox.module.css'

const FormWrapper = () => {
	const [istoggle, setistoggle] = useState(false);
	const [toggle, settoggle] = useState(false);
	const [strategicChecked, setStrategicChecked] = useState(false);
	const [digitalChecked, setDigitalChecked] = useState(false);
	const [technologyChecked, setTechnologyChecked] = useState(false);
	const [brandingchecked, setBrandingchecked] = useState(false);
	const [expriencechecked, setExpriencechecked] = useState(false);
	const [infastructurechecked, setInfastructurechecked] = useState(false);
	const [consent, setconsent] = useState(false);

	const handletoggle = () => {
		const otherdropdown = document.querySelector('.select-wrap.active');
		if (otherdropdown) {
			otherdropdown.classList.remove('active');
		}
		setistoggle(!istoggle);
		const parent = document.querySelector('.select-wrapper');
		parent.classList.toggle('active');
	};

	const giveConsent = (e) => {
		e.target.classList.toggle('active')
	};

	const handleStrategicChange = () => {
		setStrategicChecked(!strategicChecked);
	};

	const handleDigitalChange = () => {
		setDigitalChecked(!digitalChecked);
	};

	const handleTechnologyChange = (e) => {
		setTechnologyChecked(!technologyChecked);
	};

	const handleBrandingChange = () => {
		setBrandingchecked(!brandingchecked);
	};

	const handleExprienceChange = () => {
		setExpriencechecked(!expriencechecked);
	};

	const handleInfastructureChange = () => {
		setInfastructurechecked(!infastructurechecked);
	};

	const handletoggledown = () => {
		const otherDropdown = document.querySelector('.select-wrapper.active');
		if (otherDropdown) {
			otherDropdown.classList.remove('active');
		}
		settoggle(!toggle);
		const parentnode = document.querySelector('.select-wrap');
		parentnode.classList.toggle('active');
	};

	return (
		<section className="formwrapper dark grid__parallax default-padding-bottom">
			<div className="container">
				<div className="relative wrapper flex flex-wrap justify-between w-[calc(100%+2rem)] mt-[3.3rem] laptop:pt-[8rem] sm:pt-[2rem] lg:w-full">
					<div className="text-wrap max-w-[60rem] w-[calc(50%-2rem)] lg:w-full lg:mb-[5rem] relative">
						<div className="tab-wrap relative mb-[2.1rem]">
							<span className="tab px-[1rem] inline-block py-[0.5rem] bg-black text-[16px] font-bold text-white">
								Whitepaper
							</span>
						</div>
						<h1 className="mb-[5.2rem] h3 sm:mb-[2rem]">
							B2B Technology Website Homepages: The 2022 Fortune 500 Rankings
						</h1>
						<p className="subtitle !leading-[1.5] mb-[5.5rem] sm:mb-[2rem]">
							The Clear Digital team works closely with leading B2B technology
							brands as well as notable startups to create standout websites and
							digital experiences. To ensure we’re building digital experiences
							that drive results, we regularly review the homepages of top
							brands to see how they serve their business in the face of
							changing trends. In this third annual assessment of the top
							Fortune 500 B2B tech company homepages, we’re looking for
							patterns, best practices, and common shortcomings with an eye to
							helping other firms elevate their online presence.
						</p>
						<h6 className="mb-[2.3rem]">What you’ll learn from this report:</h6>
						<ul>
							<li className="mb-[1.5rem] leading-[1.5] relative">
								Winning strategies and common shortcomings for the homepage
								designs of the 32 biggest B2B tech companies, including
								Salesforce, Intuit, Cisco, and NCR.
							</li>
							<li className="mb-[1.5rem] leading-[1.5] relative">
								Our six-point evaluation method for each homepage, weighing
								areas such as: functionality, navigation, content, brand,
								design, and interactivity.
							</li>
							<li className="mb-[1.5rem] leading-[1.5] relative">
								How we scored each homepage on a scale from lacking/broken to
								best practice.
							</li>
							<li className="mb-[1.5rem] leading-[1.5] relative">
								Key observations and trends we noted across the entire
								landscape.
							</li>
							<li className="mb-[1.5rem] leading-[1.5] relative">
								Common design missteps from some of the largest companies in the
								industry and how to avoid them.
							</li>
							<li className="leading-[1.5] relative">
								Five key takeaways to help your B2B company improve its
								digital-first strategy in 2023 and beyond.
							</li>
						</ul>
					</div>
					<div className="form-wrap w-[calc(50%-2.5rem)] lg:w-full mx-[2rem] lg:mx-0">
						<form className="bg-black p-[8rem] lg:py-[4.5rem] lg:px-[4rem] sm:p-[4rem]">
							<h5 className="text-white font-medium mb-[3rem]">
								Access the Whitepaper
							</h5>
							<p className="text-white mb-[2.8rem] ">
								Fill out this form and we will provide you instant access to the
								report.
							</p>
							<div className="wrapper relative w-full flex flex-wrap mb-[2.8rem]">
								<div className="area w-colTwohalfwidth mr-[3rem] sm:w-[100%] sm:mr-[0]">
									<label
										htmlFor=""
										className="text-[1.4rem] laptop:text-[14px] lg:text-[14px] text-white font-normal mb-[0.8rem] block"
									>
										First name*
									</label>
									<input
										type="text"
										className="bg-black w-full h-[7rem] p-[2rem] sm:p-[1rem] border-2 border-solid border-white text-white laptop:h-[60px] lg:h-[50px]"
									/>
								</div>
								<div className="area w-colTwohalfwidth sm:mt-[2.8rem] sm:w-[100%]">
									<label
										htmlFor=""
										className="text-[1.4rem] laptop:text-[14px] lg:text-[14px] text-white font-normal mb-[0.8rem] block"
									>
										Last name*
									</label>
									<input
										type="text"
										className="bg-black w-full h-[7rem] p-[2rem] sm:p-[1rem] border-2 border-solid border-white text-white laptop:h-[60px] lg:h-[50px]"
									/>
								</div>
							</div>
							<div className="area w-[100%] mb-[2.8rem]">
								<label
									htmlFor=""
									className="text-[1.4rem] laptop:text-[14px] lg:text-[14px] text-white font-normal mb-[0.8rem] block"
								>
									Business email*
								</label>
								<input
									type="email"
									className="bg-black w-full h-[7rem] p-[2rem] sm:p-[1rem] border-2 border-solid border-white text-white laptop:h-[60px] lg:h-[50px]"
								/>
							</div>
							<div
								className={` select-wrapper area w-[100%] mb-[2.8rem]  relative`}
							>
								<label
									htmlFor=""
									className="text-[1.4rem] laptop:text-[14px] lg:text-[14px] text-white font-normal mb-[0.8rem] block"
								>
									What expertise areas are most relevant to you?*
								</label>
								<div className="input-wrap" >
									<input
										type="text"
										className={` bg-black select w-full h-[7rem]  border-2 p-[2rem] sm:p-[1rem] border-solid border-white text-white laptop:h-[60px] lg:h-[50px]  relative`}
										value=""
										readOnly
										onClick={handletoggle}
									/>
								</div>

								<div className="hidden-content absolute top-[100%]  z-[6] left-0 w-0 h-0 opacity-0 bg-[#FFF] py-[3rem] pb-[2.5rem] sm:py-[2rem] sm:pb-[1.5rem] ">
									<p className="small !text-black px-[3rem] mb-[0.5rem] sm:px-[2rem]">
										Select all that apply
									</p>

									<Customcheckbox
										label="Strategic Branding & Positioning"
										labelfor="Branding"
										id="Branding"
										checked={strategicChecked}
										onChange={handleStrategicChange}
									/>

									<Customcheckbox
										label="Digital Experiences & Creative"
										labelfor="Experiences"
										id="Experiences"
										checked={digitalChecked}
										onChange={handleDigitalChange}
									/>

									<Customcheckbox
										label="Technology Infrastructure & Support"
										labelfor="Infrastructure"
										id="Infrastructure"
										checked={technologyChecked}
										onChange={handleTechnologyChange}
									/>
								</div>
							</div>
							<div
								className={` select-wrap area w-[100%] mb-[3rem] select relative`}
							>
								<label
									htmlFor=""
									className="text-[1.4rem] laptop:text-[14px] lg:text-[14px] text-white font-normal mb-[0.8rem] block"
								>
									How did you hear about us?*
								</label>
								<div className="input-wrap w-full h-full" onClick={handletoggledown}>
									<input
										type="text"
										value=""
										readOnly
										className={`${toggle ? 'active' : ''
											} bg-black w-full h-[7rem] p-[2rem] sm:p-[1rem] border-2 border-solid border-white text-white laptop:h-[60px] lg:h-[50px]  relative`}
									/>
								</div>

								<div className="hidden-content absolute top-[100%] z-[6] left-0 w-0 h-0 opacity-0 bg-[#FFF] pt-[3rem] pb-[2.5rem]  sm:py-[2rem] sm:pb-[1.5rem]">
									<p className="small !text-black mb-[0.5rem] px-[3rem] sm:px-[2rem]">
										Select all that apply
									</p>
									<Customcheckbox
										label="Strategic Branding & Positioning"
										labelfor="Strategic"
										id="Strategic"
										checked={brandingchecked}
										onChange={handleBrandingChange}
									/>

									<Customcheckbox
										label="Digital Experiences & Creative"
										labelfor="Digital"
										id="Digital"
										checked={expriencechecked}
										onChange={handleExprienceChange}
									/>

									<Customcheckbox
										label="Technology Infrastructure & Support"
										labelfor="Technology"
										id="Technology"
										checked={infastructurechecked}
										onChange={handleInfastructureChange}
									/>
								</div>
							</div>

							<div className="area w-[100%] mb-[3rem]  flex flex-wrap relative z-[9]">
								<div className={`check-wrapper w-full`}>
									<div className="lg:!cursor-pointer categoty-wrap z-[5] !text-[1.6rem] font-normal text-white w-full capitalize flex ">
										<div
											className={`check-box-wrap large mr-[2.1rem]`}
											onClick={(e) => giveConsent(e)}
											data-cursor-expand="true"
										>
											<input
												className={`checkbox-default`}
												type="checkbox"
												name=""
												id="service-0"
											/>
											<label className="pointer-events-none" for="service-0">
												.
											</label>
										</div>
										<p className="!text-[1.6rem] medium  font-normal">
											By submitting this form, I confirm that I have read and
											agree to the Privacy Statement.
										</p>
									</div>
								</div>
							</div>
							<div className="btn-wrap w-full">
								<input
									type="submit"
									value="Submit"
									className="btn pink white-bordered"
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};
export default FormWrapper;
