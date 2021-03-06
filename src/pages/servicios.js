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
          anchor="charlas"
          layout='" image content "'
          titleColor="#7ED321"
          title={this.props.data.CharlasContent.frontmatter.title}
          Phrase={this.props.data.CharlasContent.frontmatter.phrase}
          ContentText={this.props.data.CharlasContent.html}
          ContentImage={this.props.data.Image1}
          BkgImage={this.props.data.BkgRight}
        />

        <ContentPage
          anchor="jornadas"
          titleColor="#7ED321"
          layout='" content image  "'
          title={this.props.data.JornadasContent.frontmatter.title}
          Phrase={this.props.data.JornadasContent.frontmatter.phrase}
          ContentText={this.props.data.JornadasContent.html}
          ContentImage={this.props.data.Image2}
          BkgImage={this.props.data.BkgLeft}
        />
        <ContentPage
          anchor="talleres"
          titleColor="#7ED321"
          layout='" image content  "'
          title={this.props.data.TalleresContent.frontmatter.title}
          Phrase={this.props.data.TalleresContent.frontmatter.phrase}
          ContentText={this.props.data.TalleresContent.html}
          ContentImage={this.props.data.Image3}
          BkgImage={this.props.data.BkgRight}
        />
        <ContentPage
          anchor="consulta"
          titleColor="#7ED321"
          layout='" content image "'
          title={this.props.data.ConsultaContent.frontmatter.title}
          Phrase={this.props.data.ConsultaContent.frontmatter.phrase}
          ContentText={this.props.data.ConsultaContent.html}
          ContentImage={this.props.data.Image4}
          BkgImage={this.props.data.BkgLeft}
        />
        <ContentPage

          anchor="apoyo"
          titleColor="#7ED321"
          layout='" image content  "'
          title={this.props.data.ApoyoContent.frontmatter.title}
          Phrase={this.props.data.ApoyoContent.frontmatter.phrase}
          ContentText={this.props.data.ApoyoContent.html}
          ContentImage={this.props.data.Image5}
          BkgImage={this.props.data.BkgRight}
        />
      </div>
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query EscuelaImg {
    FrontImage: imageSharp(id: { regex: "/bkg_escuela/" }) {
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
    Image4: imageSharp(id: { regex: "/consulta/" }) {
      resolutions(width: 668 ) {
        ...GatsbyImageSharpResolutions
      }
    }
    Image5: imageSharp(id: { regex: "/donantes/" }) {
      resolutions(width: 668 ) {
        ...GatsbyImageSharpResolutions
      }
    }
    CharlasContent :markdownRemark(frontmatter: {id: {eq: "charlas"}}){
      frontmatter{
       title
       phrase
      }
     html
    }

    JornadasContent :markdownRemark(frontmatter: {id: {eq: "jornadas"}}){
      frontmatter{
       title
       phrase
      }
     html
    }

    TalleresContent :markdownRemark(frontmatter: {id: {eq: "talleres"}}){
      frontmatter{
       title
       phrase
      }
     html
    }

    ConsultaContent :markdownRemark(frontmatter: {id: {eq: "consulta"}}){
      frontmatter{
       title
       phrase
      }
     html
    }

    ApoyoContent :markdownRemark(frontmatter: {id: {eq: "apoyo"}}){
      frontmatter{
       title
       phrase
      }
     html
    }
  }



`;
