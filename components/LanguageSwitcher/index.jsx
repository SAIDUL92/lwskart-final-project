"use client";


import Image from "next/image";
import { useState } from 'react';
import { useRouter, usePathname } from "next/navigation";

const LanguageSwitcher = () => {


  const router = useRouter();
  const pathname = usePathname();

  const languages = [
    {
      code: "en",
      language: "English",
    },
    {
      code: "bn",
      language: "Bangla",
    },
  ];
  const found = languages.find((lang) => pathname.includes(lang.code));
  const [selectedLanguage, setSelectedLanguage] = useState(
    found ?? languages[0]
  );

  const [showManu, setShowManu] = useState(false);

  const handleLanguageChange = (lang) => {

    setSelectedLanguage({
      ...selectedLanguage,
      code: lang,
      language: lang === "en" ? "English" : "Bangla",
    });
    setShowManu(false);
    router.replace(`/${lang}`);
  };

  return (
    <div className="flex gap-4 items-center">
      <div className="relative">
        <button
          className="flex items-center gap-2 text-white"
          onClick={() => setShowManu(!showManu)}
        >
          <Image
            className="max-w-8"
            src={`/${selectedLanguage.code}.png`}
            alt="bangla"
            height={100}
            width={165}
          />
          {selectedLanguage.language}
        </button>
        {showManu && (
          <div className="absolute right-0 top-full mt-2 w-40 rounded-md bg-white p-2 z-10 shadow-lg">
            {languages.map((entry) => (
              <li
                key={entry.code}
                onClick={() => handleLanguageChange(entry.code)}
                className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100 text-[#575A6E]"
              >
                <Image
                  className="max-w-8"
                  src={`/${entry.code}.png`}
                  alt="bangla"
                  height={100}
                  width={165}
                />
                {entry.language}
              </li>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
