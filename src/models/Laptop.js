import mongoose from "mongoose";

const LaptopSchema = new mongoose.Schema(
  {
    laptopName: {
      type: String,
      required: [true, "Laptop name is required"],
      unique: true,
      trim: true,
    },
    brand: {
      type: String,
      required: [true, "Brand is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    ram: {
      type: String,
      required: [true, "RAM is required"],
    },
    ssd: {
      type: String,
      required: [true, "SSD is required"],
    },
    os: {
      type: String,
      required: [true, "Operating System is required"],
    },
    gpu: {
      type: String,
      required: [true, "GPU is required"],
    },
    image: {
      type: String,
      required: [true, "Image URL is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Laptop = mongoose.models.Laptop || mongoose.model("Laptop", LaptopSchema);

export default Laptop;
