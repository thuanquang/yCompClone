import { defineConfig, globalIgnores } from "eslint/config";

// Note: ESLint 9.x configs are flat configs that don't use eslint-config-next
// For Next.js with flat config ESLint, the recommended approach is to use 
// eslint-config-next as a configuration module or update your eslintrc.js

const eslintConfig = defineConfig([
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "node_modules/**",
    ".git/**",
  ]),
]);

export default eslintConfig;
