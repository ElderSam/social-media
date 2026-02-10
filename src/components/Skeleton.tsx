import './Skeleton.css';

export function PostSkeleton() {
  return (
    <div className="post-skeleton">
      <div className="skeleton-header">
        <div className="skeleton-title"></div>
      </div>
      <div className="skeleton-meta">
        <div className="skeleton-username"></div>
        <div className="skeleton-date"></div>
      </div>
      <div className="skeleton-content">
        <div className="skeleton-line"></div>
        <div className="skeleton-line"></div>
        <div className="skeleton-line short"></div>
      </div>
    </div>
  );
}

export function SkeletonList({ count = 3 }: { count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <PostSkeleton key={index} />
      ))}
    </>
  );
}
