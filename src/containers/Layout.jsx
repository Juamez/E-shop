import React from 'react'

const Layout = ({children}) => {
  return (
    <div className="Layout">
      <Header />
      {children}
    </div>
  )
}

export default Layout