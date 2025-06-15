import mongoose from "mongoose";

const HeroSectionSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


const HeroSection =
  mongoose.models.HeroSection ||
  mongoose.model("HeroSection", HeroSectionSchema);

export default HeroSection;
