import Main from "../layouts/Main";
import { CreatePost } from "../components/CreatePost";
import { PostList } from "../components/PostList";

export default function MainPage() {
  return (
    <Main>
      <CreatePost />
      <PostList />
    </Main>
  );
}