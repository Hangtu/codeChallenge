import '@testing-library/jest-dom'
import React from 'react'
import Footer from '.'
import { render, screen } from '@testing-library/react'

test('Display Footer Content', async () => {
  render(<Footer />)
  expect(screen.getByText('Powered by')).toBeInTheDocument()
})
