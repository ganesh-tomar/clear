
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
      text: "Intel",
      link: "",
    },
  ],
  PreNormalText: "Intel Security: Enriching digital experiences.",
  HighLightedText: "",
  underline: true,
  HighLightedTextColor: "text-pink",
  normalText: "",
  description:
    "When tech giant Intel created their Intel Security division by acquiring security leader McAfee, Inc., they came to Clear Digital to design a new website and update some of their digital products. Their goals were to evolve their brand, create a richer, more engaging experience for users, all while driving sales of subscription offerings.",
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
      itemText: "Brand Strategy",
      itemUrl: "/services/brand-strategy",
    },
    {
      id: 2,
      itemText: "Content development",
      itemUrl: "/services/creative-content-services",
    },
    {
      id: 3,
      itemText: "Creative services",
      itemUrl: "/services/creative-content-services",
    },
    {
      id: 4,
      itemText: "Motion graphics",
      itemUrl: "/services/motion-graphics-videos",
    },
    {
      id: 5,
      itemText: "Web development",
      itemUrl: "/services/customer-web-development",
    },
  ],
  linktxt: "Gold Addy Award",
  linkUrl: "/about/awards",
  paddingClasses: "small-padding-bottom",
};
export const imageBlade = {
  bgColor: 'bg-[#30bdf3]',
  bgImage: "/intel/intel-logo-clear.svg",
  bgImageAlt: "choesity-white",
  imageUrl: "/Phones.png",
  imageAlt: "Phones",
  contentName: 'data',
  halfscreen: true

}
export const brandedblade = {
  content: [
    {
      img: "/intel/clear-cisco-full-1-parallax.png",
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
      height: "50%",
      left: "0",
      top: "0",
      bottom: "unset",
      leftFullHeight: false,
      rightFullHeight: false,
      bgimg: "/intel/clear-cisco-quarter-2.png",
    },
    {
      id: 2,
      smallscreen: false,
      width: "50%",
      height: "50%",
      right: "unset",
      left: "0",
      top: "unset",
      bottom: "0",
      leftFullHeight: false,
      rightFullHeight: false,
      bgimg: "/intel/clear-cisco-quarter-3.png",
    },
    {
      id: 3,
      smallscreen: false,
      width: "50%",
      height: "100%",
      right: "0",
      left: "unset",
      top: "unset",
      bottom: "0",
      leftFullHeight: false,
      rightFullHeight: true,
      bgimg: "/intel/clear-cisco-half-1.png",
    },
  ],
};
export const imageGridVersion = {
  content: [
    {
      id: 1,
      smallscreen: false,
      width: "50%",
      height: "100%",
      left: "0",
      top: "unset",
      bottom: "0",
      bgimg: "/intel/clear-cisco-half-2.png",
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
      bgimg: "/intel/clear-cisco-half-3.png",
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
      heading: "Kount: Protecting Your Digital Innovation",
      description: 'Kount is a global leader in digital fraud prevention and detection, combining next- generation AI and machine learning with 12 years’ experience analyzing billions of transactions.',
      buttonText: "View all case studies",
      redirect: "/work/case-study/kount",
      tab: "",
      logo: '/kount/kount_logo_black.svg',
      hover_logo: "/kount/kount_logo_white.svg"
    },
    {
      border: true,
      bgimg: "/cardsbg.svg",
      heading: "Leadspace: An Evolved Site for an Evolving Brand",
      description:
        "Leadspace is an AI SaaS innovator offering B2B customer data platforms.",
      buttonText: "View all case studies",
      redirect: "/work/case-study/leadspace",
      tab: "",
      logo: "/leadspace/leadspace_logo_black.svg",
      hover_logo: "/leadspace/leadspace_logo_white.svg",
    },
  ],
};
export const redirect = {
  content: [
    {
      txt: "Previous case study",
      buttonUrl: "/work/case-study/riverbed-rebrand",
      props: true,
    },
    {
      txt: "Next case study",
      buttonUrl: "/work/case-study/hortonworks",
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