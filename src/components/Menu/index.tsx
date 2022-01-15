import * as S from './styles'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'

import Logo from 'components/Logo'
import { useCallback, useState } from 'react'
import { Close as CloseIcon } from '@styled-icons/material-outlined'
import Button from '../Button'
import MediaMatch from '../MediaMatch'

export type MenuProps = {
  username?: string
}
const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const openFullMenu = useCallback(() => {
    setIsOpen(true)
  }, [])
  const closeFullMenu = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={openFullMenu}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Logo hideOnMobile />
      </S.LogoWrapper>
      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>
      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Search" />
        </S.IconWrapper>
        <S.IconWrapper>
          <ShoppingCartIcon aria-label="Open Shopping Cart" />
        </S.IconWrapper>
        <MediaMatch greaterThan="medium">
          <Button>Sign in</Button>
        </MediaMatch>
      </S.MenuGroup>

      <S.FullMenu aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={closeFullMenu} />
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>
          {!!username && (
            <>
              <S.MenuLink href="#">My account</S.MenuLink>
              <S.MenuLink href="#">Wishlist</S.MenuLink>
            </>
          )}
        </S.MenuNav>
        {!username && (
          <S.RegisterBox>
            <Button fullWidth size={'large'}>
              Log in now
            </Button>
            <span>or</span>
            <S.CreateAccount href="#" title="Sign In">
              Sign Up
            </S.CreateAccount>
          </S.RegisterBox>
        )}
      </S.FullMenu>
    </S.Wrapper>
  )
}

export default Menu
