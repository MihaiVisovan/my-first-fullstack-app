import axios from 'axios';

const url = 'api/posts/';

// Get Posts
const getPosts = async () => {
  try {
    const response = await axios.get(url);
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(`Could not get posts: ${error.message}`);
  }
};

// Create Posts
const addPost = async (name, email) => {
  try {
    const response = await axios.post(url, { name, email });
    return response;
  } catch (error) {
    console.log(`Could not add posts: ${error}`);
  }
};

// Delete Posts
const deletePost = async id => {
  try {
    const response = await axios.delete(`${url}${id}`);
    return response;
  } catch (error) {
    console.log(`Could not add posts: ${error}`);
  }
};

export default { getPosts, addPost, deletePost };
