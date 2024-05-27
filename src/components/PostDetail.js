import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        setError(error.response ? error.response.data : 'Error fetching post');
      }
    };

    fetchPost();
  }, [id]);

  return (
    <div>
      {error ? (
        <Typography variant="h6" color="error">{error}</Typography>
      ) : post ? (
        <Card>
          <CardContent>
            <Typography variant="h4">{post.title}</Typography>
            <Typography variant="body1">{post.content}</Typography>
            <Typography variant="body2" color="text.secondary">{post.category}</Typography>
          </CardContent>
        </Card>
      ) : (
        <Typography>Loading...</Typography>
      )}
    </div>
  );
};

export default PostDetail;
