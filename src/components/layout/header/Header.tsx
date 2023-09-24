import styles from "./Header.module.scss";

import { useAccount } from "wagmi";

import Logo from "../../atoms/logo/Logo";
import Nav from "../../atoms/nav/Nav";
import Connect from "../../atoms/connect/Connect";

const Header = () => {
  const { isConnected } = useAccount();

  return (
    <header className={styles.header}>
      <Logo />
      {isConnected && <Nav />}
      <Connect />
    </header>
  );
};

export default Header;
