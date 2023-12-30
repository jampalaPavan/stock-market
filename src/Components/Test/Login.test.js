
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Login from '../Auth/Login';

describe('Login component', () => {
  it('renders login form', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    
    expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  it('submits the form with correct data', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    
    fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'testpassword' } });


    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    
    expect(screen.getByText(/login successful/i)).toBeInTheDocument();
  });

  it('displays error message with incorrect data',async () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );


    fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'invaliduser' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'invalidpassword' } });

    
    fireEvent.click(screen.getByRole('button', { name: /login/i }));
    
   

    
  });
});
