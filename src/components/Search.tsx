"use client";

import { SearchIcon } from "lucide-react";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <div className="border w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition bg-theme-500 text-theme-50">
      <div className="flex flex-row items-center justify-between px-2">
        <div
          className="
            text-sm 
            font-semibold 
            px-6
          ">
          Destination
        </div>
        <div
          className="
            hidden 
            sm:block 
            text-sm 
            px-6
            font-semibold 
            border-x-[1px] 
            flex-1 
            text-center
          ">
          Duration
        </div>

        <div
          className="
            text-sm 
            pl-6 
            pr-2 
            text-gray-600 
            flex 
            flex-row 
            items-center 
            gap-3
          ">
          <div className="hidden sm:block px-4 text-sm text-slate-300">
            Add Guests
          </div>

          <div className="p-1 bg-theme-900 rounded-full text-theme-50">
            <SearchIcon className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
