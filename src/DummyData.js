import accessories from "./Resources/accessories.jpg";
import logo from "./Resources/logo.jpeg";

import img1 from "./Resources/img1.jpeg";
import img2 from "./Resources/img2.jpeg";
import img3 from "./Resources/img3.jpeg";
import img4 from "./Resources/img4.jpeg";
import img5 from "./Resources/img5.jpeg";

export const DUMMY_DATA = [
  {
    signupData: {
      firstName: "Chinedu",
      lastName: "Tagbo",
      eMail: "johntagbo2@gmail.com",
      address: ["New Road, Borikiri", "choba"],
      phoneNumber: ["08145803311", "08020769335"],
    },
    bodyData: {
      bust: 1,
      shoulderLength: 1,
      waist: 1,
      hip: 1,
      hipDip: 1,
      frontWaistLength: 1,
      backWaistLength: 1,
      armLength: 1,
      thigh: 1,
      ankle: 1,
      inSeam: 1,
      outSeam: 1,
      crotchDepth: 1,
    },
    recentOrders: {
      orders: [
        { item: logo, price: 2000, amount: 1 },
        { item: accessories, price: 2000, amount: 1 },
      ],
    },
    wishList: {
      wishlist: [
        { item: logo, price: 2000, amount: 1 },
        { item: accessories, price: 2000, amount: 1 },
      ],
    },
  },
];

export const DUMMY_DATA2 = [
  { name: "okwy", key: 1 },
  { name: "nwando", key: 7 },
  { name: "okwy", key: 2 },
  { name: "nwando", key: 8 },
  { name: "okwy", key: 3 },
  { name: "nwando", key: 9 },
  { name: "okwy", key: 4 },
  { name: "nwando", key: 10 },
  { name: "okwy", key: 5 },
  { name: "nwando", key: 11 },
  { name: "okwy", key: 6 },
  { name: "nwando", key: 12 },
  { name: "chuma", key: 13 },
];

export const DUMMY_DATA3 = [
  {
    name: "Princess",
    url: img1,
    id: 1,
    price: 250,
    designer: "okwy",
    type: "gown",
  },
  {
    name: "Marry Me",
    url: img2,
    id: 2,
    price: 60,
    designer: "okwy",
    type: "suit",
  },
  {
    name: "Wed Me",
    url: img3,
    id: 3,
    price: 50,
    designer: "okwy",
    type: "gown",
  },
  { name: "Okay", url: img4, id: 4, price: 30, designer: "nwando" },
  { name: "Emerald", url: img5, id: 5, price: 25, designer: "nwando" },
];

export const DUMMY_DATA4 = [
  {
    accountInformation: {
      firstName: "chuma",
      lastName: "tagbo",
      eMail: "chinedutagbo@aiesec.net",
    },
    contactInformation: {
      address: {
        country: "Nigeria",
        state: "Rivers State",
        city: "Port Harcourt",
        houseAddress: "Okania Street",
      },
      phoneNumber: '08033278478'
    },
  },
];
