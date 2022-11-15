import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getPostLists } from '../../../redux/actions/postActions';
import PostCard from './PostCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getCommentLists } from '../../../redux/actions/commentActions';


const Posts = () => {

  const { posts,loading } = useSelector((state) => state.posts);
  // const { comments } = useSelector((state) => state.comments);
  const dispatch = useDispatch();

 console.log("Post", posts);

  useEffect(() => {
    dispatch(getPostLists());
    dispatch(getCommentLists());
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
            posts?.slice(0, 20).map((post) => {
            return(
              <Col md={3}>
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
