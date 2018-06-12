import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

const CPwrp = styled.div`
    position:relative;
    height:100vh;
    padding-left:270px;
    padding-top:271px;
`;

const Blog = props => (
    <CPwrp>
        <h4>{props.posts.totalCount} Posts</h4>
        {console.log(props.posts)}
        <ul style={{marginLeft: '0px'}}>
         {props.posts.edges.map(({node}) =>

                <li style={{listStyle: 'none'}}
                    key={node.id}>
                    {console.log(node)}
                    {node.frontmatter.title}
                </li>
            )}
         </ul>
    </CPwrp>

)
export default Blog