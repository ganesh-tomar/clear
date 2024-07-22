import { useEffect } from 'react';
import dynamic from 'next/dynamic';

const gsap = dynamic(() => import('gsap'), { ssr: false });
const ScrollTrigger = dynamic(() => import('gsap/ScrollTrigger'), { ssr: false });

const useScrollReveal = (triggerRef, targetRef) => {
  useEffect(() => {
    async function loadAnimation() {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      if (triggerRef.current && targetRef.current) {
        gsap.fromTo(
          targetRef.current,
          { y: '100%' },
          {
            y: '0%',
            scrollTrigger: {
              trigger: triggerRef.current,
              start: 'bottom bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      }
    }

    loadAnimation();
  }, [triggerRef, targetRef]);
};

export default useScrollReveal;
