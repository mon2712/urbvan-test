import React from "react"

import { Helmet } from "react-helmet"

function Page(props) {
  const { className, children, title } = props

  return (
    <div className={className}>
      <Helmet>
        <title>{title || null}</title>
      </Helmet>
      {children}
    </div>
  )
}

export default Page
