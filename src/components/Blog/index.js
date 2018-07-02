import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

const CPwrp = styled.div`
    position:relative;
    height:100vh;
    padding-left: 100px;
    padding-top:271px;
    padding-right: 100px;
`;

const CardWrp = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: start;
        flex-wrap:wrap;
        @media screen and (max-width: $mobile) {
            flex-direction: column;
        }

`;
const BlogCard = styled.div`
        height: 515px;
        width: 368px;
        margin-left: 15px;
        margin-right: 15px;
`;
const BlogThumbNail = styled.div`
    width: 368px;
    height: 287px;
    object-fit: cover;
`;
const BlogDetails = styled.div`
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 15px;
    background: $color-white;
    box-shadow: 0 1px 7px rgba(0,0,0,0.5);
`;
const BlogTitle = styled.div`

    font-family: Verdana;
    font-size: 25px;
    color: #303030;
    letter-spacing: -0.6px;
    text-align: left;
    line-height: 30px;
    padding-bottom:10px;
`;
const BlogDescription = styled.div`

    font-family: Verdana;
    font-size: 16px;
    color: #303030;
    letter-spacing: -0.38px;
    text-align: left;
    line-height: 22px;
`;
const BlogCategoria = styled.div`
    font-family: Verdana;
    font-size: 14px;
    color: #00A4CB;
    letter-spacing: -0.34px;
    text-align: left;
`;
const BlogFecha = styled.div`
    font-family: Verdana;
    font-size: 13px;
    color: #6B6B6B;
    letter-spacing: -0.38px;
    text-align: left;
    line-height: 18px;
`;
const ButtonAction = styled.button`
    background: transparent;
    border: none;
    font-family: 'Quantico';
    font-weight: 700;
    text-transform: uppercase;
    text-align: left;
    color: $color-gray;
    cursor: pointer;
`;

const Blog = props => (
    <CPwrp>
        <h4>{props.posts.totalCount} Posts</h4>

        <CardWrp>



         {props.posts.edges.map(({node}) =>

                <BlogCard key={node.id}>
                    <BlogThumbNail>
                        <img src={node.frontmatter.thumbnail} />
                    </BlogThumbNail>

                    <BlogDetails>
                        <BlogTitle>
                            <Link to={node.fields.slug}>
                                {node.frontmatter.title}
                            </Link>
                        </BlogTitle>
                        <BlogCategoria>
                            {node.frontmatter.categoria}
                        </BlogCategoria>
                        <BlogFecha>
                            {node.frontmatter.date}
                        </BlogFecha>
                        <BlogDescription>
                            {node.frontmatter.description}
                        </BlogDescription>
                    </BlogDetails>
              </BlogCard>

            )}

         </CardWrp>
    </CPwrp>

)
export default Blog