export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // Новая функциональность
        'fix',      // Исправление бага
        'docs',     // Документация
        'style',    // Форматирование
        'refactor', // Рефакторинг
        'perf',     // Производительность
        'test',     // Тесты
        'chore',    // Обновление зависимостей
        'build',    // Сборка
        'ci',       // CI/CD
        'revert',   // Откат
      ],
    ],
    'subject-case': [2, 'always', 'lower-case'],
    'subject-max-length': [2, 'always', 100],
  },
};