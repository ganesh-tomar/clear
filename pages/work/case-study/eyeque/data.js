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
      itemText: 'strategy',
      itemUrl: '/services/brand-strategy',
    },
    {
      id: 2,
      itemText: 'Content',
      itemUrl: '/services/creative-content-services',
    },
    {
      id: 3,
      itemText: 'Creative',
      itemUrl: '/services/creative-content-services',
    },
    {
      id: 4,
      itemText: 'Marketing',
      itemUrl: '#',
    },
    {
      id: 5,
      itemText: 'Development',
      itemUrl: '/services/customer-web-development',
    },
  ],
  linktxt: "Gold Addy Award",
  linkUrl: "about/awards",

  paddingClasses: 'small-padding-bottom',
};
export const imageBlade = {
  bgColor: 'bg-white',
  bgImage: "/eyeque/eyeque_logo.svg",
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
export const brandedblade = {
  content: [{
    img: '/eyeque/bgpattern-with-laptop.png',
    imageAlt: 'image',
  }],
};


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
      bgimg: "/cardsbg.svg",
      heading: "H2O: Intelligent design for leading AI provider",
      description:
        "When leading AI firm H2O.ai needed to revamp its brand, Clear Digital took the brand and the experience to a whole new level.",
      buttonText: "View all case studies",
      redirect: "/work/case-study/h2o",
      tab: "",
      logo: "/vocera.svg",
      hover_logo: "/vocera_white.svg",
    },
    {
      border: true,
      bgimg: "/cardsbg.svg",
      heading: "Heat and Control: Redesign for industry leading product and process technologists.",
      description:
        "Heat and Control is a global leader in designing and manufacturing food processing equipment.",
      buttonText: "View all case studies",
      redirect: "/work/case-study/heat-and-control",
      tab: "",
      logo: "/heat-and-control/clear-heatControl-logo_black.svg",
      hover_logo: "/heat-and-control/clear-heatControl-logo.svg",
    },
  ],
};
export const redirect = {
  content: [
    {
      txt: "Previous case study",
      buttonUrl: "/work/case-study/backyard",
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
