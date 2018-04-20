import React from 'react'
import Img from "gatsby-image";
import styled from "styled-components";
import SocialBar from '../SocialBar';

const CPwrp = styled.div`
    position:relative;
    height:100vh;
    padding:60px;
    padding-top:40px;
`;

const Phrase = styled.div`
    position:absolute;
    right:0px;
    bottom:30px
    width:500px;
    text-align:right;
    padding:10px;
    background: rgba(2,129,187,0.30);
    font-weight:bold;
`;
const Titlewrp = styled.div`
    position:relative;
    left:0px
    margin-bottom: 40px;
    width:200px;
    text-align:center;
`;
const Title = styled.div`
    color: white;
    display: block;
    padding: 15px 50px;
    padding-left: 10px;

    background-color: ${props => props.color ||  'red'};
    border-radius: 50px;
`;

const Content = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
`;

const ContentText = styled.div`
    margin: 10px;
`;

const ContentPage = props => (
    <CPwrp>
        <Titlewrp>
            <Title color={props.titleColor} > {props.title}</Title>
        </Titlewrp>
        <Content>
            <ContentText>{props.ContentText}</ContentText>
            <Img
                sizes={props.ContentImage.sizes} />
        </Content>
        <Phrase>{props.Phrase}</Phrase>
    </CPwrp>
);

export default ContentPage