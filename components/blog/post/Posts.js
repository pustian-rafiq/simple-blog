import React, {useEffect, useState} from 'react'

import { useDispatch, useSelector } from "react-redux";
import {Container, Row, Col} from 'react-bootstrap';

import PostCard from './PostCard';
import { getPostLists } from '../../../redux/actions/postActions';

const Posts = () => {

  //Fetch all post
  const { posts,loading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostLists());
  }, []);

  if(loading){
    return <h4>Loading posts....</h4>
  }
  return (
    <>
    <h3 className="my-3 text-center text-info">Show first 20 posts</h3>
    <Container>     
      <Row>  
        {
            posts?.slice(0, 20).map((post,i) => {
            return(
              <Col md={3} sm={12} key={i}>
               <PostCard post={post} />
              </Col>
            )
          })
        } 
      </Row>
    </Container>
    </>
  );
}

export default Posts;
