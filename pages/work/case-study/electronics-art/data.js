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
      text: "EA",
      link: "",
    },
  ],
  PreNormalText: "EA: Custom branded event management",
  HighLightedText: "system",
  underline: true,
  underLineClass: '',
  normalText: "",
  HighLightedTextColor: "text-pink",
  description:
    "Electronic Arts is a leading global interactive entertainment software company. EA delivers games, content and online services for Internet-connected consoles, personal computers, mobile phones and tablets. Clear Digital worked with EA to create a unique event registration and management system. The EA event management system prints tickets for all attendees for fast and easy check-in. With quick QR recognition on the mobile application for the event manager, tracking attendance is a snap.",
  dark__overlay: true,
  bgcolor: "bg-black",
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
      id: 2,
      itemText: "Campaigns & Marketing",
      itemUrl: "/our-services/campaigns-marketing",
    },
    {
      id: 3,
      itemText: "Custom Web Development",
			itemUrl: "/our-services/custom-web-development",
    },
  ],
  linktxt: "",
  linkUrl: "",
  paddingClasses: "small-padding-bottom",
};
export const imageBlade = {
  bgColor: 'sm:bg-black',
  sectionClass: 'revealParallaxTop',
  bgImage: "/electronics-art/EA-Sports-Logo_white.svg",
  bgImageAlt: "choesity-white",
  imageUrl: "/electronics-art/Branded-blade.png",
  imageAlt: "Icons WIth Logo",
  contentName: 'data',
  halfscreen: false,
  animationImage: '/electronics-art/Clear-EA-Sports-Laptop-1.png',
  animationFramImg: '',
  animationVideo: ''
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
      bgimg: '/electronics-art/Clear-EA-Sports-Quarter-1.png',
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
      bgimg: '/Clear-EA-Sports-Quarter-2.png',
    },
  ],
};
export const brandedblade = {
  content: [{
    img: "/Clear-EA-Sports-Half-1.png",
    imageAlt: "image",
  }]
}
export const brandedbladeVersion = {
  sectionClass: 'revealParallaxBottom',
  content: [{
    img: "/Clear-EA-Sports-Full-3.png",
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
      bgimg: '/electronics-art/ea_bg.png',
      alt: 'Electronics Mobile',
      heading: "EyeQue Website Redesign Increases Pageviews by 28%",
      description: "Revamped EyeQue’s site with dynamic design, animated infographics, and responsive features, increasing engagement.",
      buttonText: "View all case studies",
      redirect: "/work/case-study/eyeque",
      tab: '',
      logo: "/eyeque/eyeque_logo_black.svg",
      hover_logo: "/eyeque/eyeque_logo_white.svg",
    },
  ]
}
export const redirect = {
  content: [
    {
      txt: "Previous case study",
      buttonUrl: "/work/case-study/silver-peak",
      props: true
    },
    {
      txt: "Next case study",
      buttonUrl: "/work/case-study/usamp",
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
