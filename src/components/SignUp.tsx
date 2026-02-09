import { useActionState, useEffect, useState } from 'react';
import './SignUp.css';
import { saveUsername } from '../api/server';
import type { SignUpPropsType } from '../types/types';

export default function SignUp(props: SignUpPropsType) {
  const [username, setUsername] = useState('');
  const [state, formAction, isPending] = useActionState(submitForm, null);


  async function submitForm(prevState: any, formData: FormData) {
    const username = formData.get('username') as string;

    // Simulate API call
    await saveUsername(username);
    
    // Return new state
    return { success: true, username };
  }

  useEffect(() => {
    if (state?.success) {
      localStorage.setItem('username', state.username);
      props.onSignUp(state.username);
    }
  }, [state, props.onSignUp]);

  return (
    <div className="modal">
        <form action={formAction} className="modal-container">
          <p className="modal-title">Welcome to CodeLeap network!</p>

          <p className="input-title">Please enter your username</p>
          <input
            type="text"
            name="username"
            placeholder="John doe"
            autoFocus
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <button
            type="submit"
            disabled={isPending || !username.trim()}
          >
            <p>{isPending ? 'LOADING...' : 'ENTER'}</p>
          </button>
        </form>

        {/* {state?.success && <p>Welcome, {localStorage.getItem('username')}!</p>} */}
    </div>
  );
}
