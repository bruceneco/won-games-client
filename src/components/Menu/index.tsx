import * as S from './styles'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'

import Logo from 'components/Logo'
import { useCallback, useState } from 'react'
import { Close as CloseIcon } from '@styled-icons/material-outlined'
import Button from '../Button'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openFullMenu = useCallback(() => {
    setIsOpen(true)
  }, [])
  const closeFullMenu = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <S.Wrapper>
      <S.IconWrapper onClick={openFullMenu}>
        <MenuIcon aria-label="Open Menu" />
      </S.IconWrapper>
      <S.LogoWrapper>
        <Logo hideOnMobile />
      </S.LogoWrapper>
      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Search" />
        </S.IconWrapper>
        <S.IconWrapper>
          <ShoppingCartIcon aria-label="Open Shopping Cart" />
        </S.IconWrapper>
      </S.MenuGroup>
      <S.FullMenu aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={closeFullMenu} />
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>
        </S.MenuNav>
        <S.RegisterBox>
          <Button fullWidth size={'large'}>
            Log in now
          </Button>
          <span>or</span>
          <S.CreateAccount href="#" title="Sign In">
            Sign Up
          </S.CreateAccount>
        </S.RegisterBox>
      </S.FullMenu>
    </S.Wrapper>
  )
}

export default Menu
