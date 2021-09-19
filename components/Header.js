import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header
      className="sticky top-0 z-50 grid  grid-cols-3 bg-white
       shadow-md p-5 md:px-10
    "
    >
      {/* left */}
      <div
        className="relative 
      flex items-center h-10
      cursor-pointer my-auto
      "
      >
        <Image
          objectFit="contain"
          layout="fill"
          objectPosition="left"
          src="https://links.papareact.com/qd3"
        />
      </div>
      {/* Middle search */}
      <div
        className="flex items-center
       md:border-2 rounded-full py-2 md:shadow-sm "
      >
        <input
          type="text"
          placeholder="Start your search"
          className="pl-5 text-sm text-gray-60 placeholder-gray-400 flex-grow bg-transparent 
          outline-none"
        />
        <SearchIcon
          className="hidden md:inline-flex h-8 bg-red-400
         text-white rounded-full
          p-2 cursor-pointer md:mx-2"
        />
      </div>

      {/* right */}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 rounded-full p-2">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default Header;
