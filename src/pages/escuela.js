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
          anchor="cursos"
          layout='" image content "'
          titleColor="#F8E71C"
          title={this.props.data.CursosContent.frontmatter.title}
          Phrase={this.props.data.CursosContent.frontmatter.phrase}
          ContentText={this.props.data.CursosContent.html}
          ContentImage={this.props.data.Image1}
        />

        <ContentPage
          anchor="seminarios"
          titleColor="#F8E71C"
          layout='" content image  "'
          title={this.props.data.SeminarioContent.frontmatter.title}
          Phrase={this.props.data.SeminarioContent.frontmatter.phrase}
          ContentText={this.props.data.SeminarioContent.html}
          ContentImage={this.props.data.Image2}
        />
        <ContentPage
          anchor="capacitaciones"
          titleColor="#F8E71C"
          layout='" image content  "'
          title={this.props.data.CapacitacionesContent.frontmatter.title}
          Phrase={this.props.data.CapacitacionesContent.frontmatter.phrase}
          ContentText={this.props.data.CapacitacionesContent.html}
          ContentImage={this.props.data.Image3}
        />
      </div>
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query EscuelaImg {
    FrontImage: imageSharp(id: { regex: "/bkg_escuela/" }) {
        sizes(maxWidth: 1440 ) {
          ...GatsbyImageSharpSizes
        }
    }
    Image1: imageSharp(id: { regex: "/cursos/" }) {
      resolutions(width: 558 ) {
        ...GatsbyImageSharpResolutions
      }
    }
    Image2: imageSharp(id: { regex: "/seminario/" }) {
      resolutions(width: 649 ) {
        ...GatsbyImageSharpResolutions
      }
    }
    Image3: imageSharp(id: { regex: "/capacitacion/" }) {
        resolutions(width: 668 ) {
          ...GatsbyImageSharpResolutions
        }
    }

    CursosContent :markdownRemark(frontmatter: {id: {eq: "cursos"}}){
      frontmatter{
       title
       phrase
      }
     html
    }

    SeminarioContent :markdownRemark(frontmatter: {id: {eq: "seminario"}}){
      frontmatter{
       title
       phrase
      }
     html
    }

    CapacitacionesContent :markdownRemark(frontmatter: {id: {eq: "capacitaciones"}}){
      frontmatter{
       title
       phrase
      }
     html
    }
  }



`;
