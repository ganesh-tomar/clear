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
      text: "Citrix",
      link: "",
    },
  ],
  PreNormalText: "Citrix:",
  HighLightedText: "Aligning",
  underline: true,
  HighLightedTextColor: "text-pink",
  normalText: "the brand UX across applications.",
  description:
    "Citrix provides people-centric solutions that power a better way to work. With many acquired apps, the UX wasn't cohesive across different solutions and that's not a digital experience.. Citrix came to Clear Digital to help standardize visual styles and document design pattern libraries in Frontify to deliver a simple, customer-centric, consistently branded experience across solutions and screens.",
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
  bgColor: 'bg-[#24aae2]',
  bgImage: "/citrix/citrix-logo.svg",
  bgImageAlt: "choesity-white",
  imageUrl: "/citrix/citrix-fram.png",
  imageAlt: "Phones",
  contentName: 'data',
  halfscreen: true,
  animationImage: '/citrix/floating-citrix.png'

}
export const brandedblade = {
  content: [
    {
      img: "/citrix/clear-citrix-full-1.png",
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
      bgimg: "",
      isVideo: true,
      videoUrl: "/citrix/citrix_mockup_R1.mp4"
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
      bgimg: "",
      isVideo: true,
      videoUrl: "/citrix/citrix_character_R1.mp4"
    },
  ],
};
export const brandedbladeVersion = {
  content: [
    {
      img: "/citrix/clear-citrix-full-2.png",
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
      heading: "Couchbase: Powering extroodinary customer engagement",
      description:
        "With its breakthrough approach, Cohesity has changed the enterprise-scale data management conversation.",
      buttonText: "View all case studies",
      redirect: "/work/case-study/couchbase",
      tab: "",
      logo: "/couchbase/couchbase-black.svg",
      hover_logo: "/couchbase/couchbase-white.svg",
    },
    {
      border: true,
      bgimg: "/cardsbg.svg",
      heading: "Digimarc: Product Digitization Solutions",
      description:
        "Digimarc provides groundbreaking product digitization solutions that help top brands fight counterfeiting, ensure product authenticity, and maintain supply chain traceability—from first touch all the way to recycling.",
      buttonText: "View all case studies",
      redirect: "/work/case-study/digimarc",
      tab: "",
      logo: "/digimarc/digimarc_logo_black.svg",
      hover_logo: "/digimarc/digimarc_logo_white.svg",
    },
  ],
};
export const redirect = {
  content: [
    {
      txt: "Previous case study",
      buttonUrl: "/work/case-study/tealbook",
      props: true,
    },
    {
      txt: "Next case study",
      buttonUrl: "/work/case-study/247",
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