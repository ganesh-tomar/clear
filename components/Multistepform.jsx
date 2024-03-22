import { keyBy } from 'lodash';
import React, { useState } from 'react';

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

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData); // Check if formData is being logged properly
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};
	const nextStep = () => {
		console.log("Next step clicked");
		setCurrentStep((prevStep) => prevStep + 1);
	};
	
	const prevStep = () => {
		console.log("Previous step clicked");
		setCurrentStep((prevStep) => prevStep - 1);
	};

    const steps = [
        {
            title: 'Step 1',
            fields: [
                { name: 'firstName', label: 'First Name', type: 'text' },
                { name: 'lastName', label: 'Last Name', type: 'text' },
                { name: 'businessEmail', label: 'Business Email', type: 'email' },
                { name: 'phone', label: 'Phone', type: 'number' },
                { name: 'company', label: 'Company', type: 'text' }
            ]
        },
        {
            title: 'Step 2',
            fields: [
                { name: 'contactReason', label: 'Contact Reason', type: 'text' },
                { name: 'businessType', label: 'Business Type', type: 'text' },
                { name: 'budget', label: 'Budget', type: 'text' },
                { name: 'yourBudget', label: 'What is your budget?', type: 'text' },
            ]
        },
        {
            title: 'Step 3',
            fields: [
                { name: 'message', label: 'Message', type: 'textarea' },
                { name: 'aboutUs', label: 'How did you hear about us?', type: 'text' },
            ]
        }
    ];

    return (
        <section className="multipileform dark grid__parallax default-padding-bottom">
            <div className="container">
                <div className="relative wrapper flex flex-wrap justify-between w-[calc(100%+2rem)] mt-[3.3rem] laptop:pt-[8rem] sm:pt-[2rem] lg:w-full">
                    <div className="text-wrap max-w-[60rem] w-[calc(50%-2rem)] lg:w-full lg:mb-[5rem] relative">
                        <p className='subtitle mb-[2.1rem]'>Let’s Talk</p>
                        <h1 className="mb-[5.2rem] h3 sm:mb-[2rem]">
                            Headline About Contacting Clear
                        </h1>
                        <p className="subtitle !leading-[1.5] mb-[5.5rem] sm:mb-[2rem]">
                            Lorem ipsum dolor sit amet consectetur. A feugiat egestas orci lorem volutpat at ac. Tempor sed bibendum congue amet pharetra tempus viverra ultricies.
                        </p>
                        <h6 className="mb-[2.3rem]">Talk to our team today to:</h6>
                        <ul>
                            <li className="mb-[1.5rem] leading-[1.5] relative">
                                Lorem ipsum dolor sit amet consectetur.
                            </li>
                            <li className="mb-[1.5rem] leading-[1.5] relative">
                                Lorem ipsum dolor sit amet consectetur. Lobortis donec adipiscing tristique egestas aliquam lacinia tincidunt ac.
                            </li>
                            <li className="mb-[1.5rem] leading-[1.5] relative">
                                Lorem ipsum dolor sit amet consectetur. Cursus diam nunc sodales cursus iaculis. Morbi morbi ullamcorper potenti elementum at laoreet vel habitant augue.
                            </li>
                            <li className=" leading-[1.5] relative">
                                Lorem ipsum dolor sit amet consectetur.
                            </li>

                        </ul>
                    </div>
                    <div className="form-wrap w-[calc(50%-2.5rem)] lg:w-full mx-[2rem] lg:mx-0">
                        <form className="bg-black p-[8rem] sm:p-[4rem]" onSubmit={handleSubmit}>
                            <h4 className="text-white font-medium mb-[3rem]">
                                Start Your Journey Now
                            </h4>
                            <p className="text-white mb-[2.8rem]">
                                Answer a few questions and we’ll get in touch as soon as we can.
                            </p>
							<div  className="wrapper relative w-full flex flex-wrap ">
                            {/* Render fields for the current step */}
                            {steps[currentStep - 1].fields.map((field, index) => (
                              
									
									<div className={`${field.name === 'firstName' ? 'w-colTwohalfwidth mr-[3rem]' : field.name === 'lastName' ? 'w-colTwohalfwidth mr-0' : 'w-full'} area sm:w-[100%] mb-[2.8rem] sm:mr-[0']`} key={index} required>
                                        <label htmlFor={field.name} className="text-[1.4rem] text-white font-normal mb-[0.8rem] block">
                                            {field.label}
                                        </label>
                                        <input
                                            type={field.type}
                                            name={field.name}
                                            id={field.name}
                                            className="bg-black w-full h-[7rem] p-[2rem] sm:p-[1rem] border-2 border-solid border-white text-white laptop:h-[60px] lg:h-[50px]"
                                            value={formData[field.name]}
                                            onChange={handleChange}
                                        />
                                    </div>
									
                            ))}
							</div>
						
                            <div className="btn-wrapper w-full flex flex-wrap items-center justify-between">
                                {currentStep !== 1 && (
                                    <button className="btn pink white-bordered" onClick={prevStep}>
                                        Previous
                                    </button>
                                )}
                                {currentStep !== steps.length && (
                                    <button type="submit" className="btn pink white-bordered" onClick={nextStep}>
                                        {currentStep === steps.length ? 'Submit' : 'Next'}
                                    </button>
                                )}
                                <div className="count-wrap inline-block relative">
                                    <p className="text-white">{`${currentStep} of ${steps.length}`}</p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default FormWrapper;
