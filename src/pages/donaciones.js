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
          anchor="aportes"
          layout='" image content "'
          titleColor="#417505"
          title={this.props.data.AportesContent.frontmatter.title}
          Phrase={this.props.data.AportesContent.frontmatter.phrase}
          ContentText={this.props.data.AportesContent.html}
          ContentImage={this.props.data.Image1}
          BkgImage={this.props.data.BkgRight}
        />


        <ContentPage
          anchor="productos"
          titleColor="#417505"
          layout='" content image  "'
          title={this.props.data.ProductosContent.frontmatter.title}
          Phrase={this.props.data.ProductosContent.frontmatter.phrase}
          ContentText={this.props.data.ProductosContent.html}
          ContentImage={this.props.data.Image2}
          BkgImage={this.props.data.BkgLeft}
        />

      </div>
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query DonacionImg {
    FrontImage: imageSharp(id: { regex: "/bkg_donaciones/" }) {
        sizes(maxWidth: 1440,quality: 100 ) {
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

    Image1: imageSharp(id: { regex: "/aportes/" }) {
      resolutions(width: 600 ) {
        ...GatsbyImageSharpResolutions
      }
    }
    Image2: imageSharp(id: { regex: "/productos/" }) {
      resolutions(width: 600 ) {
        ...GatsbyImageSharpResolutions
      }
    }

    AportesContent: markdownRemark(frontmatter: {id: {eq: "aportes"}}){
      frontmatter{
       title
       phrase
      }
     html
    }

    ProductosContent: markdownRemark(frontmatter: {id: {eq: "productos"}}){
      frontmatter{
       title
       phrase
      }
     html
    }

  }



`;
