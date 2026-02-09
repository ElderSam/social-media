import type { PostType } from "../types/types";
import { getRelativeTime } from "../utils/timeUtils";
import './Post.css';

export default function Post({ post }: {post: PostType}) {
  return (
    <div key={post.id} className="post-item">
      <div className="post-header">
        <h3 className="post-title">{post.title}</h3>
      </div>
      <div className="post-meta">
        <span className="post-username">@{post.username}</span>
        <span className="post-date">
          {getRelativeTime(post.created_datetime)}
        </span>
      </div>
      <p className="post-content">{post.content}</p>
    </div>
  );
}