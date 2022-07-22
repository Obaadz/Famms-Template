export type CarouselData = {
  id: number;
  title: {
    header: string;
    sub: string;
  };
  description: string;
};

const carouselItemsData: Array<CarouselData> = [
  {
    id: 1,
    title: {
      header: "Sale 20% Off",
      sub: "On Everything",
    },
    description: `Explicabo esse amet tempora quibusdam laudantium, laborum eaque
		magnam fugiat hic? Esse dicta aliquid error repudiandae earum
		suscipit fugiat molestias, veniam, vel architecto veritatis
		delectus repellat modi impedit sequi.`,
  },
  {
    id: 2,
    title: {
      header: "Sale 20% Off",
      sub: "On Everything",
    },
    description: `Explicabo esse amet tempora quibusdam laudantium, laborum eaque
		magnam fugiat hic? Esse dicta aliquid error repudiandae earum
		suscipit fugiat molestias, veniam, vel architecto veritatis
		delectus repellat modi impedit sequi.`,
  },
  {
    id: 3,
    title: {
      header: "Sale 20% Off",
      sub: "On Everything",
    },
    description: `Explicabo esse amet tempora quibusdam laudantium, laborum eaque
		magnam fugiat hic? Esse dicta aliquid error repudiandae earum
		suscipit fugiat molestias, veniam, vel architecto veritatis
		delectus repellat modi impedit sequi.`,
  },
];

export default carouselItemsData;
