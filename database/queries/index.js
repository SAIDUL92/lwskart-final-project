import { productModel } from '@/models/productModel';
import { categoriesModel } from '@/models/shopByCategoryModel';
import { userModel } from '@/models/userModel';
import { replaceMongoIdInArray, replaceMongoIdInObject } from '@/utils';


export async function getAllProducts(search, category, minPrice, maxPrice, size) {
    const regex = new RegExp(search, "i");
    const searchedProducts = await productModel
        .find({ name: { $regex: regex } })
        .select(["image", "name", "price", "original_price", "rating", "category"])
        .lean();

    let allProducts = searchedProducts;


    if (category) {

        const categoriesToMatch = category.split('|');

        allProducts = allProducts.filter(product => {
            return categoriesToMatch.includes(product.category)
        })

    }


    const query = {};

    if (minPrice) {
        query.price = { ...query.price, $gte: Number(minPrice) };
    }
    if (maxPrice) {
        query.price = { ...query.price, $lte: Number(maxPrice) };

    }

    if (category) {
        query.category = { $in: category.split('|') };
    }

    if (size) {
        query.size = size;
    }

    const products = await productModel.find(query).select(["image", "name", "price", "original_price", "rating", "category"]).lean();
    allProducts = products;



    return replaceMongoIdInArray(allProducts);
}




export async function findCategory() {
    try {
        const categories = await categoriesModel.find().lean();
        return replaceMongoIdInArray(categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
}


export async function findProductsByCategory(categoryNames) {
    try {

        const products = await productModel.find({ category: { $in: categoryNames } }).lean();
        return replaceMongoIdInArray(products);
    } catch (error) {
        console.error('Error finding products by category names:', error);
        throw error;
    }
}


export async function findTopNewArrivalProduct() {
    try {
        const topNewArrival = await productModel.find({ availability: true })
            .select(["image", "name", "price", "original_price", "rating"])
            .sort({ original_price: -1 })
            .lean()
            .limit(8)
            .exec();

        return replaceMongoIdInArray(topNewArrival);
    } catch (error) {
        console.error("Error finding top new arrival product:", error);
        return null;
    }
}



export async function findTrendingProducts() {
    try {
        const trendingProducts = await productModel.find({ availability: true })
            .select(["image", "name", "price", "original_price", "rating"])
            .sort({ rating: -1, reviews: -1 })
            .lean()
            .limit(8)
            .exec();

        return replaceMongoIdInArray(trendingProducts);
    } catch (error) {
        console.error("Error finding trending products:", error);
        return [];
    }
}


export async function findProductById(productId) {
    const product = await productModel.findById(productId).lean();


    return replaceMongoIdInObject(product);
}



export async function findRelatedProducts(productId) {
    try {

        const product = await productModel.findById(productId).lean().exec();

        if (!product) {
            throw new Error("Product not found");
        }

        const relatedProducts = await productModel.find({
            category: product.category,
            _id: { $ne: product._id },
            availability: true
        })
            .lean()
            .select(["image", "name", "price", "original_price", "rating"])
            .limit(5)
            .exec();
        return replaceMongoIdInArray(relatedProducts);
    } catch (error) {
        console.error("Error finding related products:", error);
        return [];
    }
}


export async function updateAddToCart(userId, productId, quantity = 1) {
    try {
        // Find the user by ID
        const user = await userModel.findById(userId);

        if (!user) {
            throw new Error('User not found');
        }

        // Check if the product already exists in the cart
        const cartItem = user.cart.find(item => item.productId.toString() === productId);

        if (cartItem) {
            // If the product is already in the cart, update the quantity
            cartItem.quantity += quantity;
        } else {
            // If the product is not in the cart, add it as a new item
            user.cart.push({ productId, quantity });
        }

        await user.save();

        console.log('Product added to cart successfully');
        return user.cart;
    } catch (error) {
        console.error('Error adding product to cart:', error);
        throw error;
    }
}



export async function updateWishlist(userId, productId) {
    try {
        // Find the user by ID
        const user = await userModel.findById(userId);

        if (!user) {
            throw new Error('User not found');
        }

        // Check if the product already exists in the wishlist
        const wishlistItem = user.wishlist.find(item => item.productId.toString() === productId);

        if (wishlistItem) {
            // If the product is already in the wishlist, return a message
            console.log('Product already in wishlist');
            return user.wishlist;
        } else {
            // If the product is not in the wishlist, add it as a new item
            user.wishlist.push({ productId });
        }

        // Save the updated user document
        await user.save();

        console.log('Product added to wishlist successfully');
        return user.wishlist;
    } catch (error) {
        console.error('Error adding product to wishlist:', error);
        throw error;
    }
}


export async function getUserByEmail(email) {
    const users = await userModel.find({ email: email }).lean();

    return replaceMongoIdInObject(users[0]);
}




export async function findProductsBySearchTerm(searchTerm) {
    try {
        const regex = new RegExp(searchTerm, 'i');

        const products = await productModel.find({
            $or: [
                { name: regex },
                { long_description: regex },
            ],
        })
            .lean()
            .exec();

        return replaceMongoIdInArray(products);
    } catch (error) {
        console.error('Error finding products by search term:', error);
        return [];
    }
}



export async function findProductsByFilters(filters) {
    const { categories, minPrice, maxPrice, size } = filters;

    const query = {};

    if (categories) {
        query.category = { $in: categories.split(',') };
    }
    if (minPrice) {
        query.price = { ...query.price, $gte: Number(minPrice) };
    }
    if (maxPrice) {
        query.price = { ...query.price, $lte: Number(maxPrice) };
    }
    if (size) {
        query.size = size;
    }

    try {
        const products = await productModel.find(query).lean();
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

