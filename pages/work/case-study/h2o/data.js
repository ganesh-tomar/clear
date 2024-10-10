
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
      text: "H2O.ai",
      link: "",
    },
  ],
  PreNormalText: "H2O: Intelligent design for",
  HighLightedText: "leading",
  underline: true,
  underLineClass: 'whiteThin',
  HighLightedTextColor: "text-pink",
  normalText: "AI provider",
  description:
    "When leading Al firm H2O.ai needed to revamp its brand, Clear Digital took the brand and the experience to a whole new level. H2O.ai's open-source engine is used by over 18,000 organizations globally. As a company known for its impeccable service, H20.ai needed a web experience that aligned with its position and approach. By taking inspiration from the company's existing assets and developing a disciplined digital style guide, we created an ownable website experience that even won an Addy award for cross-platform branding.",
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
      itemText: "Creative & Content Services",
      itemUrl: "/services/creative-content-services",
    },
    {
      id: 4,
      itemText: "Technology Integration",
      itemUrl: "/our-services/technology-integration",
    },
    {
      id: 5,
      itemText: "Custom Web Development",
      itemUrl: "/our-services/custom-web-development",
    },
    {
      id: 6,
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
  bgColor: 'sm:bg-[#000000cc]',
  bgImage: "/h2o/h2o-logo.svg",
  bgImageAlt: "choesity-white",
  imageUrl: "/h2o/bordered-pic.png",
  imageAlt: "Dairies",
  contentName: 'data',
  halfscreen: true,
  animationImage: '/h2o/h2o-children.png'
}
export const colThreeImage = {
  bgColor: 'bg-[#ffe600]',
  content: [
    {
      id: '1',
      img: '/h2o/Type.png',
      imgAlt: 'Typography',
      url: ''
    },
    {
      id: '2',
      img: '/h2o/iconoraphy.png',
      imgAlt: 'iconoraphy',
      url: ''
    },
    {
      id: '3',
      img: '/h2o/logo-mark.png',
      imgAlt: 'Logo Mark',
      url: ''
    },
    {
      id: '4',
      img: '/h2o/wave-graphics.png',
      imgAlt: 'Wave Graphics',
      url: ''
    },
    {
      id: '5',
      img: '/h2o/photography.png',
      imgAlt: 'Photography',
      url: ''
    },
    {
      id: '6',
      img: '/h2o/color.png',
      imgAlt: 'Color',
      url: ''
    }
  ]
}
export const brandedbladeVersion = {
  bgColor: 'bg-black',
  content: [
    {
      img: "/h2o/systems.png",
      imageAlt: "System",
    },
  ],
};
export const brandedbladeVersionTwo = {
  content: [
    {
      img: "/h2o/healthcare_Blog_Image.png",
      imageAlt: "Dr. With Pasent",
    },
  ],
};
export const imageGrid = {
  sectionClass: 'revealParallaxBottom',
  content: [
    {
      id: 1,
      smallscreen: false,
      width: "50%",
      height: "100%",
      left: "0",
      top: "unset",
      bottom: "0",
      bgimg: "/h2o/busStop.png",
      alt: 'H2o Building'
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
      bgimg: "/h2o/imagery_laptop.png",
      alt: 'System'
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
      bgimg: "/acemetrix/acemetrix_bg.png",
      alt: 'Dr. WIth Pasent',
      heading: "ACE Metrix Redesign Enhances Visual Impact and Usability",
      description:
        "Strategic redesign enhanced navigation, video content, and cross-device adaptability for ACE Metrix’s website.",
      buttonText: "View all case studies",
      redirect: "/work/case-study/acemetrix",
      tab: "",
      logo: "/acemetrix/acemetrix_logo.svg",
      hover_logo: "/acemetrix/aceMetrix-logo-white.svg",
    },
    {
      border: true,
      bgimg: "/tealbook/tealbook_bg.png",
      alt: 'Tealbook Robot',
      heading: "TealBook Redesign Boosts Page Views 81%, Secures $50M",
      description:
        "Transformed TealBook’s brand with bold visuals, enhanced messaging, and engaging UX, driving enterprise-level impact.",
      buttonText: "View all case studies",
      redirect: "/work/case-study/tealbook",
      tab: "",
      logo: "/tealbook/tealbook-black-logo.svg",
      hover_logo: "/tealbook/tealbook-white-logo.svg",
    },
  ],
};
export const redirect = {
  content: [
    {
      txt: "Previous case study",
      buttonUrl: "/work/case-study/kount",
      props: true,
    },
    {
      txt: "Next case study",
      buttonUrl: "/work/case-study/wework",
      props: true,
    },
  ],
};
export const footerCta = {
  bgImg: "/image-cta-two.png",
  alt: "Footer Bg",
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