import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'


class TemplateWrapper extends React.Component {
  render(){
    return (
      <div>
        <Helmet
          title="Gatsby Default Starter"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header headerImage={this.props.data.headerImage}/>

        <div>
          {this.props.children()}
        </div>
      </div>
  );
  }
}


export default TemplateWrapper

export const query = graphql`
  query GatsbyImageSampleQuery {
    headerImage: imageSharp(id: { regex: "/logo/" }) {
        resolutions(width: 265, height: 268) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
`;