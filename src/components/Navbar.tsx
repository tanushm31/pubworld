import React from "react";

export const Navbar: React.FC = () => {
  return (
    <nav className="flex w-full flex-row items-center justify-between py-4 px-6 text-white">
      <div className="flex flex-row items-center gap-4">
        <h1 className="text-2xl font-bold text-white">Navbar</h1>
      </div>
      <div>
        <ul className="flex flex-row items-center gap-4">
          <li>
            <a
              href="./"
              className="rounded-full py-1 px-3 text-white no-underline hover:bg-rose-400"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="./editor"
              className="rounded-full py-1 px-3 text-white no-underline hover:bg-rose-400"
            >
              Editor
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
