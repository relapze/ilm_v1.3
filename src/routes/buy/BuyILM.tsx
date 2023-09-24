import React, { useState } from "react";
import styles from "./BuyILM.module.scss";
import UniswapLogo from "../../utils/UNI 1.svg";

interface BuyILMProps {
  handleClosePopup: () => void;
}

const BuyILM: React.FC<BuyILMProps> = ({ handleClosePopup }) => {
  const [selectedBox, setSelectedBox] = useState("");

  const handleBoxClick = (boxName: string) => {
    setSelectedBox(boxName);
    if (boxName === "box1") {
      window.open("https://app.uniswap.org/#/swap", "_blank"); // Open Uniswap.org in a new tab
    }
    // Handle other box clicks...
  };

  // Prevent scrolling on the underlying page when the popup is active
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className={styles.overlay} onClick={handleClosePopup}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <div className={styles["popup-container"]}>
          <h1 className={styles["purchase-method-heading"]}>SELECT PURCHASE METHOD</h1>
          <div className={styles["content-container"]}>
            <div
              className={`${styles["box"]} ${selectedBox === "box1" ? styles.selected : ""}`}
              onClick={() => handleBoxClick("box1")}
            >
              <img src={UniswapLogo} alt="Uniswap Logo" className={styles.logo} />
              <p className={styles["purchase-text1"]}>BUY ILM ON <br /> UNISWAP</p>
            </div>
            <div
              className={`${styles["box"]} ${selectedBox === "box2" ? styles.selected : ""}`}
              onClick={() => handleBoxClick("box2")}
            >
              <h5 className={styles["coming-soon-heading"]}>COMING SOON...</h5>
              <p className={styles["purchase-text2"]}> BUY ILM ON <br /> CENTRALIZED EXCHANGE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyILM;
