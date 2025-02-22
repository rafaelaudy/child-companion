// eslint.config.js
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals'; // Import globals for Node.js and ES2021

export default [
  {
    files: ['**/*.ts'], // Apply this config to TypeScript files
    languageOptions: {
      parser: tsParser, // Use the TypeScript parser
      ecmaVersion: 'latest', // Use the latest ECMAScript version
      sourceType: 'module', // Use ES modules
      globals: {
        ...globals.node, // Add Node.js globals
        ...globals.es2021, // Add ES2021 globals
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin, // Use the TypeScript ESLint plugin
      prettier: prettierPlugin, // Use the Prettier plugin
    },
    rules: {
      ...tsPlugin.configs['recommended'].rules, // Apply recommended TypeScript rules
      ...prettierConfig.rules, // Apply Prettier rules
      'prettier/prettier': 'error', // Enforce Prettier formatting
      '@typescript-eslint/no-unused-vars': 'warn', // Warn on unused variables
      '@typescript-eslint/explicit-module-boundary-types': 'off', // Disable explicit return types
    },
  },
];
