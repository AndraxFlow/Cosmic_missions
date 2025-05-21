import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../Home';

describe('Home Page', () => {
  test('отображает приветствие и кнопки навигации', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText(/🚀 Создать миссию/i)).toBeInTheDocument();
    expect(screen.getByText(/🛰️ Все миссии/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /📊 Статистика/i })).toBeInTheDocument();
  });
});
