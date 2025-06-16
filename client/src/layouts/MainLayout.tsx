import NavigationBar from "./components/NavigationBar";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import type { ReactNode } from "react";

type LayoutProps = {
  children?: ReactNode;
};

export default function MainLayout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen w-full">
      <NavigationBar />

      {/* Header and page content container */}
      <div className="flex flex-col w-full min-h-screen">
        <Header />

        {/* Main page content  */}
        <main className="bg-gray-300 w-full min-h-full">
          {children || <Outlet />}
        </main>
      </div>
    </div>
  );
}
