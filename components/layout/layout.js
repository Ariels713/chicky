import React from 'react'
import styled from 'styled-components'
import './layout.css'

function Layout({ pageTitle = 'chicky', children }) {
  return (
    <>
      <h1>Dummy Blog</h1>
      {children}
    </>
  )
}

export default Layout
