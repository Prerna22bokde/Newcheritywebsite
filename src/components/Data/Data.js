import { HiOutlineLightBulb } from "react-icons/hi2";
import { ImCamera } from "react-icons/im";
import { IoMdContacts } from "react-icons/io";
import slide1 from "../Images/slide1.jpg";
import person_1 from "../Images/person_1.jpg";
import person_2 from "../Images/person_2.jpg";
import person_3 from "../Images/person_3.jpg";
import person_4 from "../Images/person_4.jpg";
import news1 from "../Images/news1.jpg";
import news2 from "../Images/news2.jpg";
import news3 from "../Images/news3.jpg";
import story from "../Images/story.jpg";
import gallery2 from "../Images/gallery_2.jpg";
import gallery3 from "../Images/gallery_3.jpg";

export const Sdata = [
  {
    id: 1,
    imgsrc: <HiOutlineLightBulb />,
    title: "Our Mission",
    para: "  A small river named Duden flows by their place and supplies it with the necessary regelia.",
    link: "Learn More",
  },
  {
    id: 2,
    imgsrc: <ImCamera />,
    title: "Make Donations",
    para: "  A small river named Duden flows by their place and supplies it wit the necessary regelia.",
    link: "Learn More",
  },
  {
    id: 3,
    imgsrc: <IoMdContacts />,
    title: "We Need Voluntreers",
    para: " A small river named Duden flows by their place and supplies it wit the necessary regelia .",
    link: "Learn More",
  },
];

export const Latest = [
  {
    id: 1,
    imgsrc: slide1,
    title: "Water Is Life. Clean Water In Urban Area",
    para: "Some quik example text to build on the card title and make up the bulk of the card's content.",
    shortpara: "Last donation 1w ago",
    amount: "$12,000 raised of $30,000",
  },
  {
    id: 2,
    imgsrc: slide1,
    title: "Water Is Life. Clean Water In Urban Area",
    para: "Some quik example text to build on the card title and make up the bulk of the card's content.",
    shortpara: "Last donation 1w ago",
    amount: "$12,000 raised of $30,000",
  },
  {
    id: 3,
    imgsrc: slide1,
    title: "Water Is Life. Clean Water In Urban Area",
    para: "Some quik example text to build on the card title and make up the bulk of the card's content.",
    shortpara: "Last donation 1w ago",
    amount: "$12,000 raised of $30,000",
  },
  {
    id: 4,
    imgsrc: slide1,
    title: "Water Is Life. Clean Water In Urban Area",
    para: "Some quik example text to build on the card title and make up the bulk of the card's content.",
    shortpara: "Last donation 1w ago",
    amount: "$12,000 raised of $30,000",
  },
  {
    id: 5,
    imgsrc: slide1,
    title: "Water Is Life. Clean Water In Urban Area",
    para: "Some quik example text to build on the card title and make up the bulk of the card's content.",
    shortpara: "Last donation 1w ago",
    amount: "$12,000 raised of $30,000",
  },
  {
    id: 6,
    imgsrc: slide1,
    title: "Water Is Life. Clean Water In Urban Area",
    para: "Some quik example text to build on the card title and make up the bulk of the card's content.",
    shortpara: "Last donation 1w ago",
    amount: "$12,000 raised of $30,000",
  },
];

export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 1370, min: 3000 },
    items: 5,
    slidesToSlide: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 650, min: 0 },
    items: 1,
  },
};

// --------------------------LatestDonation
export const latestdonation = [
  {
    id: 1,
    img: person_1,
    name: "Jorge Smith",
    des: "Donated Just now",
    amount: "$252",
    link: "Water Is Life Clean Water in Urban Area",
  },
  {
    id: 2,
    img: person_2,
    name: "Jorge Smith",
    des: "Donated Just now",
    amount: "$252",
    link: "Water Is Life Clean Water in Urban Area",
  },
  {
    id: 3,
    img: person_3,
    name: "Jorge Smith",
    des: "Donated Just now",
    amount: "$252",
    link: "Water Is Life Clean Water in Urban Area",
  },
  {
    id: 4,
    img: person_4,
    name: "Jorge Smith",
    des: "Donated Just now",
    amount: "$252",
    link: "Water Is Life Clean Water in Urban Area",
  },
];

export const latestnews = [
  {
    id: 1,
    img: news1,
    title: "Be A Volunteer Today",
    date: "July 26,2018",
    des: "Far for away,behind the word mountains, far from the contries Vokalia and Consonantia.",
  },
  {
    id: 2,
    img: news2,
    title: "You May Save The Life of A Child",
    date: "July 26,2018",
    des: "Far for away,behind the word mountains, far from the contries Vokalia and Consonantia.",
  },
  {
    id: 3,
    img: news3,
    title: "Children That Needs Care",
    date: "July 26,2018",
    des: "Far for away,behind the word mountains, far from the contries Vokalia and Consonantia.",
  },
];

export const Galleryimg = [
  {
    id: 1,
    img: story,
  },
  {
    id: 2,
    img: gallery3,
  },
  {
    id: 3,
    img: gallery2,
  },
  {
    id: 4,
    img: news1,
  },
  {
    id: 5,
    img: story,
  },
  {
    id: 6,
    img: gallery3,
  },
  {
    id: 7,
    img: story,
  },
  {
    id: 7,
    img: gallery3,
  },
  {
    id: 8,
    img: gallery2,
  },
  {
    id: 9,
    img: news1,
  },
  {
    id: 10,
    img: story,
  },
  {
    id: 11,
    img: gallery3,
  },
];

// export const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 3000 },
//     items: 5,
//     slidesToSlide: 3,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// };
