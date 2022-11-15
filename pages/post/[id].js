import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostDetails } from '../../redux/actions/postActions';
import {Col, Container, Row } from 'react-bootstrap';
import Comments from '../../components/blog/comment/Comment';
import { FaUser } from 'react-icons/fa';
import UserDeatils from '../../components/user/UserDeatils';
import Meta from '../../components/Meta/Meta';

const PostDeatils = ({postId}) => {

    //Fetch post details
    const { post,loading } = useSelector((state) => state.posts);

    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getPostDetails(postId));
    }, []);

    if(loading){
        return <h4>Loading post details....</h4>
    }
  return (
    <>
    <Meta title="Post Details | Simple Blog" />
        <Container className="mt-5">
            <Row>
                <Col sm={8} className="">
                    <div>
                         <h5 className="fs-2">{post.title}</h5>
                         <div className="author-section pb-3">
                            <img alt="Author" src={post?.photo}   className="author-image" />
                            <div className="author-name"> 
                                <FaUser/>  <span className="">{post?.user?.name}</span>
                            </div>
                         </div>
                         <div>
                            <p>{post.body}</p>
                         </div>
                         <hr></hr>
                         <div >
                            <h2 className="pb-2">Recent comments of this post</h2>
                                {post?.comments?.map((data) =>  <Comments photo={post.photo} comment={data} />)}
                         </div>
                    </div>

                </Col>
                <Col sm={4}>
                   <UserDeatils photo={post.photo} userDeatils={post.user} />
                </Col>
            </Row>
       </Container>
    </>
  )
}

export default PostDeatils

export async function getServerSideProps(context) {
    const postId = context.params.id;
    console.log("firstdd", context.params.id)
    return {
      props: {
        postId
      }, // will be passed to the page component as props
    }
  }
  