import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('renders React Essentials heading', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const headingElement = screen.getByText(/React Essentials/i);
    expect(headingElement).toBeInTheDocument();
  });
});
