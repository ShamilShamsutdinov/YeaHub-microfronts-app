import { Link } from 'react-router-dom';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>  
      <div className={styles.logo}>
        <Link to="/">YeahHub</Link>
      </div>

      <nav className={styles.nav}>
        <Link to="/" className={styles.link}>Главная</Link>
        <Link to="/questions" className={styles.link}>Вопросы</Link>
        <Link to="/trainer" className={styles.link}>Тренажер</Link>
        <Link to="/admin" className={styles.link}>Админка</Link>
        <Link to="/profile" className={styles.link}>Профиль</Link>
      </nav>

      <div className={styles.auth}>
        <Link to="/auth" className={styles.link}>Войти</Link>
      </div>
    </header>
  );
};
