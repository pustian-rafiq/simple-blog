import axios from "axios";
import {
    FETCH_POST_DATA,
    FETCH_POST_DETAILS,
    DELETE_POST
  } from "../types";

  const getPosts = (posts) => ({
    type: FETCH_POST_DATA,
    payload: posts,
  });
  const getPost = (post) => ({
    type: FETCH_POST_DETAILS,
    payload: post,
  });


  // Fetch all post's list
export const getPostLists = () => {
    return function (dispatch) {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((resp) => {
        const posts = resp.data.slice(0,20);
        const postWithComments =posts.map(post =>
            axios.get(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
            .then(response => ({ ...post, comments: response.data }))
        );
        return Promise.all(postWithComments);
        })
        .then( (postWithComments) => {
            const postWithCommentUser = postWithComments.slice(0,20);
            const postCommentUser =postWithCommentUser.map(postComment =>
                axios.get("https://jsonplaceholder.typicode.com/users")
                .then(response => (
                    { ...postComment, user: response.data.find(user => user.id === postComment.userId)}
                    ))
            );
            return Promise.all(postCommentUser);
        })
        .then( (postCommentUser) => {
            const postWithCommentUsers = postCommentUser.slice(0,20);
            const postCommentUserPhoto =postWithCommentUsers.map(postCommentUser =>
                axios.get("https://jsonplaceholder.typicode.com/photos")
                .then(response => (
                    { ...postCommentUser, photo: response.data.find(user => user.id === postCommentUser.userId).url}
                    ))
            );
            return Promise.all(postCommentUserPhoto);
        })
        .then( (postCommentUserPhoto) => {
            console.log("postCommentUserPhoto",postCommentUserPhoto);
            dispatch(getPosts(postCommentUserPhoto));
        })
        .catch((error) => {
          //console.log(error)
        });
    };
  };
  
  // Fetch post details
  export const getPostDetails = (id) => {
    return function (dispatch) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((resp) => {
          console.log(resp.data);
              const post = resp.data;
             
              var postWithComments = axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
              .then(response => ({ ...post, comments: response.data }))
              // .then((postData)=> ({ postData }))
              console.log("postWithComments",postWithComments);
          return Promise.resolve(postWithComments);
          })
          .then( (postWithComments) => {
            console.log("postWithComments",postWithComments);
              const postComment = postWithComments;
              // let postCommentUser;
              let postCommentUser = axios.get("https://jsonplaceholder.typicode.com/users")
                  .then(response => (
                      { ...postComment, user: response.data.find(user => user.id === postWithComments.userId)}
                      ))
            console.log("postCommentUser Details",postCommentUser.object);
              return Promise.resolve(postCommentUser);
          })
          .then( (postCommentUser) => {
              const postWithCommentUsers = postCommentUser;
              const postCommentUserPhoto = axios.get("https://jsonplaceholder.typicode.com/photos")
                  .then(response => (
                      { ...postCommentUser, photo: response.data.find(user => user.id === postWithCommentUsers.userId).url}
                      ))
              return Promise.resolve(postCommentUserPhoto);
          })
          .then( (postCommentUserPhoto) => {
              console.log("postCommentUserPhoto Details",postCommentUserPhoto);
              dispatch(getPost(postCommentUserPhoto));
          })
          .catch((error) => {
            //console.log(error)
       });
    };
  };


// Delete Post
export const deletePost = (id) => {
    return function (dispatch) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((resp) => {
          dispatch({
            type: DELETE_POST,
            payload: id,
          });
 
        })
        .catch((error) => console.log(error));
    };
  };