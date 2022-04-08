import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

function Posts({ post }) {
  return (
    <>
      <Wrapper>
        <Title>{post.title}</Title>
        <Author>{post.author.name}</Author>

        <GatsbyImage
          image={getImage(post.image)}
          alt={post.author.name}
          className='fullBleed'
          // objectPosition='50% 50%'
        />
      </Wrapper>
    </>
  )
}

export default Posts

const Wrapper = styled.main`
  margin-block-start: 2rem;
  display: grid;
  grid-template-columns:
    1fr
    min(70ch, 100% - 2rem)
    1fr;

  & > * {
    grid-column: 2;
  }
`

const FullBleed = styled.div`
  grid-column: 1 / -1;
`

const Title = styled.h1`
  color: var(--gray-3);
`

const Author = styled.cite`
  margin-block-start: -1rem;
  margin-block-end: 1rem;
`

const Copy = styled.p``
