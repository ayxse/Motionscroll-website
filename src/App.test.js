import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MotionScroll homepage', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /scroll hands-free with motionscroll/i })).toBeInTheDocument();
});
