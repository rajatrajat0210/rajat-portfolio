import styles from './Footerstyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2025 Rajat. <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
