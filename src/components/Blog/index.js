import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

const CPwrp = styled.div`
    position:relative;
    height:100vh;
    padding-left:270px;
    padding-top:271px;
`;

const CardWrp = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;

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
    justify-content: space-between;
    padding: 20px;
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
`;
const BlogDescription = styled.div`

    font-family: Verdana;
    font-size: 16px;
    color: #303030;
    letter-spacing: -0.38px;
    text-align: left;
    line-height: 22px;
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
        {console.log(props.posts)}
        <CardWrp>



         {props.posts.edges.map(({node}) =>

                <BlogCard key={node.id}>
                    <BlogThumbNail>
                        <img src="http://placeimg.com/368/287/nature" />
                    </BlogThumbNail>
                    {console.log(node)}
                    <BlogDetails>
                        <BlogTitle>
                            {node.frontmatter.title}
                        </BlogTitle>

                        <BlogDescription>
                            Flat Chrysler Automobiles is making Mopar Crate Hemi Engine             kits available as a factory-backed option for Mopar vehicles             from 1975 and earlier.
                        </BlogDescription>
                    </BlogDetails>
              </BlogCard>

            )}

         </CardWrp>
    </CPwrp>

)
export default Blog