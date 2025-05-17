import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([
    {
      _id: '1',
      title: 'Getting Started with React',
      category: 'tech',
      excerpt: 'Learn the basics of React and how to build your first application...',
      content: 'Full content about React basics...',
      createdAt: '2024-03-15T10:00:00.000Z',
      author: { _id: '1', name: 'Admin' },
      tags: ['React', 'JavaScript', 'Web Development']
    },
    {
      _id: '2',
      title: 'Building a Portfolio Website',
      category: 'projects',
      excerpt: 'A step-by-step guide to creating your own portfolio website...',
      content: 'Full content about portfolio development...',
      createdAt: '2024-03-10T15:30:00.000Z',
      author: { _id: '1', name: 'Admin' },
      tags: ['Portfolio', 'Web Design', 'CSS']
    },
    {
      _id: '3',
      title: 'Modern Web Development Trends',
      category: 'tech',
      excerpt: 'Exploring the latest trends in web development and what to expect...',
      content: 'Full content about web development trends...',
      createdAt: '2024-03-05T09:15:00.000Z',
      author: { _id: '1', name: 'Admin' },
      tags: ['Web Development', 'Trends', 'Technology']
    }
  ]);
  const [activeCategory, setActiveCategory] = useState('all');
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleDelete = (postId) => {
    if (!user) {
      navigate('/login');
      return;
    }
    setPosts(posts.filter(post => post._id !== postId));
  };

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'projects', name: 'Project Documentation' },
    { id: 'tech', name: 'Tech Insights' }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

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