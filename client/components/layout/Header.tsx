import styles from "../../styles/Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>Student Manager</div>
        <nav className={styles.nav}>
            <li className={styles.navItem}><Link href="/">Home</Link></li>
            <li className={styles.navItem}><Link href="/students">All Students</Link></li>
            <li className={styles.navItem}><Link href="/courses">All Courses</Link></li>
        </nav>
    </div>
  )
}

export default Header