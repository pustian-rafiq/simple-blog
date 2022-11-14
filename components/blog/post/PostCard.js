import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import {FaTrash} from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { deletePost, getPostLists } from '../../../redux/actions/postActions';


const PostCard = ({post}) => {
  const dispatch = useDispatch();
  const deletePostHandler = (id) => {
    if(id){
      dispatch(deletePost(id));
      dispatch(getPostLists());
      console.log("successfully delete")
    }
  }
  return (
    <Card  style={{  marginBottom:'10px' }}>
       <Card.Img variant="top" src={post.photo} />
      <Card.Body>
        <Card.Title>{post?.title}</Card.Title>
        <Card.Text>
        {post?.body.substring(0, 50)}
        </Card.Text>
      </Card.Body>  
      <Card.Body>
        <span>Comments: <span className="bg-info p-2">{post.comments.length}</span></span> <br/>
        <span href="#">Author: {post.user.name}</span> <br/>
        <Button className="btn btn-danger text-right" onClick={()=> deletePostHandler(post.id)}>
           <FaTrash/> 
        </Button>
      </Card.Body>
    </Card>
  );
}

export default PostCard;