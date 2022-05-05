import '@testing-library/jest-dom'
import React from 'react'
import Home from '../../pages'
import { render, screen } from '@testing-library/react'
import { ContactsGetModel, ContactsModel } from '../../models'

test('Display List Content', async () => {
  const propMockup: ContactsGetModel = {
    count: 1,
    perPage: 1,
    currentPage: 1,
    totalPages: 1,
    results: [
      {
        id: '1',
        email: 'feef@efe.fe',
        firstName: 'Honorato',
        lastName: 'Eaton',
        phone: '1232165438',
      },
    ] as ContactsModel[],
  }

  render(
    <Home
      count={propMockup.count}
      perPage={propMockup.perPage}
      currentPage={propMockup.currentPage}
      totalPages={propMockup.totalPages}
      results={propMockup.results}
    />
  )
  expect(screen.getByText('Honorato Eaton')).toBeInTheDocument()
})

test('Display Pagination Content', async () => {
  const propMockup: ContactsGetModel = {
    count: 1,
    perPage: 1,
    currentPage: 1,
    totalPages: 1,
    results: [
      {
        id: '1',
        email: 'feef@efe.fe',
        firstName: 'Honorato',
        lastName: 'Eaton',
        phone: '1232165438',
      },
    ] as ContactsModel[],
  }

  render(
    <Home
      count={propMockup.count}
      perPage={propMockup.perPage}
      currentPage={propMockup.currentPage}
      totalPages={propMockup.totalPages}
      results={propMockup.results}
    />
  )
  expect(screen.getByTestId('pagination')).toBeInTheDocument()
})
