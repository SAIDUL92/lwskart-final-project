"use server"

import { signIn } from "@/auth";
import { updateAddToCart, updateWishlist } from "@/database/queries";
import { revalidatePath } from 'next/cache'



export async function login(formData) {
    try {
        const response = await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: false
        })
        return response;
    } catch (error) {
        throw new Error(error);
    }
}


export async function addToCart(userId, productId) {
    try {
        await updateAddToCart(userId, productId);
        revalidatePath('/', 'layout')
    } catch (error) {
        throw error;
    }

}
export async function addToWishlist(userId, productId) {
    try {
        await updateWishlist(userId, productId);
        revalidatePath('/', 'layout')
    } catch (error) {
        throw error;
    }

}

