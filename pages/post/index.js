import React from 'react'
import Posts from '../../components/blog/post/Posts'
import Meta from '../../components/Meta/Meta'

const Post = () => {
  return (
    <div>
        <Meta title="Show All Post | Simple Blog" />
        <Posts/>
    </div>
  )
}

export default Post