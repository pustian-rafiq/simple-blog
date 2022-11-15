import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div style={{height: '85vh',paddingTop: '30px'}}>This home page. If you want to see all post please <Link href="/post">Click Here</Link> or in the post navigation</div>
  )
}

export default HomePage