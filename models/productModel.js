import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    name: { type: String, required: true },
    category: {
        type: String,
        required: true,
        enum: ['bedroom', 'sofa', 'office', 'outdoor']
    },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    original_price: { type: Number, required: true },
    rating: { type: Number, required: true },
    reviews: { type: Number, required: true },
    availability: { type: Boolean, required: true },
    brand: { type: String, required: true },
    sku: { type: String, required: true },
    short_description: { type: String, required: true },
    long_description: { type: String, required: true },
    gallery_images: { type: [String], required: true },
    size: {
        type: String,
        enum: ['xs', 's', 'm', 'l', 'xl']
    },
    stock: {
        type: Number,
        required: true,
        min: 0
    }

});


export const productModel = mongoose.models.products ?? mongoose.model("products", productSchema);