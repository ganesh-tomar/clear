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
      text: "Hortonworks",
      link: "",
    },
  ],
  PreNormalText: 'Hortonworks: Website Redesign and Brand',
  HighLightedText: "Launch",
  underline: true,
  underLineClass: '',
  HighLightedTextColor: 'text-pink',
  normalText: "",
  description:
    "Hortonworks, a leader in big data management, chose their website as the best way to launch their new visual brand, and chose Clear Digital for the redesign. And in part because Hortonworks is a leader in open source development, Clear Digital opted to build the site using WordPress, a robust open source solution for content management. The Clear Digital team took the time to think through the site's design for every platform, taking into consideration interaction models and whether screens are touch-enabled.",
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
      itemText: "Motion Graphics & Videos",
      itemUrl: "/our-services/motion-graphics-videos",
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

  paddingClasses: 'small-padding-bottom',
};
export const imageBlade = {
  sectionClass: 'revealParallaxTop',
  bgColor: 'sm:bg-black',
  bgImage: "/hortonworks/hortonworks-logo_white.svg",
  bgImageAlt: "Hoover",
  imageUrl: "/hortonworks/Hortonworks_Parallax.png",
  imageAlt: "Phones",
  contentName: 'data',
  halfscreen: true,
  animationImage: '/hortonworks/branded-animation.png'
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
      bgimg: '/Clear-Hortonworks-Half-1.png',
      alt: 'Logo With Ofc'
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
      bgimg: '/Clear-Hortonworks-Half-2.png',
      alt: 'Computer With Logo'
    },
  ],
};
export const brandedblade = {
  sectionClass: 'revealParallaxBottom',
  content: [{
    img: "/Clear-Hortonworks-Full-2.png",
    imageAlt: "Full Phone",
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
      bgimg: "/cisco/cisco_bg.png",
      alt: 'Ipad cisco',
      heading: "Cisco Mobility for DNA Campaign Features VR + Video Experience",
      description:
        "Developed interactive, responsive, and VR-infused materials to enhance user engagement for Cisco's DNA solution.",
      buttonText: "View all case studies",
      redirect: "/work/case-study/cisco",
      tab: "",
      logo: "/cisco/cisco_logo_black.svg",
      hover_logo: "/cisco/cisco_logo_white.svg",
    },
    {
      border: true,
      bgimg: '/couchbase/couchbase_bg.png',
      alt: 'Couchbase Laptop',
      heading: "Couchbase Website Redesign Boosts Engagement and Usability",
      description: 'Designed a responsive, intuitive site with streamlined architecture, strategic narratives, and modern UI for Couchbase.',
      redirect: "/work/case-study/couchbase",
      tab: '',
      logo: "/couchbase/couchbase-black.svg",
      hover_logo: "/couchbase/couchbase-white.svg",
    },
    {
      border: true,
      bgimg: "/china/china-bg.png",
      alt: 'China earth',
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
      bgimg: '/splunk/splunk-bg.png',
      alt: 'splunk logo with man',
      heading: "Splunk Website Redesign Enhances UX and Streamlines Navigation",
      description: "Revamped Splunk’s site with innovative design, user journey mapping, and refined narratives.",
      buttonText: "View all case studies",
      redirect: "/work/case-study/splunk",
      tab: '',
      logo: '/splunk/splunk-logo.svg',
      hover_logo: "/splunk/splunk-logo-white.svg"
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
  ],
};
export const redirect = {
  content: [
    {
      txt: "Previous case study",
      buttonUrl: "/work/case-study/intel",
      props: true
    },
    {
      txt: "Next case study",
      buttonUrl: "/work/case-study/acemetrix",
      props: true
    }
  ]
}
export const footerCta = {
  bgImg: "/image-cta-two.png",
  alt: "Footer Cta",
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
