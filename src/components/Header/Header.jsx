import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.nav__link_active : styles.nav__link
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/search_movie"
          className={({ isActive }) =>
            isActive ? styles.nav__link_active : styles.nav__link
          }
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
}
