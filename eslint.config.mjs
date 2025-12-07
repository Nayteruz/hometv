import globals from 'globals';
import pluginVue from 'eslint-plugin-vue';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import vueParser from 'vue-eslint-parser';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    ignores: [
      // Папки
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/.output/**',
      '**/.nuxt/**',
      '**/.next/**',
      '**/coverage/**',

      // Временные файлы
      '**/.tmp/**',
      '**/.cache/**',
      '**/temp/**',
      '**/tmp/**',

      // Специфичные файлы
      '**/*.min.js',
      '**/*.min.css',
      '**/*.map',
      '**/*.log',
      '**/*.d.ts',

      // Конфигурации IDE
      '**/.vscode/**',
      '**/.idea/**',

      // Git
      '**/.git/**',

      // Папка public (если есть статические файлы)
      '**/public/**',

      // Документация
      '**/docs/**',
      '**/CHANGELOG.md',
    ],
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser, // Используем vue-eslint-parser
      parserOptions: {
        parser: tsParser, // TypeScript парсер для <script> блоков
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      vue: pluginVue,
      '@typescript-eslint': tseslint,
    },
    rules: {
      // Основные правила Vue
      'vue/multi-word-component-names': 'off',
      'vue/no-deprecated-slot-attribute': 'warn',
      'vue/html-self-closing': 'off',
      'vue/require-default-prop': 'off',

      // TypeScript правила
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'off', // потом включить

      // Общие правила
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },

  {
    files: ['**/*.{js,ts}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'off', // потом включить
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
]);
