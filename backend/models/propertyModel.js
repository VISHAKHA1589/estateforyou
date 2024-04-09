import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema;

const propertySchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    image1: {
      public_id: { type: String, required: true },
      url: { type: String, required: true }
    },
    image2: {
      public_id: { type: String, required: true },
      url: { type: String, required: true }
    },
    image3: {
      public_id: { type: String, required: true },
      url: { type: String, required: true }
    },
    image4: {
      public_id: { type: String, required: true },
      url: { type: String, required: true }
    },
    ownerName: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    category: { type: ObjectId, ref: "Category", required: true },
    owner: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    address: { type: String, required: true },
    approved: { type: Boolean, required: true }
  },
  { timestamps: true }
);

const Property = mongoose.model("Property", propertySchema);
export default Property;
