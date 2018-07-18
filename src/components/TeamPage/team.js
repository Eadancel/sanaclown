import React from 'react'
import styled from "styled-components";

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

const Ficha = props =>(
    <div>
        <p>{props.image}</p>
        <p>{props.texto}</p>
        <p>{props.fb}</p>
        <p>{props.tw}</p>
    </div>
);

class Team extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.semblanzas);
        this.state = {
           imgSrc: 'http://demo.sodhanalibrary.com/images/twitter_blue.png'
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