import React from 'react'
import styled from 'styled-components'
import Layout from './layout/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { StaticImage } from 'gatsby-plugin-image'

function Posts({ data }) {
  return (
    <>
      <Layout>
        <Wrapper>
          {data.nodes.map((items) => (
            <div key={`items-${items.id}`}>
              <Title>{items.title}</Title>

              <Author>{items.author.name}</Author>
              <GatsbyImage image={getImage(items.image)} />
            </div>
          ))}
        </Wrapper>
      </Layout>
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
