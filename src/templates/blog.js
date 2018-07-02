import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

const Template = ({data, location}) => {
  const {markdownRemark: post} = data
  const {frontmatter, html } = post

  return (
    <div>
      <div>
        <h1>{frontmatter.title}</h1>
        <h3>{frontmatter.date}</h3>
        <div dangerouslySetInnerHTML={{__html: html}}/>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
query BlogPostByID($id: String!) {
  markdownRemark(id: { eq: $id }) {
    id
    html
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      title
    }
  }
}
`

export default Template;