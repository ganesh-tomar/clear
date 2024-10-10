
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
      text: "Digimarc",
      link: "",
    },
  ],
  PreNormalText: "Digimarc: Product ",
  HighLightedText: "Digitization",
  underline: true,
  underLineClass: 'whiteThin',
  HighLightedTextColor: "text-pink",
  normalText: "Solutions",
  description:
    "Digimarc provides groundbreaking product digitization solutions that help top brands fight counterfeiting, ensure product authenticity, and maintain supply chain traceability-from first touch all the way to recycling. As a pioneer in this space, the company needed a modern, innovative web experience that matches its ethos and vision. They came to Clear Digital to design a site that's bold and engaging with a powerful narrative.",
  dark__overlay: true,
  bgcolor: "bg-black",
  vector: "",
  backgroundImage: "",
  dark: false,
  max: "",
  blacklogo: false,
  doodles: true,
  content: "insights",
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
      itemUrl: "/our-services/creative-content-services",
    },
    {
      id: 6,
      itemText: "Motion Graphics & Videos",
      itemUrl: "/our-services/motion-graphics-videos",
    },
    {
      id: 7,
      itemText: "DXP & CMS Platforms",
      itemUrl: "/our-services/dxp-cms-platforms",
    },
  ],
  linktxt: "",
  linkUrl: "",
  paddingClasses: "small-padding-bottom",
};

export const imageBlade = {
  sectionClass: 'revealParallaxTop',
  bgColor: 'sm:bg-black',
  bgImage: "/digimarc/digimarc_logo_white.svg",
  bgImageAlt: "choesity-white",
  imageUrl: "/digimarc/Digimarc_background.png",
  imageAlt: "Icons WIth Logo",
  contentName: 'data',
  halfscreen: false,
  animationImage: '/digimarc/Digimarc_floating_graphic.png',
  animationFramImg: '',
  animationVideo: ''
}

export const newsBlade = {
  content: {
    bgColor: 'bg-gray',
    subTitle: 'Lorem ipsum dolor',
    PreNormalText: '',
    HighLightedText: "27% increase",
    underline: true,
    HighLightedTextColor: 'text-pink',
    underLineClass: 'black',
    normalText: "in click-through rates",
    dark: true,
    textSize: 'text-[11px]',
    description: "Clear Digital's website redesign and development of Digimarc's website immediately boosted its click-through rates by an impressive 27%, delivering increased engagement.",
  },
};
export const imageGrid = {
  content: [
    {
      id: 1,
      smallscreen: false,
      width: '50%',
      height: '100%',
      left: '0',
      top: 'unset',
      bottom: '0',
      bgColor: '',
      bgimg: '/digimarc/girl-with-book.png',
    },
    {
      id: 2,
      smallscreen: false,
      width: '50%',
      height: '100%',
      right: '0',
      left: 'unset',
      top: 'unset',
      bottom: '0',
      bgColor: 'bg-[#f2f2f2]',
      bgimg: '/digimarc/fruit-with-logo.png',
    },
  ],
};
export const brandedblade = {
  bgColor: 'bg-black',
  sectionClass: 'revealParallaxBottom',
  content: [
    {
      img: "/digimarc/mask-group.png",
      imageAlt: "image",
    },
  ],
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
      bgimg: "/usamp/usamp.png",
      alt: 'One man digimarc bg',
      heading: "uSamp Rebrands to Instant.ly, Increases Market Presence",
      description:
        "Transformed uSamp into Instant.ly with a new brand identity, logo, and website.",
      buttonText: "View all case studies",
      redirect: "/work/case-study/usamp",
      tab: "",
      logo: "/usamp/usamp_logo_black.svg",
      hover_logo: "/usamp/usamp_logo_white.svg",
    },
  ],
};
export const redirect = {
  content: [
    {
      txt: "Previous case study",
      buttonUrl: "/work/case-study/cohesity",
      props: true,
    },
    {
      txt: "Next case study",
      buttonUrl: "/work/case-study/tealbook",
      props: true,
    },
  ],
};
export const footerCta = {
  bgImg: "/image-cta-two.png",
  alt: "cta bg",
  subTitle: "Ready to get to work?",
  title: "Let's talk.",
  btnUrl: "/about/contact-us",
  btnText: "Contact Us",
};

export default function abc() {
  return (
    <>
    </>
  )
}