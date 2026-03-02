const navLinks = [
 {
	id: "coffee",
	title: "Coffee",
 },
 {
	id: "about",
	title: "About Us",
 },
 {
	id: "art",
	title: "The Art",
 },
 {
	id: "contact",
	title: "Contact",
 },
];

const coffeeList = [
  {
    name: "Expresso",
    origin: "Brazil",
    detail: "30 ml",
    price: "$6",
  },
  {
    name: "Mochaccino",
    origin: "Colombia",
    detail: "With chocolate and steamed milk",
    price: "$14",
  },
  {
    name: "Frappuccino",
    origin: "United States",
    detail: "Iced coffee with milk and blended ice",
    price: "$18",
  },
  {
    name: "Cappuccino",
    origin: "Italy",
    detail: "With steamed milk and foam",
    price: "$12",
  },
];

const mockTailLists = [
 {
	name: "Cold Brew",
	country: "US",
	detail: "350 ml",
	price: "$8",
 },
 {
	name: "Flat White",
	country: "AU",
	detail: "180 ml",
	price: "$7",
 },
 {
	name: "Ristretto",
	country: "IT",
	detail: "20 ml",
	price: "$5",
 },
 {
	name: "Café Latte",
	country: "IT",
	detail: "300 ml",
	price: "$10",
 },
];

const profileLists = [
 {
	imgPath: "/images/profile1.png",
 },
 {
	imgPath: "/images/profile2.png",
 },
 {
	imgPath: "/images/profile3.png",
 },
 {
	imgPath: "/images/profile4.png",
 },
];

const featureLists = [
 "Perfectly balanced blends",
 "Brewed to perfection",
 "Fresh-roasted every time",
 "Expertly ground & brewed",
];

const goodLists = [
 "Handpicked single-origin beans",
 "Signature roasting techniques",
 "Barista artistry in action",
 "Freshly ground flavors",
];

const storeInfo = {
 heading: "Where to Find Us",
 address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
 contact: {
	phone: "(555) 987-6543",
	email: "hello@jsmcocktail.com",
 },
};

const openingHours = [
 { day: "Mon–Thu", time: "11:00am – 12am" },
 { day: "Fri", time: "11:00am – 2am" },
 { day: "Sat", time: "9:00am – 2am" },
 { day: "Sun", time: "9:00am – 1am" },
];

const sliderLists = [
 {
	id: 1,
	name: "Expresso",
	image: "/images/drink1-exp.png",
	title: "Pure Intensity in Every Shot",
	description:
	 "A small but powerful shot of rich, concentrated coffee with a velvety crema on top. The foundation of all great coffee drinks — bold, smooth, and unmistakably complex.",
 },
 {
	id: 2,
	name: "Mochaccino",
	image: "/images/drink2-Mochaccino.png",
	title: "Where Coffee Meets Chocolate",
	description:
	 "A perfect harmony of bold espresso, rich dark chocolate, and silky steamed milk. Indulgent yet balanced, the Mochaccino turns your coffee break into a moment of pure pleasure.",
 },
 {
	id: 3,
	name: "Violet Frappuccino",
	image: "/images/drink3-frappuccino.png",
	title: "Chilled to Perfection",
	description:
	 "A refreshing blend of espresso, milk, and ice whipped into a smooth and creamy treat. Cool down and indulge in every sip — perfect for warm days or whenever you need a lift.",
 },
 {
	id: 4,
	name: "Capucchino",
	image: "/images/drink4-capucchino.png",
	title: "The Classic Italian Ritual",
	description:
	 "Equal parts espresso, steamed milk, and dense foam — the Cappuccino is a timeless classic. Each cup is a small ceremony, crafted to warm your hands and lift your spirits.",
 },
];

export {
 navLinks,
 coffeeList,
 mockTailLists,
 profileLists,
 featureLists,
 goodLists,
 openingHours,
 storeInfo,
 sliderLists,
};