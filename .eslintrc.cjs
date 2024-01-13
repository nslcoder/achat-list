module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'prettier', 'unused-imports', 'import-helpers'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    "prettier/prettier": 0,
    "react/jsx-filename-extension": ["warn", { "extensions": [".js", ".jsx"] }],
    "no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "no-console": "error",
    "no-debugger": "error",
    "arrow-body-style": ["error", "as-needed"],
    "import-helpers/order-imports": [
      "error",
      {
        "newlinesBetween": "always",
        "groups": [
          "/^react/",
          "module",
          "/^pages/",
          "/^components/",
          "/^assets/",
          "/^constants/",
          "/^context/",
          "/^lib/",
          "/^utils/",
          ["parent", "sibling", "index"]
        ],
        "alphabetize": { "order": "asc", "ignoreCase": true }
      }
    ],
    "unused-imports/no-unused-vars": [
      "warn",
      {
        "vars": "all",
        "varsIgnorePattern": "^_",
        "args": "after-used",
        "argsIgnorePattern": "^_"
      }
    ],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "padding-line-between-statements": [
      "warn",
      { "blankLine": "always", "prev": "*", "next": "return" },
      { "blankLine": "always", "prev": ["const", "let", "var"], "next": "*" },
      {
        "blankLine": "any",
        "prev": ["const", "let", "var"],
        "next": ["const", "let", "var"]
      }
    ]
  },
}
