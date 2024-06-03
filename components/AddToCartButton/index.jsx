"use client";

import { addToCart } from "@/actions"
import { startTransition } from "react";

export default function AddToCartButton({ userId, productId, children, classNames }) {


    return (
        <button

            onClick={() =>
                startTransition(() => {
                    addToCart(userId, productId)
                })
            }


            className={classNames}
        >
            {children}
        </button>
    )

}

