import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPostsList } from './actions';
import { List, Avatar } from 'antd';
import { Row } from 'antd';
import './post.css'
import { Link } from 'react-router-dom';

const Posts = (props) => {
  const { isPostsFetched, posts, location } = props;
  const [postsList, setPostsList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setPostsList([]);
    setLoading(true);
    const userId = location.search.split('=')[1];

    if (!userId) {
      props.history.push('/');
    } else {
      const params = {
        userId,
        _page: 1,
        _limit: 10,
      }
      props.getPostsList(params);
    }
    return () => {
      setPostsList([]);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isPostsFetched) {
      setLoading(false);
      setPostsList(posts);
    }
  }, [isPostsFetched]);

  return (
    <div className="posts">
      {loading ? 'Loading.....' :
        <Row>
          <List
            className="posts__list"
            pagination={{
              pageSize: 8
            }}
            dataSource={postsList}
            renderItem={post => {
              const url = `/posts/${post.id}`;
              return (
                <div className="list__item">
                  <h1>{post.title}</h1>
                  <Link to={url}>Read More</Link>
                </div>
              )

            }}
          />
        </Row>
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