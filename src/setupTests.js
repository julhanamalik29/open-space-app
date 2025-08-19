import '@testing-library/jest-dom';
import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

// Menambahkan matcher jest-dom ke expect dari Vitest
expect.extend(matchers);
