import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const compat = new FlatCompat({ baseDirectory: dirname(fileURLToPath(import.meta.url)) });
const config = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    ignores: ['.next/**', 'out/**', 'build/**', 'next-env.d.ts', '*.tsbuildinfo'],
    // Apostrophes are safe, readable JSX copy; still flag unescaped braces and angle brackets.
    rules: { 'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }] },
  },
];
export default config;
