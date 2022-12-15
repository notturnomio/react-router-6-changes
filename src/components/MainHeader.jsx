import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MainHeader.module.css";

function MainHeader() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/welcome"
              className={(navData) => (navData.isActive ? styles.active : "")}
            >
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={(navData) => (navData.isActive ? styles.active : "")}
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
