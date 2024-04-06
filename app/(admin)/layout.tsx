import "../globals.css";
import SideBar from "@/components/sidebar/SideBar";
import React from "react";

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex sticky left-0`}>
        <aside>
          <SideBar />
        </aside>
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
