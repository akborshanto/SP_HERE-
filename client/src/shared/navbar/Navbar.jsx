import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <div>
      <NavLink to="/addJob">
        <li>
          <div className="justify-between">Add Job</div>
        </li>
      </NavLink>
      <NavLink to="/myPostJob">
        <li>
          <div>My Posted Jobs</div>
        </li>
      </NavLink>
      <NavLink to="/myBidsJob">
        <li>
          <div>My Bids</div>
        </li>
      </NavLink>
      <NavLink to="/bidRequest">
        <li>
          <div>Bid Requests</div>
        </li>
      </NavLink>
    </div>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm container px-4 mx-auto">
        <div className="flex-1">
          <div className="flex gap-2 items-center">
            <img className="w-auto h-7" src="" alt="" />
            <span className="font-bold">SoloSphere</span>
          </div>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <NavLink to="/">
              <li>
                <div>Home</div>
              </li>
            </NavLink>

            <NavLink to="/login">
              <li>
                <div>Login</div>
              </li>
            </NavLink>
          </ul>

          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full" title="">
                <img
                  referrerPolicy="no-referrer"
                  alt="User Profile Photo"
                  src=""
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
              <li className="mt-2">
                <button className="bg-gray-200 block text-center">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
