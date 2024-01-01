import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactPage from './ContactPage';

test('renders contact page with correct content', () => {
  render(<ContactPage />);

  // Check if the title is rendered
  const titleElement = screen.getByText(/Contact/i);
  expect(titleElement).toBeInTheDocument();

  // Check if the team members are rendered
  const teamMembers = screen.getAllByRole('listitem');
  expect(teamMembers).toHaveLength(6);
});