import React from 'react'
import Posts from '../../components/Posts'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout/layout'

export const query = graphql`
  {
    allContentfulAboutLauren {
      nodes {
        id
        title
        slug
        author {
          name
          twitter
        }
        image {
          gatsbyImageData(placeholder: DOMINANT_COLOR, layout: FULL_WIDTH)
        }
        aboutDescription {
          raw
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  // Initial postData variable with data from Contentful
  const postData = data.allContentfulAboutLauren.nodes

  return (
    <>
      <Layout>
        {postData.map((post) => (
          <Posts post={post} key={post.id} />
        ))}
      </Layout>
    </>
  )
}

export default IndexPage
