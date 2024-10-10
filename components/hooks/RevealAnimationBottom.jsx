import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Make sure ScrollTrigger is registered
gsap.registerPlugin(ScrollTrigger);

const useRevealParallaxBottom = (sectionClass = '.revealParallaxBottom') => {

    const [parallaxInit, setParallaxInit] = useState(false)

    useEffect(() => {

        const handleScroll = () => {
            const element = document.querySelector('.revealParallaxBottom');
            if (element) {
                const footerRect = element.getBoundingClientRect();
                const footerDistanceFromBottom = window.innerHeight - footerRect.top;
                if (footerDistanceFromBottom > 0) {
                    setParallaxInit(true)
                }
            }
        };


        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const triggers = [];

        gsap.utils.toArray(sectionClass).forEach(container => {
            const img = container.querySelector('.elementToBeAnimate');

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    start: "center center", // Start the animation when the top of the container hits the bottom of the viewport
                    end: 'bottom center', // End when the top of the container hits the top of the viewport
                    scrub: 1,
                    onUpdate: self => {
                        // Store the ScrollTrigger instance in the triggers array
                        triggers.push(self.trigger);
                    }
                }
            });




            // Adjust the animation to fit within the bounds of the container
            tl.fromTo(img, {
                yPercent: 0,  // Reduced to prevent overflow
                ease: 'none'
            }, {
                yPercent: 17,
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
    }, [sectionClass, parallaxInit]);
};

export default useRevealParallaxBottom;
