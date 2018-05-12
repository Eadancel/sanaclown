import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

const Nav = styled.div`

        border :1px;
        margin-top:3rem;
        text-align: left;
        &:after {
            content:"";
            display:table;
            clear:both;
        }
        & > ul{
            vertical-align:top;
            width:100%;
        }
`;
const Menuitem = styled.div`
        display: block;
        padding: 15px 20px;
        /* padding-left: 10px; */

        font-size: 20px;
        position: relative;

        width:${props => props.widthmenu || '250px'};
        border-radius: 50px;
        transform: translateX(-${props => props.translateX || '0px'});

        text-align: ${props => props.align || 'center'};
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
    width:200px;
    color: white;
    & > h3 {
        font-size:20px;
    }
    & > h4 {
        font-size:18px;
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
		<Menuitem color={props.color} growsto={props.growsto} translateX={props.translateX} widthmenu={props.widthmenu} align={props.align}>
            <StyledLink to={props.to}>
                <h3>{props.title}</h3>
            </StyledLink>
            <SubMenu links={props.submenu} />
		</Menuitem>
	</li>
);

const SubMenu = props => (
     <SubMenuWrp>
         <ul style={{marginLeft: '0px'}}>
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
            <NavItem color="#D0021B" title="Quienes Somos" to="/" growsto="170px" widthmenu="230px" translateX="0px" align="left"
            submenu={[
                {id: 1, to: '/#aboutus', text: 'Sanaclown'},
                {id: 2, to: '/#mision', text: 'Mision'}

            ]} />
            <NavItem color="#F5A623" title="Intervenciones" to="/intervenciones" widthmenu="230px" translateX="40px" growsto="170px" align="left"
            submenu={[
                {id: 1, to: '/intervenciones#hosp', text: 'Hosp. von Buren'},
                {id: 2, to: '/intervenciones#instituciones', text: 'Instituciones'}
              ]} />

             <NavItem color="#F8E71C" title="Escuela" to="/escuela" widthmenu="210px" translateX="80px" submenu={[
                 {id: 1, to: '/escuela#cursos', text: 'Cursos'},
                 {id: 2, to: '/escuela#seminarios', text: 'Seminarios'},
                 {id: 3, to: '/escuela#capacitaciones', text: 'Capacitaciones'}
             ]} growsto="170px" />

             <NavItem color="#417505" title="Donaciones" to="/donaciones" widthmenu="190px" translateX="120px" growsto="170px" align="left"
             submenu={[
                {id: 1, to: '/donaciones#aportes', text: 'Aportes'},
                {id: 2, to: '/donaciones#productos', text: 'Productos'}

             ]} />

             <NavItem color="#7ED321" title="Blog" to="/blog" submenu={[]}  widthmenu="150px" translateX="160px" growsto="52px" align="left"/>
             <NavItem color="#4A90E2" title="Contacto" to="/contacto" submenu={[]}  widthmenu="160px" translateX="200px" growsto="52px" />
        </ul>
    </Nav>
)


export default ColourNav
