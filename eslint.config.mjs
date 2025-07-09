import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // ✅ Standard Next.js and TypeScript config
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // ✅ Ignore all Prisma-generated files completely
  {
    ignores: [
      "lib/generated/prisma/**/*", // adjust path if your generated Prisma files are elsewhere
      "node_modules/@prisma/client/**/*", // Prisma package
    ],
  },
];

export default eslintConfig;