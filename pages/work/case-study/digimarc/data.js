
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
      text: "Digimarc",
      link: "",
    },
  ],
  PreNormalText: "Digimarc: Product",
  HighLightedText: "Digitization",
  underline: true,
  HighLightedTextColor: "text-pink",
  normalText: "Solutions",
  description:
    "Digimarc provides groundbreaking product digitization solutions that help top brands fight counterfeiting, ensure product authenticity, and maintain supply chain traceability-from first touch all the way to recycling. As a pioneer in this space, the company needed a modern, innovative web experience that matches its ethos and vision. They came to Clear Digital to design a site that's bold and engaging with a powerful narrative.",
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
      itemText: "Strategy",
      itemUrl: "/services/brand-strategy",
    },
    {
      id: 2,
      itemText: "Content",
      itemUrl: "/services/creative-content-services",
    },
    {
      id: 3,
      itemText: "Creative",
      itemUrl: "/services/creative-content-services",
    },
    {
      id: 4,
      itemText: "Marketing",
      itemUrl: "#",
    },
    {
      id: 5,
      itemText: "Development",
      itemUrl: "/services/customer-web-development",
    },
  ],
  linktxt: "Gold MarComAward",
  linkUrl: "/about/awards",
  paddingClasses: "small-padding-bottom",
};

export const imageBlade = {
  bgColor: 'bg-black',
  bgImage: "/digimarc/digimarc_logo_white.svg",
  bgImageAlt: "choesity-white",
  imageUrl: "/Phones.png",
  imageAlt: "Phones",
  contentName: 'data',
  halfscreen: true

}

export const newsBlade = {
  content: {
    bgColor: 'bg-gray',
    subTitle: 'Lorem ipsum dolor',
    PreNormalText: '',
    HighLightedText: "27% increase",
    underline: true,
    HighLightedTextColor: 'text-pink',
    underLineClass: 'black',
    normalText: "in click-through rates",

    dark: true,
    description: "Clear Digital's website redesign and development of Digimarc's website immediately boosted its click-through rates by an impressive 27%, delivering increased engagement.",
  },
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
      bgimg: '/digimarc/girl-with-book.png',
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
      bgimg: '/digimarc/fruit-with-logo.png',
    },
  ],
};
export const brandedblade = {
  bgColor: 'bg-black',
  content: [
    {
      img: "/digimarc/mask-group.png",
      imageAlt: "image",
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
      bgimg: "/cardsbg.svg",
      heading: "EA: Custom branded event management system.",
      description:
        "Electronic Arts is a leading global interactive entertainment software company.",
      buttonText: "View all case studies",
      redirect: "/work/case-study/electronics-art",
      tab: "",
      logo: '/electronics-art/EA-Sports-Logo.svg',
      hover_logo: "/electronics-art/EA-Sports-Logo_white.svg"
    },
    {
      border: true,
      bgimg: "/cardsbg.svg",
      heading: "EyeQue: At-home Vision Testing",
      description:
        "EyeQue is on a mission to bring affordable eye care to everyone with its revolutionary at-home vision test and personal vision tracker.",
      buttonText: "View all case studies",
      redirect: "/work/case-study/eyeque",
      tab: "",
      logo: "/eyeque/eyeque_logo_black.svg",
      hover_logo: "/eyeque/eyeque_logo_white.svg",
    },
  ],
};
export const redirect = {
  content: [
    {
      txt: "Previous case study",
      buttonUrl: "/work/case-study/cohesity",
      props: true,
    },
    {
      txt: "Next case study",
      buttonUrl: "/work/case-study/tealbook",
      props: true,
    },
  ],
};
export const footerCta = {
  bgImg: "/h2o/footerCTA-image.png",
  alt: "cta bg",
  subTitle: "Ready to get to work?",
  title: "Let's talk.",
  btnUrl: "/about/contact-us",
  btnText: "Contact us",
};

export default function abc() {
  return (
    <>
    </>
  )
}