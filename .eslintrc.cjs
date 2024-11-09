module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2022: true
  },
  parser: 'vue-eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'vue/script-setup-uses-vars': 'error',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_' }
    ],
    'vue/multi-word-component-names': 'off',
    'no-console': ['error', { allow: ['error'] }]
  },
  overrides: [
    {
      // Vue files
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      },
      rules: {
        'vue/component-api-style': [
          'error',
          ['script-setup', 'composition']
        ],
        'vue/component-name-in-template-casing': [
          'error',
          'PascalCase'
        ]
      }
    },
    {
      // TypeScript files
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.app.json', './tsconfig.node.json'],
        tsconfigRootDir: '.'
      },
      extends: [
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
      ]
    },
    {
      // Configuration files
      files: [
        '.eslintrc.cjs',
        'vite.config.ts',
        'vitest.config.ts',
        '*.config.js',
        '*.config.cjs'
      ],
      env: {
        node: true
      },
      parserOptions: {
        sourceType: 'script'
      }
    }
  ]
}
