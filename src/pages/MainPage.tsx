import Main from "../layouts/Main";

interface props {
  username: string;
}

export default function MainPage({ username }: props) {
  return <Main>Main Page. username: {username}</Main>
}