import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Blog.css';
import { posts } from '../data/portfolioData';

const BlogList = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'architecture', name: 'Architecture' },
    { id: 'performance', name: 'Performance' },
    { id: 'reliability', name: 'Reliability' }
  ];

  const filteredPosts =
    activeCategory === 'all'
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <div className="blog-container">
      <h1>Blog</h1>
      <div className="blog-content">
        <p className="blog-intro">
          Architecture and reliability notes (sample content). Detailed posts are coming soon.
        </p>

        <div className="blog-categories">
          {categories.map((category) => (
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
            filteredPosts.map((post) => (
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
                  <Link to={`/blog/${post._id}`} className="read-more">
                    Read More
                  </Link>
                  {post.tags && (
                    <div className="post-tags">
                      {post.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))
          ) : (
            <div className="no-posts">
              <h2>Coming Soon</h2>
              <p>Stay tuned for architecture and reliability write-ups.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogList;

