'use client';
import React, { useState, useRef, useEffect } from 'react';
import Lottie from 'react-lottie';
import Link from "next/link";
import star from '../public/Lootie/Clear_HP_Star_R1.json';

const Contentbar = () => {
    const [animationState, setAnimationState] = useState({
        isStopped: true,
        isPaused: false,
    });

    const animationContainerRef = useRef(null);

    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Play the animation when in view
                    setAnimationState({ isStopped: false, isPaused: false });
                } else {
                    // Stop and reset the animation when out of view
                    setAnimationState({ isStopped: true, isPaused: false });
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.1,
        });

        if (animationContainerRef.current) {
            observer.observe(animationContainerRef.current);
        }

        return () => {
            if (observer && animationContainerRef.current) {
                observer.unobserve(animationContainerRef.current);
            }
        };
    }, []);

    return (
        <section className="contentbar grid__parallax dark">
            <div className="container">
                <div className="wrapper w-full relative flex flex-wrap ml-[-7.5rem] lg:ml-0">
                    <div className="w-[calc(50%-15rem)] content-wrap max-w-[57rem] mx-[7.5rem] lg:!w-[100%] lg:mb-[8rem] lg:mx-0 lg:max-w-[100%]">
                        <h5 className="mb-[2rem] font-normal">Open Positions</h5>
                        <h2 className="mb-[2rem]">Join our <span className="text-pink inline-block underline-container blackMedium bpm relative">team</span> </h2>
                        <p className="subtitle !leading-[1.5]">Looking for a fun challenge on a creative team working with cool clients?  Clear Digital has it all! This is a great place to let your talents shine.</p>
                    </div>
                    <div className="w-[calc(50%-13rem)] max-w-[57rem] ml-[9.2rem] max-h-[42rem] min-h-[38rem] lg:min-h-[35rem] bg-[#E5E4E7] py-[5rem] pl-[5rem] pr-[25rem] laptop:pr-[20rem] relative lg:!w-[100%] lg:mx-0 sm:pr-[10rem] xs:pr-[7rem] sm:pl-[2rem] ">
                        <div
                            ref={animationContainerRef}
                            className="starlyDoodle"
                        >
                            <Lottie
                                options={{
                                    loop: false,
                                    autoplay: false,
                                    animationData: star,
                                    rendererSettings: {
                                        preserveAspectRatio: 'xMidYMid slice',
                                    },
                                }}
                                isStopped={animationState.isStopped}
                                isPaused={animationState.isPaused}
                            />
                        </div>
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
