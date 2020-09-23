import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPostsList } from './actions';
const Posts = (props) => {
  console.log(props);
  const { isPostsFetched, posts, isError, location } = props;
  const [postsList, setPostsList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setPostsList([]);
    setLoading(true)
    const params = {
      userId: location.search.split('=')[1],
      _page: 1,
      _limit: 10,
    }
    console.log(params);
    props.getPostsList(params);
    return () => {
      console.log("unmount")
      setPostsList([]);
      setLoading(false);
    }
  },[]);
  useEffect(() => {
    if(isPostsFetched) {
      setLoading(false);
      setPostsList(posts);
    }
  }, [isPostsFetched]);
  console.log(postsList);
  const List = ({post, key}) => {
    return (
      <div>
        <h1>
          {post.title}
        </h1>
      </div>
    )
  }
  return(
    <div>
      {loading ? 'Loading.....' : 
        postsList.map((post, index) => 
          <List post={post} key={index}/>
        )
      }
      
    </div>
  )
};
const mapStateToProps = state => ({
  posts: state.postState.posts,
  isPostsFetched: state.postState.isPostsFetched,
  isError: state.postState.isError,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getPostsList,
    },
    dispatch
  )
export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Posts);