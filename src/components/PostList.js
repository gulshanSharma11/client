import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const url = category 
          ? `http://localhost:5000/posts/category/${category}` 
          : `http://localhost:5000/posts`;
        const response = await axios.get(url);
        const sortedPosts = response.data.reverse(); // Reverse the order
        setPosts(sortedPosts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, [category]);

  return (
    <div>
      <h2>Posts</h2>
      <div>
        <label>Filter by category:</label>
        <input 
          type="text" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          placeholder="Enter category"
        />
      </div>
      {posts.map(post => (
        <div key={post._id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p><strong>Category:</strong> {post.category}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
