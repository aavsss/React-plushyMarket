import React from "react";
import { Link } from "react-router-dom";
// Logo
import HomeLogo from '../../images/autumn.png';
// Style
import { Wrapper, Content, LogoImg } from "./Header.styles";
// Component
import Cart from "../Cart";

const Header = () => (
    <Wrapper>
        <Content>
            <Link to={'/'} >
              <LogoImg src={HomeLogo} alt='Home-Logo' />
            </Link>
            <h1 className="title">PlushyMarket</h1>
            <Cart />
        </Content>
    </Wrapper>
);

export default Header;