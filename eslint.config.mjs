// import { defineConfig, globalIgnores } from "eslint/config";
import antfu from '@antfu/eslint-config'
// import nextVitals from "eslint-config-next/core-web-vitals";
// import nextTs from "eslint-config-next/typescript";

export default antfu({
  nextjs: true,
  react: true,
  formatters: {
    css: true,
    html: true,
    markdown: true,
  },
  rules: {
    'react/prop-types': 'off',
    'no-unused-vars': 'warn',
  },
})
