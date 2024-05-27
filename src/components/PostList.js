import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, CardActions, Typography, Button, Grid, Pagination } from '@mui/material';
import { Link } from 'react-router-dom';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const url = category 
          ? `http://localhost:5000/posts/category/${category}?page=${page}&limit=20` 
          : `http://localhost:5000/posts?page=${page}&limit=20`;
        const response = await axios.get(url);
        setPosts(response.data.posts);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, [category, page]);

  return (
    <div>
      <h2>Posts</h2>
      <div>
        <label>Filter by category:</label>
        <input 
          type="text" 
          value={category} 
          onChange={(e) => {
            setCategory(e.target.value);
            setPage(1);  // Reset to first page on category change
          }} 
          placeholder="Enter category"
        />
      </div>
      <Grid container spacing={2}>
        {posts.map(post => (
          <Grid item xs={12} sm={6} key={post._id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.content.substring(0, 100)}...  {/* Display a preview of the content */}
                </Typography>
              </CardContent>
              <CardActions>
              <Button size="small" component={Link} to={`/posts/${post._id}`}>Read More</Button>


              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Pagination 
        count={totalPages} 
        page={page} 
        onChange={(e, value) => setPage(value)} 
        color="primary"
      />
    </div>
  );
};

export default PostList;
