'use client'
import {useState} from "react";
import Image from "next/image";
import { BiBarChart } from "react-icons/bi";

const SideBar = () => {
    const [open, setOpen] = useState(true)
    const Menu = [
        {
            title : "Dashboard",
            icon : <BiBarChart/>,
            link : "/dashboard"
        },
        {
            title : "Dashboard",
            icon : <BiBarChart/>,
            link : "/dashboard"
        },
        {
            title : "Dashboard",
            icon : <BiBarChart/>,
            link : "/dashboard"
        },
        {
            title : "Dashboard",
            icon : <BiBarChart/>,
            link : "/dashboard"
        },
    ]
    return (
        <div className="flex">
            <div className={`transition-all ${open ? "w-72" : "w-20"} duration-300 h-screen p-5 pt-8 bg-blue-800 relative`}>
                <svg xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 320 512"
                     onClick={() => setOpen(!open)}
                     className={`absolute cursor-pointer -right-3 top-9 w-7 h-7 border-2 rounded-full bg-gray-300 ${!open && "rotate-180"}`}
                >
                    <path
                        d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                </svg>
                <div className="flex gap-x-4 items-center">
                    <img
                        src="https://istad.co/resources/img/CSTAD_120.png"
                        width={40}
                        height={40}
                        alt="logo"
                        className={`cursor-pointer duration-500`}
                    />
                    <h1 className={`text-white origin-left font-medium text-xl uppercase duration-300 ${!open && "scale-0"}`}>STAD-Commerce</h1>
                </div>
                <div>
                    {Menu.map((menu:any, index:any) => (
                        <a href={menu.link} key={index} className="text-gray-300 text-sm flex items-center">
                            <div>{menu.icon}</div>
                            <div className={`${!open && "scale-0"}`}>{menu.title}</div>
                        </a>
                    ))}
                </div>
            </div>
            <div>
            </div>
        </div>
    );
};

export default SideBar;
