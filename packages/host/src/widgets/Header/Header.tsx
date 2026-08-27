import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header
      style={{
        padding: '20px',
        background: '#333',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
        <Link
          to="/"
          style={{ color: 'white', textDecoration: 'none' }}
        >
          YeahHub
        </Link>
      </div>

      <nav style={{ display: 'flex', gap: '20px' }}>
        <Link
          to="/"
          style={{ color: 'white', textDecoration: 'none' }}
        >
          Главная
        </Link>
        <Link
          to="/questions"
          style={{ color: 'white', textDecoration: 'none' }}
        >
          Вопросы
        </Link>
        <Link
          to="/trainer"
          style={{ color: 'white', textDecoration: 'none' }}
        >
          Тренажер
        </Link>
        <Link
          to="/admin"
          style={{ color: 'white', textDecoration: 'none' }}
        >
          Админка
        </Link>
        <Link
          to="/profile"
          style={{ color: 'white', textDecoration: 'none' }}
        >
          Профиль
        </Link>
      </nav>

      <div>
        <Link
          to="/auth"
          style={{ color: 'white', textDecoration: 'none' }}
        >
          Войти
        </Link>
      </div>
    </header>
  );
};
