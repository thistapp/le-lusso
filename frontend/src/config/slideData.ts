import { whyusData } from "@/models/homepage";
import { dataSlideType } from "@/models/swipertype";

const slideData: dataSlideType[] = [
  {
    title: "Lorem Ipsum1",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    path: "lorem-ipsum1",
    image: "/gallery/port1/LINE_ALBUM_FIRST_P_KHUN_NUT_๒๔๐๘๒๕_2.jpg",
  },
  {
    title: "Lorem Ipsum2",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    path: "lorem-ipsum2",
    image: "/gallery/port1/LINE_ALBUM_FIRST_P_KHUN_NUT_๒๔๐๘๒๕_9.jpg",
  },
  {
    title: "Lorem Ipsum3",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    path: "lorem-ipsum3",
    image: "/gallery/port2/LINE_ALBUM_Rowdy_๒๔๐๘๒๕_9.jpg",
  },
  {
    title: "Lorem Ipsum4",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    path: "lorem-ipsum4",
    image: "/gallery/port2/LINE_ALBUM_Rowdy_๒๔๐๘๒๕_26.jpg",
  },
  {
    title: "Lorem Ipsum5",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    path: "lorem-ipsum5",
    image: "/gallery/port2/LINE_ALBUM_Rowdy_๒๔๐๘๒๕_12.jpg",
  },
];

const portData: dataSlideType[] = [
  {
    title: "condominium",
    image: "/gallery/port1/LINE_ALBUM_FIRST_P_KHUN_NUT_๒๔๐๘๒๕_1.jpg",
    path: "/portfolio?type=condominium",
  },
  {
    title: "house",
    image: "/gallery/port1/LINE_ALBUM_FIRST_P_KHUN_NUT_๒๔๐๘๒๕_1.jpg",
    path: "/portfolio?type=house",
  },
  {
    title: "commercial building",
    image: "/gallery/port1/LINE_ALBUM_FIRST_P_KHUN_NUT_๒๔๐๘๒๕_1.jpg",
    path: "/portfolio?type=commercial-building",
  },
  {
    title: "office",
    image: "/gallery/port1/LINE_ALBUM_FIRST_P_KHUN_NUT_๒๔๐๘๒๕_1.jpg",
    path: "/portfolio?type=office",
  }
];

const whyUs: whyusData = {
  title: "Why choose Le lusso?",
  desc: "Our exceptional team, comprised of experienced engineers, skilled craftsmen, and talented designers with over 40 years of expertise, ensures superior quality at every stage. From the initial design phase to on-site evaluations and client consultations, we listen attentively and tailor our services to elevate your lifestyle. Our continuous client support and robust after-sales service guarantee confidence before, during, and after project completion.\n\nExperience the art of tailored living with Le lusso\nwhere your space becomes a true reflection of your essence.",
  path: "services",
};

const exportedObject = {
  slideData,
  portData,
  whyUs,
};

export default exportedObject;
