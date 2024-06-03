'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from "react";

const FilterByPriceRange = ({ dictionary }) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams);

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  useEffect(() => {
    const min = params.get('minPrice');
    const max = params.get('maxPrice');

    if (min) {
      setMinPrice(min);
    }
    if (max) {
      setMaxPrice(max);
    }
  }, []);

  useEffect(() => {
    if (minPrice) {
      params.set('minPrice', minPrice);
    } else {
      params.delete('minPrice');
    }

    if (maxPrice) {
      params.set('maxPrice', maxPrice);
    } else {
      params.delete('maxPrice');
    }

    replace(`${pathname}?${params.toString()}`);
  }, [minPrice, maxPrice]);

  const handleSubmit = (event) => {
    event.preventDefault();
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className="pt-4">
      <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
      {dictionary.Price}
      </h3>
      <div className="mt-4 flex items-center">
        <input
          type="text"
          name="min"
          id="min"
          value={minPrice}
          onChange={handleMinPriceChange}
          className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
          placeholder="min"
        />
        <span className="mx-3 text-gray-500">-</span>
        <input
          type="text"
          name="max"
          id="max"
          value={maxPrice}
          onChange={handleMaxPriceChange}
          className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
          placeholder="max"
        />
      </div>
    </form>
  );
};

export default FilterByPriceRange;
