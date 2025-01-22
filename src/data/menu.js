export const menu = {
  Cafe: [
    {
      img: "./imgs/latte.jpg",
      name: "Latte",
      price: 4.5,
      descr: "Smooth espresso with steamed milk.",
      section: "Cafe",
      discount: true, // Boolean atributethat has to be changed when there's a discount
      discountPercentage: 0.15,
      recommended: true,
    },
    {
      img: "./imgs/cappuccino.jpg",
      name: "Cappuccino",
      price: 5,
      descr: "Espresso with frothy milk",
      section: "Cafe",
      discount: false,
    },
    {
      img: "./imgs/americano.jpg",
      name: "Americano",
      price: 3.99,
      descr: "Rich espresso with hot water",
      section: "Cafe",
      discount: false,
    },
    {
      img: "./imgs/mocha.jpg",
      name: "Mocha",
      price: 5.25,
      descr: "Espresso with chocolate and steamed milk",
      section: "Cafe",
      discount: true,
      discountPercentage: 0.2,
    },
  ],

  Bakery: [
    {
      img: "./imgs/croissant.jpg",
      name: "Croissant",
      price: 2,
      descr:
        "Indulge in the classic French delight of our croissant, meticulously crafted with layers of buttery, flaky pastry.",
      section: "Bakery",
      discount: true,
      discountPercentage: 0.05,
      recommended: true,
    },
    {
      img: "./imgs/chocolate-cookies.jpg",
      name: "Chocolate Cookies",
      price: 1.5,
      descr:
        "Satisfy your sweet cravings with our decadent chocolate cookies, baked to perfection for rich cocoa flavor and chewy texture.",
      section: "Bakery",
      discount: false,
      recommended: true,
    },
    {
      img: "./imgs/chocolate-cake.jpg",
      name: "Chocolate Cake",
      price: 3.3,
      descr:
        "Treat yourself to our indulgent chocolate cake, crafted with premium cocoa for a rich and moist dessert experience.",
      section: "Bakery",
      discount: true,
      discountPercentage: 0.05,
      recommended: true,
    },
    {
      img: "./imgs/cheesecake.jpg",
      name: "Cheescake",
      price: 3.5,
      descr:
        "Delight in our creamy cheesecake, featuring a luscious filling on a graham cracker crust for a satisfyingly sweet treat.",
      section: "Bakery",
      discount: false,
    },
  ],

  Breakfast: [
    {
      img: "./imgs/breakfast-one.jpg",
      name: "Latte & Breakfast Sandwich",
      price: 7.99,
      descr:
        "Start your day right with our latte paired with a hearty breakfast sandwich, combining the rich flavor of espresso with a satisfying sandwich.",
      section: "Breakfast",
      discount: true,
      discountPercentage: 0.5,
    },
    {
      img: "./imgs/breakfast-two.jpg",
      name: "Americano & Bagel",
      price: 6.49,
      descr:
        "Enjoy the simplicity of our Americano paired with a toasted bagel, creating a classic breakfast combination that's both comforting and delicious.",
      section: "Breakfast",
      discount: false,
    },
    {
      img: "./imgs/sample.jpg",
      name: "Cappuccino & Yogurt",
      price: 7.29,
      descr:
        "Indulge in the creamy texture of our cappuccino alongside a refreshing yogurt parfait, combining the boldness of espresso with the freshness of yogurt and fruit for a delightful morning treat.",
      section: "Breakfast",
      discount: true,
      discountPercentage: 0.5,
    },
  ],
};
