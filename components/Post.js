import React from 'react'
import styled from 'styled-components'
import Layout from './layout/layout'
import { graphql } from 'gatsby'

function Post({ data }) {
  console.log(data)
  return (
    <>
      <Layout>
        <Wrapper>
          {data.nodes.map((items) => (
            <div key={`items-${items.id}`}>
              <Title>{items.title}</Title>

              <Author>{items.author.name}</Author>
            </div>
          ))}
        </Wrapper>
      </Layout>
    </>
  )
}

export default Post

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
