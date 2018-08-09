import React from 'react'
import styled from "styled-components";
import SocialBar from '../SocialBar';

const Teamwrp = styled.div`
    display : grid;
    grid-template-columns: 1fr 1fr;
`;

const ImgWrp = styled.div`
    display : flex ;
    flex-direction : row ;
    flex-wrap: wrap;
`;
const MiniFicha = styled.div`
    display : flex ;
    flex-direction : column ;
`;
const FichaMarco = styled.div`
    display:flex;
    flex-direction: column;
    background: #F3F1F1;
    border: 1px solid #979797;
    border-radius: 63px;
`;
const HeaderDoc = styled.div`
    display:flex;
    flex-direction: row;
`;
const SocialBlack =styled(SocialBar)`
    fill: #000000;
`;
const TextoSemblaza = styled.div`
    flex:1;
`;
const Ficha = props =>(
    <FichaMarco>
        <HeaderDoc>
            <img src={props.image} />
            <SocialBlack
                        fb={props.fb}
                        tw={props.tw}
                        />
        </HeaderDoc>
        <TextoSemblaza>
            <p>{props.texto}</p>
        </TextoSemblaza>
    </FichaMarco>
);

class Team extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.semblanzas);
        this.state = {
           imgSrc: '',
           texto : '',
           facebook :'',
           twitter :'',
        };

      }

      handleMouseOver(node) {
        this.setState({
            imgSrc: node.frontmatter.thumbnail,
            texto : node.frontmatter.semblanza,
            facebook :node.frontmatter.facebook,
            twitter :node.frontmatter.twitter,
        });
      }

      handleMouseOut() {
        this.setState({
          imgSrc: '',
          texto : '',
          facebook :'',
          twitter :'',
        });
      }

      render() {
        let edges = this.props.semblanzas.edges;
        return (
          <Teamwrp>
            <Ficha image={this.state.imgSrc}
                   texto={this.state.texto}
                   fb={this.state.facebook}
                   tw={this.state.twitter}
                   />
            <ImgWrp>
                {edges.map(({node}) =>
                    <MiniFicha>
                        <img onMouseOver={this.handleMouseOver.bind(this,node)} onMouseOut={this.handleMouseOut.bind(this)} src={node.frontmatter.thumbnail}/>
                        <p>{node.frontmatter.nombre}</p>
                    </MiniFicha>
                )}
            </ImgWrp>

          </Teamwrp>
        );
      }
  };

export default Team;