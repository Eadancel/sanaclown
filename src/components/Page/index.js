import React from 'react'
import Img from "gatsby-image";
import styled from "styled-components";
import SocialBar from '../SocialBar';
import ContactForm from '../ContactForm';
import Link from "gatsby-link";
import UPDown from '!svg-react-loader?name=Facebook!../../res/icons/up.svg';


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
    font-family:Verdana;
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

const UpIconWrp = styled.div`
    position: absolute;
    bottom: 7px;
    width: 65px;
    height: 78px;
    left: 50%;
`;
const UpIcon = styled(Link)`
    position: absolute;
    left: 0;
    right: 0;
    margin: auto
`;

const Page = props => (
    <CPwrp id={props.anchor}>
        <Titlewrp >
            <Title color={props.titleColor} > {props.title}</Title>
        </Titlewrp>
            {props.children}
    </CPwrp>
)
export default Page