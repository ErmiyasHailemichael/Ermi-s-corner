import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const { user, token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5001/api/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleDelete = async (postId) => {
    if (!token) {
      navigate('/login');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5001/api/posts/${postId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        setPosts(posts.filter(post => post._id !== postId));
      } else {
        const data = await response.json();
        setError(data.error);
      }
    } catch (err) {
      setError('Failed to delete post');
    }
  };

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'projects', name: 'Project Documentation' },
    { id: 'tech', name: 'Tech Insights' }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  if (loading) return <div className="loading">Loading posts...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="blog-container">
      <h1>Blog</h1>
      <div className="blog-content">
        <p className="blog-intro">
          Welcome to my blog! Here I document my project development journey and share insights about 
          current technology trends and developments.
        </p>

        {user && (
          <button 
            className="create-post-btn"
            onClick={() => navigate('/blog/create')}
          >
            Create New Post
          </button>
        )}

        <div className="blog-categories">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="blog-posts">
          {filteredPosts.length > 0 ? (
            filteredPosts.map(post => (
              <article key={post._id} className="blog-post">
                <div className="post-header">
                  <h2>{post.title}</h2>
                  <span className="post-category">{post.category}</span>
                  <span className="post-date">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="post-content">
                  <p>{post.excerpt}</p>
                </div>
                <div className="post-footer">
                  <button 
                    onClick={() => navigate(`/blog/${post._id}`)} 
                    className="read-more"
                  >
                    Read More
                  </button>
                  {post.tags && (
                    <div className="post-tags">
                      {post.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  )}
                  {user && (user._id === post.author._id || user.role === 'admin') && (
                    <div className="post-actions">
                      <button 
                        className="edit-btn"
                        onClick={() => navigate(`/blog/edit/${post._id}`)}
                      >
                        Edit
                      </button>
                      <button 
                        className="delete-btn"
                        onClick={() => handleDelete(post._id)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </article>
            ))
          ) : (
            <div className="no-posts">
              <h2>Coming Soon</h2>
              <p>Stay tuned for interesting articles about web development, programming, and technology!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog; 