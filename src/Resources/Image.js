import Men from "../Resources/man.jpeg";
import Women from "../Resources/woman.jpeg";
import Couples from "../Resources/couples.jpeg";
import Accessories from "../Resources/accessories.jpg";

import img1 from "../Resources/img1.jpeg";
import img2 from "../Resources/img2.jpeg";
import img3 from "../Resources/img3.jpeg";
import img4 from "../Resources/img4.jpeg";
import img5 from "../Resources/img5.jpeg";
import img6 from "../Resources/img6.jpeg";
import img7 from "../Resources/img7.jpeg";
import img8 from "../Resources/img8.jpeg";
import img9 from "../Resources/img9.jpeg";
import img10 from "../Resources/img10.jpeg";

export const ImagePreview = [
  { name: "Women", url: Women, id: 1 },
  { name: "Men", url: Men, id: 2 },
  { name: "Couples", url: Couples, id: 3 },
  { name: "Accessories", url: Accessories, id: 4 },
];

export const ImageGrid = [
  {
    name: "Princess",
    url: img1,
    id: "1",
    price: 250,
    designer: "okwy",
    type: "gown",
    desc: "hello",
    colors: [],
    fabrics: [img1, img2, img3],
    customization: ['No Sleeves', 'Short Sleeves', 'Long Sleeves - Wrist Length'] 
  },
  {
    name: "Marry Me",
    url: img2,
    id: "2",
    price: 60,
    designer: "okwy",
    type: "Suits",
    desc: "hello",
    colors: ["red", "yellow", "green"],
  },
  {
    name: "Wed Me",
    url: img3,
    id: "3",
    price: 50,
    designer: "okwy",
    type: "gown",
    desc: "hello",
    colors: ["red", "yellow", "green"],
  },
  {
    name: "Okay",
    url: img4,
    id: "4",
    price: 30,
    designer: "nwando",
    desc: "hello",
    colors: ["red", "yellow", "green"],
  },
  {
    name: "Emerald",
    url: img5,
    id: "5",
    price: 25,
    designer: "nwando",
    desc: "hello",
    colors: ["red", "yellow", "green"],
  },
  {
    name: "Dress",
    url: img6,
    id: "6",
    price: 50,
    designer: "okwy",
    desc: "hello",
    colors: ["red", "yellow", "green"],
  },
  {
    name: "The Furry",
    url: img7,
    id: "7",
    price: 250,
    designer: "chuma",
    desc: "hello",
    colors: ["red", "yellow", "green"],
  },
  {
    name: "Couples",
    url: img8,
    id: "8",
    price: 300,
    designer: "nwando",
    type: "Traditional Wears",
    desc: "hello",
    colors: ["red", "yellow", "green"],
  },
  {
    name: "Fashion",
    url: img9,
    id: "9",
    price: 250,
    designer: "okwy",
    desc: "hello",
    colors: ["red", "yellow", "green"],
  },
  {
    name: "Men",
    url: img10,
    id: "10",
    price: 50,
    designer: "chuma",
    desc: "hello",
    colors: ["red", "yellow", "green"],
  },
];
