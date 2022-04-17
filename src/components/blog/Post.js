import React from 'react';
import { ReactComponent as BlogPostIcon } from '../../assets/icons/BlogPostIcon.svg';
import './Post.scss';

const Post = ({ title, url, summary }) => (
  <div className="post">
    <div className="title">
      <BlogPostIcon className="post-icon" />
      <a target="_blank" rel="noopener noreferrer" href={url} className="url">
        <h2>{title}</h2>
      </a>
    </div>
    <p className="post-summary">{summary}</p>
  </div>
);

export default Post;
