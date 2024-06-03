import { Trash } from "@/icons";
import Link from "next/link";

export default function WishlistCard({ dictionary, isInStock = true }) {
    return (
        <>
            <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
                <div className="w-28">
                    <img
                        src="/assets/images/products/product6.jpg"
                        alt="product 6"
                        className="w-full"
                        width={112}
                        height={83}
                    />
                </div>
                <div className="w-1/3">
                    <h2 className="text-gray-800 text-xl font-medium uppercase">
                        Italian L shape
                    </h2>
                    <p className="text-gray-500 text-sm">
                        {dictionary.Availability}: <span className={isInStock ? "text-green-600" : "text-red-600"}>{isInStock ? 'In Stock' : "Out of Stock"}</span>
                    </p>
                </div>
                <div className="text-primary text-lg font-semibold">$320.00</div>
                <Link
                    href="#"
                    className={`${isInStock ? 'hover:text-primary bg-primary border-primary hover:bg-transparent' : "cursor-not-allowed bg-red-400 border border-red-400"} px-6 py-2 text-center text-sm text-white border rounded transition uppercase font-roboto font-medium`}
                >

                    {dictionary.Add_To_Cart}
                </Link>
                <div className="text-gray-600 cursor-pointer hover:text-primary">
                    {Trash}
                </div>
            </div>
        </>
    )
}