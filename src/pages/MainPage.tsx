import Main from "../layouts/Main";
import { CreatePost } from "../components/CreatePost";
import { PostList } from "../components/PostList";
import { ErrorBoundary } from "../components/ErrorBoundary";

export default function MainPage() {
  return (
    <Main>
      <CreatePost />
      <ErrorBoundary>
        <PostList />
      </ErrorBoundary>
    </Main>
  );
}