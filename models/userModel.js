import mongoose, { Schema } from "mongoose";

const cartSchema = new Schema({
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'products',
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    }
});

const WishlistSchema = new Schema({
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'products',
        required: true
    },
    addedAt: {
        type: Date,
        default: Date.now
    }
});



const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    image: String,
    wishlist: [WishlistSchema],
    cart: [cartSchema],
});


export const userModel = mongoose.models.users ?? mongoose.model("users", userSchema);