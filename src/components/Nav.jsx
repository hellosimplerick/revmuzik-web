import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="bg-white shadow mb-6">
      <div className="max-w-7xl mx-auto px-4 py-3 flex space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-700 hover:text-blue-600"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/dashboard/fan"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-700 hover:text-blue-600"
          }
        >
          Fan Dashboard
        </NavLink>
        <NavLink
          to="/dashboard/venue"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-700 hover:text-blue-600"
          }
        >
          Venue Dashboard
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
