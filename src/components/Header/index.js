import React from "react";
import { Link } from "react-router-dom";
// Logo
import HomeLogo from '../../images/autumn.png';
// Style
import { Wrapper, Content, LogoImg } from "./Header.styles";

const Header = () => (
    <Wrapper>
        <Content>
        <Link to={'/'} >
            <LogoImg src={HomeLogo} alt='Home-Logo' />
        </Link>
        <h1>PlushyMarket</h1>
        </Content>
    </Wrapper>
);

export default Header;