import React from 'react'
import { ResetCSS, GlobalCSS } from '../components'

const Layout = ({ children }) => (
  <>
    <ResetCSS />
    <GlobalCSS />
    <main>{children}</main>
  </>
)

export default Layout
