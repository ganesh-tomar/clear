
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
      text: "Vocera",
      link: "",
    },
  ],
  PreNormalText: "Vocera: A new brand identity across",
  HighLightedText: 'multiple',
  underline: true,
  underLineClass: 'whiteThin',
  HighLightedTextColor: 'text-pink',
  normalText: 'platforms',
  description: "Clear Digital partnered with Vocera, one of the fastest growing mobile technology companies, to redesign their website and launch their new brand. Vocera is widely recognized for developing smarter ways to communicate, resulting in improved patient, customer and employee satisfaction.",
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
      itemText: "Data & Metrics Analytics",
      itemUrl: "/our-services/data-metrics-analytics",
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
      itemText: "Motion Graphics & Videos",
      itemUrl: "/our-services/motion-graphics-videos",
    },
    {
      id: 5,
      itemText: "DXP & CMS Platforms",
      itemUrl: "/our-services/dxp-cms-platforms",
    },
    {
      id: 6,
      itemText: "Custom Web Development",
      itemUrl: "/our-services/custom-web-development",
    },
    {
      id: 7,
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
  bgColor: '',
  bgImage: "/vocera/vocera_logo_black.svg",
  bgImageAlt: "choesity-white",
  imageUrl: "/vocera/vocera-bg.png",
  imageAlt: "Phones",
  contentName: 'data',
  halfscreen: true,
  animationImage: '/vocera/vocera-animation.png'
}
export const brandedblade = {
  content: [{
    img: "/Clear-Vocera-Full-1.png",
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
      bgimg: "/Clear-Vocera-Half-2.png",
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
      bgimg: "/Clear-Vocera-Half-3.png",
    },
  ],

};
export const brandedbladeVersion = {
  sectionClass: 'revealParallaxBottom',
  content: [{
    img: "/Clear-Vocera-Full-2.png",
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
      bgimg: '/eyeque/eyeque-bg.png',
      alt: 'Eyeque hand',
      heading: "EyeQue Website Redesign Increases Pageviews by 28%",
      description: "Revamped EyeQue’s site with dynamic design, animated infographics, and responsive features, increasing engagement.",
      buttonText: "View all case studies",
      redirect: "/work/case-study/eyeque",
      tab: '',
      logo: "/eyeque/eyeque_logo_black.svg",
      hover_logo: "/eyeque/eyeque_logo_white.svg",
    },
    {
      border: true,
      bgimg: '/surescript/surescript_bg.png',
      alt: 'surescript woman',
      heading: "Surescripts Award-Winning Website Redesign Increases Page Views 81%",
      description: "Revamped Surescripts' B2B healthcare site with vibrant design, tailored UX, and optimized content for enhanced engagement.",
      buttonText: "View all case studies",
      redirect: "/work/case-study/surescript",
      tab: '',
      logo: "/surescript/surescripts-logo-black.svg",
      hover_logo: "/surescript/surescripts-logo-white.svg",
    }
  ]
}
export const redirect = {
  content: [
    {
      txt: "Previous case study",
      buttonUrl: "/work/case-study/hoover",
      props: true
    },
    {
      txt: "Next case study",
      buttonUrl: "/work/case-study/silver-peak",
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
