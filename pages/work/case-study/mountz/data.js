export const heroBanner = {
  breadcrumbs: [
    {
      id: 1,
      text: "Work",
      link: "/work",
    },
    {
      id: 2,
      text: "Case Study",
      link: "/work/case-studies",
    },
    {
      id: 3,
      text: "Mountz",
      link: "",
    },
  ],
  PreNormalText: 'Mountz: Torque tools  ',
  HighLightedText: 'engineered',
  underline: true,
  underLineClass: 'whiteThin',
  HighLightedTextColor: 'text-pink',
  normalText: 'in Silicon Valley',
  description:
    "When Mountz, Inc., The Torque Tool Specialists came to Clear Digital wanting to develop a visual brand that better reflected their leadership in the torque market and their Silicon Valley heritage, we were ready. From their global reach to their product innovations, Mountz has long been a leader in the tool market. From a new logo and visual style, to web templates that would help shape the look of their new, first-of-its-kind e-commerce website, the Clear Digital team played an active role in shaping this big relaunch.",
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
  ],
  linktxt: '',
  linkUrl: '',

  paddingClasses: 'small-padding-bottom',
};
export const imageBlade = {
  sectionClass: 'revealParallaxTop',
  bgColor: 'sm:bg-white',
  bgImage: "/mountz/mountz_logo_black.svg",
  bgImageAlt: "choesity-white",
  imageUrl: "/mountz/Mountz_Parallax.png",
  imageAlt: "Phones",
  contentName: 'data',
  halfscreen: true,
  animationImage: '/mountz/mountz-animation.png'
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
      bgimg: '/Clear-Mountz-Quarter-3.png',
    },
    {
      id: 2,
      smallscreen: false,
      width: '50%',
      height: '50%',
      left: '0',
      right: 'unset',
      top: 'unset',
      bottom: '0',
      leftFullHeight: false,
      rightFullHeight: false,
      bgimg: '/Clear-Mountz-Quarter-4.png',
    },
    {
      id: 3,
      smallscreen: false,
      width: '50%',
      height: '100%',
      left: 'unset',
      right: '0',
      top: '0',
      bottom: '0',
      leftFullHeight: false,
      rightFullHeight: true,
      bgimg: '/Clear-Mountz-Half-2.png',
    },
  ],
};

export const brandedblade = {
  content: [{
    img: "/Clear-Mountz-Full-1.png",
    imageAlt: "image",
  }]
}
export const brandedbladeVersion = {
  sectionClass: 'revealParallaxBottom',
  content: [{
    img: '/Clear-Mountz-Full-2.png',
    imageAlt: 'image',
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
      bgimg: '/heat-and-control/heat_and_control-bg.png',
      alt: 'Heat and Control',
      heading: "Heat and Control Redesign Boosts Legacy Brand and Reach",
      description: 'Engineered a robust, intuitive web platform with advanced search and regional customization, strengthening brand engagement.',
      buttonText: "View all case studies",
      redirect: "/work/case-study/heat-and-control",
      tab: '',
      logo: '/heat-and-control/clear-heatControl-logo_black.svg',
      hover_logo: "/heat-and-control/clear-heatControl-logo.svg"
    },
  ]
}
export const redirect = {
  content: [
    {
      txt: "Previous case study",
      buttonUrl: "/work/case-study/agari",
      props: true
    },
    {
      txt: "Next case study",
      buttonUrl: "/work/case-study/heat-and-control",
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
