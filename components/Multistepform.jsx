import React, { useState } from 'react';
import Image from 'next/image';
import { useEffect } from 'react';

const FormWrapper = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		businessEmail: '',
		phone: '',
		company: '',
		contactReason: '',
		businessType: '',
		budget: '',
		yourBudget: '',
		message: '',
		aboutUs: '',
	});

	const [currentStep, setCurrentStep] = useState(1);
	const [allFilled, setAllFilled] = useState(false);
	const [istoggle, setistoggle] = useState(false);
	const [selectedvalue, setselectedvalue] = useState('');
	const handletoggle = () => {
		setistoggle(!istoggle);
	};

	useEffect(() => {
		checkForm();
	});

	const checkForm = () => {
		const isFormValid = Object.values(formData).every((value) => value !== '');
		setAllFilled(isFormValid);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const nextStep = (e) => {
		e.preventDefault();
		const parentForm = document.querySelector('form');
		const inputs = parentForm.querySelectorAll('input');

		let allFilled = true;

		inputs.forEach((element) => {
			if (element.value === '' && element.hasAttribute('required')) {
				allFilled = false;
				element.reportValidity(); // This will show the required popup
				return;
			}
		});

		if (allFilled) {
			console.log('All inputs are filled.');
			setselectedvalue('');
			setCurrentStep((prevStep) => prevStep + 1);
		} else {
			console.log('Some inputs are not filled.');
		}
	};

	const prevStep = () => {
		console.log('Previous step clicked');
		setCurrentStep((prevStep) => prevStep - 1);
	};

	const handleselectedval = (value) => {
		console.log('Selected value:', value);
		setselectedvalue(value);
		setistoggle(false);
	};

	const steps = [
		{
			title: 'Step 1',
			heading: 'Let’s Get Started!',
			paragraph:
				'Tell us about yourself so we know how to contact you.',
			fields: [
				{
					name: 'firstName',
					label: 'First name*',
					type: 'text',
					width: 'colTwohalfwidth',
					margin: '3rem',
				},
				{
					name: 'lastName',
					label: 'Last name*',
					type: 'text',
					width: 'colTwohalfwidth',
				},
				{
					name: 'businessEmail',
					label: 'Email*',
					type: 'email',
					width: 'full',
				},
				{
					name: 'Country',
					label: 'Country*',
					type: 'text',
					width: 'colTwohalfwidth',
					margin: '3rem',
					arrow: true,
					options: ['United States', 'Afghanistan', 'Australia'],
				},
				{
					name: 'phone',
					label: 'Phone*',
					type: 'number',
					width: 'colTwohalfwidth',
				},
			],
		},
		{
			title: 'Step 2',
			heading: 'Hi,',
			paragraph:
				'Next, tell us the name of your company and what you do. ',
			fields: [
				{ name: 'company', label: 'Company*', type: 'text', width: 'full' },
				{
					name: 'businessType',
					label: 'Business Type*',
					type: 'text',
					width: 'full',
					arrow: true,
					options: ['small Business', 'mid-market', 'large Business'],
				},
			],
		},
		{
			title: 'Step 3',
			heading: 'Now, let’s talk about your project.',
			paragraph:
				'Finally, tell us about your project. What are you hoping to achieve?',
			fields: [
				{
					name: 'message',
					label: 'Project Description*',
					type: 'textarea',
					width: 'full',
					textarea: 'true',
				},
				{
					name: 'aboutUs',
					label: 'How did you hear about us?',
					type: 'text',
					width: 'full',
					arrow: true,
					options: ['Refral', 'event', 'speaking-event'],
				},
			],
		},
	];

	const currentStepFields = steps[currentStep - 1].fields;
	console.log(currentStepFields);
	const progress = (currentStep / steps.length) * 100;

	return (
		<section className="multipileform dark grid__parallax default-padding-bottom">
			<div className="container">
				<div className="relative wrapper flex flex-wrap justify-between w-[calc(100%+2rem)] mt-[2.8rem] laptop:pt-[8rem] sm:pt-[2rem] lg:w-full">
					<div className="text-wrap max-w-[60rem] w-[calc(50%-2rem)] lg:w-full lg:mb-[5rem] relative">
						<p className="subtitle mb-[1.5rem]">Let’s Talk</p>
						<h1 className="mb-[5.3rem] h3 sm:mb-[2rem]">
							We Would Love to Hear From You
						</h1>
						<p className="subtitle  mb-[5.3rem] sm:mb-[2rem]">
							Whether you need to revamp your B2B brand and website, launch a new campaign, grow your customer base, secure an investment, move from product to platform, or break into a new market, we’ve got the strategy and insight to get you there.
						</p>
						<div className="image-wrapper max-w-[60rem] max-h-[37.9rem]">
							<Image
								src="/image 14.png"
								width={1000}
								height={1000}
								className="w-full h-full object-cover"
								alt="img"
							/>
						</div>
					</div>
					<div className="form-wrap relative pt-[0.6rem] w-[calc(50%-2.5rem)] lg:w-full mx-[2rem] lg:mx-0">
						<form className="bg-black p-[8rem] min-h-[84rem] lg:min-h-[auto] sm:p-[4rem]" >
							<div className="progress-bar mb-[5rem] flex justify-between relative overflow-hidden">
								<span
									className={`absolute w-[50%] top-[50%] -translate-y-1/2 left-0 h-[5px] ${currentStep === 1 ? '!bg-darkGray' : ''
										} ${currentStep === 2 || 3 ? 'bg-pink' : 'bg-darkGray'}`}
								></span>
								<span
									className={`absolute w-[calc(50%-5px)] top-[50%] -translate-y-1/2 right-[5px] h-[5px]  ${currentStep === 3 ? 'bg-pink' : 'bg-darkGray'
										} `}
								></span>
								{steps.map((step, index) => (
									<div
										key={index}
										className={`pointer-${index + 1
											} z-[5] pointer-key relative flex justify-center text-[2rem] font-bold items-center w-[3.5rem] h-[3.5rem] text-white rounded-[100%] ${index < steps.length - 1 ? '' : ''
											} ${index < currentStep ? 'bg-pink' : 'bg-darkGray'}`}
									>
										{index + 1 < currentStep ? (
											<div className="img-wrapper max-w-[2.4rem] max-h-[2.4rem]">
												<Image
													src="/check.png"
													alt="img"
													className='w-full h-full object-cover'
													width={24}
													height={24}
												/>
											</div>

										) : (
											index + 1
										)}
									</div>
								))}
							</div>

							<h4 className="text-white font-medium mb-[3rem]">
								{steps[currentStep - 1].heading}{' '}
								{currentStep === 2 ? `${formData.firstName}!` : ''}
							</h4>
							<p className="text-white mb-[3rem]">
								{steps[currentStep - 1].paragraph}
							</p>
							<div className="wrapper relative w-full flex flex-wrap">
								{/* Render fields for the current step */}
								{currentStepFields.map((field, fieldIndex) => (
									<div
										className={`w-${field.width} mr-[${field.margin}] sm:!mr-0 area sm:w-[100%] mb-[3rem] `}
										key={fieldIndex}
									>
										<label
											htmlFor={field.name}
											className="text-[1.4rem] text-white font-normal mb-[0.8rem] block"
										>
											{field.label}
										</label>

										{field.textarea ? (
											<textarea
												className="bg-black w-full h-[15.5rem] p-[2rem] sm:p-[1rem] border-2 border-solid border-white text-white laptop:h-[60px] lg:h-[50px]"
												required
											></textarea>
										) : (
											<div
												className={`${field.arrow ? 'arrow' : ''} ${field.arrow && istoggle ? 'active' : ''
													} input-wrap relative`}
												onClick={field.arrow ? handletoggle : null}
											>
												<input
													data-cursor-expand
													type={field.type}
													name={field.name}
													id={field.name}
													className={` bg-black w-full h-[7rem] p-[2rem] sm:p-[1rem] border-2  relative  border-solid border-white text-white laptop:h-[60px] lg:h-[50px]`}
													value={
														field.arrow ? selectedvalue : formData[field.name]
													}
													onChange={handleChange}
													required
												/>
												{field.arrow && istoggle && (
													<ul className="hidden-content w-full opacity-[1] h-auto py-[2rem] bg-white absolute bottom-[-14rem] left-0 z-[5]">
														{field.options.map((option, index) => (
															<li
																key={index}
																className="text-[1.6rem] py-[1rem] px-[3rem]"
																onClick={() => handleselectedval(option)}
															>
																{option}
															</li>
														))}
													</ul>
												)}
											</div>
										)}
									</div>
								))}
							</div>
							<div className="btn-wrapper w-full flex flex-wrap items-center justify-between">
								{currentStep !== steps.length ? (
									<button
										type="submit"
										className="btn pink white-bordered"
										onClick={(e) => nextStep(e)}
									>
										Next
									</button>
								) : (
									<button
										type="submit"
										className="btn pink white-bordered"
										onSubmit={handleSubmit}
									>
										Submit
									</button>
								)}
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FormWrapper;
