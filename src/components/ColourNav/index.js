import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

const Nav = styled.div`
        position: fixed;
        width: 100%;
        text-align: center;
        &:after {
            content:"";
            display:table;
            clear:both;
        }
`;
const Menuitem = styled.div`
        display: block;
        padding: 10px 40px;

        font-size: 18px;
        position: relative;

        transform: translateX(-15%);
        border-radius: 50px;
        width: 130%;
        text-align: center;
        transition-duration: 0.75s;
        background-color: ${props => props.color ||  'red'};
        &:hover{
            height:170px;
            border-radius: 20px;
        }
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: #eeeeee;
    &:hover{
        color: white;
    }
`;
const NavItem = props => (
    <li style={{
        listStyle: 'none',
        display: 'inline-block'
    }}>
		<Menuitem color={props.color}>
            <StyledLink to={props.to}>
                {props.title}
            </StyledLink>
		</Menuitem>
	</li>
);


const ColourNav = () => (
    <Nav>
        <ul>
            <NavItem color="#D0021B" title="Quienes Somos" to="/"/>
            <NavItem color="#F5A623" title="Intervenciones" to="/intervenciones" />
            <NavItem color="#F8E71C" title="Escuela" to="/escuela"/>
            <NavItem color="#417505" title="Donaciones" to="/donaciones"/>
            <NavItem color="#7ED321" title="Blog" to="/blog"/>
            <NavItem color="#4A90E2" title="Contacto" to="/contacto"/>
        </ul>
    </Nav>
)


export default ColourNav
