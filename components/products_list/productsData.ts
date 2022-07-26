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
    img: "/images/p1.webp",
    price: 75,
  },
  {
    id: 2,
    title: "Men's Shirt",
    img: "/images/p2.webp",
    price: 80,
  },
  {
    id: 3,
    title: "Women's Dress",
    img: "/images/p3.webp",
    price: 68,
  },
  {
    id: 4,
    title: "Women's Dress",
    img: "/images/p4.webp",
    price: 70,
  },
  {
    id: 5,
    title: "Women's Dress",
    img: "/images/p5.webp",
    price: 75,
  },
  {
    id: 6,
    title: "Women's Dress",
    img: "/images/p6.webp",
    price: 90,
  },
  {
    id: 7,
    title: "Women's Dress",
    img: "/images/p7.webp",
    price: 85,
  },
  {
    id: 8,
    title: "Men's Shirt",
    img: "/images/p8.webp",
    price: 75,
  },
  {
    id: 9,
    title: "Men's Shirt",
    img: "/images/p9.webp",
    price: 85,
  },
  {
    id: 10,
    title: "Men's Shirt",
    img: "/images/p10.webp",
    price: 65,
  },
  {
    id: 11,
    title: "Men's Shirt",
    img: "/images/p11.webp",
    price: 65,
  },
  {
    id: 12,
    title: "Women's Dress",
    img: "/images/p12.webp",
    price: 55,
  },
];
