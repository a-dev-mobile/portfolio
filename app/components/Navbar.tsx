'use client'

import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import Themebutton from "./ThemeButton";
import React from "react";
const NavBar = () => {

    interface NavLinkProps {
        href: string;
        label: string;
    }
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            // Например, показывать элемент, если страница прокручена более чем на 10px
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

    
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {

        const isActive = pathname === href;
        return (<Link href={href} prefetch className={`${isActive
            ? 'border-teal-500 h-full inline-flex items-center border-b-2 text-sm font-medium px-2 pt-1'
            : 'border-transparent hover:text-black  dark:text-gray-300 text-gray-500 h-full inline-flex items-center border-b-2 dark:hover:text-white text-sm px-2 pt-1 '
            }`}>
            {label}
        </Link>);

    }
    const navLinks = (
        <>
          <NavLink href='/' label='Обо мне' />
          <NavLink href='/pet-projects' label='Личные проекты' />
         
        </>
      );
    const pathname = usePathname() || '/'
    return (<Disclosure as='nav' className=''>
        {({ open }) => (
            <>
                <div className="max-w-6xl mx-auto px-1 ">
                    <div className="flex justify-between h-16">
                        <div className="flex justify-between w-full">
                            <div className="flex items-center">
                                <Link href='/'>
                                    <h1 className="text-2xl font-medium px-3">
                                        Dmitriy <span className="text-teal-500">Trofimov</span>
                                    </h1>
                                </Link>

                            </div>
                            <div className="hidden md:flex md:items-center gap-x-5 ">

                            {navLinks}
                                <div className="ml-2">
                                    <Themebutton />


                                </div>
                            </div>
                            <div className=" md:hidden flex items-center gap-1">
                                <Themebutton />
                                <Disclosure.Button className='inline-flex text-gray-400 
                                 hover:text-gray-500
                                 hover:bg-gray-200
                                 p-2 rounded-lg
                                dark:hover:bg-gray-800
                                
                                 focus:ring-2 
                                focus:ring-teal-500'>

                                    {open ? (
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6">
                                            <path strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12" />
                                        </svg>

                                    ) : (<svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6">
                                        <path strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>

                                    )}



                                </Disclosure.Button>

                            </div>
                        </div>
                    </div>
                    <Disclosure.Panel className={
                        isScrolled ? 
                        'md:hidden fixed top-0  w-full z-10 bg-white p-2 dark:bg-black' 
                        : 'md:hidden '}>
                        <div className="flex justify-around ">

                        {navLinks}

                        </div>

                    </Disclosure.Panel>

                </div>

            </>



        )}



    </Disclosure>);
}

export default NavBar;