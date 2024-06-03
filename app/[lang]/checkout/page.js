import CheckoutForm from "@/components/CheckoutForm";
import CopyRight from "@/components/CopyRight";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavBar from "@/components/Navbar";
import OrderSummary from "@/components/Orders/orderSummary";
import { ChevronRight, House } from "@/icons";
import Link from "next/link";

export default function CheckoutPage({ params: { lang } }) {
    return (

        <>
            <Header lang={lang} />
            <NavBar lang={lang} />
            <main>

                {/* breadcrumb */}
                <div className="container py-8 flex items-center gap-3">
                    <Link href="/" className="text-primary text-base">
                        {House}
                    </Link>
                    <span className="text-sm text-gray-400">
                        {ChevronRight}
                    </span>
                    <p className="text-gray-600 font-medium">Checkout</p>
                </div>
                {/* breadcrumb */}


                {/* Checkout wrapper */}
                <div className="container grid grid-cols-12 items-start pb-16 pt-4 gap-6">
                    <div className="col-span-8 border">
                        <CheckoutForm />
                    </div>
                    <div className="col-span-4 border">
                        <OrderSummary />
                    </div>
                </div>

                {/* Checkout wrapper */}


            </main>

            <Footer lang={lang} />
            <CopyRight lang={lang} />
        </>

    );
}
