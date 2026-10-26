// Why: the same lint rules as blog.victorsaly.com, so both sites are held to one standard.
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';

export default tseslint.config(
  {
    ignores: ['**/node_modules/**', '**/dist/**', '**/.astro/**', 'public/**'],
  },

  // Plain JavaScript: the scripts and the config files.
  {
    files: ['**/*.{js,mjs,cjs}'],
    ...js.configs.recommended,
    languageOptions: { globals: { ...globals.node } },
  },

  // TypeScript, type-aware.
  ...tseslint.configs.strictTypeChecked.map((config) => ({ ...config, files: ['**/*.{ts,mts}'] })),
  ...tseslint.configs.stylisticTypeChecked.map((config) => ({
    ...config,
    files: ['**/*.{ts,mts}'],
  })),
  {
    files: ['**/*.{ts,mts}'],
    languageOptions: {
      parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname },
      globals: { ...globals.node, ...globals.browser },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],
      'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    },
  },

  // Astro components: the astro plugin's parser and a11y rules; `astro check` does the type checking.
  ...astro.configs['flat/recommended'],
  ...astro.configs['flat/jsx-a11y-strict'],
);
