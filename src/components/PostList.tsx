import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import { getPosts } from '../api/server';
import './PostList.css';
import Post from './Post';
import { SkeletonList } from './Skeleton';
import { SearchBar } from './SearchBar';
import type { PostType, PaginatedResponse } from '../types/types';

export function PostList() {
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<PaginatedResponse>({
    queryKey: ['posts'],
    queryFn: ({ pageParam = 0 }) => getPosts(pageParam as number, 10),
    getNextPageParam: (lastPage) => {
      // If there's a next page, calculate the next offset
      if (lastPage.next) {
        const url = new URL(lastPage.next);
        const offset = url.searchParams.get('offset');
        return offset ? parseInt(offset) : undefined;
      }
      return undefined;
    },
    initialPageParam: 0,
  });

  // Intersection Observer for infinite scroll
  useEffect(() => {
    if (!loadMoreRef.current || !hasNextPage || isFetchingNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(loadMoreRef.current);

    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) {
    return (
      <div className="post-list">
        <SkeletonList count={3} />
      </div>
    );
  }

  if (isError) {
    return <div className="post-list-error">Error: {error.message}</div>;
  }

  // Flatten all pages into a single array
  const allPosts: PostType[] = data?.pages.flatMap((page) => page.results) || [];

  // Filter posts based on search query
  const posts = allPosts.filter((post) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(query) ||
      post.content.toLowerCase().includes(query) ||
      post.username.toLowerCase().includes(query)
    );
  });

  return (
    <div className="post-list">
      <SearchBar onSearch={setSearchQuery} placeholder="Search by title, content, or username..." />
      {posts.length === 0 ? (
        <p>{searchQuery ? 'No posts found matching your search.' : 'No posts yet. Be the first to create one!'}</p>
      ) : (
        <>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
          
          {/* Load more trigger */}
          {hasNextPage && (
            <div ref={loadMoreRef} className="load-more-trigger">
              {isFetchingNextPage ? (
                <SkeletonList count={2} />
              ) : (
                <div className="scroll-indicator">Scroll for more</div>
              )}
            </div>
          )}

          {!hasNextPage && posts.length > 0 && (
            <div className="end-of-posts">You've reached the end!</div>
          )}
        </>
      )}
    </div>
  );
}
