import React from 'react'
import Post from '../../components/Post'
import { graphql } from 'gatsby'

export const query = graphql`
  {
    allContentfulAboutLauren {
      nodes {
        id
        title
        slug
        image {
          gatsbyImage(width: 800)
        }
        author {
          name
          twitter
        }
        aboutDescription {
          raw
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  return <Post data={data.allContentfulAboutLauren} />
}

export default IndexPage
