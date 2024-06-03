import CopyRight from "@/components/CopyRight";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MyAccountCard from "@/components/MyAccountCard";
import NavBar from "@/components/Navbar";
import { ChevronRight, House } from "@/icons";
import Link from "next/link";
import { getDictionary } from "../dictionaries";
export const metadata = {
    title: "Lws kart My Account Page",
    description: "Generated by create next app",
};

export default async function MyAccountPage({ params: { lang } }) {
    const dictionary = await getDictionary(lang);
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
                    <p className="text-gray-600 font-medium">{dictionary.Account}</p>
                </div>
                {/* breadcrumb */}


                {/* account wrapper */}
                <div className="container  items-start gap-6 pt-4 pb-16">
                    {/* info */}
                    <div className="grid grid-cols-3 gap-4 mx-auto max-w-5xl">
                        <MyAccountCard>
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-medium text-gray-800 text-lg">
                                    {dictionary.Personal_Profile}
                                </h3>
                                <Link href="#" className="text-primary">

                                    {dictionary.Edit}
                                </Link>
                            </div>
                            <div className="space-y-1">
                                <h4 className="text-gray-700 font-medium">John Doe</h4>
                                <p className="text-gray-800">example@mail.com</p>
                                <p className="text-gray-800">0811 8877 988</p>
                            </div>
                        </MyAccountCard>


                        <MyAccountCard>
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-medium text-gray-800 text-lg">
                                    {dictionary.Shipping_address}
                                </h3>
                                <Link href="#" className="text-primary">

                                    {dictionary.Edit}
                                </Link>
                            </div>
                            <div className="space-y-1">
                                <h4 className="text-gray-700 font-medium">John Doe</h4>
                                <p className="text-gray-800">Medan, North Sumatera</p>
                                <p className="text-gray-800">20371</p>
                                <p className="text-gray-800">0811 8877 988</p>
                            </div>
                        </MyAccountCard>

                        <MyAccountCard>
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-medium text-gray-800 text-lg"> {dictionary.Billing_address}</h3>
                                <Link href="#" className="text-primary">
                                    {dictionary.Edit}
                                </Link>
                            </div>
                            <div className="space-y-1">
                                <h4 className="text-gray-700 font-medium">John Doe</h4>
                                <p className="text-gray-800">Medan, North Sumatera</p>
                                <p className="text-gray-800">20317</p>
                                <p className="text-gray-800">0811 8877 988</p>
                            </div>
                        </MyAccountCard>
                    </div>
                    {/* info */}
                </div>
                {/* account wrapper */}


            </main>

            <Footer lang={lang} />
            <CopyRight lang={lang} />
        </>

    );
}
