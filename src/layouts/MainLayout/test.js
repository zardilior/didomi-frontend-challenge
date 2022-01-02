import { render, screen } from '@testing-library/react';
import MainLayout from './';
import { MemoryRouter } from 'react-router-dom';

test('renders', () => {
  render(
    <MemoryRouter>
      <MainLayout />
    </MemoryRouter>
  );
});
