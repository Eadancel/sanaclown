import React from 'react'
import Img from "gatsby-image";
import styled from "styled-components";
import SocialBar from '../SocialBar';
const FPwrp = styled.div`
    height:100vh
`;
const BannerWrp = styled.div`
    height:100%
    display:grid
    grid-template-rows:1fr 2fr;
    grid-gap:20px;
    position:absolute;
    top:0px;
    width:100%;
`;
const Banner = styled.div `
    position:relative;
    grid-row :2;
    text-align:center;
    justify-content : center;
    display:flex;
    background: rgba(2,129,187,0.30);
    height : 15em;
    color:white;
    flex-wrap:wrap;
    & > h1 {
        width:100%
        font-size:5em;
        margin-top:0.5em;
    }
    & > h2 {
        font-size:2em;
        margin-top:0.5em;
    }
`;
const Socialwrp = styled.div`
    position:absolute;
    right:0px;
    bottom:0px;
`;

const FrontPage = props => (
    <FPwrp>
        <Img
            style={{height:`100vh` }}
            sizes={props.FrontImage.sizes} />
        <BannerWrp>
            <Banner>
                <h1>SanaClown</h1>
                <h2>Compa&ntilde;ia Payasos de Hospital</h2>
                <Socialwrp>
                    <SocialBar />
                </Socialwrp>
            </Banner>
        </BannerWrp>
    </FPwrp>
);

export default FrontPage