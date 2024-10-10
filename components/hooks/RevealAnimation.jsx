import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useScrollParallax = (triggerSelector, contentSelector) => {
    useEffect(() => {
        // Array to store references to the ScrollTriggers
        const triggers = [];

        gsap.utils.toArray(triggerSelector).forEach((section) => {
            const img = section.querySelector(contentSelector);

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top bottom", // Start the animation when the top of the container hits the bottom of the viewport
                    end: "bottom top", // End when the bottom of the container hits the top of the viewport
                    scrub: true
                }
            });

            // Adjust the animation to fit within the bounds of the container
            tl.fromTo(img, {
                yPercent: -20, // Reduced to prevent overflow
                ease: 'none'
            }, {
                yPercent: 20,
                ease: 'none'
            });
        });

        // Clean up function
        return () => {
            triggers.forEach(trigger => {
                if (trigger && typeof trigger.kill === 'function') {
                    trigger.kill();
                }
            });
        };
    }, [triggerSelector, contentSelector]);
};

export default useScrollParallax;
