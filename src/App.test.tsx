import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders React Essentials heading', () => {
    render(<App />);
    const headingElement = screen.getByText(/React Essentials/i);
    expect(headingElement).toBeInTheDocument();
  });
});
