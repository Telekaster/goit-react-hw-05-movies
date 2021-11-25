import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <nav className={styles.nav}>
        <Link
          to="/"
          className={styles.header__nav_links_inactive}
          activeClassName={styles.header__nav_links_active}
        >
          Home
        </Link>
        <Link
          to="/search_movie"
          className={styles.header__nav_links_inactive}
          activeClassName={styles.header__nav_links_active}
        >
          Movies
        </Link>
      </nav>
    </header>
  );
}
