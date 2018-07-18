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
        />

        <ContentPage
          anchor="mision"
          titleColor="#D0021B"
          layout='" content image  "'
          title={this.props.data.MisionContent.frontmatter.title}
          Phrase={this.props.data.MisionContent.frontmatter.phrase}
          ContentText={this.props.data.MisionContent.html}
          ContentImage={this.props.data.MisionImage}
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
        sizes(maxWidth: 1440 ) {
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

    Semblanzas: allMarkdownRemark(filter: {frontmatter: {layout: {eq: "doctor"}}}){
      totalCount
      edges{
        node{
          frontmatter{
            semblanza
            nombre
            thumbnail
            twitter
            instagram
            facebook
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
