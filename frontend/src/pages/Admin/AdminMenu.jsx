import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";


const AdminMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className={`right-7 top-5 bg-[#030202] p-2 fixed rounded-lg`}
      >
        {isMenuOpen ? <FaAngleUp /> : <FaAngleDown />}
      </button>

      {isMenuOpen && (
        <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-lg">
          <ul className="py-2">
            <li>
              <NavLink
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                to="/admin/categorylist"
              >
                Create Category
              </NavLink>
            </li>
            <li>
              <NavLink
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                to="/admin/allpropertieslist"
              >
                All Properties
              </NavLink>
            </li>
            <li>
              <NavLink
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                to="/admin/userlist"
              >
                Manage Users
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AdminMenu;
