import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/Blog.css';
import { posts } from '../data/portfolioData';

const BlogDetail = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="blog-container">
        <h1>Post not found</h1>
        <Link to="/blog" className="read-more">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="blog-container">
      <h1>{post.title}</h1>
      <div className="blog-content">
        <div className="post-header">
          <span className="post-category">{post.category}</span>
          <span className="post-date">{new Date(post.createdAt).toLocaleDateString()}</span>
        </div>
        <div className="post-content">
          <h3>Overview</h3>
          <p>{post.overview}</p>
          <h3>What problem I was solving</h3>
          <p>{post.problem}</p>
          <h3>Architecture (components + data flow)</h3>
          <p>{post.architecture}</p>
          <h3>Key decisions & tradeoffs</h3>
          <p>{post.decisions}</p>
          <h3>Challenges & debugging stories</h3>
          <p>{post.challenges}</p>
          <h3>What I learned</h3>
          <p>{post.learnings}</p>
          <h3>Next improvements</h3>
          <p>{post.nextSteps}</p>
        </div>
        {post.tags && (
          <div className="post-tags">
            {post.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        )}
        <Link to="/blog" className="read-more">
          Back to Blog
        </Link>
      </div>
    </div>
  );
};

export default BlogDetail;

