import React from 'react'
import Posts from '../../components/Posts'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

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
          gatsbyImageData(width: 1000, placeholder: DOMINANT_COLOR)
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
  console.log('%cpostData', 'color:deeppink', postData)

  function reducer(list, value) {
    console.log('%clist', 'color:goldenrod', list)
  }

  let reducedData = postData.reduce(reducer, [])
  console.log('%creducedData', 'color:dodgerblue', reducedData)

  return (
    <>
      {/* <Post data={data.allContentfulAboutLauren} /> */}
      {/* {<Posts />} */}
    </>
  )
}

export default IndexPage
