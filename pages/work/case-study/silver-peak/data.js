
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
      text: "Silver Peak",
      link: "",
    },
  ],
  PreNormalText: "Silver Peak: Integrated marketing, CMS, and a ",
  HighLightedText: 'new identity.',
  underline: false,
  underLineClass: 'whiteThin',
  HighLightedTextColor: 'text-pink',
  normalText: '',
  description: "By solving application performance challenges at the network level, Silver Peak is leading the way in data acceleration and visability. Clear Digital partnered with Silver Peak for a complete rebranding and redesign their website, e-commerce platform, and marketing automation tools. Our mission with the logo redesign was to deliver a modern image that worked with their existing brand elements, and stood apart from their competitors.",
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
      itemText: "Creative & Content Services",
      itemUrl: "/services/creative-content-services",
    },
    {
      id: 6,
      itemText: "DXP & CMS Platforms",
      itemUrl: "/our-services/dxp-cms-platforms",
    },
    {
      id: 7,
      itemText: "Custom Web Development",
      itemUrl: "/our-services/custom-web-development",
    },
    {
      id: 8,
      itemText: "Support Subscription",
      itemUrl: "/our-services/systems-support",
    },
  ],
  linktxt: '',
  linkUrl: '',

  paddingClasses: 'small-padding-bottom',
};
export const imageBlade = {
  sectionClass: 'revealParallaxTop',
  bgColor: 'sm:bg-black',
  bgImage: "/silver-peak/clear-silver-peak-logo.svg",
  bgImageAlt: "choesity-white",
  imageUrl: "/silver-peak/Branded-Blade-silver.png",
  imageAlt: "Phones",
  contentName: 'data',
  halfscreen: true,
  animationImage: '/silver-peak/Clear-SilverPeak-animation.svg'
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
      bgimg: "/Clear-SilverPeak-Half-2.png",
    },
    {
      id: 2,
      smallscreen: false,
      width: '50%',
      height: '50%',
      left: '0',
      top: 'unset',
      bottom: '0',
      leftFullHeight: false,
      rightFullHeight: false,
      bgimg: "/Clear-SilverPeak-Half-3.png",
    },
    {
      id: 3,
      smallscreen: false,
      width: '50%',
      height: '100%',
      left: 'unset',
      right: '0',
      top: '0',
      bottom: 'unset',
      leftFullHeight: false,
      rightFullHeight: true,
      bgimg: "/silver-peak/bg-with-logo.png",
    },
  ],
};

export const brandedblade = {
  sectionClass: 'revealParallaxBottom',
  content: [{
    img: "/Clear-SilverPeak-Full-3.png",
    imageAlt: "image",
  }]
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
      bgimg: "/digimarc/digimarc_bg.png",
      alt: 'Digimarc screen',
      heading: "Digimarc Website Redesign Increases Conversions by 45%",
      description:
        "Modernized Digimarc’s site with bold design, cohesive storytelling, and modern visuals, boosting key user metrics.",
      buttonText: "View all case studies",
      redirect: "/work/case-study/digimarc",
      tab: "",
      logo: '/digimarc/digimarc_logo_black.svg',
      hover_logo: "/digimarc/digimarc_logo_white.svg"
    },
    {
      border: true,
      bgimg: "/usamp/usamp.png",
      alt: 'Usamp One man',
      heading: "uSamp Rebrands to Instant.ly, Increases Market Presence",
      description:
        "Transformed uSamp into Instant.ly with a new brand identity, logo, and website.",
      buttonText: "View all case studies",
      redirect: "/work/case-study/usamp",
      tab: "",
      logo: "/usamp/usamp_logo_black.svg",
      hover_logo: "/usamp/usamp_logo_white.svg",
    },
  ]
}
export const redirect = {
  content: [
    {
      txt: "Previous case study",
      buttonUrl: "/work/case-study/vocera",
      props: true
    },
    {
      txt: "Next case study",
      buttonUrl: "/work/case-study/electronics-art",
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
