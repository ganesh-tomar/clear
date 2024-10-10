
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
      text: "[24]7.ai",
      link: "",
    },
  ],
  PreNormalText: "[24]7.ai: The Digital Performance Company",
  HighLightedText: "",
  underline: true,
  underLineClass: 'whiteThin',
  HighLightedTextColor: "text-pink",
  normalText: "",
  description:
    "[24]7.ai is a company dedicated to redefining customer experiences with conversational AI. Because the company’s business is wholly focused on powerful interactions, it needed a website that reflected its brand promise and felt more client-centric. Following an update to the brand, [24]7 asked Clear Digital to redesign its dated website and collaborate closely with its internal team on a refreshed user journey aligned with the company commitment to engagement.",
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
      itemUrl: "/services/brand-strategy",
    },
    {
      id: 2,
      itemText: "UX/UI Design",
      itemUrl: "/our-services/ux-ui-design",
    },
    {
      id: 3,
      itemText: "Creative & Content Services",
      itemUrl: "/services/creative-content-services",
    },
    {
      id: 4,
      itemText: "DXP & CMS Platforms",
      itemUrl: "/our-services/dxp-cms-platforms",
    },
    {
      id: 5,
      itemText: "Technology Integration",
      itemUrl: "/our-services/technology-integration",
    },
    {
      id: 6,
      itemText: "Custom Web Development",
      itemUrl: "/our-services/custom-web-development",
    },
  ],
  linktxt: "",
  linkUrl: "",
  paddingClasses: "small-padding-bottom",
};
export const imageBlade = {
  sectionClass: 'revealParallaxTop',
  bgColor: 'sm:bg-[#03b0dd]',
  bgImage: "/247/247_logo_white.svg",
  bgImageAlt: "choesity-white",
  imageUrl: "/247/Branded-blade.png",
  imageAlt: "Phones",
  contentName: 'data',
  halfscreen: true,
  animationImage: '/247/floating_element.png'
}
export const brandedblade = {
  content: [
    {
      img: "/247/clear-247-full-2.png",
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
      bgimg: "/247/clear-247-half-1.png",
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
      bgimg: "/247/clear-247-half-2.png",
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
      bgimg: "/247/bgWithMobile.png",
    },
  ],
};
export const brandedbladeVersion = {
  sectionClass: 'revealAnimationBottom',
  content: [
    {
      isVideo: true,
      videoUrl: "/247/devices_mockup.mp4",
      img: '',
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
      borderTop: true
    },
  ],
};
export const logoWithContent = {
  content: [
    {
      border: true,
      bgimg: "/viral-nation/phone-with-girl.png",
      alt: 'phone with image',
      heading: "Viral Nation's Award-Winning Website Redesign Increases Conversions 104%",
      description:
        "Transformed Viral Nation’s brand with a new visual indentity and website UX, expanding its B2B focus and offerings.",
      buttonText: "View all case studies",
      redirect: "/work/case-study/viral-nation",
      tab: "",
      logo: "/viral-nation/viralnation_black_logo.svg",
      hover_logo: "/viral-nation/VN_Logo_White.svg",
    },
  ],
};
export const redirect = {
  content: [
    {
      txt: "Previous case study",
      buttonUrl: "/work/case-study/citrix",
      props: true,
    },
    {
      txt: "Next case study",
      buttonUrl: "/work/case-study/leadspace",
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