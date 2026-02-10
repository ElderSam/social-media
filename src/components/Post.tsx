import { useEffect, useState } from 'react';
import type { PostType } from "../types/types";
import { getRelativeTime } from "../utils/timeUtils";
import editIcon from '../assets/edit-icon.svg';
import deleteIcon from '../assets/delete-icon.svg';
import { DeleteModal } from './DeleteModal';
import './Post.css';

export default function Post({ post }: {post: PostType}) {
  const currentUsername = localStorage.getItem('username');
  const isOwnPost = currentUsername === post.username;
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleEdit = () => {
    console.log('Edit post:', post.id);
    // TODO: Implement edit functionality
  };

  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    console.log('Deleting post:', post.id);
    // TODO: Implement actual delete API call
    setShowDeleteModal(false);
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
  };

  return (
    <div key={post.id} className="post-item">
      <div className="post-header">
        <h3 className="post-title">{post.title}</h3>
        {isOwnPost && (
          <div className="post-actions">
            <img src={deleteIcon} alt="Delete" className="action-icon" onClick={handleDelete} />
            <img src={editIcon} alt="Edit" className="action-icon" onClick={handleEdit} />
          </div>
        )}
      </div>
      <div className="post-meta">
        <span className="post-username">@{post.username}</span>
        <span className="post-date">
          {getRelativeTime(post.created_datetime)}
        </span>
      </div>
      <p className="post-content">{post.content}</p>
      
      {showDeleteModal && (
        <DeleteModal onCancel={cancelDelete} onDelete={confirmDelete} />
      )}
    </div>
  );
}