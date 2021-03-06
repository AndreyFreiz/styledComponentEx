import React from 'react';
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import {ExpandMore, Search, HelpOutline, Settings, Apps, AccountCircle} from "@material-ui/icons";


const Header = () => {
    return (
        <Wrapper>
        
            <LogoWrapper>
                <Menu>
                    <MenuIcon/>
                </Menu>
                <Logo>
                   <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png" alt=""/>
                </Logo>
            </LogoWrapper>

            <SearchWrapper>
                <SearchBarWrapper>
                    <SearchIconWrapper />
                    {/*<Search/>*/}
                    <input type='text' placeholder='Search mail'/>
                    <ExpandMore/>
                </SearchBarWrapper>
            </SearchWrapper>

            <IconsWrapper>
                <HelpOutline/>
                <Settings/>
                <Apps/>
                <AccountCircle/>
            </IconsWrapper>
            
        </Wrapper>
    )
}

export default Header;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 270px auto 170px;
  border-bottom: 1px solid lightgray;
  height: 70px;
  align-items: center;
`

const LogoWrapper = styled.div `
  height: 45px;
  display: grid;
  grid-template-columns: 25% auto;
`

const SearchIconWrapper = styled(Search) `
  color: #5f6368;
`

const Menu = styled.div `
  display: grid;
  place-items: center;
`
const Logo = styled.div `
  display: flex;
  height: 45px;
`

const SearchWrapper = styled.div `
    
`
const SearchBarWrapper = styled.div `
  background-color: #f1f3f4;
  width: 100%;
  max-width: 750px;
  display: grid;
  grid-template-columns: 10% auto 7%;
  place-items: center;
  height: 45px;
  border-radius: 6px;
  
  .MuiSvgIcon-root {
    color: #5f6368;
  }
  
  input {
    width: 100%;
    height: 30px;
    background: none;
    border: none;
    font-size: 18px;
    
    :focus {
      outline: none;
      
    }
  }
`


const IconsWrapper = styled.div `
  margin-left: 8px;
  display: grid;
  grid-template-columns: repeat(4, auto);
  
  .MuiSvgIcon-root {
    color: #5f6368;
  }
  
`
