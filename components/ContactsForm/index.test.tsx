import '@testing-library/jest-dom'
import React from 'react'
import ContactsFormComponent from './'
import { render, screen } from '@testing-library/react'

test('Display Footer Content', async () => {
  const contact = {
    id: '1',
    email: 'feef@efe.fe',
    firstName: 'Honorato',
    lastName: 'Eaton',
    phone: '1232165438',
  }
  const mockup = {
    onSubmit: jest.fn(),
    contact: contact,
    submitText: 'Update',
  }

  render(
    <ContactsFormComponent
      onSubmit={mockup.onSubmit}
      contact={mockup.contact}
      submitText={mockup.submitText}
    />
  )
  expect(screen.getByText('Update')).toBeInTheDocument()
})
