import React from 'react'
import Link from 'gatsby-link'
import FrontPage from '../components/FrontPage/';
import ContentPage from '../components/ContentPage';
import TeamPage from '../components/TeamPage';

class IndexPage extends React.Component {


  render(){
    console.log(this.props.data);
    return (
      <div>
        <FrontPage FrontImage={this.props.data.FrontImage}
              includeBanner="true"/>

        <ContentPage
          anchor="aboutus"
          layout='" image content "'
          titleColor="#D0021B"
          title={this.props.data.UsContent.frontmatter.title}
          Phrase={this.props.data.UsContent.frontmatter.phrase}
          ContentText={this.props.data.UsContent.html}
          ContentImage={this.props.data.UsImage}
          BkgImage={this.props.data.BkgRight}
        />

        <ContentPage
          anchor="mision"
          titleColor="#D0021B"
          layout='" content image  "'
          title={this.props.data.MisionContent.frontmatter.title}
          Phrase={this.props.data.MisionContent.frontmatter.phrase}
          ContentText={this.props.data.MisionContent.html}
          ContentImage={this.props.data.MisionImage}
          BkgImage={this.props.data.BkgLeft}
        />

        <TeamPage
          anchor="doctores"
          titleColor="#D0021B"
          title="Doctores"
          semblanzas={this.props.data.Semblanzas}
        />

      </div>
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query AboutImg {
    FrontImage: imageSharp(id: { regex: "/bkg_index/" }) {
        sizes(maxWidth: 1440, quality: 100 ) {
          ...GatsbyImageSharpSizes
        }
    }
    BkgRight: imageSharp(id: { regex: "/bkgground_right/" }) {
      resolutions(width: 1440,quality: 100 ) {
        ...GatsbyImageSharpResolutions
      }
    }
    BkgLeft: imageSharp(id: { regex: "/bkgground_left/" }) {
      resolutions(width: 1440, quality: 100 ) {
        ...GatsbyImageSharpResolutions
      }
    }
    UsImage: imageSharp(id: { regex: "/quien_somos/" }) {
      resolutions(width: 600 ) {
        ...GatsbyImageSharpResolutions
      }
    }
    MisionImage: imageSharp(id: { regex: "/mision/" }) {
      resolutions(width: 418 ) {
        ...GatsbyImageSharpResolutions
      }
    }

    UsContent :markdownRemark(frontmatter: {id: {eq: "about"}}){
      frontmatter{
       title
       phrase
      }
     html
    }

    Semblanzas: allMarkdownRemark(filter: {frontmatter: {layout: {eq: "doctor"}}}){
      totalCount
      edges{
        node{
          frontmatter{
            nombre
            thumbnail
          }
          html
        }
      }
    }

    MisionContent :markdownRemark(frontmatter: {id: {eq: "mision"}}){
      frontmatter{
       title
       phrase
      }
     html
    }
  }



`;
