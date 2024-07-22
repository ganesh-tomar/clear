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
  underline: true,
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
  bgColor: 'bg-black',
  bgImage: "/couchbase/couchbase-white.svg",
  bgImageAlt: "choesity-white",
  imageUrl: "/couchbase/branded-blade-couchbase.png",
  imageAlt: "Phones",
  contentName: 'data',
  halfscreen: true,
  animationImage: '/couchbase/mobile.png'
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
  content: [{
    img: "/Clear-Couchbase-Full-3.png",
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
}
export const logoWithContent = {
  content: [
    {
      border: true,
      bgimg: '/cardsbg.svg',
      heading: "Digimarc: Product Digitization Solutions",
      description: "Digimarc provides groundbreaking product digitization solutions that help top brands fight counterfeiting, ensure product authenticity, and maintain supply chain traceability—from first touch all the way to recycling.",
      buttonText: "View all case studies",
      redirect: "/work/case-study/digimarc",
      tab: '',
      logo: "/digimarc/digimarc_logo_black.svg",
      hover_logo: "/digimarc/digimarc_logo_white.svg",
    },
    {
      border: true,
      bgimg: '/cardsbg.svg',
      heading: "EA: Custom branded event management system.",
      description: 'Electronic Arts is a leading global interactive entertainment software company.',
      buttonText: "View all case studies",
      redirect: "/work/case-study/electronics-art",
      tab: '',
      logo: '/electronics-art/EA-Sports-Logo.svg',
      hover_logo: "/electronics-art/EA-Sports-Logo_white.svg"
    }
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
