import FilterByPriceRange from "./FilterByPriceRange";
import FilterByCategory from "./filterByCategory";
import FilterBySize from "./FilterBySize";
import { getDictionary } from "@/app/[lang]/dictionaries";

const Filter = async ({ lang }) => {
    const dictionary = await getDictionary(lang);
    return (
        <>
            <FilterByCategory dictionary={dictionary} />
            <FilterByPriceRange dictionary={dictionary} />
            <FilterBySize dictionary={dictionary} />
        </>
    );
};

export default Filter;
