import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        &copy; 2025 Restaurants Guide. All rights reserved.
      </footer>
    </div>
  );
};
