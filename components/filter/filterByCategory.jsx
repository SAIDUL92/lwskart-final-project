'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from "react";

const FilterByCategory = ({ dictionary }) => {
  const [query, setQuery] = useState([]);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams);

  const handleChange = (event) => {

    event.preventDefault();
    const name = event.target.name;
    const checked = event.target.checked;

    if (checked) {
      setQuery(prev => [...prev, name]);
    } else {
      const filtered = query.filter(item => item !== name);
      setQuery(filtered);
    }

  }

  useEffect(() => {
    const category = params.get('category');

    if (category) {
      const decodedCategory = decodeURI(category);
      const queryInCategory = decodedCategory.split('|');
      setQuery(queryInCategory);
    }

  }, []);

  useEffect(() => {
    if (query.length > 0) {
      params.set('category', encodeURI(query.join('|')))
    } else {
      params.delete('category');
    }
    replace(`${pathname}?${params.toString()}`)
  }, [query])

  return (
    <>

      <div>

        <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
          {dictionary.Categories}
        </h3>
        <form className="space-y-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="Bedroom"
              checked={query.includes('Bedroom')}
              onChange={handleChange}
              id="cat-1"
              className="text-primary focus:ring-0 rounded-sm cursor-pointer"
            />
            <label
              htmlFor="cat-1"
              className="text-gray-600 ml-3 cusror-pointer"
            >
              Bedroom
            </label>
            <div className="ml-auto text-gray-600 text-sm">(15)</div>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="Sofa"
              checked={query.includes('Sofa')}
              onChange={handleChange}
              id="cat-2"
              className="text-primary focus:ring-0 rounded-sm cursor-pointer"
            />
            <label
              htmlFor="cat-2"
              className="text-gray-600 ml-3 cusror-pointer"
            >
              Sofa
            </label>
            <div className="ml-auto text-gray-600 text-sm">(9)</div>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="Office"
              checked={query.includes('Office')}
              onChange={handleChange}
              id="cat-3"
              className="text-primary focus:ring-0 rounded-sm cursor-pointer"
            />
            <label
              htmlFor="cat-3"
              className="text-gray-600 ml-3 cusror-pointer"
            >
              Office
            </label>
            <div className="ml-auto text-gray-600 text-sm">(21)</div>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="Outdoor"
              checked={query.includes('Outdoor')}
              onChange={handleChange}
              id="cat-4"
              className="text-primary focus:ring-0 rounded-sm cursor-pointer"
            />
            <label
              htmlFor="cat-4"
              className="text-gray-600 ml-3 cusror-pointer"
            >
              Outdoor
            </label>
            <div className="ml-auto text-gray-600 text-sm">(10)</div>
          </div>
        </form>
      </div>
    </>
  );
};

export default FilterByCategory;
