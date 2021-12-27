import React from "react";
// Logo
import HomeLogo from '../../images/autumn.png';
// Style
import { Wrapper, Content, LogoImg } from "./Header.styles";

const Header = () => (
    <Wrapper>
        <Content>
            <LogoImg src={HomeLogo} alt='Home-Logo' />
        </Content>
    </Wrapper>
);

export default Header;