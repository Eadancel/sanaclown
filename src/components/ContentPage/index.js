import React from 'react'
import Img from "gatsby-image";
import styled from "styled-components";
import SocialBar from '../SocialBar';
import ContactForm from '../ContactForm';
import Page from '../Page';
import Link from "gatsby-link";
import UPDown from '!svg-react-loader?name=Facebook!../../res/icons/up.svg';
import BackgroundImage from 'gatsby-background-image'


const Phrase = styled.div`
    position:absolute;
    right:0px;
    bottom:30px;
    width:500px;
    text-align:right;
    padding:10px;
    background: rgba(2,129,187,0.30);
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
    font-size:18px;
    line-height : 1.5em;
    grid-area : content
`;

const ContactFormulario = styled(ContactForm)`
    grid-area : formulario

`;
const ContentPage = props => (
    <BackgroundImage
        resolutions={props.BkgImage.resolutions}
    >
    <Page
        anchor={props.anchor}
        titleColor={props.titleColor}
        title={props.title}>

        <Content layout={props.layout}>
            {props.ContentType!="contactform" &&
                <ContentText dangerouslySetInnerHTML={{ __html: props.ContentText }} ></ContentText>
            }
            {props.ContentType=="contactform" &&
                <ContactFormulario color={props.color}/>
            }
            <ImgWrp><Img resolutions={props.ContentImage.resolutions} /></ImgWrp>
        </Content>
    </Page>
    </BackgroundImage>
);

export default ContentPage