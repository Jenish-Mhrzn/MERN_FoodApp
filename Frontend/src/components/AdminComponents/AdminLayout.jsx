import React, { useContext, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";

const pageTitles = {
  "/admin": "Add Product",
  "/admin/products": "Products Lists",
  "/admin/subscribe": "Subscriber lists",
};

const AdminLayout = () => {
  const location = useLocation();
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const currentTitle = pageTitles[location.pathname] || "Add Product";

  return (
    <div className="flex flex-row h-screen ">
      <Sidebar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />

      <main className="flex-1  overflow-y-auto ">
        <header className="flex sticky bg-white border-b top-0 z-10 justify-between items-center p-4 ">
          <button
            className="p-2 text-xl font-bold lg:hidden"
            onClick={() => setSideBarOpen(!sideBarOpen)}
          >
            ☰
          </button>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            {currentTitle}
          </h1>
          <div className="bg-gray-500 h-10 w-10 rounded-full"></div>
        </header>

        {/* here the content will be apper */}
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
