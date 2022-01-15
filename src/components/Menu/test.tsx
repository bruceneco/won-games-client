import { fireEvent, screen } from '@testing-library/react'

import Menu from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/won games/i)).toBeInTheDocument()
  })
  it('should handle the open/close mobile menu', function () {
    renderWithTheme(<Menu />)

    const fullMenuElement = screen.getByRole('navigation', { hidden: true })
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
  })
  describe('user not logged in', function () {
    beforeEach(() => {
      renderWithTheme(<Menu />)
    })
    it('should show login and register buttons', function () {
      expect(screen.getByText(/log in now/i)).toBeInTheDocument()
      expect(screen.getByText(/sign up/i)).toBeInTheDocument()
    })
    it('should hide wishlist and account', function () {
      expect(screen.queryByText(/wishlist/i)).not.toBeInTheDocument()
      expect(screen.queryByText(/my account/i)).not.toBeInTheDocument()
    })
  })
  describe('user logged in', function () {
    beforeEach(() => {
      renderWithTheme(<Menu username={'user'} />)
    })
    it('should hide login and register buttons', function () {
      expect(screen.queryByText(/log in now/i)).not.toBeInTheDocument()
      expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument()
    })
    it('should show wishlist and account', function () {
      expect(screen.getByText(/wishlist/i)).toBeInTheDocument()
      expect(screen.getByText(/my account/i)).toBeInTheDocument()
    })
  })
})
