import SearchBox from "../molecules/SearchBox";
import styles from "./NavBar.module.css";

export default function NavBar({ icon }: { icon?: string }) {
  return (
    <div className={styles.navBox}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <a href="default.asp">Home</a>
        </li>
        <li className={styles.li}>
          <a href="news.asp">About</a>
        </li>
        <li className={styles.li}>
          <a href="contact.asp">Blog</a>
        </li>
        <li className={styles.li}>
          <a href="about.asp">Contact</a>
        </li>
      </ul>
      <div className={styles.searchBox}>
        <SearchBox />
      </div>
    </div>
  );
}
