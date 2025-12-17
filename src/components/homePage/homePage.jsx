import Banner from "../../assets/banner.jpg";
import styles from "./homePage.module.css";
import { Link } from "react-router";

export const HomePage = () => {
  return (
    <div className={styles.div}>
      <Link className={styles.link} to={`/restaurants`}>
        {"Choose restaurant"}
      </Link>
      <img className={styles.img} src={Banner} />
    </div>
  );
};
