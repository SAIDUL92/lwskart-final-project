"use client"

import { addToWishlist } from "@/actions"


export default function WishlistAddToButton({ userId, productId, children }) {

    return (
        <button
            onClick={() => addToWishlist(userId, productId)}
            className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition"
        >
            {children}
        </button>
    )

}