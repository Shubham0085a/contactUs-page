import styles from './Navigation.module.css'
function Navigation() {

  return (
    <nav className={`${styles.navigation} container`}>
        <div className={styles.logo}>
            <img src="/images/pic.png" alt="" />
        </div>

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  );
}

export default Navigation;
