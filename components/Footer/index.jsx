import { getDictionary } from "@/app/[lang]/dictionaries";
import { Facebook, Instagram, Twitter, Github } from "@/icons";
import Image from "next/image";
import Link from "next/link";

export default async function Footer({ lang }) {

    const dictionary = await getDictionary(lang);

    return (
        <>
            {/* footer */}
            <footer className="bg-white pt-16 pb-12 border-t border-gray-100">
                <div className="container grid grid-cols-12">
                    <div className="col-span-5 space-y-4">
                        <Image src="/assets/images/logo.svg" alt="logo" className="w-30" width={518} height={168} />
                        <div className="mr-2">
                            <p className="text-gray-500">
                                {dictionary.Footer_Text}
                            </p>
                        </div>
                        <div className="flex space-x-5 pb-6">
                            <Link href="#" className="text-gray-400 hover:text-gray-500">
                                {
                                    Facebook
                                }
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-gray-500">
                                {Instagram}
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-gray-500">
                                {Twitter}
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-gray-500">
                                {Github}
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-7 grid grid-cols-2 gap-4">
                        <div className="grid grid-cols-2 gap-4 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                                    {dictionary.solutions}
                                </h3>
                                <div className="mt-4 space-y-4">
                                    <Link
                                        href="#"
                                        className="text-base text-gray-500 hover:text-gray-900 block"
                                    >
                                        {dictionary.marketing}
                                    </Link>
                                    <Link
                                        href="#"
                                        className="text-base text-gray-500 hover:text-gray-900 block"
                                    >

                                        {dictionary.analytics}
                                    </Link>
                                    <Link
                                        href="#"
                                        className="text-base text-gray-500 hover:text-gray-900 block"
                                    >

                                        {dictionary.commerce}
                                    </Link>
                                    <Link
                                        href="#"
                                        className="text-base text-gray-500 hover:text-gray-900 block"
                                    >

                                        {dictionary.insights}
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                                    {dictionary.support}
                                </h3>
                                <div className="mt-4 space-y-4">
                                    <Link
                                        href="#"
                                        className="text-base text-gray-500 hover:text-gray-900 block"
                                    >
                                        {dictionary.pricing}
                                    </Link>

                                    <Link
                                        href="#"
                                        className="text-base text-gray-500 hover:text-gray-900 block"
                                    >
                                        {dictionary.guides}
                                    </Link>
                                    <Link
                                        href="#"
                                        className="text-base text-gray-500 hover:text-gray-900 block"
                                    >
                                        {dictionary.apiStatus}
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                                    {dictionary.solutions}
                                </h3>
                                <div className="mt-4 space-y-4">
                                    <Link
                                        href="#"
                                        className="text-base text-gray-500 hover:text-gray-900 block"
                                    >
                                        {dictionary.marketing}
                                    </Link>
                                    <Link
                                        href="#"
                                        className="text-base text-gray-500 hover:text-gray-900 block"
                                    >
                                        {dictionary.analytics}
                                    </Link>
                                    <Link
                                        href="#"
                                        className="text-base text-gray-500 hover:text-gray-900 block"
                                    >
                                        {dictionary.commerce}
                                    </Link>
                                    <Link
                                        href="#"
                                        className="text-base text-gray-500 hover:text-gray-900 block"
                                    >
                                        {dictionary.insights}
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                                    {dictionary.support}
                                </h3>
                                <div className="mt-4 space-y-4">
                                    <Link
                                        href="#"
                                        className="text-base text-gray-500 hover:text-gray-900 block"
                                    >
                                        {dictionary.pricing}
                                    </Link>

                                    <Link
                                        href="#"
                                        className="text-base text-gray-500 hover:text-gray-900 block"
                                    >
                                        {dictionary.guides}
                                    </Link>
                                    <Link
                                        href="#"
                                        className="text-base text-gray-500 hover:text-gray-900 block"
                                    >
                                        {dictionary.apiStatus}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* footer */}
        </>

    )
}