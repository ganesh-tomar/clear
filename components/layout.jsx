import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap';
import ScrollSmoother from 'gsap/dist/ScrollSmoother';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Header from './header/header';
import Footer from './footer/footer';
import Undeline from './hooks/Underline.jsx';
import { Poppins, Permanent_Marker } from 'next/font/google';
import Overlay from './integrated-components/Overlay'
import FooterCta from './blocks/FooterCta.jsx';
import RevealAnimation from './hooks/RevealAnimation.jsx';
import RevealAnimationTop from './hooks/RevealAnimationTop.jsx'
import RevealAnimationBottom from './hooks/RevealAnimationBottom.jsx'


const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700', '900', '600'] });
const permanentMarker = Permanent_Marker({ subsets: ['latin'], weight: ['400'] });


export default function Layout({ children, footerMenu, preview, theme, isDark, commonFooterCta }) {
  const router = useRouter();
  const smootherRef = useRef(null);
  RevealAnimation('.revealAnimation', '.elementToBeAnimate');
  RevealAnimationTop();
  RevealAnimationBottom();
  const initializeScrollSmoother = () => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1081px)", () => {
      if (ScrollTrigger) {
        smootherRef.current = ScrollSmoother.create({
          wrapper: '#smooth-wrapper',
          content: '#smooth-content',
          smooth: 2,
          effects: true,
          smoothTouch: 0.3,
        });
        ScrollTrigger.normalizeScroll({
          allowNestedScroll: true,
          lockAxis: false,
          momentum: self => Math.min(3, self.velocityY / 1000), // dynamically control the duration of the momentum when flick-scrolling
          type: "touch,wheel,pointer", // now the page will be drag-scrollable on desktop because "pointer" is in the list
        });
        window.smoother = smootherRef.current;
      }
    });
  };

  const handleBehindScreenColor = () => {
    const Sections = document.querySelectorAll('section');
    Sections.forEach(section => {
      const FirstSectionHasBlackBg = section.classList.contains('bg-black');
      const nextSection = section.nextElementSibling;
      const nextSectionHasBlackBg = nextSection && nextSection.classList.contains('bg-black');
      if (FirstSectionHasBlackBg && nextSectionHasBlackBg) {
        section.classList.add('blackCurtain')
        nextSection.classList.add('mt-[-2px]')
        // section.classList.add('static')
      }
    });
  }

  useEffect(() => {
    const handleResize = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      if (isTouchDevice) {
        document.body.classList.add('touch-device');
      } else {
        document.body.classList.remove('touch-device');
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  useGSAP(() => {
    if (typeof window !== 'undefined') {
      initializeScrollSmoother();
    }
    handleBehindScreenColor()
    const handleRouteChange = () => {
      ScrollSmoother.get() && ScrollSmoother.get().kill();
      initializeScrollSmoother();
    };

    // router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      // router.events.off('routeChangeComplete', handleRouteChange);
      ScrollSmoother.get() && ScrollSmoother.get().kill();
    };
  })

  const navItems = [
    {
      linkText: '🏠 Home',
      href: '/',
    },
    {
      linkText: '📰 Posts',
      href: '/posts',
    },
    {
      linkText: '📑 Pages',
      href: '/pages',
    },
    {
      linkText: '⚛️ Examples',
      href: '/examples',
    },
  ];

  const footerMenuItems = footerMenu?.map(({ path, label }) => ({
    linkText: label,
    href: path,
    parent: null,
  }));

  return (
    <div id='smooth-wrapper'>
      <Header navItems={navItems} theme={theme} isDark={isDark} />
      <div id='smooth-content'>
        <Undeline />
        <style jsx global>{`
          * {
            font-family: ${poppins.style.fontFamily};
          }
          .overwrite-text > span {
            font-family: ${permanentMarker.style.fontFamily};
          }
          .font-permanent-marker {
            font-family: ${permanentMarker.style.fontFamily};
          }
          .blackHeader header .navOuter ul li p {
            color: #000 !important;
          }
        `}</style>
        <main className={`mb-auto`}>{children}</main>
        {commonFooterCta && <FooterCta />}
        <Footer footerMenuItems={footerMenuItems}>
          <span className="my-0 mx-auto">
            © {new Date().getFullYear()} Clear Digital Inc All Right Reserved
          </span>
        </Footer>
      </div>
      <Overlay />
    </div>
  );
}
