import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { bindActionCreators } from 'redux';
import { getPostDetails, getComments, deletePost, resetList } from './actions';
import { connect } from 'react-redux';
import './postCards.css';
import { Comment, Tooltip, List } from 'antd';
const PostDetails = (props) => {
  const {
    isPostsFetched,
    postDetails,
    isError,
    getComments,
    getPostDetails,
    isCommentsFetched,
    comments,
    deletePost,
    isPostDeleted,
  } = props;
  const [loading, setLoading] = useState(false);
  const [commentsList, setCommentsList] = useState(comments);
  const { id: postId } = useParams();
  useEffect(() => {
    setLoading(true);
    getPostDetails({ postId });
    return () => {
      props.resetList();
      setCommentsList([]);
    }
  }, []);
  useEffect(()=>{
    if(isPostDeleted) {
      props.history.push(`/posts?userId=${postDetails.userId}`);
    }
    if(isPostsFetched) {
      setLoading(false);
    }
  },[isPostsFetched, isPostDeleted]);

  useEffect(() => {
    if(isCommentsFetched && !isError) {
      setLoading(false);
      setCommentsList([...comments]);
    }
  },[isCommentsFetched]);


  const handleCommentClick = () => {
    setLoading(true);
    getComments({postId});
  }
  const handleDelete = () => {
    deletePost({postId});
    setLoading(true);
    setCommentsList([]);
  }
  return (
    <div className="post__cards">
      <div className="post__content">
        {
          loading && !isPostsFetched ? 'Loading ...' : <>
            <h1>{postDetails.title}</h1>
            <p>{postDetails.body}</p>
          </>
        }
        
      </div>
      <div className="post__comments">
        {loading && !isCommentsFetched ? 'Loading ....' : null}
      {
        commentsList.length > 0 ? 
          commentsList.map(item => {
            return <Comment
                      key={item.id}
                      author={item.name}
                      content={item.body}
                      avatar="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    />
          })
          
          
          : null
      }
      </div>
      <div className="post__footer">
        <button
          className="comments"
          disabled={isCommentsFetched}
          onClick={handleCommentClick}
        >
          Comments
        </button>
        <button
          className="delete"
          onClick={handleDelete}
        >
          Delete Post
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isPostDeleted: state.postDetailsState.isPostDeleted,
  postDetails: state.postDetailsState.postDetails,
  isPostsFetched: state.postDetailsState.isPostDetailsFetched,
  isError: state.postDetailsState.isError,
  comments: state.postDetailsState.comments,
  isCommentsFetched: state.postDetailsState.isCommentsFetched,
})
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getPostDetails,
      getComments,
      deletePost,
      resetList,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);