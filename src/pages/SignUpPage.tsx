import SignUp from "../components/SignUp";
import type { SignUpPropsType } from '../types/types';
import './SignUpPage.css';

export default function SignUpPage(props: SignUpPropsType) {
  return (
    <div className="signup-page">
      <SignUp {...props} />
    </div>
  )
}