
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
      text: "Heated And Control",
      link: "",
    },
  ],
  PreNormalText: "Heat and Control: Redesign for",
  HighLightedText: "industry leading",
  underline: true,
  underLineClass: 'whiteThin',
  HighLightedTextColor: "text-pink",
  normalText: "product and process technologists",
  description:
    "Heat and Control is a global leader in designing and manufacturing food processing equipment. With a long heritage of innovation and precision engineering, the company has a vast line of products and capabilities. But its website was outdated and hard to navigate. Heat and Control came to Clear Digital to build a new site from the ground up that would showcase their industry-leading products and solutions, while making it easy and intuitive for visitors to find exactly what they're looking for.",
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
      itemText: "Web Experiences",
      itemUrl: "/our-services/web-experiences",
    },
    {
      id: 2,
      itemText: "UX/UI Design",
      itemUrl: "/our-services/ux-ui-design",
    },
    {
      id: 3,
      itemText: "Technology Integration",
      itemUrl: "/our-services/technology-integration",
    },
    {
      id: 4,
      itemText: "Custom Web Development",
      itemUrl: "/our-services/custom-web-development",
    },
    {
      id: 5,
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
  bgColor: 'sm:bg-[#e52729]',
  bgImage: "/heat-and-control/clear-heatControl-logo.svg",
  bgImageAlt: "choesity-white",
  imageUrl: "/heat-and-control/Branded-blade-heat.png",
  imageAlt: "Icons WIth Logo",
  contentName: 'data',
  halfscreen: false,
  animationImage: '/heat-and-control/Clear-HeatControl-Hero-1.png',
  animationFramImg: '',
  animationAlt: 'red Soup',
  animationVideo: ''
}
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
      bgimg: "/heat-and-control/clear-heatControl-quarter-1.png",
      alt: 'testing'
    },
    {
      id: 2,
      smallscreen: false,
      width: "50%",
      height: "50%",
      right: "0",
      left: "0",
      top: "unset",
      bottom: "0",
      leftFullHeight: false,
      rightFullHeight: false,
      bgimg: "/heat-and-control/clear-heatControl-quarter-2.png",
      alt: 'chain route'
    },
    {
      id: 3,
      smallscreen: false,
      width: "50%",
      height: "100%",
      right: "0",
      left: "unset",
      top: "unset",
      bottom: "0",
      leftFullHeight: false,
      rightFullHeight: true,
      bgimg: "/heat-and-control/clear-heatControl-half-1.png",
      alt: 'Half computer'
    }
  ],
};
export const brandedblade = {
  content: [
    {
      img: "",
      isVideo: true,
      videoUrl: "/heat-and-control/clear-heatControl-video-web.mp4",
      imageAlt: "image",
    },
  ],
};
export const imageGridVersion = {
  content: [
    {
      id: 1,
      smallscreen: false,
      width: "50%",
      height: "100%",
      left: "0",
      top: "unset",
      bottom: "0",
      bgimg: "/heat-and-control/clear-heatControl-quarter-3.png",
    },
    {
      id: 2,
      smallscreen: false,
      width: "50%",
      height: "100%",
      right: "0",
      left: "unset",
      top: "unset",
      bottom: "0",
      bgimg: "/heat-and-control/multi-icons.png",
    },
  ],
};
export const brandedbladeVersion = {
  sectionClass: 'revealParallaxBottom',
  content: [
    {
      img: "/heat-and-control/clear-heatControl-full-2.png",
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
      bgimg: "/mountz/mountz_bg.png",
      alt: 'Mountz Noble',
      heading: "Mountz Brand Refresh Showcases Silicon Valley Heritage and Innovation",
      description:
        "Revitalized Mountz’s brand with a modern logo, distinct style guide, and first-of-its-kind e-commerce site launch.",
      buttonText: "View all case studies",
      redirect: "/work/case-study/mountz",
      tab: "",
      logo: "/mountz/mountz_logo_black.svg",
      hover_logo: "/mountz/mountz_logo_white.svg",
    },
  ],
};
export const redirect = {
  content: [
    {
      txt: "Previous case study",
      buttonUrl: "/work/case-study/mountz",
      props: true,
    },
    {
      txt: "Next case study",
      buttonUrl: "/work/case-study/kount",
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