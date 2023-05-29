import React from "react";

const ProductCart = ({ productName, category, imageUrl, price }) => {
  return (
    <div className="bg-blue-500 text-white p-4 rounded-lg shadow-lg">
      <img src={imageUrl} alt={productName} className="w-full mb-4 rounded-lg" />
      <h3 className="text-xl font-semibold mb-2">{productName}</h3>
      <p className="text-sm text-gray-300 mb-2">{category}</p>
      <p className="text-lg font-bold mb-4">Price: ₹ {price}</p>
      <button className="bg-white text-blue-500 px-6 py-2 rounded-full font-bold shadow-lg hover:bg-blue-400 transition-colors duration-300">
        Shop Now
      </button>
    </div>
  );
};

export default ProductCart;
