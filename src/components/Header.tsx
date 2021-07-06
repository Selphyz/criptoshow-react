import styled from "styled-components"
import React from 'react'
import {Link} from "react-router-dom"
import logo from "../img/logo.jpg"

const HeaderStyle = styled.div`
    margin-bottom: 10vh;
    & img {
        margin-top: 1rem;
        height: 70px;
    }
`

export const Header = () => {
    return (
        <HeaderStyle>
            <Link to="/">
                <img className="logo" src={logo} alt="logo" />
            </Link>
            <h1>My crypto APP</h1>
        </HeaderStyle>
    )
}

export default Header
