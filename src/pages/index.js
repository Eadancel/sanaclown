import React from 'react'
import Link from 'gatsby-link'
import FrontPage from '../components/FrontPage/';

class IndexPage extends React.Component {
  render(){
    return (
      <div>
        <FrontPage FrontImage={this.props.data.FrontImage} />
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
    }
`;
