import axios from "axios";
import {
  FETCH_COMMENT_DATA,
    FETCH_COMMENT_DETAILS
  } from "../types";

  const getComments = (comments) => ({
    type: FETCH_COMMENT_DATA,
    payload: comments,
  });
  const getComment = (comment) => ({
    type: FETCH_COMMENT_DETAILS,
    payload: comment,
  });


  // Fetch all post's list
export const getCommentLists = () => {
    return function (dispatch) {
      axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((resp) => {
          console.log("resp.data",resp.data)
          console.log("resp.data",resp)
          dispatch(getComments(resp.data));
        })
        .catch((error) => {
          //console.log(error)
        });
    };
  };
  
  // Fetch post details
  export const getCommentDetails = (id, headers) => {
    return function (dispatch) {
      axios
        .get(`${baseUrl}/bank/list/${id}/`, { headers })
        .then((resp) => {
          dispatch(getComment(resp.data));
        })
        .catch((error) => console.log(error));
    };
  };