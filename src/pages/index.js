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
          title="Quienes Somos"
          Phrase="La sonrisa es una verdadera fuerza vital, la única capaz de mover lo inconmovible"
          ContentText="Sanaclown es una organización multidisciplinaria dedicada al clown terapéutico de hospital.<br>
          A través de la risa, la música, el juego, la imaginación, magia, lenguaje psicoterapeutico, el uso de titere y juguete terapeutico, contribuye en el proceso de restablecimiento del bienestar integral de las personas, entregando alegría y desdramatizando el ambiente hospitalario.
          Sanaclown se sustenta sobre el convencimiento que la alegría y la risa son un camino certero para potenciar la existencia de individuos y grupos humanos más felices, equilibrados y activos.
          "
          ContentImage={this.props.data.UsImage}
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
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
  }
  }
`;
