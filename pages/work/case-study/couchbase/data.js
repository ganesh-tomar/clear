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
      text: "Couchbase",
      link: "",
    },
  ],
  PreNormalText: "Couchbase: Powering",
  HighLightedText: "extroodinary",
  underline: false,
  underLineClass: 'whiteThin',
  normalText: "customer engagement",
  HighLightedTextColor: "text-pink",
  description:
    "Couchbase helps some of the world's largest enterprises deliver extraordinary digital experiences by powering the fastest Big Data streaming. They came to Clear Digital for a streamlined site and a fresh new look. With an eye on delivering the same superior customer experience that Couchbase enables, Clear Digital designed a clean, intuitive site that's as cutting-edge as their data platform.",
  dark__overlay: true,
  bgcolor: "bg-black",
  vector: "",
  backgroundImage: "",
  dark: false,
  max: "",
  blacklogo: false,
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
      itemText: "Creative & Content Services",
      itemUrl: "/services/creative-content-services",
    },
    {
      id: 4,
      itemText: "Motion Graphics & Videos",
      itemUrl: "/our-services/motion-graphics-videos",
    },
    {
      id: 5,
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
  bgImage: "/couchbase/couchbase-white.svg",
  bgImageAlt: "choesity-white",
  imageUrl: "/couchbase/branded-blade-couchbase.png",
  imageAlt: "Phones",
  contentName: 'data',
  halfscreen: true,
  animationImage: '/couchbase/animation_img.png'
}
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
      bgimg: '/Clear-Couchbase-Half-1.png',
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
      bgimg: '/Clear-Couchbase-Half-2.png',
    },
  ],
};
export const brandedblade = {
  sectionClass: 'revealParallaxBottom',
  content: [{
    img: "/Clear-Couchbase-Full-3.png",
    imageAlt: "image",
  }]
}
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
      bgimg: '/cisco/cisco_bg.png',
      alt: 'Ipad cisco',
      heading: "Cisco Mobility for DNA Campaign Features VR + Video Experience",
      description: "Developed interactive, responsive, and VR-infused materials to enhance user engagement for Cisco's DNA solution.",
      buttonText: "View all case studies",
      redirect: "/work/case-study/cicsco",
      tab: '',
      logo: "/cisco/cisco_logo_black.svg",
      hover_logo: "/cisco/cisco_logo_white.svg",
    },
    {
      border: true,
      bgimg: '/hortonworks/hotonworks.png',
      alt: 'Mobile hotonworks',
      heading: "Hortonworks Site Redesign Launches New Brand",
      description: "Designed a responsive website with dynamic infographics and strategic navigation, effectively launching Hortonworks' new brand.",
      buttonText: "View all case studies",
      redirect: "/work/case-study/hortonworks",
      tab: '',
      logo: '/hortonworks/hortonworks-logo_black.svg',
      hover_logo: "/hortonworks/hortonworks-logo_white.svg"
    },
    {
      border: true,
      bgimg: "/sailpoint/sailpoint-bg.png",
      alt: 'Sail point line ',
      heading: "SailPoint Collaborative Website Redesign Introduces New Brand",
      description:
        "Revamped SailPoint's site with a comprehensive design system, content, and targeted user flows for better engagement.",
      buttonText: "View all case studies",
      redirect: "/work/case-study/sailpoint",
      tab: "",
      logo: "/sailpoint/sailpoint_logo_black.svg",
      hover_logo: "/sailpoint/sailpoint_logo_white.svg",
    },
    {
      border: true,
      bgimg: "/china/china-bg.png",
      alt: 'Earth china Bg',
      heading: "China Telecom Website Boosts User Session Duration 210%",
      description:
        "Transformed CTA’s digital presence with a modern, unified site, enhancing global reach and storytelling impact.",
      buttonText: "View all case studies",
      redirect: "/work/case-study/china-telecom",
      tab: "",
      logo: "/china/china-logo-black.svg",
      hover_logo: "/china/china-logo-white.svg",
    },
    {
      border: true,
      bgimg: "/cohesity/cohesity_bg.png",
      alt: 'Cohesity man',
      heading: "Cohesity Rebrand Drives $3.7B Valuation",
      description:
        "Collaborated with Cohesity to modernize their brand, enhancing digital presence and driving significant funding success.",
      buttonText: "View all case studies",
      redirect: "/work/case-study/cohesity",
      tab: "",
      logo: "/cohesity/cohesity_logo-white.svg",
      hover_logo: "/cohesity/cohesity_logo-black.svg",
    },
  ]
}
export const redirect = {
  content: [
    {
      txt: "Previous case study",
      buttonUrl: "/work/case-study/poka",
      props: true
    },
    {
      txt: "Next case study",
      buttonUrl: "/work/case-study/intel",
      props: true
    }
  ]
}
export const footerCta = {
  bgImg: "/image-cta-two.png",
  alt: "cta bg",
  subTitle: "Ready to get to work",
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
