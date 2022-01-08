import { screen } from '@testing-library/react'

import Button from '.'
import { renderWithTheme } from '../../utils/tests/helpers'
import { AddShoppingCart } from '@styled-icons/material-outlined'

describe('<Button />', () => {
  it('should render the medium size button by default', function () {
    const { container } = renderWithTheme(<Button>Buy now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      fontSize: '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render the small size', function () {
    renderWithTheme(<Button size="small">Buy now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '3rem',
      fontSize: '1.2rem'
    })
  })
  it('should render the large size', function () {
    renderWithTheme(<Button size="large">Buy now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '5rem',
      fontSize: '1.6rem',
      padding: '0.8rem 4.8rem'
    })
  })
  it('should render the full width version', function () {
    renderWithTheme(<Button fullWidth>Buy now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      width: '100%'
    })
  })
  it('should render an icon version', function () {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy now</Button>
    )

    expect(screen.getByText(/buy now/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
