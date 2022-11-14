import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from "styled-components"
import "../../assets/css/style.css"

function Header() {
    const [active, setActive] = useState("Home");

    const logoutFunction = () => {
        window.localStorage.clear();
        window.location.reload()
    };

  return (
      <>
          <MainContainer>
              <Wrapper>
                  <RightContainer>
                      <LogoTitle>
                          MILKY <span>WAY</span>
                      </LogoTitle>
                  </RightContainer>
                  <LeftContainer>
                      <NavList>
                          <List
                              to="/"
                              onClick={() => {
                                  setActive("Home");
                              }}
                              className={active === "Home" ? "active" : ""}
                          >
                              Home
                          </List>
                          <List
                              to="/products"
                              onClick={() => {
                                  setActive("Products");
                              }}
                              className={active === "Products" ? "active" : ""}
                          >
                              Our Products
                          </List>
                          <List
                              to="/about"
                              onClick={() => {
                                  setActive("AboutUs");
                              }}
                              className={active === "AboutUs" ? "active" : ""}
                          >
                              About Us
                          </List>
                      </NavList>
                  </LeftContainer>
                  <LeftMostContainer>
                      <Button onClick={() => logoutFunction()}>Log Out</Button>
                  </LeftMostContainer>
              </Wrapper>
          </MainContainer>
          <Outlet />
      </>
  );
}

export default Header

const MainContainer = styled.div`
    width: 100%;
    height: 100px;
    background-color: #232323;
    
`;
const Wrapper = styled.div`
    width: 85%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 30px;
`;
const LogoTitle = styled.h1`
    color: #fff;
    cursor: pointer;
    span{
        color: yellow;
    }
`;
const RightContainer = styled.div``;
const LeftContainer = styled.div`   
    width: 40%;
    margin: 0 auto;
    
`;
const NavList = styled.ul`
    display: flex;
    color: #fff;
    /* justify-content: space-between; */
`;
const List = styled(NavLink)`
    text-decoration: none;
    font-weight: 500;
    cursor: pointer;
    margin-left: 70px;
    position: relative;
    color: #fff;
    &::after {
        content: "";
        width: 62px;
        height: 5px;
        background-color: red;
        position: absolute;
        top: 54px;
        left: -5px;
        transform: translateY(-20px);
        opacity: 0;
        transition: 0.5s ease-out;
    }
    &.active {
        &::after {
            transform: translateY(0px);
            opacity: 100;
        }
    }
    &:nth-child(2) {
        &::after {
            width: 80px;
            left: 14px;
        }
    }
    &:nth-child(3) {
        &::after {
            left: 6px;
        }
    }
    &:nth-child(4) {
        &::after {
            left: 12px;
        }
    }
    &:hover {
        &::after {
            transform: translateY(0px);
            opacity: 100;
        }
    }
`;
const LeftMostContainer = styled.div``;
const Button = styled.button`
    color: #fff;
    background: blue;
    width: 80px;
    height: 30px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
`;
