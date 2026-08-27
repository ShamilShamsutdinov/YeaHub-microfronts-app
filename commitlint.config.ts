export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Разрешённые типы
    'type-enum': [
      2,
      'always',
      [
        'feat', // Новая фича
        'fix', // Исправление бага
        'docs', // Документация
        'style', // Форматирование
        'refactor', // Рефакторинг
        'test', // Тесты
        'chore', // Обновление зависимостей
        'build', // Сборка
        'ci', // CI/CD
        'revert', // Откат
      ],
    ],
    // Только маленькие буквы (русские тоже работают)
    'subject-case': [2, 'always', 'lower-case'],
    // Максимум 100 символов
    'subject-max-length': [2, 'always', 100],
  },
};
