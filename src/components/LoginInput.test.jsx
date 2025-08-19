/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle username typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import LoginInput from './LoginInput';
import userEvent from '@testing-library/user-event';
// import matchers from '@testing-library/jest-dom/matchers';

// expect.extend(matchers);

describe('LoginInput component', () => {
  it('should handle username typing correctly', async () => {
    // Arrange
    render(<LoginInput login={() => {}} />);
    const usernameInput = await screen.getByPlaceholderText('Username');

    // Action
    await userEvent.type(usernameInput, 'usernametest');

    // Assert
    expect(usernameInput).toHaveValue('usernametest');
  });
});
