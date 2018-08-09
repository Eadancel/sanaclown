import React from 'react'
import Img from "gatsby-image";
import styled from "styled-components";
import Facebook from '!svg-react-loader?name=Facebook!../../res/icons/facebook.svg';
import Twitter from '!svg-react-loader?name=Facebook!../../res/icons/twitter.svg';
import Youtube from '!svg-react-loader?name=Facebook!../../res/icons/youtube-play.svg';


const ListIcon = styled.ul`
        list-style: none;
        margin:0;
        margin-right:10px;
`;
const ListItem = styled.li`
        display: inline-block;
        margin-right: 0.5rem;
        margin-bottom: 0px;
`;

const ListItemLink = props =>

  <ListItem>
    <a href={props.to} >
        {props.children}
    </a>
  </ListItem>

const SocialBar = props => (
    <ListIcon>
        { props.fb &&
        <ListItemLink to={ props.fb }> <Facebook /> </ListItemLink>
        }
        { props.tw &&
        <ListItemLink to={props.tw}> <Twitter /> </ListItemLink>
        }
        { props.yt &&
        <ListItemLink to={props.yt}> <Youtube /> </ListItemLink>
        }
    </ListIcon>
);

export default SocialBar