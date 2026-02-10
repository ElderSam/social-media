import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import { getPosts } from '../api/server';
import './PostList.css';
import Post from './Post';
import { SkeletonList } from './Skeleton';
import type { PostType, PaginatedResponse } from '../types/types';

export function PostList() {
  const loadMoreRef = useRef<HTMLDivElement>(null);

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
  const posts: PostType[] = data?.pages.flatMap((page) => page.results) || [];

  return (
    <div className="post-list">
      {posts.length === 0 ? (
        <p>No posts yet. Be the first to create one!</p>
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
