const Product = require("../models/products");

// addproduct , deleteproduct, updateproduct are accessible to admin only....
const addproduct = async (req, res) => {
  const {
    title,
    description,
    price,
    category,
    brand,
    imageURL,
    variants,
    quantity,
    inventory,
  } = req.body;

  try {
    const newProduct = new Product({
      title,
      description,
      price,
      category,
      brand,
      imageURL,
      variants,
      quantity,
      inventory,
    });

    await newProduct.save();
    res.json({
      message: "new Product added successfully.",
      products: newProduct,
    });
  } catch (error) {
    console.error("Error occured while adding product.", error);
    res.status(500).json({ message: "Error occured while adding product." });
  }
};

const allproduct = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const perPage = 5;
  const searchQuery = req.query.searchQuery || "";

  try {
    let query = {};
    if (searchQuery) {
      query.title = { $regex: new RegExp(searchQuery, "i") };
    }

    const totalProducts = await Product.countDocuments(query);
    const totalPages = Math.ceil(totalProducts / perPage);

    const products = await Product.find(query)
      .skip((page - 1) * perPage)
      .limit(perPage);

    res.json({
      products,
      currentPage: page,
      totalPages,
    });
  } catch (error) {
    console.error("Error occurred while fetching products", error);
    res.status(500).json({ message: "Error occurred while fetching products" });
  }
};

const deleteproduct = async (req, res) => {
  const productID = req.params.id;
  try {
    const isProduct = await Product.findById(productID);
    if (!isProduct) {
      return res
        .status(404)
        .json({ message: "Product not found in database." });
    }
    await Product.findByIdAndRemove(productID);
    res.json({ message: "Product deleted successfully from inventory." });
  } catch (error) {
    console.error("Error occured while deleting a product:", error);
    res.status(500).json("Error occured while deleting a product.");
  }
};

const productID = async (req, res) => {
  const productID = req.params.id;
  try {
    const product = await Product.findById(productID);

    if (!product) {
      return res.status(404).json({ message: "Product not found." });
    }
    res.json(product);
  } catch (error) {
    console.error("Error occurred while fetching product by ID.", error);
    res
      .status(500)
      .json({ message: "Error occurred while fetching product by ID." });
  }
};

const updateproduct = async (req, res) => {
  const productID = req.params.id;
  try {
    const isProduct = await Product.findById(productID);
    if (!isProduct) {
      return res.status(404).json({ message: "Product not found." });
    }
    await Product.findByIdAndUpdate(productID, req.body);
    res.json({ message: "Product details updated successfully." });
  } catch (error) {
    console.error("Error occured while updating product details:", error);
    res.status(500).json("Error occured while updating product details.");
  }
};

// this api is not in use currently just in case if needed in future...
const fetchProducts = async (req, res) => {
  let { productIds } = req.body;

  if (!productIds || !Array.isArray(productIds)) {
    return res.status(400).json({ message: "Invalid productIds parameter." });
  }

  try {
    const products = await Product.find({ _id: { $in: productIds } });

    if (products.length === 0) {
      return res.status(404).json({ message: "No products found." });
    }

    res.json({ products });
  } catch (error) {
    console.error("Error occurred while fetching products by IDs:", error);
    res
      .status(500)
      .json({ message: "Error occurred while fetching products by IDs." });
  }
};

module.exports = {
  addproduct,
  allproduct,
  deleteproduct,
  productID,
  updateproduct,
  fetchProducts,
};
