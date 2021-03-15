import React from 'react';
import styled from 'styled-components'

import EmailsView from "./EmailsView";
import Sidebar from "./Sidebar";
import SideIcons from "./SideIcons";



const Main = () => {
    return (
        <Wrapper>
            <Sidebar />
            <EmailsView />
            <SideIcons />
        </Wrapper>
    )
}

export default Main;

const Wrapper = styled.div `

`

