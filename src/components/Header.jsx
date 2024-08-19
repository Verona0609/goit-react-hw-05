import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <header>
        <nav className={styles.nav}>
          <NavLink className={styles.linkheader} to="/">
            Home
          </NavLink>

          <NavLink className={styles.linkheader} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
    </div>
  );
};
 
export default Header;
