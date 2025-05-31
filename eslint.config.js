import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin';
import stylisticJsx from '@stylistic/eslint-plugin-jsx'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@stylistic': stylistic,
      '@stylistic/jsx': stylisticJsx
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@stylistic/indent': ['warn', 2],
      '@stylistic/semi': ['warn', 'never'],
      '@stylistic/linebreak-style': ['warn', 'windows'],
      '@stylistic/no-multiple-empty-lines': ['warn', { 'max': 1 }],
      '@stylistic/multiline-comment-style': ['warn', 'starred-block'],
      '@stylistic/curly-newline': ['warn', 'always'],
      '@stylistic/array-bracket-spacing': ['warn', 'always'],
      '@stylistic/block-spacing': ['warn', 'always'],
      '@stylistic/comma-spacing': ['warn', { 'before': false, 'after': true }],
      '@stylistic/computed-property-spacing': ['warn', 'always'],
      '@stylistic/key-spacing': ['warn', { "mode": "strict" }],
      '@stylistic/keyword-spacing': ['warn', { "before": true }],
      // '@stylistic/no-mixed-spaces-and-tabs': [ 'warn', 'smart-tabs' ],
      '@stylistic/no-multi-spaces': ['warn'],
      '@stylistic/no-trailing-spaces': ['warn'],
      '@stylistic/object-curly-spacing': ['warn', 'always'],
      '@stylistic/rest-spread-spacing': ['warn', 'never'],
      '@stylistic/semi-spacing': ['warn', { 'before': false, 'after': true }],
      '@stylistic/space-before-blocks': ['warn', 'always'],
      '@stylistic/spaced-comment': ['warn', 'always'],
      '@stylistic/space-in-parens': ['warn', 'never'],
      '@stylistic/space-before-function-paren': ['warn', 'always'],
      '@stylistic/comma-dangle': ['warn', 'never'],
      '@stylistic/comma-style': ['warn', 'last'],
      '@stylistic/jsx/jsx-indent': ['warn', 2],
    }
  },
)
