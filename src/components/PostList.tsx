import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../api/server';
import './PostList.css';
import Post from './Post';
import type { PostType } from '../types/types';

export function PostList() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  if (isLoading) {
    return <div className="post-list-loading">Loading posts...</div>;
  }

  if (isError) {
    return <div className="post-list-error">Error: {error.message}</div>;
  }

  const posts: PostType[] = data?.results || [];

  return (
    <div className="post-list">
      {posts.length === 0 ? (
        <p>No posts yet. Be the first to create one!</p>
      ) : (
        posts.map((post) => (
          <Post post={post} />
        ))
      )}
    </div>
  );
}
