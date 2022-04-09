import React from "react";
import { Link } from "react-router-dom";
// Logo
import HomeLogo from '../../images/autumn.png';
// Style
import { Wrapper, Content, LogoImg } from "./Header.styles";
// Component
import Cart from "../Cart";
import Button from "../Button";
// Hooks
import useLogout from "../../hooks/useLogout";

const Header = () => {

    const { logoutMutation } = useLogout();

    return (
        <Wrapper>
            <Content>
                <Link to={'/home'} >
                    <LogoImg src={HomeLogo} alt='Home-Logo' />
                </Link>
                <h1 className="title">PlushyMarket</h1>
                <Link to={'/sellerHome'}>
                    <h3>My</h3>
                </Link>
                <Cart />
                <Button text="Logout" callback={() => logoutMutation.mutate()} />
            </Content>
        </Wrapper>
    )

};

export default Header;