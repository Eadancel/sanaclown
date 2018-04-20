import React from 'react'
import Link from 'gatsby-link'
import ColourNav from '../ColourNav';
import Img from "gatsby-image";
import styled from "styled-components";

const HeaderWrp = styled.div`
        position:absolute
        width: 100%;
        text-align: center;
        display: flex;
        justify-content:space-between;
        z-index:1;
`;

const Header = props => (
  <HeaderWrp>
          <div>
              <Img
                imgStyle={{marginBottom:`0px`, padding:`5px`}}

                resolutions={props.headerImage.resolutions}
              />
          </div>
        <ColourNav />
  </HeaderWrp>
)

export default Header
