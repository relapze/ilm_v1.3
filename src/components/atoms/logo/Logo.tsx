import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../utils/White.png";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <Link to="/" className={styles.headerlogo}>
      <img src={logo} alt="logo" />
    </Link>
  );
};

export default Logo;
