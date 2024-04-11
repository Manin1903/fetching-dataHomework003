import React from "react";
import Link from 'next/link';
const NavbarComponent = () => {
  return (
    <div>
        <main className="dark:bg-gray-800 relative overflow-hidden h-screen ">
          <header className="h-24 sm:h-32 flex items-center z-30 w-full">
            <div className="container mx-auto px-16 flex items-center justify-between">
              <div className="uppercase  dark:text-white font-black text-3xl">
                <Link href={'/'}>
                    <img src="https://www.legend.com.kh/_ipx/s_117x44/legend-cinema-logo.png" alt="" />
                </Link>
                
              </div>
              <div className="flex items-center">
                <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
                  <a href="#" className="py-2 px-4 flex text-white ">
                    <button
                      type="button"
                      class="text-green-500 hover:text-black  hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 "
                    >
                      Home
                    </button>
                  </a>
                  <a href="#" className="py-2 px-4  flex  text-white ">
                    <button
                      type="button"
                      class="text-green-500 hover:text-black  hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 "
                    >
                      Popular
                    </button>
                  </a>
                  <a href="#" className="py-2 px-4  flex  text-white ">
                    <button
                      type="button"
                      class="text-green-500 hover:text-black  hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 "
                    >
                      {" "}
                      Romance
                    </button>
                  </a>
                  <a href="#" className="py-2 px-4 flex  text-white ">
                    <button
                      type="button"
                      class="text-green-500 hover:text-black  hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 "
                    >
                      {" "}
                      Anime
                    </button>
                  </a>
                  <a href="#" className="py-2 px-4 flex  ">
                    <input
                      type="search"
                      id="default-search"
                      class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search movie..."
                      required
                    />
                  </a>
                </nav>
              </div>
            </div>
          </header>
        </main>
      </div>
  );
};

export default NavbarComponent;
