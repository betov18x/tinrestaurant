import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className={({isActive}) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/your-likes"
            className={({isActive}) => (isActive ? 'active' : '')}
          >
            Your likes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
