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

const Content = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
       ${props => props.layout ||  '" content image "'}
       ;
    grid-gap: 20px;
    justify-items:center;
`;

const ImgWrp = styled.div`
    grid-area : image;
`;
const ContentText = styled.div`
    margin: 10px;
    font-family:Verdana;
    font-size:18px;
    line-height : 1.5em;
    grid-area : content
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
const ContactFormulario = styled(ContactForm)`
    grid-area : formulario

`;
const ContentPage = props => (
    <CPwrp id={props.anchor}>
        <Titlewrp >
            <Title color={props.titleColor} > {props.title}</Title>
        </Titlewrp>
        <Content layout={props.layout}>
        {props.ContentType!="contactform" &&
            <ContentText dangerouslySetInnerHTML={{ __html: props.ContentText }} ></ContentText>
        }
        {props.ContentType=="contactform" &&
            <ContactFormulario color={props.color}/>
        }
            <ImgWrp><Img resolutions={props.ContentImage.resolutions} /></ImgWrp>

        </Content>
        <Phrase>{props.Phrase}</Phrase>
        <UpIconWrp>
            <UpIcon tp="#"> <UPDown /> </UpIcon>
        </UpIconWrp>
    </CPwrp>
);

export default ContentPage