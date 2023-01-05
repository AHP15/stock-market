import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';

import left from '../assets/left.png';

const Header = () => (
  <header className={styles.header}>
    <Link to="/" className={styles.back}>
      <img src={left} alt="back" />
    </Link>
    <p>US tech companies</p>
  </header>
);
export default Header;
