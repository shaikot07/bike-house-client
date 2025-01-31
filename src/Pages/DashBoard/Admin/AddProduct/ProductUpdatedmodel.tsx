import React from "react";

const ProductUpdatedmodel = ({ product, onClose, onSave }) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
          >
            ✖
          </button>

          {/* Modal Content */}
          <h3 className="text-xl font-bold text-gray-900">Edit Product</h3>
          <p className="text-gray-500 mb-4">
            Update the product information below:
          </p>

          {/* Product Name Input */}
          <label className="block text-sm font-medium text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            defaultValue={product?.name}
            className="w-full p-2 border rounded mb-3"
          />

          {/* Price Input */}
          <label className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            defaultValue={product?.price}
            className="w-full p-2 border rounded mb-3"
          />

          {/* Progress Bar Example */}
          <div className="flex justify-between mb-1 text-gray-500">
            <span className="text-base font-normal">Stock Level</span>
            <span className="text-sm font-semibold text-gray-900">
              {product?.stock} in stock
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-orange-500 h-2.5 rounded-full"
              style={{ width: "85%" }}
            ></div>
          </div>

          {/* Modal Footer Buttons */}
          <div className="flex justify-end mt-6 space-x-3">
            <button
              onClick={onClose}
              className="py-2 px-4 text-sm font-medium text-gray-900 border rounded-lg hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={() => onSave(product)}
              className="text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductUpdatedmodel;
