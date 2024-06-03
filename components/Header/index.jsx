import Image from "next/image";
import Actions from "../Actions";
import SearchForm from "../SearchForm";
import Link from "next/link";
import { getDictionary } from "@/app/[lang]/dictionaries";

export default async function Header({ lang, search }) {
    const dictionary = await getDictionary(lang);

    return (
        <>
            {/* header start */}
            <header className="py-4 shadow-sm bg-white">
                <div className="container flex items-center justify-between">
                    <Link href="/">
                        <Image src="/assets/images/logo.svg" alt="Logo" className="w-32" width={128} height={41} priority />
                    </Link>
                    <SearchForm lang={lang} search={search} dictionary={dictionary} />
                    <Actions lang={lang} />
                </div>
            </header>
            {/* header end*/}
        </>
    )
}
