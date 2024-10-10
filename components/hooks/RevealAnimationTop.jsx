import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Make sure ScrollTrigger is registered
gsap.registerPlugin(ScrollTrigger);

const useRevealParallaxTop = (sectionClass = '.revealParallaxTop') => {
    useEffect(() => {
        const triggers = [];

        gsap.utils.toArray(sectionClass).forEach(container => {
            const img = container.querySelector('.elementToBeAnimate');

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    start: "top bottom",// When the top of the container hits the bottom of the viewport
                    end: 'center center+=100', // End when the top of the container hits the top of the viewport
                    scrub: true,
                    onUpdate: self => {
                        // Store the ScrollTrigger instance in the triggers array
                        triggers.push(self.trigger);
                    }
                }
            });

            // Adjust the animation to fit within the bounds of the container
            tl.fromTo(img, {
                yPercent: -35, // Start partially hidden above
                ease: 'none'
            }, {
                yPercent: -7,  // Revealed at its normal position
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
    }, [sectionClass]);
};

export default useRevealParallaxTop;
