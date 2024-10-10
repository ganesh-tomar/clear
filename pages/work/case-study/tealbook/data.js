
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
      text: "TealBook",
      link: "",
    },
  ],
  PreNormalText: "Tealbook: Making Supplier Data a",
  HighLightedText: 'Competitive',
  underline: false,
  underLineClass: 'whiteThin',
  HighLightedTextColor: 'text-pink',
  normalText: 'Advantage',
  description:
    "As an innovator in supplier data, TealBook found itself ready to take its business and its brand to the next level. A complete overhaul of its website was the ultimate goal, but the company knew it needed to build a stronger visual and verbal foundation for this upgrade to have maximum impact. Teal Book partnered with Clear Digital to reimagine its visual style, messaging, and website and elevate its smart start-up brand to enterprise-scale sophistication and storytelling.",
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
      itemText: "Motion Graphics & Videos",
      itemUrl: "/our-services/motion-graphics-videos",
    },
    {
      id: 7,
      itemText: "DXP & CMS Platforms",
      itemUrl: "/our-services/dxp-cms-platforms",
    },
    {
      id: 8,
      itemText: "Custom Web Development",
      itemUrl: "/our-services/custom-web-development",
    },
    {
      id: 9,
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
  bgImage: "/tealbook/tealbook-white-logo.svg",
  bgImageAlt: "choesity-white",
  imageUrl: "/tealbook/Horizontal-Split.png",
  imageAlt: "Phones",
  contentName: 'data',
  halfscreen: true,
  animationImage: '/tealbook/animation.png'
}
export const brandedblade = {
  content: [{
    img: "/Clear-Tealbook-Full-1.png",
    imageAlt: "image",
  }]
};
export const imageGrid = {
  content: [
    {
      id: 1,
      smallscreen: false,
      width: '50%',
      height: '100%',
      left: '0',
      top: '0',
      bottom: 'unset',
      bgimg: "/Clear-Tealbook-Half-1.png",
    },
    {
      id: 2,
      smallscreen: false,
      width: '50%',
      height: '100%',
      left: 'unset',
      right: '0',
      top: '0',
      bottom: 'unset',
      bgimg: "/tealbook/tealbook-icon-with-bg.png",
    },
  ],
};
export const brandedbladeVersion = {
  content: [{
    img: "/Clear-Tealbook-Full-2.png",
    imageAlt: "image",
  }]
};
export const brandedbladeVersionTwo = {
  sectionClass: 'revealParallaxBottom',
  content: [{
    img: "/tealbook/full-img-with-pattern.png",
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
      bgimg: "/acemetrix/acemetrix_bg.png",
      alt: 'Dr. WIth Pasent',
      heading: "ACE Metrix Redesign Enhances Visual Impact and Usability",
      description:
        "Strategic redesign enhanced navigation, video content, and cross-device adaptability for ACE Metrix’s website.",
      buttonText: "View all case studies",
      redirect: "public/acemetrix/acemetrix",
      tab: "",
      logo: "/acemetrix/acemetrix_logo.svg",
      hover_logo: "/acemetrix/aceMetrix-logo-white.svg",
    },
    {
      border: true,
      bgimg: '/h2o/h2o_bg.png',
      alt: 'Dr With Pasent',
      heading: "H2O.ai Brand Revamp Highlights Leadership in AI",
      description: "Redefined H2O.ai's brand with detailed guidelines, distinct visuals, and a staged website rollout.",
      buttonText: "View all case studies",
      redirect: "/work/case-study/h2o",
      tab: '',
      logo: '/h2o/h2o-logo-black.svg',
      hover_logo: "/h2o/h2o-logo-white.svg"
    }
  ]
}
export const redirect = {
  content: [
    {
      txt: "Previous case study",
      buttonUrl: "/work/case-study/digimarc",
      props: true
    },
    {
      txt: "Next case study",
      buttonUrl: "/work/case-study/citrix",
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
