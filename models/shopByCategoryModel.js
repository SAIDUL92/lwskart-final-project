import mongoose, { Schema } from "mongoose";
const categorySchema = new Schema({
    category: String,
    image: String
});


export const categoriesModel = mongoose.models.categories ?? mongoose.model("categories", categorySchema);
