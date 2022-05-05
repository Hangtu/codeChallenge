import React from 'react'
import Footer from './'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

test('loads and displays greeting', async () => {
  render(<Footer />)
  expect(screen.getByText('Powered by')).toBeInTheDocument()
})
