import User from "../../images/avatar/b-sm.jpg";
import User2 from "../../images/avatar/c-sm.jpg";
import User3 from "../../images/avatar/a-sm.jpg";
import User4 from "../../images/avatar/d-sm.jpg";

export const userData = [
  {
    id: 1,
    avatarBg: "purple",
    name: "MxCilistia",
    displayName: "Marcus",
    role: "Customer",
    checked: false,
    price: "$28,954.11",
    min: "$500.00",
    kycStatus: "success",
    max: "$300,000.00",
    status: "Online",
    address: "2337 Kildeer Drive",
    state: "Kentucky",
    country: "Canada",
    designation: "UI/UX Designer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 2,
    avatarBg: "purple",
    image: User3,
    name: "Ashlawson",
    //dob:"10 Sept, 1990",
    role: "Investor",
    price: "$29,102.58",
    checked: false,
    min: "$100.00",

    kycStatus: "success",
    max: "$5000.00",
    status: "Away",
    country: "United States",
    designation: "UI/UX Designer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 3,
    avatarBg: "info",
    name: "V1ncent",
    role: "Customer",
    checked: false,
    price: "$28,954.11",
    min: "$500.00",
    kycStatus: "success",
    max: "$25,000.00",
    status: "Online",
    address: "2337 Kildeer Drive",
    state: "Kentucky",
    country: "Canada",
    designation: "UI/UX Designer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 4,
    avatarBg: "warning",
    name: "JMitch",
    displayName: "jmitch",
    role: "Customer",
    checked: false,
    price: "$28,954.11",
    min: "$500",
    kycStatus: "success",
    max: "$300,000.00",
    status: "Online",
    address: "2337 Kildeer Drive",
    state: "Kentucky",
    country: "Canada",
    designation: "UI/UX Designer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 5,
    avatarBg: "danger",
    name: "FBurns",
    displayName: "Fburns",
    role: "Customer",
    checked: false,
    price: "$28,954.11",
    min: "$500.00",
    kycStatus: "success",
    max: "$25,000.00",
    status: "Online",
    address: "2337 Kildeer Drive",
    state: "Kentucky",
    country: "Canada",
    designation: "UI/UX Designer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 6,
    avatarBg: "primary",
    name: "Alanbutler",
    //dob:"10 Feb, 1997",
    role: "Investor",
    image: User2,
    // email: "butler@example.com",
    price: "34,000.00",
    checked: false,
    min: "$25.00",

    kycStatus: "success",
    max: "$500.00",
    status: "Offline",
    country: "India",
    designation: "UI/UX Designer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 7,
    avatarBg: "warning",
    name: "VicLynch",
    //dob:"02 May, 1993",
    role: "Investor",
    // email: "victoria@example.com",
    price: "$29,400.68",
    checked: false,
    min: "$1000.00",

    kycStatus: "success",
    max: "$500,000.00",
    status: "Online",
    country: "China",
    designation: "UI/UX Designer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 8,
    avatarBg: "success",
    name: "PNewman",
    //dob:"15 Feb, 1997",
    role: "Customer",
    // email: "patrick@example.com",
    price: "$30,000.00",
    checked: false,
    min: "$50.00",

    kycStatus: "pending",
    max: "$2950.00",
    status: "Online",
    country: "India",
    designation: "UI/UX Designer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 9,
    avatarBg: "purple",
    name: "JHarris",
    //dob:"28 Feb, 1985",
    role: "Customer",
    image: User4,
    // email: "harris@example.com",
    price: "$35,530.23",
    checked: false,
    min: "$500.00",

    kycStatus: "pending",
    max: "$50,000.00",
    status: "Away",
    country: "Vietnam",
    designation: "UI/UX Designer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
  {
    id: 10,
    avatarBg: "purple",
    name: "EmmaWalker",
    //dob:"30 Dec, 1998",
    role: "Investor",
    // email: "walker@example.com",
    price: "$29,595.00",
    checked: false,
    min: "$1000.00",

    kycStatus: "success",
    max: "$19,000.00",
    status: "Online",
    country: "United States",
    designation: "UI/UX Designer",
    projects: "213",
    performed: "87.5",
    tasks: "587",
  },
];

export const notes = [
  {
    id: 1,
    text: "Aproin at metus et dolor tincidunt feugiat eu id quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean sollicitudin non nunc vel pharetra.",
    date: "November 18, 2019",
    time: "5:34",
    company: "Softnio",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend libero semper metus aliquam tempus. Sed efficitur elit et ligula lobortis",
    date: "December 27, 2019",
    time: "7:00",
    company: "Softnio",
  },
];

export const filterStatus = [
  { value: "Online", label: "Online" },
  { value: "Away", label: "Away" },
  { value: "Offline", label: "Offline" },
];

export const filterRole = [
  { value: "investor", label: "Investor" },
  { value: "seller", label: "Seller" },
  { value: "buyer", label: "Buyer" },
];

export const countryOptions = [
  { value: "Canada", label: "Canada" },
  { value: "USA", label: "USA" },
  { value: "India", label: "India" },
  { value: "Bangladesh", label: "Bangladesh" },
  { value: "France", label: "France" },
  { value: "England", label: "England" },
];
