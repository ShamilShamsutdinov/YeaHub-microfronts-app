const { dirname, join } = require('path');

/**
 * Эта функция нужна, чтобы правильно резолвить пути к аддонам
 */
function getAbsolutePath(value: string) {
  return dirname(require.resolve(join(value, 'package.json')));
}

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  // Где искать файлы с историями (stories)
  stories: [
    '../shared/ui/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../packages/**/src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],

  // Подключаем аддоны
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
  ],

  // Указываем, что используем React + Vite
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },

  // Включаем автодокументацию (для версии 7)
  docs: {
    autodocs: true,
  },
};

module.exports = config;