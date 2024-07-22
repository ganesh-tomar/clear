
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
      text: "H2O",
      link: "",
    },
  ],
  PreNormalText: "H2O: Intelligent design for",
  HighLightedText: "leading",
  underline: true,
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
      itemText: "Strategy",
      itemUrl: "/services/brand-strategy",
    },
    {
      id: 2,
      itemText: "Marketing",
      itemUrl: "#",
    },
    {
      id: 3,
      itemText: "Creative",
      itemUrl: "/services/creative-content-services",
    },
    {
      id: 4,
      itemText: "Development",
      itemUrl: "/services/customer-web-development",
    },
  ],
  linktxt: "Gold Addy Award",
  linkUrl: "/about/awards",
  paddingClasses: "small-padding-bottom",
};
export const imageBlade = {
  bgColor: 'bg-[#000000cc]',
  bgImage: "/h2o/h2o-logo.svg",
  bgImageAlt: "choesity-white",
  imageUrl: "/h2o/bordered-pic.png",
  imageAlt: "Phones",
  contentName: 'data',
  halfscreen: true,
  animationImage: '/h2o/h2o-children.png'
}
// export const brandedblade = {
//   bgColor: 'bg-[#ffe600]',
//   content: [
//     {
//       img: "/h2o/bg-with-imgaes.png",
//       imageAlt: "image",
//     },
//   ],
// };
export const colThreeImage = {
  bgColor: 'bg-[#ffe600]',
  content: [
    {
      id: '1',
      img: '/h2o/Type.svg',
      imgAlt: 'Card One',
      url: ''
    },
    {
      id: '2',
      img: '/h2o/iconoraphy.png',
      imgAlt: 'Card Two',
      url: ''
    },
    {
      id: '3',
      img: '/h2o/logo-mark.svg',
      imgAlt: 'Card Three',
      url: ''
    },
    {
      id: '4',
      img: '/h2o/wave-graphics.svg',
      imgAlt: 'Card Three',
      url: ''
    },
    {
      id: '5',
      img: '/h2o/photography.svg',
      imgAlt: 'Card Three',
      url: ''
    },
    {
      id: '6',
      img: '/h2o/color.svg',
      imgAlt: 'Card Three',
      url: ''
    }
  ]
}
export const brandedbladeVersion = {
  bgColor: 'bg-black',
  content: [
    {
      img: "/h2o/systems.png",
      imageAlt: "image",
    },
  ],
};
export const brandedbladeVersionTwo = {
  content: [
    {
      img: "/h2o/healthcare_Blog_Image.png",
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
      bgimg: "/h2o/busStop.png",
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
      heading: "Heat and Control: Redesign for industry leading product and process technologists.",
      description:
        "Heat and Control is a global leader in designing and manufacturing food processing equipment.",
      buttonText: "View all case studies",
      redirect: "/work/case-study/heat-and-control",
      tab: "",
      logo: "/heat-and-control/clear-heatControl-logo_black.svg",
      hover_logo: "/heat-and-control/clear-heatControl-logo.svg",
    },
    {
      border: true,
      bgimg: "/cardsbg.svg",
      heading: "Hortonworks: Website Redesign and Brand Launch.",
      description:
        "Hortonworks, a leader in big data management, chose their website as the best way to launch their new visual brand, and chose Clear Digital for the redesign.",
      buttonText: "View all case studies",
      redirect: "/work/case-study/hortonworks",
      tab: "",
      logo: "/hortonworks/hortonworks-logo_black.svg",
      hover_logo: "/hortonworks/hortonworks-logo_white.svg",
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
      buttonUrl: "/work/case-study/backyard",
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