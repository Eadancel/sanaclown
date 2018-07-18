import React from 'react'
import Img from "gatsby-image";
import styled from "styled-components";
import Page from '../Page';
import Team from './team.js';

const TeamPage = props => (
    <Page
        anchor={props.anchor}
        titleColor={props.titleColor}
        title={props.title}>
        <Team semblanzas={props.semblanzas}
        />
    </Page>
);

export default TeamPage;