import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { useAuth } from '../context/AuthContext';

jest.mock('../context/AuthContext');

const renderProtectedRoute = () =>
  render(
    <MemoryRouter initialEntries={['/protected']}>
      <Routes>
        <Route path="/login" element={<div>Login Page</div>} />
        <Route
          path="/protected"
          element={
            <ProtectedRoute>
              <div>Secret Content</div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </MemoryRouter>
  );

test('redirects to /login when there is no authenticated user', () => {
  useAuth.mockReturnValue({ user: null });

  renderProtectedRoute();

  expect(screen.getByText('Login Page')).toBeInTheDocument();
  expect(screen.queryByText('Secret Content')).not.toBeInTheDocument();
});

test('renders the protected content when a user is authenticated', () => {
  useAuth.mockReturnValue({ user: { username: 'ermi' } });

  renderProtectedRoute();

  expect(screen.getByText('Secret Content')).toBeInTheDocument();
});
