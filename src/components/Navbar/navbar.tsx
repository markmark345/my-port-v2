import NextLink from 'next/link';
import { FC } from 'react';

interface INavbar {}

const Navbar: FC<INavbar> = () => {
  return (
    <div
      className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b 
      lg:border-slate-400/10 shadow-lg bg-white/95 "
    >
      <div className="max-w-8xl mx-auto lg:container">
        <div className="py-6 border-b border-slate-900/10 lg:px-20 lg:border-0  mx-4 lg:mx-0">
          <div className="relative flex items-center">
            <p className="text-[24px] font-black">Portfolio</p>
            <div className="relative hidden lg:flex items-center ml-auto">
              <nav className="text-sm leading-6 text-slate-700 ">
                <ul className="flex space-x-[50px]">
                  <li>
                    <NextLink href={'#'}>
                      <p className="hover:text-sky-500 transition-all duration-500">
                        Home
                      </p>
                    </NextLink>
                  </li>
                  <li>
                    <NextLink href={'#'}>
                      <p className="hover:text-sky-500 transition-all duration-500">
                        Skill
                      </p>
                    </NextLink>
                  </li>
                  <li>
                    <NextLink href={'#'}>
                      <p className="hover:text-sky-500 transition-all duration-500">
                        Project
                      </p>
                    </NextLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
