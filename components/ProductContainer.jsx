import React from "react";

const ProductShowcase = () => {
  // Sample product data
 const products = [
  {
    id: 1,
    name: "Arduino UNO R3",
    description: "Versatile microcontroller for embedded systems",
    image: "https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,q_auto,w_700/c_pad,w_700/F7697409-01",
    price: 499,
  },
  {
    id: 2,
    name: "Raspberry Pi 4",
    description: "Powerful single-board computer for IoT projects",
    image: "https://m.media-amazon.com/images/I/61mRJm8+c4L._SX342_.jpg",
    price: 1499,
  },
  {
    id: 3,
    name: "ESP32 Development Board",
    description: "Feature-rich IoT development board with built-in Wi-Fi and Bluetooth",
    image: "https://www.electronicscomp.com/image/cache/catalog/esp32-development-board-400x400.jpg",
    price: 799,
  },
  {
    id: 4,
    name: "Adafruit BME280 Sensor",
    description: "High-precision environmental sensor for temperature, humidity, and pressure",
    image: "https://cdn11.bigcommerce.com/s-3fd3md1ghs/images/stencil/640w/products/27478/8417/1893__64708.1566374640.jpg?c=2",
    price: 299,
  },
  {
    id: 5,
    name: "Particle Photon",
    description: "Wi-Fi-enabled IoT development board for cloud-connected projects",
    image: "https://m.media-amazon.com/images/I/51IipfHJ0LL.jpg",
    price: 899,
  },
  // Add more products as needed
];


  const formatPrice = (price) => {
    // Convert price to Indian Rupees format
    const formattedPrice = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(price);

    return formattedPrice;
  };

  return (
    <section id="products" className=" py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-blue-900 font-bold  mb-6">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg p-6">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-gray-800 font-bold">
                {formatPrice(product.price)}
              </p>
              <button className="bg-blue-900 hover:bg-blue-800 text-white py-2 px-4 rounded mt-4">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
 