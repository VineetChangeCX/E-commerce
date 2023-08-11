import React, { useState } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:9000",
});

const ProductForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    brand: "",
    imageURL: "",
    variants: [{ size: "" }],
    quantity: "",
    inventory: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleVariantChange = (index, event) => {
    const { name, value } = event.target;
    const updatedVariants = [...formData.variants];
    updatedVariants[index] = { ...updatedVariants[index], [name]: value };
    setFormData({
      ...formData,
      variants: updatedVariants,
    });
  };

  const handleAddVariant = () => {
    setFormData({
      ...formData,
      variants: [...formData.variants, { size: "" }],
    });
  };

  const handleRemoveVariant = (index) => {
    const updatedVariants = formData.variants.filter((v, i) => i !== index);
    setFormData({
      ...formData,
      variants: updatedVariants,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await api.post("/api/product/addproduct", formData);
      onSubmit(formData);
    } catch (error) {
      console.log("Error while adding product to inventory.", error);
    }
  };

  return (
    <form
      className="p-4 border border-gray-300 rounded-lg space-y-4"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="title" className="block font-semibold">
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-400 rounded-md"
          required
        />
      </div>
      <div>
        <label htmlFor="description" className="block font-semibold">
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-400 rounded-md"
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="price" className="block font-semibold">
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-400 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="quantity" className="block font-semibold">
            Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-400 rounded-md"
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="category" className="block font-semibold">
          Category:
        </label>
        <input
          type="text"
          id="category"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-400 rounded-md"
          required
        />
      </div>
      <div>
        <label htmlFor="brand" className="block font-semibold">
          Brand:
        </label>
        <input
          type="text"
          id="brand"
          name="brand"
          value={formData.brand}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-400 rounded-md"
          required
        />
      </div>
      <div>
        <label htmlFor="imageURL" className="block font-semibold">
          Image URL:
        </label>
        <input
          type="text"
          id="imageURL"
          name="imageURL"
          value={formData.imageURL}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-400 rounded-md"
          required
        />
      </div>
      <div>
        <label className="block font-semibold">Variant Sizes:</label>
        {formData.variants.map((variant, index) => (
          <div key={index} className="flex items-center space-x-2">
            <input
              type="text"
              name="size"
              value={variant.size}
              onChange={(e) => handleVariantChange(index, e)}
              className="flex-1 p-2 border border-gray-400 rounded-md"
              required
            />
            <button
              type="button"
              onClick={() => handleRemoveVariant(index)}
              className="px-2 py-1 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddVariant}
          className="mt-2 px-2 py-1 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600"
        >
          Add Variant
        </button>
      </div>
      <div>
        <label htmlFor="inventory" className="block font-semibold">
          Inventory:
        </label>
        <input
          type="number"
          id="inventory"
          name="inventory"
          value={formData.inventory}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-400 rounded-md"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default ProductForm;
