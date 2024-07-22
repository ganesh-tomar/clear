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
      text: "Mini Detail",
      link: "",
    },
  ],
  PreNormalText: "Cohesity: Data management realigned and ",
  HighLightedText: "redefined",
  underline: true,
  normalText: "",
  HighLightedTextColor: "text-pink",
  description:
    "With its breakthrough approach, Cohesity has changed the enterprise-scale data management conversation. From its start-up roots, the company has matured and expanded its reach, and found itself in need of a brand refresh to better capture its modern, market-leading solutions. With a long-standing relationship with Clear Digital, the company knew who to come to for help updating its logo, refining the brand look and feel, and humanizing its digital presence.",
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
  bgColor: 'bg-[#376BC3]',
  bgImage: "/cohesity/cohesity_white_logo.svg",
  bgImageAlt: "choesity-white",
  imageUrl: "/Phones.png",
  imageAlt: "Phones",
  contentName: 'data',
  halfscreen: true
}
export const newsBlade = {
  content: {
    subTitle: 'Lorem ipsum dolor',
    PreNormalText: '',
    HighLightedText: "$250 million ",
    underline: true,
    HighLightedTextColor: 'text-pink',
    normalText: "in Series E funding",
    underLineClass: 'black',
    dark: true,
    description: "Cohesity receives a significant funding boost shortly after a successful rebranding partnership with Clear Digital, solidifying its position in the industry with a fresh identity and new web experience.",
  },
};

export const brandedblade = {
  content: [
    {
      img: "/cohesity/COH20020_photography.png",
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
      height: "100%",
      left: "0",
      top: "unset",
      bottom: "0",
      bgimg: "/cohesity/building.png",
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
      bgimg: "/cohesity/image-2.png",
    },
  ],
};

export const introduction = {
  content: [
    {
      subheading: "Related case studies",
      heading: "Nisl",
      highlightedtext: "pulvinar",
      normaltext: "consectet nec lipsum dolor",
      btntext: "View all case studies",
      buttonUrl: "/work/case-studies",
    },
  ],
};

export const logoWithContent = {
  content: [
    {
      border: true,
      bgimg: '/cardsbg.svg',
      heading: "80% vel consequat est. Donec semper neque quam eget.",
      description: "Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.",
      redirect: "/work/case-study/mcafee",
      tab: '',
      logo: '/vocera.svg',
      hover_logo: "/vocera_white.svg"
    },
    {
      border: true,
      bgimg: '/cardsbg.svg',
      heading: "80% vel consequat est. Donec semper neque quam eget.",
      description: 'Torem ipsum dolor sit amet, consectetur adipiscing at elit. Nunc vulputate libero dolore aliqua et.',
      tab: '',
      logo: '/mini-sandhill/sand-hill-white-logo_black.svg',
      hover_logo: "/mini-sandhill/sand-hill-white-logo.svg"
    }
  ]
}
export const redirect = {
  content: [
    {
      txt: "Previous case study",
      buttonUrl: "/work/case-study/electronics-art",
      props: true
    },
    {
      txt: "Next case study",
      buttonUrl: "/work/case-study/mcafee",
      props: true
    }
  ]
}
export const footerCta = {
  bgImg: "/h2o/footerCTA-image.png",
  alt: "cta bg",
  subTitle: "Ready to get to work?",
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