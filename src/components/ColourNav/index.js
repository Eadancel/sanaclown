import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

const Nav = styled.div`


        margin-top:3rem;
        margin-right:2rem;
        text-align: right;
        &:after {
            content:"";
            display:table;
            clear:both;
        }
        & > ul{
            vertical-align:top;
        }
`;
const Menuitem = styled.div`
        display: block;
        padding: 15px 50px;
        padding-left: 10px;

        font-size: 20px;
        position: relative;

        transform: translateX(-25px);
        border-radius: 50px;
        width: calc(100% + 50px);
        text-align: center;
        transition-duration: 0.75s;
        background-color: ${props => props.color ||  'red'};
        &:hover{
            height:${props => props.growsto || '170px'};
            border-radius: 20px;
        }
        & > div {
            display:none;
            visibility: hidden;
        }
        &:hover > div{
            display:block;
            visibility:visible;
        }
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    & > h4 {
        font-size:20px;
    }
`;
const SubMenuWrp = styled.div`
        text-align:left;
        margin-top 1em;
`;
const NavItem = props => (
    <li style={{
        listStyle: 'none',
        display: 'inline-block',
        verticalAlign:'top',
    }}>
		<Menuitem color={props.color} growsto={props.growsto}>
            <StyledLink to={props.to}>
                <h4>{props.title}</h4>
            </StyledLink>
            <SubMenu links={props.submenu} />
		</Menuitem>
	</li>
);

const SubMenu = props => (
     <SubMenuWrp>
         <ul>
         {props.links.map((link) =>
                <li style={{listStyle: 'none'}}
                    key={link.id}>
                    <StyledLink to={link.to}>
                        <h4>{link.text}</h4>
                    </StyledLink>
                </li>
            )}
         </ul>
     </SubMenuWrp>
);

const ColourNav = () => (
    <Nav>
        <ul>
            <NavItem color="#D0021B" title="Quienes Somos" to="/" growsto="170px" submenu={[
                {id: 1, to: '/#uno', text: 'Hospital'},
                {id: 2, to: '/#dos', text: 'Dos'}

            ]} />
            <NavItem color="#F5A623" title="Intervenciones" to="/intervenciones" growsto="250px"
            submenu={[
                {id: 1, to: '/intervenciones#uno', text: 'Hospital'},
                {id: 2, to: '/intervenciones#dos', text: 'tres'}
              ]} />

             <NavItem color="#F8E71C" title="Escuela" to="/escuela" submenu={[]} growsto="52px" />
             <NavItem color="#417505" title="Donaciones" to="/donaciones" submenu={[]} growsto="300px"/>
             <NavItem color="#7ED321" title="Blog" to="/blog" submenu={[]} growsto="450px" />
             <NavItem color="#4A90E2" title="Contacto" to="/contacto" submenu={[]} growsto="52px" />
        </ul>
    </Nav>
)


export default ColourNav
