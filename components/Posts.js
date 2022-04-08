import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

function Posts({ post }) {
  console.log('%Post Data', 'color:dodgerblue', post)
  return (
    <>
      <Wrapper>
        <Title>{post.title}</Title>
        <Author>{post.author.name}</Author>

        <GatsbyImage
          image={getImage(post.image)}
          alt={post.author.name}
          className='fullBleed'
          objectPosition='50% 50%'
        />
      </Wrapper>
    </>
  )
}

export default Posts

const Wrapper = styled.main`
  display: grid;
  grid-template-columns:
    1fr
    min(30ch, 100%)
    1fr;

  & > * {
    grid-column: 2;
  }
`

const FullBleed = styled.div`
  grid-column: 1 / -1;
`

const Title = styled.h1``

const Author = styled.cite``

const Copy = styled.p``
