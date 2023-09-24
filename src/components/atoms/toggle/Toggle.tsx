import styles from "./Toggle.module.scss";

import { useTheme } from "../../../hooks/useTheme";

const Toggle = () => {
  const [theme, handleChange] = useTheme();

  return (
    <div className={styles.switch}>
      <label>
        <input
          type="checkbox"
          onChange={handleChange}
          checked={theme === "dark"}
        />
        <span />
      </label>
    </div>
  );
};

export default Toggle;
