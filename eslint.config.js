// import js from "@eslint/js";
// import globals from "globals";
// import tseslint from "typescript-eslint";
// import pluginReact from "eslint-plugin-react";
// import { defineConfig } from "eslint/config";

// export default defineConfig([
//   // 1. Игнорируемые файлы и папки
//   {
//     ignores: [
//       "node_modules/",
//       "**/dist/",
//       "**/build/",
//       ".turbo/",
//       ".pnpm-store/",
//       "coverage/",
//       "*.config.js",
//       "*.config.ts",
//       "*.config.cjs",
//       "*.config.mjs",
//       ".husky/",
//       ".vscode/",
//       "**/*.min.js",
//     ],
//   },

//   // 2. Базовые правила для JS/TS/JSX/TSX файлов
//   {
//     files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
//     plugins: { js },
//     extends: ["js/recommended"],
//     languageOptions: {
//       globals: {
//         ...globals.browser,
//         ...globals.node,
//         ...globals.es2021,
//       },
//     },
//   },

//   // 3. TypeScript рекомендованные правила
//   tseslint.configs.recommended,

//   // 4. React рекомендованные правила
//   pluginReact.configs.flat.recommended,
// ]);

import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  // 1. Игнорируемые файлы и папки
  {
    ignores: [
      'node_modules/',
      '**/dist/',
      '**/build/',
      '.turbo/',
      '.pnpm-store/',
      'coverage/',
      '*.config.js',
      '*.config.ts',
      '*.config.cjs',
      '*.config.mjs',
      '.husky/',
      '.vscode/',
      '**/*.min.js',
    ],
  },

  // 2. Базовые правила для JS/TS/JSX/TSX файлов
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
  },

  // 3. TypeScript рекомендованные правила
  tseslint.configs.recommended,

  // 4. React рекомендованные правила
  pluginReact.configs.flat.recommended,

  // 5. Дополнительные правила для React + TypeScript
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      // React 19+ не требует импорта React
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',

      // Используем TypeScript для проверки типов
      'react/prop-types': 'off',

      // Правила для TypeScript
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
        },
      ],

      // Дополнительные полезные правила
      'no-console': 'warn',
      'prefer-const': 'error',
    },
  },

  // 6. Специальные правила для тестов
  {
    files: ['**/*.test.{js,jsx,ts,tsx}', '**/*.spec.{js,jsx,ts,tsx}'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'no-console': 'off',
    },
  },

  // 7. Специальные правила для Vite-конфигов
  {
    files: ['packages/*/vite.config.ts', 'vite.config.ts'],
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
      'import/no-default-export': 'off',
    },
  },
]);
