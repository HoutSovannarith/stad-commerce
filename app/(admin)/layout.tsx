import "../globals.css";
import SideBar, {SidebarItem} from "@/components/sidebar/SideBar";
import React from "react";
import {BarChart3, LayoutDashboard, UserCircle} from "lucide-react";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "STAD Commerce",
  description: "STAD Commerce is a platform for selling and buying products online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`flex sticky left-0`}>
        <aside className="z-10">
          <SideBar>
            <SidebarItem icon={<LayoutDashboard size={20}/>} text="Dashboard" alert={null} active={null} />
            <SidebarItem icon={<BarChart3 size={20}/>} text="Statistics" active={null} alert={null}/>
            <SidebarItem icon={<UserCircle size={20}/>} text="Products" active={null} alert={null}/>
          </SideBar>
        </aside>
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
