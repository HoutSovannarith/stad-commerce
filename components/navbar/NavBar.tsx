
"use client";

import { Navbar, Dropdown } from "flowbite-react";

export default function NavBar() {
    const Menu = [
        {
            title : "Home",
            link : "/"
        },
        {
            title : "Products",
            link : "/products"
        },
        {
            title : "About Us",
            link : "/about"
        },
        {
            title : "Contact",
            link : "/contact"
        }
    ];
    return (
        <Navbar fluid>
            <Navbar.Brand href="/">
                <img src="https://istad.co/resources/img/CSTAD_120.png" className="mr-3 h-6 sm:h-9" alt="STAD Commerce" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white uppercase">Stad-Commerce</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown label="Option" dismissOnClick={false}>
                    <Dropdown.Item href="/dashboard">Dashboard</Dropdown.Item>
                    <Dropdown.Item href="/login">Log In</Dropdown.Item>
                    <Dropdown.Item href="/signup">Sign out</Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                {Menu.map((menu, index) => (
                    <Navbar.Link key={index} href={menu.link}>{menu.title}</Navbar.Link>
                ))
                }
            </Navbar.Collapse>
        </Navbar>
    );
}
