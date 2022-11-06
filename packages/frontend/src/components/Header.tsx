import React from 'react';

const Header = () => {
  return (
    <header className="flex h-14 items-center justify-start bg-gray-900 p-4">
      <div className="mr-7 h-full">
        <img
          src="https://uploads-ssl.webflow.com/62cd2d6fce0fa33c036c4caf/62cd735685ae9f588832057d_KH01_Khome_Identite%CC%81deMarque_LogoPrincipal_White_x4-p-500.png"
          alt="khome"
          className="max-h-full"
        />
      </div>
      <nav className="flex h-full flex-1 justify-start">
        <a
          href="#users"
          className="mr-4 mt-0 inline-block font-bold text-blue-200 underline hover:text-blue-400"
        >
          Users
        </a>
        <a
          href="#users"
          className="mr-4 mt-0 inline-block font-bold text-blue-200 underline hover:text-blue-400"
        >
          Examples
        </a>
        <a
          href="#users"
          className="mt-0 inline-block font-bold text-blue-200 underline hover:text-blue-400"
        >
          Blog
        </a>
      </nav>
    </header>
  );
};

export default Header;
