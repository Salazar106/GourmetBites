
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import clsx from "clsx";

export default function NavDropdown({path, links}) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle  aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
      </NavbarContent>
      <NavbarMenu>
        {links && links.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
             className={clsx(
                'text-black',
                'text-black',
                { 'text-[20px] text-primary font-bold': path === item.link }
            )} 
              href={item.link}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}







