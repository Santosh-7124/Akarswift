import AgriculturalProducts from "../../assets/Products/Agricultural Products.png";
import IndustrialGoods from "../../assets/Products/Industrial Goods.png";
import ConsumerGoods from "../../assets/Products/Consumer Goods.png";
import Pharmaceutical from "../../assets/Products/Pharmaceutical.png";
import Automotive from "../../assets/Products/Automotive.png";
import SyntheticPaper from "../../assets/Products/Synthetic Paper.png";

export const productsData = [
  {
    id: "AgriculturalProducts",
    img: AgriculturalProducts,
    text: "Agricultural Products",
    heading: "Fresh Produce, Grains and Spices",
    paragraph:
      "At Akarswift Global, we source the finest agricultural products to meet the growing demands of the global market. Our agricultural division focuses on sustainability and quality, ensuring that every product is fresh, nutritious, and responsibly sourced.",
    items: [
      {
        title: "Fresh Produce",
        text: "We offer a variety of fresh fruits and vegetables, carefully harvested to retain their natural flavors and nutrients. Our produce is sourced from certified farms that practice sustainable agriculture.",
      },
      {
        title: "Grains",
        text: "We provide high-quality grains, including rice, wheat, and barley. Each grain is meticulously processed to maintain its purity and nutritional value.",
      },
      {
        title: "Spices",
        text: "Our selection of spices includes turmeric, black pepper, cardamom, and more. These spices are sourced from regions renowned for their quality, ensuring that they enhance the flavor and aroma of your culinary creations.",
      },
    ],
    features: [
      {
        title: "Sustainability",
        text: "Commitment to eco-friendly farming practices.",
      },
      {
        title: "Quality Assurance",
        text: "Rigorous quality checks to ensure purity and freshness.",
      },
      {
        title: "Global Sourcing",
        text: "Partnerships with trusted farms worldwide.",
      },
      {
        title: "Nutritional Value",
        text: "Products rich in essential vitamins and minerals.",
      },
      {
        title: "Packaging",
        text: " Eco-friendly packaging that preserves freshness.",
      },
    ],
    reverseLayout: false,
  },
  {
    id: "IndustrialGoods",
    img: IndustrialGoods,
    text: "Industrial Goods",
    heading: "Machinery, Tools, and Raw Materials",
    paragraph:
      "Akarswift Global's industrial goods division is dedicated to supplying high-quality machinery, tools, and raw materials essential for various industries. Our products are designed to enhance productivity and efficiency, catering to sectors such as manufacturing, construction, and mining.",
    items: [
      {
        title: "Machinery",
        text: "We provide advanced machinery, including CNC machines, industrial robots, and automated production lines. Our machines are built for precision, durability, and high performance.",
      },
      {
        title: "Tools",
        text: "Our range of tools includes hand tools, power tools, and cutting tools. Each tool is crafted to meet the highest standards of safety and reliability.",
      },
      {
        title: "Raw Materials",
        text: "We supply essential raw materials such as steel, aluminum, and copper. These materials are sourced from reputable suppliers to ensure their quality and compliance with industry standards.",
      },
    ],
    features: [
      {
        title: "Innovation",
        text: "Cutting-edge technology for enhanced productivity.",
      },
      {
        title: "Durability",
        text: "Products built to withstand demanding industrial environments.",
      },
      {
        title: "Compliance",
        text: "Adherence to international quality and safety standards.",
      },
      {
        title: "Customization",
        text: "Tailored solutions to meet specific industrial needs.",
      },
      {
        title: "Support",
        text: "Comprehensive after-sales support and maintenance services.",
      },
    ],
    reverseLayout: true,
  },
  {
    id: "ConsumerGoods",
    img: ConsumerGoods,
    text: "Consumer Goods",
    heading: "Electronics, Apparel, and Home Goods",
    paragraph:
      "Our consumer goods division offers a wide range of products designed to improve the quality of life for consumers around the world. From state-of-the-art electronics to stylish apparel and practical home goods, we ensure that our products meet the highest standards of quality and innovation.",
    items: [
      {
        title: "Electronics",
        text: "We offer a variety of electronics, including smartphones, laptops, and home appliances. Our products are sourced from leading manufacturers, ensuring reliability and cutting-edge technology.",
      },
      {
        title: "Apparel",
        text: "Our apparel collection features trendy and comfortable clothing for men, women, and children. We prioritize sustainable fabrics and ethical manufacturing practices.",
      },
      {
        title: "Home Goods",
        text: "We provide essential home goods such as kitchenware, furniture, and decor items. Each product is designed to enhance comfort and functionality in your home.",
      },
    ],
    features: [
      {
        title: "Innovation",
        text: "Latest technology and trends in consumer goods.",
      },
      {
        title: "Quality",
        text: "Products tested for performance and durability.",
      },
      {
        title: "Sustainiblitity",
        text: "Eco-friendly materials and ethical production.",
      },
      {
        title: "Variety",
        text: "Wide selection to cater to diverse consumer preferences.",
      },
      {
        title: "Customer Satisfaction",
        text: "Commitment to exceptional service and support.",
      },
    ],
    reverseLayout: false,
  },
  {
    id: "Pharmaceuticals",
    img: Pharmaceutical,
    text: "Pharmaceutical",
    heading: "High-Quality Medicines and Healthcare Products",
    paragraph:
      "Akarswift Global's pharmaceutical division is dedicated to improving global health by providing high-quality medicines and healthcare products. Our portfolio includes essential drugs, over-the-counter medications, and healthcare supplies.",
    items: [
      {
        title: "Medicines",
        text: "We offer a comprehensive range of medicines, including antibiotics, antivirals, and chronic disease medications. Our products are manufactured in compliance with stringent regulatory standards.",
      },
      {
        title: "Health care products",
        text: "Our healthcare products include medical devices, diagnostics, and wellness products. These products are designed to support healthcare professionals and patients in achieving better health outcomes.",
      },
    ],
    features: [
      {
        title: "Regulatory Compliance",
        text: " Adherence to global pharmaceutical standards.",
      },
      {
        title: "Quality Assurance",
        text: "Rigorous testing and quality control processes.",
      },
      {
        title: "Accessibilty",
        text: "Efforts to make healthcare products affordable and accessible.",
      },
      {
        title: "Innovation",
        text: "Investment in research and development for advanced therapies.",
      },
      {
        title: "Support",
        text: "Comprehensive information and support for healthcare providers and patients.",
      },
    ],
    reverseLayout: true,
  },
  {
    id: "Automotive",
    img: Automotive,
    text: "Automotive",
    heading: "Vehicles and Automotive Parts",
    paragraph:
      "Our automotive division provides a wide range of vehicles and automotive parts to meet the needs of the global automotive market. From passenger cars to commercial vehicles and spare parts, we ensure that our products are reliable, efficient, and environmentally friendly.",
    items: [
      {
        title: "Vehicles",
        text: "We offer a variety of vehicles, including sedans, SUVs, trucks, and buses. Our vehicles are sourced from leading manufacturers known for their innovation and quality.",
      },
      {
        title: "Automation Parts:",
        text: "Our selection of automotive parts includes engines, transmissions, brakes, and more. Each part is designed to meet OEM standards and ensure optimal performance.",
      },
    ],
    features: [
      {
        title: "Quality",
        text: "Vehicles and parts tested for performance and safety.",
      },
      {
        title: "Efficiency",
        text: "Focus on fuel efficiency and low emissions.",
      },
      {
        title: "Reliability",
        text: "Products built to withstand rigorous use.",
      },
      {
        title: "Innovation",
        text: "Commitment to eco-friendly farming practices.Advanced technology for enhanced driving experience.",
      },
      {
        title: "Customer Support",
        text: "Comprehensive after-sales service and parts availability.",
      },
    ],
    reverseLayout: false,
  },
  {
    id: "SyntheticPaper",
    img: SyntheticPaper,
    text: "Eco Friendly Synthetic Paper",
    heading: "Eco-friendly Synthetic Paper",
    paragraph:
      "Our eco-friendly synthetic paper is designed to meet the highest standards of security and sustainability. Ideal for secure documents such as certificates, this paper combines durability with advanced security features to prevent counterfeiting.",
    features: [
      {
        title: "Sustainiblitity",
        text: "Commitment to eco-friendly farming practices.",
      },
      {
        title: "Sustainiblitity",
        text: "Commitment to eco-friendly farming practices.",
      },
      {
        title: "Sustainiblitity",
        text: "Commitment to eco-friendly farming practices.",
      },
      {
        title: "Sustainiblitity",
        text: "Commitment to eco-friendly farming practices.",
      },
      {
        title: "Sustainiblitity",
        text: "Commitment to eco-friendly farming practices.",
      },
    ],
    reverseLayout: true,
  },
];
