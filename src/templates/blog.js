import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from "styled-components";

const CPwrp = styled.div`
    position:relative;
    height:100vh;
    padding-left: 100px;
    padding-top:271px;
    padding-right: 100px;
`;
const BlogBody = styled.div`
  background: rgba(2,129,187,0.10);
  padding:5px;
`;
const Links = styled.div`
  display : flex;
  flex-direction: row;
  justify-content:space-between;
`;
const DivLinks = props => {

  const next=props.next;
  const prev=props.prev;

  return (
      <Links>
        <p>
          {prev && <Link to={prev.fields.slug}> {prev.frontmatter.title}</Link>
          }
        </p>
        <p>
          <Link to="/blog/">Volver</Link>
        </p>
        <p>
          {next &&<Link to={next.fields.slug}> {next.frontmatter.title}</Link>}
        </p>
      </Links>
)}

const Template = ({data, location, pathContext}) => {
  const {markdownRemark: post} = data
  const {frontmatter, html } = post
  const {next, prev} = pathContext;

  return (
    <CPwrp>
      <DivLinks next={next} prev={prev}/>
      <BlogBody>
        <h1>{frontmatter.title}</h1>
        <h3>{frontmatter.date}</h3>
        <div dangerouslySetInnerHTML={{__html: html}}/>
      </BlogBody>
      <DivLinks next={next} prev={prev}/>
    </CPwrp>
  )
}

export const pageQuery = graphql`
query BlogPostByID($id: String!) {
  markdownRemark(id: { eq: $id }) {
    id
    html
    frontmatter {
      date (formatString: "MMMM DD, YYYY", locale: "es")
      title
    }
  }
}
`

export default Template;