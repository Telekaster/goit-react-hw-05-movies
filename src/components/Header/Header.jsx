import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <nav className={styles.nav}>
        <Link to="/" className={styles.header__nav_links}>
          Home
        </Link>
        <Link to="/search_movie" className={styles.header__nav_links}>
          Movies
        </Link>
      </nav>
    </header>
  );
}
