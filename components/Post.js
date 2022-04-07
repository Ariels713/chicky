import React from 'react'
import styled from 'styled-components'
import Layout from './layout/layout'
function Post() {
  return (
    <>
      <Layout>
        <Wrapper>
          <h1>testing</h1>
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

const Copy = styled.p``
