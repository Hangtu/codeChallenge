import '@testing-library/jest-dom'
import React from 'react'
import Navbar from '.'
import { render, screen } from '@testing-library/react'

test('Display Navbar Content', async () => {
  render(<Navbar />)
  expect(screen.getAllByText('Home')[0]).toBeInTheDocument()
  expect(screen.getAllByText('Create')[0]).toBeInTheDocument()
})
