import React from 'react'
import styled from 'styled-components'
import './layout.css'

function Layout({ pageTitle = 'chicky', children }) {
  return (
    <>
      <Wrapper>
        <BlogTitle>Dummy Blog</BlogTitle>
      </Wrapper>
      {children}
    </>
  )
}

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  color: var(--brand);
  border-bottom: 0.5px var(--gray-1) solid;
`

const BlogTitle = styled.h1`
  color: var(--brand);
`

export default Layout
