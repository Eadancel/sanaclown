import React from 'react'
import Link from 'gatsby-link'
import FrontPage from '../components/FrontPage/';
import ContentPage from '../components/ContentPage';

class IndexPage extends React.Component {


  render(){

    return (
      <div>
        <FrontPage FrontImage={this.props.data.FrontImage} />

        <ContentPage
          titleColor="#D0021B"
          title={this.props.data.UsContent.frontmatter.title}
          Phrase={this.props.data.UsContent.frontmatter.phrase}
          ContentText={this.props.data.UsContent.html}
          ContentImage={this.props.data.UsImage}
        />

        <ContentPage
          titleColor="#D0021B"
          title={this.props.data.MisionContent.frontmatter.title}
          Phrase={this.props.data.MisionContent.frontmatter.phrase}
          ContentText={this.props.data.MisionContent.html}
          ContentImage={this.props.data.MisionImage}
        />

      </div>
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query GatsbyImageIndex {
    FrontImage: imageSharp(id: { regex: "/bkg_index/" }) {
        sizes(maxWidth: 1240 ) {
          ...GatsbyImageSharpSizes
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

    MisionContent :markdownRemark(frontmatter: {id: {eq: "mision"}}){
      frontmatter{
       title
       phrase
      }
     html
    }

  }



`;
