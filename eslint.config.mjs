import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // ✅ Next.js config
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // ✅ Ignore Prisma-generated files (or override rules)
  {
    files: ["lib/generated/prisma/**/*", "node_modules/@prisma/client/**/*"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-unnecessary-type-constraint": "off",
    },
  },
];

export default eslintConfig;