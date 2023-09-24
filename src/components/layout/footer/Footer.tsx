import styles from "./Footer.module.scss";

const Footer = () => {
  return (
<footer className={styles.footer}>
  <div className={styles.footerContent}>
    <div className={styles.links}>
      <a href="/contact">Contact Us</a>
      <a href="/faq">FAQ</a>
      <a href="/terms">Terms & Conditions</a>
    </div>
    <div className={styles.rightLinks}>
      <a href="/buy">BUY ILM</a>
      <a href="/stake">STAKE ILM</a>
      <a href="/docs">DOCS</a>
    </div>
    <div className={styles.copyRight}>
      Illuminate &copy; {new Date().getFullYear()}
    </div>
  </div>
</footer>


  
  );
};

export default Footer;
