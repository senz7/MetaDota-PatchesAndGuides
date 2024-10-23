import Image from "next/image";

import book from "../svg/book.svg";
import file from "../svg/file.svg";
import search from "../svg/search.svg";
import trendingUp from "../svg/trendingup.svg";

export const QuickLinks = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-4">Quick Links</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <a
          href="#"
          className="flex items-center p-4 bg-white rounded-lg shadow-md hover:bg-gray-50 dark:bg-gray-700 transition-colors duration-400 ease-in-out"
        >
          <Image src={file} width="30" className="fill-red-900 mr-3" alt="" />
          <span>Latest Patch Notes</span>
        </a>
        <a
          href="#"
          className="flex items-center p-4 bg-white rounded-lg shadow-md hover:bg-gray-50 dark:bg-gray-700 transition-colors duration-400 ease-in-out"
        >
          <Image src={book} width="35" className="fill-red-900 mr-3" alt="" />
          <span>Hero Guides</span>
        </a>
        <a
          href="#"
          className="flex items-center p-4 bg-white rounded-lg shadow-md hover:bg-gray-50 dark:bg-gray-700 transition-colors duration-400 ease-in-out"
        >
          <Image
            src={trendingUp}
            width="35"
            className="fill-red-900 mr-3"
            alt=""
          />
          <span>Meta Analysis</span>
        </a>

        <a
          href="#"
          className="flex items-center p-4 bg-white rounded-lg shadow-md hover:bg-gray-50 dark:bg-gray-700 transition-colors duration-400 ease-in-out"
        >
          <Image src={search} width="35" className="fill-red-900 mr-3" alt="" />
          <span>Search Guides</span>
        </a>
      </div>
    </section>
  );
};
