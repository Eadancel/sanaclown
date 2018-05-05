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
          layout='" image content "'
          titleColor="#F5A623"
          title={this.props.data.HospContent.frontmatter.title}
          Phrase={this.props.data.HospContent.frontmatter.phrase}
          ContentText={this.props.data.HospContent.html}
          ContentImage={this.props.data.Image1}
        />

        <ContentPage
          anchor="instituciones"
          titleColor="#F5A623"
          layout='" content image  "'
          title={this.props.data.InstitucionesContent.frontmatter.title}
          Phrase={this.props.data.InstitucionesContent.frontmatter.phrase}
          ContentText={this.props.data.InstitucionesContent.html}
          ContentImage={this.props.data.Image2}
        />

      </div>
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query IntervenImg {
    FrontImage: imageSharp(id: { regex: "/bkg_interven/" }) {
        sizes(maxWidth: 1440 ) {
          ...GatsbyImageSharpSizes
        }
    }
    Image1: imageSharp(id: { regex: "/hosp_van/" }) {
      resolutions(width: 600 ) {
        ...GatsbyImageSharpResolutions
      }
    }
    Image2: imageSharp(id: { regex: "/instituciones/" }) {
      resolutions(width: 600 ) {
        ...GatsbyImageSharpResolutions
      }
    }

    HospContent :markdownRemark(frontmatter: {id: {eq: "hospital"}}){
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
