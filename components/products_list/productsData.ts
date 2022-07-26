interface IProduct {
  id: number;
  title: string;
  img: string;
  price: number;
}

export class Product implements IProduct {
  id: number;
  title: string;
  img: string;
  price: number;

  constructor(id: number, title: string, img: string, price: number) {
    this.id = id;
    this.title = title;
    this.img = img;
    this.price = price;
  }
}

export const productsData: Product[] = [
  {
    id: 1,
    title: "Men's Shirt",
    img: "/images/p1.png",
    price: 75,
  },
  {
    id: 2,
    title: "Men's Shirt",
    img: "/images/p2.png",
    price: 80,
  },
  {
    id: 3,
    title: "Women's Dress",
    img: "/images/p3.png",
    price: 68,
  },
  {
    id: 4,
    title: "Women's Dress",
    img: "/images/p4.png",
    price: 70,
  },
  {
    id: 5,
    title: "Women's Dress",
    img: "/images/p5.png",
    price: 75,
  },
  {
    id: 6,
    title: "Women's Dress",
    img: "/images/p6.png",
    price: 90,
  },
  {
    id: 7,
    title: "Women's Dress",
    img: "/images/p7.png",
    price: 85,
  },
  {
    id: 8,
    title: "Men's Shirt",
    img: "/images/p8.png",
    price: 75,
  },
  {
    id: 9,
    title: "Men's Shirt",
    img: "/images/p9.png",
    price: 85,
  },
  {
    id: 10,
    title: "Men's Shirt",
    img: "/images/p10.png",
    price: 65,
  },
  {
    id: 11,
    title: "Men's Shirt",
    img: "/images/p11.png",
    price: 65,
  },
  {
    id: 12,
    title: "Women's Dress",
    img: "/images/p12.png",
    price: 55,
  },
];
