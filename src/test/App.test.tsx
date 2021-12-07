/*
 * @Author: linkenzone
 * @Date: 2021-12-07 19:16:10
 * @Descripttion: Do not edit
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
