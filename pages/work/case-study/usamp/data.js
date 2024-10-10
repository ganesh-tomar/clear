export const heroBanner = {
  breadcrumbs: [
    {
      id: 1,
      text: "Work",
      link: "/work",
    },
    {
      id: 2,
      text: "Case Studies",
      link: "/work/case-studies",
    },
    {
      id: 3,
      text: "uSamp Instant.ly",
      link: "",
    },
  ],
  PreNormalText: "uSamp Instant.ly: Sophisticated identity for a",
  HighLightedText: 'sophisticated',
  underline: false,
  underLineClass: 'whiteThin',
  HighLightedTextColor: 'text-pink',
  normalText: ' platform.',
  description:
    'As a leader in niche panel reach, uSamp’s Instant.ly connects with all demographics. Clear Digital collaborated with uSamp to create their website and marketing materials, showcasing their extensive reach across the research industry via desktop, mobile, and print.',
  dark__overlay: true,
  bgcolor: 'bg-black',
  vector: '',
  backgroundImage: '',
  dark: false,
  max: '',
  blacklogo: false,
  content: 'insights',
  area: true,
  area: [
    {
      id: 1,
      itemText: "Brand Strategy",
      itemUrl: "/services/brand-strategy",
    },
    {
      id: 2,
      itemText: "Visual Identity",
      itemUrl: "/services/creative-content-services",
    },
    {
      id: 3,
      itemText: "Web Experiences",
      itemUrl: "/our-services/web-experiences",
    },
    {
      id: 4,
      itemText: "UX/UI Design",
      itemUrl: "/our-services/ux-ui-design",
    },
    {
      id: 5,
      itemText: "Motion Graphics & Videos",
      itemUrl: "/our-services/motion-graphics-videos",
    },
    {
      id: 6,
      itemText: "Custom Web Development",
      itemUrl: "/our-services/custom-web-development",
    },
  ],

  linktxt: '',
  linkUrl: '',

  paddingClasses: 'small-padding-bottom',
};

export const imageBlade = {
  sectionClass: 'revealParallaxTop',
  bgColor: 'sm:bg-black',
  bgImage: "/usamp/clear-instantly-logo.svg",
  bgImageAlt: "choesity-white",
  imageUrl: "/usamp/Branded-Blade-usamp.png",
  imageAlt: "Phones",
  contentName: 'data',
  halfscreen: true,
  animationImage: '/usamp/clear-phone-instantly.png'
}

export const imageGrid = {
  content: [
    {
      id: 1,
      smallscreen: false,
      width: '50%',
      height: '50%',
      left: '0',
      top: '0',
      bottom: 'unset',
      leftFullHeight: false,
      rightFullHeight: false,
      bgimg: "/usamp/logo-withBg-img.png",
    },
    {
      id: 2,
      smallscreen: false,
      width: '50%',
      height: '50%',
      left: 'unset',
      right: '0',
      top: '0',
      bottom: 'unset',
      leftFullHeight: false,
      rightFullHeight: false,
      bgimg: "/usamp/clear-instantly-quarter-2.png",
    },
    {
      id: 3,
      smallscreen: false,
      width: '50%',
      height: '100%',
      left: 'unset',
      right: '0',
      top: 'unset',
      bottom: '0',
      leftFullHeight: false,
      rightFullHeight: true,
      bgimg: "/usamp/clear-instantly-half-1.png",
    },
  ],
};

export const imageGridVersion = {
  content: [
    {
      id: 1,
      smallscreen: false,
      width: '50%',
      height: '100%',
      left: '0',
      top: '0',
      bottom: 'unset',
      leftFullHeight: true,
      rightFullHeight: false,
      bgimg: "/usamp/clear-instantly-half-2.png",
    },
    {
      id: 2,
      smallscreen: false,
      width: '50%',
      height: '50%',
      left: 'unset',
      right: '0',
      top: '0',
      bottom: 'unset',
      leftFullHeight: false,
      rightFullHeight: false,
      bgimg: "/usamp/icons-with-bgGreen.png",
    },
    {
      id: 3,
      smallscreen: false,
      width: '50%',
      height: '50%',
      left: 'unset',
      right: '0',
      top: 'unset',
      bottom: '0',
      leftFullHeight: false,
      rightFullHeight: false,
      bgimg: "/usamp/clear-instantly-quarter-3.png",
    },
  ],
};

export const brandedblade = {
  sectionClass: 'revealParallaxBottom',
  content: [{
    img: '/usamp/clear-instantly-parallax-2.png',
    imageAlt: 'image',
  }],
};

export const introduction = {
  content: [
    {
      subheading: "Related case studies",
      heading: "Putting ideas into",
      highlightedtext: "action",
      normaltext: "and delivering results",
      btntext: "View all case studies",
      buttonUrl: "/work/case-studies",
    },
  ],
};

export const logoWithContent = {
  content: [
    {
      border: true,
      bgimg: "/silver-peak/silverpeak_bg.png",
      alt: 'Girl silverPeak bg',
      heading: "Silver Peak Website Redesign Launches Brand and E-commerce Platform",
      description:
        "Revamped Silver Peak's brand identity, redesigned their site, and integrated e-commerce with marketing automation.",
      buttonText: "View all case studies",
      redirect: "/work/case-study/silver-peak",
      tab: "",
      logo: '/silver-peak/clear-silver-peak-logo-black.svg',
      hover_logo: "/silver-peak/clear-silver-peak-logo.svg"
    },
    {
      border: true,
      bgimg: "/digimarc/digimarc_bg.png",
      alt: 'Digimarc screen',
      heading: "Digimarc Website Redesign Increases Conversions by 45%",
      description:
        "Modernized Digimarc’s site with bold design, cohesive storytelling, and modern visuals, boosting key user metrics.",
      buttonText: "View all case studies",
      redirect: "/work/case-study/rae-systems/",
      tab: "",
      logo: '/digimarc/digimarc_logo_black.svg',
      hover_logo: "/digimarc/digimarc_logo_white.svg"
    },
  ]
}

export const redirect = {
  content: [
    {
      txt: "Previous case study",
      buttonUrl: "/work/case-study/electronics-art",
      props: true
    },
    {
      txt: "Next case study",
      buttonUrl: "/work/case-study/sift",
      props: true
    }
  ]
}
export const footerCta = {
  bgImg: "/image-cta-two.png",
  alt: "cta bg",
  subTitle: "Ready to get to work?",
  title: "Let's talk.",
  btnUrl: "/about/contact-us",
  btnText: "Contact Us",
}

export default function abc() {
  return (
    <>
    </>
  )
}
