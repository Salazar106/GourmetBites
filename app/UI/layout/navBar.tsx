'use client'

import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { FaSquareFacebook, FaInstagram } from "react-icons/fa6";
import { Image } from "@nextui-org/react";
import "./navBar.css"
import { usePathname } from 'next/navigation';
import clsx from "clsx";
import NavDropdown from "./navDropDown";

export const NavBar = () => {

    const pathname = usePathname();

    const links = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        { name: 'Contact', link: '/contact' },
        { name: 'Catalog', link: '/catalog' },
    ]

    const social = [
        { name: "facebook", link: 'https://www.facebook.com/emunacandles/', icon: <FaSquareFacebook /> },
        { name: "instagram", link: 'https://www.instagram.com/emunacandles/', icon: <FaInstagram /> },
    ]



    return (
        <div className="">
            {/* <div className=" hidden md:block h-36 bg-sky-200" id="imgNavBar">  
            </div>             */}

            <Navbar style={{ backgroundColor: "#ffffff", boxShadow: "1px 3px 10px gray" }}
                classNames={{
                    item: [
                        "flex",
                        "relative",
                        "items-center",
                        "data-[active=true]:after:content-['']",
                        "data-[active=true]:after:absolute",
                        "data-[active=true]:after:bottom-0",
                        "data-[active=true]:after:left-0",
                        "data-[active=true]:after:right-0",
                        "data-[active=true]:after:h-[2px]",
                        "data-[active=true]:after:rounded-[2px]",
                        "data-[active=true]:after:bg-primary",

                    ],
                }}
            >
                <NavbarBrand>
                    <Image src='/imgs/emunaLogo.png' alt="Ejemplo" width={70} />

                    {/* <p className="font-bold text-inherit">EMUNA CANDLES</p> */}
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    {links.map((link, index) => (
                        <NavbarItem key={index}>
                            <Link className={clsx(
                                'text-black',
                                { 'text-[20px] text-primary font-bold border-b-2 border-primary': pathname === link.link }
                            )} style={{ color: "black" }} href={link.link}>
                                {link.name}
                            </Link>
                        </NavbarItem>
                    ))}
                </NavbarContent>

                <NavbarContent justify="end">
                    {social.map((red, index) => (
                        <NavbarItem key={index}>
                            <Link className="font-bold text-back" target="_blank" href={red.link}>
                                {red.icon}
                            </Link>
                        </NavbarItem>
                    ))}
                    {/* <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem> */}
                <div className="sm:hidden">
                    <NavDropdown path={pathname} links={links}/>
                </div>
                </NavbarContent>
            </Navbar>
        </div>
    );
}
