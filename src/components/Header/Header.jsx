import React from "react";

export function Header(props) {
  const { stateMenu } = props;
  return (
    <nav className="border-gray-200 bg-primary">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto lg:p-4 p-2">
        <a href="/" className="flex items-center">
          <span className="self-center lg:text-2xl text-lg font-semibold whitespace-nowrap dark:text-white">
            Sistema de Inventario
          </span>
        </a>
        <button
          type="button"
          className="lg:hidden inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={(event) => stateMenu(event)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
