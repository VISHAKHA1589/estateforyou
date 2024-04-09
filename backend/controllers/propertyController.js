import asyncHandler from "../middlewares/asyncHandler.js";
import Property from "../models/propertyModel.js";

import cloudinary from "../utils/cloudinary.js"
const addProperty = asyncHandler(async (req, res) => {
  try {
    const { name, owner, image1, image2, image3, image4, price, category, address, phoneNumber, description, ownerName,approved } = req.fields;

    // Validate fields...

    // Upload images to Cloudinary
    const uploadResults = await Promise.all([
      cloudinary.uploader.upload(image1, { folder: "uploads" }),
      cloudinary.uploader.upload(image2, { folder: "uploads" }),
      cloudinary.uploader.upload(image3, { folder: "uploads" }),
      cloudinary.uploader.upload(image4, { folder: "uploads" }),
    ]);

    // Create property object with uploaded image URLs
    const property = new Property({ 
      name, 
      description, 
      phoneNumber, 
      address, 
      ownerName, 
      owner, 
      category, 
      price, 
      image1: {
        public_id: uploadResults[0].public_id,
        url: uploadResults[0].secure_url,
      },
      image2: {
        public_id: uploadResults[1].public_id,
        url: uploadResults[1].secure_url,
      },
      image3: {
        public_id: uploadResults[2].public_id,
        url: uploadResults[2].secure_url,
      },
      image4: {
        public_id: uploadResults[3].public_id,
        url: uploadResults[3].secure_url,
      },
      approved:false
    });

    // Save property object
    await property.save();

    res.json(property);
  } catch (error) {
    console.error(error);
    res.status(400).json(error.message);
  }
});


const updatePropertyDetails = asyncHandler(async (req, res) => {
  try {
    const { name, price, category, address, phoneNumber, description } = req.fields;

    // Validation
    switch (true) {
      case !name:
        return res.json({ error: "Name is required" });
      case !price:
        return res.json({ error: "price is required" });
      case !description:
        return res.json({ error: "description is required" });
      case !category:
        return res.json({ error: "Category is required" });
      case !phoneNumber:
        return res.json({ error: "phoneNumber is required" });
      case !address:
        return res.json({ error: "address is required" });
      
    }

    const property = await Property.findByIdAndUpdate(
      req.params.id,
      { ...req.fields},
      { new: true }
    );

    await property.save();

    res.json(property);
  } catch (error) {
    console.error(error);
    res.status(400).json(error.message);
  }
 
  
});
const approveProperty = asyncHandler(async (req, res) => {
  try {
    const property = await Property.findByIdAndUpdate(
      req.params.id,
      { approved: true },
      { new: true }
    );

    res.json(property);
  } catch (error) {
    console.error(error);
    res.status(400).json(error.message);
  }
});




const removeProperty = asyncHandler(async (req, res) => {
  try {
    const property = await Property.findByIdAndDelete(req.params.id);
    res.json(property);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

const fetchProperty = asyncHandler(async (req, res) => {
  try {
    const pageSize = 6;

    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: "i",
          },
        }
      : {};

    const count = await Property.countDocuments({ ...keyword });
    const properties = await Property.find({ ...keyword }).limit(pageSize);

    res.json({
      properties,
      page: 1,
      pages: Math.ceil(count / pageSize),
      hasMore: false,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

const fetchPropertyById = asyncHandler(async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (property) {
      return res.json(property);
    } else {
      res.status(404);
      throw new Error("proeprty not found");
    }
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: "property not found" });
  }
});

const fetchAllProperties = asyncHandler(async (req, res) => {
  try {
    const properties = await Property.find({})
      .populate("category")
      .sort({ createAt: -1 });

    res.json(properties);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});
const fetchProperties=asyncHandler(async (req, res) => {
  try {
    const pageSize = 6;

    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: "i",
          },
        }
      : {};

    const count = await Property.countDocuments({ ...keyword });
    const properties = await Property.find({ ...keyword }).limit(pageSize);

    res.json({
      properties,
      page: 1,
      pages: Math.ceil(count / pageSize),
      hasMore: false,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});


const fetchNewProperties = asyncHandler(async (req, res) => {
  try {
    const properties = await Property.find().sort({ _id: -1 });
    res.json(properties);
  } catch (error) {
    console.error(error);
    res.status(400).json(error.message);
  }
});


export {
  addProperty, updatePropertyDetails, removeProperty,fetchAllProperties,fetchProperty,fetchPropertyById,fetchProperties, fetchNewProperties,approveProperty

};