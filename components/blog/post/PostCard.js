import Link from 'next/link';
import { useCallback } from 'react';

import { Button, Card} from 'react-bootstrap';
import {FaTrash,FaCommentDots, FaUser} from 'react-icons/fa';

import { useDispatch } from "react-redux";
import { deletePost, getPostLists } from '../../../redux/actions/postActions';


const PostCard = ({post}) => {
  const dispatch = useDispatch();

  const deletePostHandler =  (id) => {
    if(id){
      dispatch(deletePost(id));
      console.log("successfully delete")
    }
  }
  return (
    <Card  style={{  marginBottom:'10px' }}>
       <Card.Img variant="top" src={post.photo} />
      <Card.Body>
        <Link href={{
          pathname: `/post/${post.id}`,
          query: { data: JSON.stringify(post)}
        }}
        as={`/post/${post.id}`}
        >{post?.title} </Link> 
        <Card.Text>
        {post?.body.substring(0, 50)}
        </Card.Text>
      </Card.Body>  
      <Card.Body>
        {/* <span>Comments: <span className="bg-info p-2">{post.comments.length}</span></span> <br/>
        <span href="#">Author: {post.user.name}</span> <br/> */}
        <div className="post-info">
          <div className="user-info">
           <span><FaUser/> {post.user.name}</span> 
           <span style={{paddingLeft:'15px'}}><FaCommentDots/> {post.comments.length}</span> 
          </div>
          <FaTrash onClick={()=> deletePostHandler(post.id)} />
        </div>
        {/* <Button className="btn btn-danger text-right" onClick={()=> deletePostHandler(post.id)}>
         
        </Button> */}
      </Card.Body>
    </Card>
  );
}

export default PostCard;