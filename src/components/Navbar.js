import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-primary">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "btn btn-neutral normal-case text-xl mx-2"
              : "btn btn-accent normal-case text-xl mx-2"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "btn btn-neutral normal-case text-xl mx-2"
              : "btn btn-secondary normal-case text-xl mx-2"
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "btn btn-neutral normal-case text-xl mx-2"
              : "btn btn-warning normal-case text-xl mx-2"
          }
          to="/dashboard"
        >
          Dashboard
        </NavLink>
      </div>
    </>
  );
}
