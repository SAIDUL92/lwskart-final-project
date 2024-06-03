"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import { MagnifyingGlass } from '@/icons';


export default function SearchForm({ search, dictionary }) {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const [searchTerm, setSearchTerm] = useState({
        search: search || ''
    });



    const handleInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        const state = { ...searchTerm, [name]: value };

        setSearchTerm(state);
    };


    function doSearch(event) {
        event.preventDefault()
        const params = new URLSearchParams(searchParams);

        params.set("search", searchTerm?.search);

        if (pathname.includes("shop")) {
            replace(`${pathname}?${params.toString()}`);
        } else {
            replace(`${pathname}/shop/?${params.toString()}`);
        }


    }

    return (
        <form onSubmit={doSearch} className="w-full max-w-xl relative flex">
            <span className="absolute left-4 top-3 text-lg text-gray-400">
                {MagnifyingGlass}
            </span>
            <input
                type="text"
                name="search"
                id="search"
                className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none hidden md:flex"
                placeholder={`${dictionary.Search}`}
                value={searchTerm?.search}
                onChange={handleInputs}
            />
            <button type="submit" className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition hidden md:flex md:items-center">
                {dictionary.Search}
            </button>
        </form>
    );
}
