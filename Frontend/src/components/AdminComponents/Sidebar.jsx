import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaFolder } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { MdDashboard } from "react-icons/md";

const navItems = [
  { to: "/admin", label: "Admin", icon: MdDashboard, exact: true },
  { to: "/admin/products", label: "Products", icon: FaFolder },
  { to: "/admin/subscribe", label: "Subscribe", icon: IoIosNotifications },
];

const Sidebar = ({ sideBarOpen, setSideBarOpen }) => {
  return (
    <div
      className={`fixed w-50 sm:w-64 h-screen z-20 border-r  bg-white border-neutral-500
      } ${sideBarOpen ? "translate-x-0" : "-translate-x-70"} lg:translate-x-0 lg:static z-20`}
    >
      <div className="flex justify-between items-center p-2 py-3 ">
        <h1 className="font-bold text-2xl mb-2 mt-1 ">Admin Panel</h1>
        <button
          className="text-4xl lg:hidden mb-2 mt-1"
          onClick={() => setSideBarOpen(false)}
        >
          ×
        </button>
      </div>

      <div className="mt-2 p-4 space-y-3 text-lg cursor-pointer">
        {navItems.map(({ to, label, icon: Icon, exact }) => (
          <NavLink
            key={to}
            to={to}
            end={exact}
            onClick={() => setSideBarOpen(false)}
            className={({ isActive }) =>
              `flex gap-3 p-3 rounded-lg ${isActive ? "bg-neutral-400" : ""}`
            }
          >
            <Icon className="self-center" />
            <h1>{label}</h1>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
