import React from 'react';
import { useParams } from 'react-router';

const PostDetails = (props) => {
  console.log(props.location)
  let x = useParams();
  console.log(x);
  return (
    <div className="post__cards">

    </div>
  );
};
export default PostDetails;