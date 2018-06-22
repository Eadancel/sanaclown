import React from 'react'
import Link from 'gatsby-link'
import Blog from '../components/Blog/';


class IndexPage extends React.Component {

  render(){

    return (
      <div>
        <Blog posts={this.props.data.Posts}/>

      </div>
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query Blog {
    Posts: allMarkdownRemark(filter:{frontmatter: {layout:{eq:"blog"}}}) {
      totalCount
      edges {
        node {
          frontmatter{
            title
            date (formatString: "MMMM DD, YYYY", locale: "es")
            categoria
            thumbnail
            description
          }
          html
        }
      }
    }
  }



`;
