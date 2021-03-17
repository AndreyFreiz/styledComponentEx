import React from 'react';
import styled from 'styled-components';

import Compose from '../buttons/Compose'

import {sidebarButtonItems} from '../data/SidebarButtonItems'
import {BottomIcons} from '../data/BottomIconsData'

import VideocamIcon from '@material-ui/icons/Videocam';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import AccountCircle from '@material-ui/icons/AccountCircle'

const Sidebar = () => {
    return (
        <Wrapper>
            <TopSectionWrapper>
                <ComposeWrapper>
                    <Compose />
                </ComposeWrapper>
                {
                    sidebarButtonItems.map(item => (
                        <SidebarButtonItem>{item.icon} {item.text}</SidebarButtonItem>
                    ))
                }
                <SideButtonsWrapper>

                </SideButtonsWrapper>
            </TopSectionWrapper>

            <BottomSectionWrapper>
                <SidebarSectionWrapper>
                    <Title>Meet</Title>
                    <p><VideocamIcon /> New meeting</p>
                    <p><KeyboardIcon /> Join Meeting</p>
                </SidebarSectionWrapper>

                <SidebarSectionWrapper>
                    <Title>Hangouts</Title>
                    <p><AccountCircle />Andrey Freiz</p>
                </SidebarSectionWrapper>

                <ButtonIconsWrapper>
                    {
                        BottomIcons.map(icon=> (
                            <>
                                {icon}
                            </>
                        ))
                    }
                </ButtonIconsWrapper>
            </BottomSectionWrapper>
        </Wrapper>
    )
}

export default Sidebar;

const Wrapper = styled.div `
  border-right: 1px solid lightgray;
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const TopSectionWrapper = styled.div `
  
`

const BottomSectionWrapper = styled.div `
  margin-bottom: 30px;
`

const ComposeWrapper = styled.div `
  display: grid;
  place-items: start;
  padding: 10px 20px;
`


const SideButtonsWrapper = styled.div `

`

const SidebarButtonItem = styled.div `
  display: grid;
  grid-template-columns: 14% auto;
  color: gray;
  padding: 5px 25px;
  border-radius: 0 100px 100px 0;
  cursor: pointer;
  margin-right: 10px;
  
  :hover {
    background-color: #f5f7f7;
  }
    
`

const SidebarSectionWrapper = styled.div `
  border-top: 1px solid lightgray;
  
  p {
    color: gray;
    display: grid;
    grid-template-columns: 14% auto;
    height: 30px;
    align-items: center;
    padding-left: 25px;
  }
`

const Title = styled.h4 `
  padding-left: 25px;
  margin-bottom: 3px;
  margin-top: 8px;
`

const ButtonIconsWrapper = styled.div `
  display: flex;
  justify-content: center;
  color: gray;
  border-top: 1px solid lightgray;
  margin-top: 60px;
  
  .MuiSvgIcon-root {
    padding: 2px;
  }
`
