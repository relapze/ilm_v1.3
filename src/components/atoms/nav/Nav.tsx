import React, { useState } from "react";
import styles from "../nav/Nav.module.scss";
import { Link, useNavigate } from "react-router-dom";
import BuyILM from "../../../routes/buy/BuyILM";

const Nav = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handlePopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleLinkClick = () => {
    if (showPopup) {
      setShowPopup(false);
    }
  };

  const handleHeaderLinkClick = () => {
    setShowPopup(false);
    // Perform navigation to another page
    navigate("/another-page");
  };

  return (
    <nav className={styles.nav}>
      <Link
        to="/dashboard"
        className={styles["nav-link"]}
        // onClick={handleLinkClick}
      >
        DASHBOARD
      </Link>
      <span className={styles["nav-link"]} onClick={handlePopup}>
        BUY ILM
      </span>
      <Link
        to="/stake"
        className={styles["nav-link"]}
        // onClick={handleLinkClick}
      >
        STAKE ILM
      </Link>
      <Link
        to="/docs"
        className={styles["nav-link"]}
        // onClick={handleLinkClick}
      >
        DOCS
      </Link>

      {showPopup && <BuyILM handleClosePopup={handleClosePopup} />}
    </nav>
  );
};

export default Nav;
