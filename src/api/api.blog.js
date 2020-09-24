import Axios from "axios";

export const getUsersAPI = async params => {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const response = await Axios.get(url);
  const isSuccess = response.status >= 200 && response.status < 300;
  if (isSuccess) {
    return response.data;
  }
  const error = new Error('Something went wrong');
  throw error;
}

export const getPostByIdAPI = async params => {
  const url = 'https://jsonplaceholder.typicode.com/posts/';
  const response = await Axios.get(url, {
    params: {
      userId: params.userId,
      _page: params._page,
      _limit: params._limit,
    },
  });
  const isSuccess = response.status >= 200 && response.status < 300;
  if (isSuccess) {
    return response.data;
  }
  const error = new Error('Something went wrong');
  throw error
}
export const getPostDetailsAPI = async params => {
  const url = `https://jsonplaceholder.typicode.com/posts/${params.postId}`;
  const response = await Axios.get(url);
  const isSuccess = response.status >= 200 && response.status < 300;
  if (isSuccess) {
    return response.data;
  }
  const error = new Error('Something went wrong');
  throw error
}

export const getCommentsByPost = async params => {
  const url = 'https://jsonplaceholder.typicode.com/comments/';
  const response = await Axios.get(url, {
    params: {
      postId: params.postId,
    },
  });
  const isSuccess = response.status >= 200 && response.status < 300;
  if (isSuccess) {
    return response.data;
  }
  const error = new Error('Something went wrong');
  throw error;
}

export const deletePostById = async params => {
  //todo
  const url = `https://jsonplaceholder.typicode.com/posts/${params.postId}`;
  const response = await Axios.delete(url);
  const isSuccess = response.status >= 200 && response.status < 300;
  if (isSuccess) {
    return response.data;
  }
  const error = new Error('Something went wrong');
  throw error;
}