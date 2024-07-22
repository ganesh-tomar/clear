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
      text: "Electronics Art",
      link: "",
    },
  ],
  PreNormalText: "EA: ",
  HighLightedText: "Custom branded",
  underline: true,
  normalText: "event management system.",
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
      itemText: "Brand strategy",
      itemUrl: "/services/brand-strategy",
    },
    {
      id: 2,
      itemText: "Motion graphics",
      itemUrl: "/services/motion-graphics-videos",
    },
    {
      id: 3,
      itemText: "Content development",
      itemUrl: "/services/creative-content-services",
    },
    {
      id: 4,
      itemText: "Web development",
      itemUrl: "/services/customer-web-development",
    },
    {
      id: 5,
      itemText: "Creative services",
      itemUrl: "/services/creative-content-services",
    },
  ],
  linktxt: "Gold Addy Award",
  linkUrl: "/about/awards",
  paddingClasses: "small-padding-bottom",
};
export const imageBlade = {
  bgColor: "bg-black",
  bgImage: "/electronics-art/EA-Sports-Logo_white.svg",
  bgImageAlt: "choesity-white",
  imageUrl: "/Phones.png",
  imageAlt: "Phones",
  contentName: 'data',
  halfscreen: true

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
      bgimg: '/Clear-EA-Sports-Quarter-1.png',
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
  content: [{
    img: "/Clear-EA-Sports-Full-3.png",
    imageAlt: "image",
  }]
}

export const introduction = {
  content: [{
    subheading: "Related case studies",
    heading: "Nisl",
    highlightedtext: "pulvinar",
    normaltext: "consectet nec lipsum dolor",
    btntext: "View all case studies",
    buttonUrl: "/work/case-studies",
  }]
};
export const logoWithContent = {
  content: [
    {
      border: true,
      bgimg: '/cardsbg.svg',
      heading: "EyeQue: At-home Vision Testing",
      description: "EyeQue is on a mission to bring affordable eye care to everyone with its revolutionary at-home vision test and personal vision tracker.",
      buttonText: "View all case studies",
      redirect: "/work/case-study/eyeque",
      tab: '',
      logo: "/eyeque/eyeque_logo_black.svg",
      hover_logo: "/eyeque/eyeque_logo_white.svg",
    },
    {
      border: true,
      bgimg: '/cardsbg.svg',
      heading: "H2O: Intelligent design for leading AI provider",
      description: 'When leading AI firm H2O.ai needed to revamp its brand, Clear Digital took the brand and the experience to a whole new level.',
      buttonText: "View all case studies",
      redirect: "/work/case-study/h2o",
      tab: '',
      logo: '/itero_logo.svg',
      hover_logo: "/itero_logo_white.svg"
    }
  ]
}
export const redirect = {
  content: [
    {
      txt: "Previous case study",
      buttonUrl: "/work/case-study/icontrol",
      props: true
    },
    {
      txt: "Next case study",
      buttonUrl: "/work/case-study/drupal",
      props: true
    }
  ]
}
export const footerCta = {
  bgImg: "/Imagecta.png",
  alt: "cta bg",
  subTitle: "Ready to get to work",
  title: "Let's talk.",
  btnUrl: "/about/contact-us",
  btnText: "Contact us",
}

export default function abc() {
  return (
    <>
    </>
  )
}
