
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
      text: "Cisco",
      link: "",
    },
  ],
  PreNormalText: "Cisco: DNA for Mobility",
  HighLightedText: "launch",
  underline: true,
  HighLightedTextColor: "text-pink",
  normalText: "campaign.",
  description:
    "When IT and networking leader Cisco launched their new Digital Networking Architecture (DNA) software-defined network (SD-WAN) solution, they came to Clear Digital to create dynamic marketing materials that pack a visual punch. Clear Digital worked closely with Cisco to create superior user experiences that are easy to understand and navigate.",
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
  bgColor: 'bg-[#72c0e8]',
  bgImage: "/cisco/cisco_logo_white.svg",
  bgImageAlt: "choesity-white",
  imageUrl: "/cisco/branded-img.png",
  imageAlt: "Phones",
  contentName: 'data',
  halfscreen: true,
  animationImage: '/cisco/Floating-element-cisco.png'
}
export const brandedblade = {
  content: [
    {
      img: "/cisco/clear-cisco-full.png",
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
      bgimg: "/cisco/clear-cisco-half-2.png",
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
      bgimg: "/cisco/clear-cisco-half-3.png",
    },
  ],
};
export const brandedbladeVersion = {
  content: [
    {
      isVideo: true,
      videoUrl: "/cisco/Cisco-systems.mp4",
      // videoThumnailImg: '/cisco/clear-cisco-half-2.png',
      img: "",
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
      heading: "Citrix: Aligning the Brand UX Across Applications",
      description:
        "Citrix provides people-centric solutions that power a better way to work.",
      buttonText: "View all case studies",
      redirect: "/work/case-study/citrix",
      tab: "",
      logo: '/citrix/citrix-logo.svg',
      hover_logo: "/citrix/citrix-logo-white.svg"
    },
    {
      border: true,
      bgimg: "/cardsbg.svg",
      heading: "Couchbase: Powering extroodinary customer engagement",
      description:
        "With its breakthrough approach, Cohesity has changed the enterprise-scale data management conversation.",
      buttonText: "View all case studies",
      redirect: "/work/case-study/couchbase",
      tab: "",
      logo: "/couchbase/couchbase-black.svg",
      hover_logo: "/couchbase/couchbase-white.svg",
    },
  ],
};
export const redirect = {
  content: [
    {
      txt: "Previous case study",
      buttonUrl: "/work/case-study/mini-sandhill",
      props: true,
    },
    {
      txt: "Next case study",
      buttonUrl: "/work/case-study/mcafee",
      props: true,
    },
  ],
};
export const footerCta = {
  bgImg: "/Imagecta.png",
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