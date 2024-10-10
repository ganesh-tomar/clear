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
      text: "EyeQue",
      link: "",
    },
  ],
  PreNormalText: 'EyeQue: ',
  HighLightedText: "At-home",
  underline: true,
  underLineClass: 'whiteThin',
  HighLightedTextColor: 'text-pink',
  normalText: "Vision Testing",
  description:
    "Eyeque is on a mission to bring affordable eye care to everyone with its revolutionary at- home vision test and personal vision tracker. They came to Clear Digital to give their website a vibrant new look and feel and make it easier for visitors to understand how their products and process work.",
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
      itemText: 'Brand Strategy',
      itemUrl: '/services/brand-strategy',
    },
    {
      id: 2,
      itemText: "Brand Messaging",
      itemUrl: "/our-services/ux-ui-design",
    },
    {
      id: 3,
      itemText: "Visual Identity",
      itemUrl: "/services/creative-content-services",
    },
    {
      id: 4,
      itemText: "Web Experiences",
      itemUrl: "/our-services/web-experiences",
    },
  ],
  linktxt: "",
  linkUrl: "",

  paddingClasses: 'small-padding-bottom',
};

export const imageBlade = {
  sectionClass: 'revealParallaxTop',
  bgColor: 'sm:bg-black',
  bgImage: "/eyeque/eyeque_logo_white.svg",
  bgImageAlt: "choesity-white",
  imageUrl: "/eyeque/Branded-Blade-eyeque.png",
  imageAlt: "Phones",
  contentName: 'data',
  halfscreen: true,
  animationImage: '/eyeque/eyeque-animation.svg'
}

export const brandedblade = {
  sectionClass: '',
  content: [{
    img: '/eyeque/bgpattern-with-laptop.png',
    imageAlt: 'image',
  }],
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
      leftFullHeight: true,
      rightFullHeight: false,
      bgimg: '/eyeque/bg-with-laptop.png',
    },
    {
      id: 2,
      smallscreen: false,
      width: '50%',
      height: '50%',
      left: 'unset',
      right: '0',
      top: '0',
      bottom: 'unset',
      leftFullHeight: false,
      rightFullHeight: false,
      bgimg: '/eyeque/Yodeck-Screens-Eyeque.png',
    },
    {
      id: 3,
      smallscreen: false,
      width: '50%',
      height: '50%',
      left: 'unset',
      right: '0',
      top: 'unset',
      bottom: '0',
      leftFullHeight: false,
      rightFullHeight: false,
      bgimg: '/eyeque/eyeque-MacBook-Silver.png',
    },
  ],

};

export const introduction = {
  content: [
    {
      borderTop: true,
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
      bgimg: "/vocera/vocera_bg.png",
      alt: 'Vocera Systems',
      heading: "Vocera Website Redesign Launches New Brand",
      description:
        "Launched Vocera’s brand with a responsive website, enhancing customer and employee satisfaction across platforms.",
      buttonText: "View all case studies",
      redirect: "/work/case-study/vocera",
      tab: "",
      logo: "/vocera/vocera_logo_black.svg",
      hover_logo: "/vocera/vocera_logo_white.svg",
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
  ],
};
export const redirect = {
  content: [
    {
      txt: "Previous case study",
      buttonUrl: "/work/case-study/wework",
      props: true
    },
    {
      txt: "Next case study",
      buttonUrl: "/work/case-study/riverbed-rebrand",
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
