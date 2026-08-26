import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<div>Главная страница (Creator будет тут)</div>} />
          <Route path="questions" element={<div>Список вопросов</div>} />
          <Route path="trainer" element={<div>Тренажер</div>} />
          <Route path="admin" element={<div>Админка</div>} />
          <Route path="profile" element={<div>Профиль</div>} />
        </Route>
        <Route path="/auth" element={<div>Страница авторизации</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
