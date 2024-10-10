
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
      text: "Hoover",
      link: "",
    },
  ],
  PreNormalText: "Hoover Institute: Enhanced digital strategy for an enhanced visitor experience.",
  HighLightedText: "",
  underline: false,
  underLineClass: 'whiteThin',
  HighLightedTextColor: "text-pink",
  normalText: "",
  description: "A new visual design enhances the visitor experience, and the architecture renovation makes the site easy to manage for Hoover. Clear Digital worked closely with the organization to define a new structure that simplifies site navigation and improves access to the wide range of information.",
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
      itemText: "Visual Identity",
      itemUrl: "/services/creative-content-services",
    },
    {
      id: 2,
      itemText: "Web Experiences",
      itemUrl: "/our-services/web-experiences",
    },
    {
      id: 3,
      itemText: "UX/UI Design",
      itemUrl: "/our-services/ux-ui-design",
    },
    {
      id: 4,
      itemText: "Creative & Content Services",
      itemUrl: "/services/creative-content-services",
    },
    {
      id: 5,
      itemText: "Motion Graphics & Videos",
      itemUrl: "/our-services/motion-graphics-videos",
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
  linktxt: "",
  linkUrl: "",
  paddingClasses: "small-padding-bottom",
};
export const imageBlade = {
  sectionClass: 'revealParallaxTop',
  bgColor: 'sm:bg-black',
  bgImage: "/hoover/hoover_logo.svg",
  bgImageAlt: "Hoover",
  imageUrl: "/hoover/Branded_Blade.png",
  imageAlt: "Phones",
  contentName: 'data',
  halfscreen: true,
  animationImage: '/hoover/animation-img.png'
}
export const brandedblade = {
  content: [
    {
      img: "/hoover/Block.png",
      imageAlt: "image",
    },
  ],
};
export const brandedbladeVersionOne = {
  content: [
    {
      img: "/hoover/blade_img.png",
      imageAlt: "image",
    },
  ],
};
export const imageGrid = {
  content: [
    {
      id: 1,
      smallscreen: false,
      width: "50%",
      height: "50%",
      left: "0",
      top: "0",
      bottom: "unset",
      leftFullHeight: false,
      rightFullHeight: false,
      bgimg: "/hoover/grid_one.png",
    },
    {
      id: 2,
      smallscreen: false,
      width: "50%",
      height: "50%",
      left: "0",
      top: "unset",
      bottom: "0",
      leftFullHeight: false,
      rightFullHeight: false,
      bgimg: "/hoover/logo-with-bg.png",
    },
  ],
};
export const brandedbladeVersion = {
  sectionClass: 'revealParallaxBottom',
  content: [
    {
      isVideo: false,
      videoUrl: "",
      img: '/hoover/Block-two.png',
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
      bgimg: "/cardsbg.png",
      alt: 'cardsbg ',
      heading: "Ace Metrix: An impactful redesign to boost engagement.",
      description:
        "Ace Metrix provides qualitative and quantitative assessment of video advertising for companies and creative agencies.",
      buttonText: "View all case studies",
      redirect: "/work/case-study/acemetrix",
      tab: "",
      logo: "/acemetrix/aceMetrix-logo-black2.svg",
      hover_logo: "/acemetrix/aceMetrix-logo-white.svg",
    },
    {
      border: true,
      bgimg: "/cardsbg.png",
      alt: 'cardsbg',
      heading: "Agari: The Next Generation Secure Email Cloud",
      description:
        "Agari is advancing email security by using predictive AI modeling to prevent attacks and ensure humanity prevails over evil.",
      buttonText: "View all case studies",
      redirect: "/work/case-study/agari",
      tab: "",
      logo: "/agari-logo-black.svg",
      hover_logo: "/agari-logo-white.svg",
    },
  ],
};
export const redirect = {
  content: [
    {
      txt: "Previous case study",
      buttonUrl: "/work/case-study/acemetrix",
      props: true,
    },
    {
      txt: "Next case study",
      buttonUrl: "/work/case-study/vocera",
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