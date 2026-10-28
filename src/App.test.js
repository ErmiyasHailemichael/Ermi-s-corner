import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the sidebar navigation and the home page by default', () => {
  render(<App />);

  expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /blog/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
});
