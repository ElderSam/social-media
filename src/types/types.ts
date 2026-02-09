export interface SignUpPropsType {
  onSignUp: React.Dispatch<React.SetStateAction<string | null>>;
};

export interface PostType {
  id: number;
  username: string;
  created_datetime: string;
  title: string;
  content: string;
}