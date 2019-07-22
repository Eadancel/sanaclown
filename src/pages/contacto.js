import React from 'react'
import Link from 'gatsby-link'
import FrontPage from '../components/FrontPage/';
import ContentPage from '../components/ContentPage';

class IndexPage extends React.Component {


  render(){

    return (
      <div>
        <FrontPage FrontImage={this.props.data.FrontImage}
                  includeBanner="false"/>

        <ContentPage
          anchor="hosp"
          layout='"image content "'
          titleColor="#9D4AE2"
          title={this.props.data.ContactoContent.frontmatter.title}
          Phrase={this.props.data.ContactoContent.frontmatter.phrase}
          ContentType="contactform"
          ContentText=""
          ContentImage={this.props.data.Image1}
          BkgImage={this.props.data.BkgRight}
        />
      </div>
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query ContactoImg {
    FrontImage: imageSharp(id: { regex: "/bkg_contacto/" }) {
        sizes(maxWidth: 1440,quality: 100 ) {
          ...GatsbyImageSharpSizes
        }
    }
    Image1: imageSharp(id: { regex: "/formulario/" }) {
      resolutions(width: 600 ) {
        ...GatsbyImageSharpResolutions
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

    ContactoContent :markdownRemark(frontmatter: {id: {eq: "contacto"}}){
      frontmatter{
       title
       phrase
      }
     html
    }

    InstitucionesContent :markdownRemark(frontmatter: {id: {eq: "instituciones"}}){
      frontmatter{
       title
       phrase
      }
     html
    }

  }



`;
