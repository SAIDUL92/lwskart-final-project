'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const FilterBySize = ({ dictionary }) => {
  const [selectedSizes, setSelectedSizes] = useState([]);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChange = (event) => {
    const size = event.target.value;
    setSelectedSizes((prevSizes) =>
      prevSizes.includes(size)
        ? prevSizes.filter((s) => s !== size)
        : [...prevSizes, size]
    );
  };

  useEffect(() => {
    const sizeParams = searchParams.get('size');
    if (sizeParams) {
      setSelectedSizes(sizeParams.split(','));
    }
  }, [searchParams]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (selectedSizes.length > 0) {
      params.set('size', selectedSizes.join(','));
    } else {
      params.delete('size');
    }
    replace(`${pathname}?${params.toString()}`);
  }, [selectedSizes, searchParams, pathname, replace]);

  return (
    <div className="pt-4">
      <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
        {dictionary.Size}
      </h3>
      <form className="flex items-center gap-2">
        {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
          <div key={size} className="size-selector">
            <input
              type="checkbox"
              name="size"
              id={`size-${size.toLowerCase()}`}
              value={size}
              checked={selectedSizes.includes(size)}
              onChange={handleChange}
              className="hidden"
            />
            <label
              htmlFor={`size-${size.toLowerCase()}`}
              className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
            >
              {size}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default FilterBySize;
