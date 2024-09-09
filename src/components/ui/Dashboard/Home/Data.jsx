import { IoHeartCircleOutline, IoStopSharp } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { RiHandbagFill } from "react-icons/ri";
import { IconHeartFilled,IconAlignBoxRightBottomFilled,IconShoppingBag,IconBriefcaseFilled   } from "@tabler/icons-react";
import {  IconMailFilled, IconCalculatorFilled} from '@tabler/icons-react';
import profile from '../../../../assets/images/user_profile.jpg'
import shoe from '../../../../assets/images/shoe.jpg'
import iphone from '../../../../assets/images/iphone.jpg'
import shoe1 from '../../../../assets/images/shoe1.jpg'
import product1 from '../../../../assets/images/Rectangle 91.png'
import product2 from '../../../../assets/images/Rectangle 90.png'
import product3 from '../../../../assets/images/Rectangle 110.png'
import product4 from '../../../../assets/images/Rectangle 111.png'
export const data = [
  { date: "Jan", temperature: -25 },
  { date: "Feb", temperature: -10 },
  { date: "Mar", temperature: 5 },
  { date: "Apr", temperature: 15 },
  { date: "May", temperature: 30 },
  { date: "Jun", temperature: 15 },
  { date: "Jul", temperature: 30 },
  { date: "Aug", temperature: 40 },
  { date: "Sep", temperature: 15 },
  { date: "Oct", temperature: 20 },
  { date: "Nov", temperature: 0 },
  { date: "Dec", temperature: -10 },
];

export const data2 = [
  { name: "USA", value: 400, color: "indigo.6" },
  { name: "India", value: 300, color: "yellow.6" },
  { name: "Japan", value: 100, color: "teal.6" },
];

export const cards = [
  {
    icon:  <IconHeartFilled className='text-blue-600'/>,
    title: "178+",
    value: "Save Products",
    blue:1
  },
  {
    icon:  <IconAlignBoxRightBottomFilled className='text-yellow-400'/>,
    title: "20+",
    value: "Stock Products",
    yellow:1
  },
  {
    icon:  <IconShoppingBag stroke={2} className='text-red-400'/>,
    title: "190+",
    value: "Sales Products",
    red:1
  },
  {
    icon: <IconBriefcaseFilled className='text-indigo-500'/>,
    title: "12+",
    value: "Job Application",
    indigo:1
  },
];

export const tableData = [
  {
    id: "#876364",
    name: "Camera Lens",
    price: "$178",
    order: 325,
    amount: "$1,46,660",
  },
  {
    id: "#876368",
    name: "Black Sleep Dress",
    price: "$14",
    order: 53,
    amount: "$46,660",
  },
  {
    id: "#876412",
    name: "Argan Oil",
    price: "$21",
    order: 78,
    amount: "$3,46,676",
  },
  {
    id: "#876621",
    name: "EAU DE Perfum",
    price: "$32",
    order: 98,
    amount: "$3,46,981",
  },
];

export const orderdetailsdata=[
  {
      trackingno:'#30456',
      img:product1,
      product:'Camera Lens',
      price:'$178',
      totalorders:372,
      totalamount:'$14,660'
  },
  {
      trackingno:'#30457',
      img:product2,
      product:'Black Sheep Dress',
      price:'$178',
      totalorders:372,
      totalamount:'$14,660'
  },
  {
      trackingno:'#30458',
      img:product3,
      product:'Argan oil',
      price:'$178',
      totalorders:372,
      totalamount:'$14,660'
  },
  {
    trackingno:'#30457',
    img:product3,
    product:'Black Sheep Dress',
    price:'$178',
    totalorders:372,
    totalamount:'$14,660'
},

]

export const sellingproductdata=[
  {
    img:shoe,
    productname:'Nike Shoes Black Pattern',
    price:'$159'
  },
  {
    img:iphone,
    productname:'Nike Shoes Black Pattern',
    price:'$159'
  },
  {
    img:shoe1,
    productname:'Nike Shoes Black Pattern',
    price:'$159'
  }
]