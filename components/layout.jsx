import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap';
import ScrollSmoother from 'gsap/dist/ScrollSmoother';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Header from './header/header';
import Footer from './footer/footer';
import Undeline from './Underline';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Poppins, Permanent_Marker } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700', '900', '600'] });
const permanentMarker = Permanent_Marker({ subsets: ['latin'], weight: ['400'] });

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
export default function Layout({ children, footerMenu, preview, theme, isDark }) {
  const router = useRouter();
  const smootherRef = useRef(null);

  const initializeScrollSmoother = () => {
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
  };

  useGSAP(() => {
    if (typeof window !== 'undefined') {
      initializeScrollSmoother();
    }
    const handleRouteChange = () => {
      ScrollSmoother.get() && ScrollSmoother.get().kill();
      initializeScrollSmoother();
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      ScrollSmoother.get() && ScrollSmoother.get().kill();
    };
  }, [])



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
    <ParallaxProvider>
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
          <Footer footerMenuItems={footerMenuItems}>
            <span className="my-0 mx-auto">
              © {new Date().getFullYear()} Clear Digital Inc All Right Reserved
            </span>
          </Footer>
        </div>
      </div>
    </ParallaxProvider>
  );
}
