import React from 'react'
import styled from "styled-components";
import SocialBar from '../SocialBar';

const Teamwrp = styled.div`
    display : grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

const ImgWrp = styled.div`
    display : flex ;
    flex-direction : row ;
    flex-wrap: wrap;
`;
const MiniFicha = styled.div`
    display : flex ;
    flex-direction : column ;
    width : 146px;
    padding:2px;
    text-align: center;
`;
const FichaMarco = styled.div`
    display:flex;
    flex-direction: column;
    background: #F3F1F1;
    border: 1px solid #979797;
    border-radius: 63px;
    padding:2px;
`;
const HeaderDoc = styled.div`
    display:flex;
    flex-direction: column;
    color :#D0021B;
    margin:auto;
    text-align: center;
`;
const SocialBlack =styled(SocialBar)`
    fill: #000000;
`;
const TextoSemblaza = styled.div`
    flex:1;
`;
const ImgHeaderWRp = styled.div`
    width:146px;
    margin:auto;
`;

const Ficha = props =>(
    <FichaMarco>
        <HeaderDoc>
            <ImgHeaderWRp>
                <img src={props.image} />
            </ImgHeaderWRp>
            <h3>{props.nombre}</h3>
        </HeaderDoc>

        <TextoSemblaza dangerouslySetInnerHTML={{ __html: props.texto }}></TextoSemblaza>
    </FichaMarco>
);

class Team extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           imgSrc: 'assets/logo.png',
           texto : 'Asociación de Payasos Terapéuticos de Hospital',
           nombre : 'Sanaclown',
           facebook :'',
           twitter :'',
        };

      }

      handleMouseOver(node) {
        this.setState({
            imgSrc: node.frontmatter.thumbnail,
            texto : node.html,
            nombre : node.frontmatter.nombre,
            facebook :node.frontmatter.facebook,
            twitter :node.frontmatter.twitter,
        });
      }

      handleMouseOut() {
        this.setState({
          imgSrc: 'assets/logo.png',
          texto : 'Asociación de Payasos Terapéuticos de Hospital',
          nombre :'Sanaclown',
          facebook :'',
          twitter :'',
        });
      }

      render() {
        let edges = this.props.semblanzas.edges;
        let edges_left = edges.slice(0,edges.length/2);
        let edges_right = edges.slice(edges.length/2);
        return (
          <Teamwrp>
            <ImgWrp>
                {edges_left.map(({node}) =>
                    <MiniFicha>
                        <img onMouseOver={this.handleMouseOver.bind(this,node)} onMouseOut={this.handleMouseOut.bind(this)} src={node.frontmatter.thumbnail}/>
                        <div>{node.frontmatter.nombre}</div>
                    </MiniFicha>
                )}
            </ImgWrp>
            <Ficha image={this.state.imgSrc}
                   texto={this.state.texto}
                   nombre={this.state.nombre}
                   fb={this.state.facebook}
                   tw={this.state.twitter}
                   />
            <ImgWrp>
                {edges_right.map(({node}) =>
                    <MiniFicha>
                        <img onMouseOver={this.handleMouseOver.bind(this,node)} onMouseOut={this.handleMouseOut.bind(this)} src={node.frontmatter.thumbnail}/>
                        <div>{node.frontmatter.nombre}</div>
                    </MiniFicha>
                )}
            </ImgWrp>

          </Teamwrp>
        );
      }
  };

export default Team;