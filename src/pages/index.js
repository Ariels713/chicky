import React from 'react'
import Post from '../../components/Post'
import { graphql } from 'gatsby'

export const query = graphql`
  {
    allContentfulAboutLauren {
      nodes {
        title
        slug
      }
    }
  }
`

const IndexPage = ({ data }) => {
  return <Post data={data} />
}

export default IndexPage
