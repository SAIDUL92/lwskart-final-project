import { getDictionary } from "@/app/[lang]/dictionaries";
import Image from "next/image";

export default async function CopyRight({ lang }) {
    const dictionary = await getDictionary(lang);
    return (
        <>
            {/* copyright */}
            <div className="bg-gray-800 py-4">
                <div className="container flex items-center justify-between">
                    <p className="text-white">{dictionary.TailCommerce}</p>
                    <div>
                        <Image src="/assets/images/methods.png" alt="methods" className="h-5" width={238} height={20} />
                    </div>
                </div>
            </div>
            {/* copyright */}
        </>

    )
}