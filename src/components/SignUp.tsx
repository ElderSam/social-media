import { useActionState, useEffect, useState } from 'react';
import './SignUp.css';
import { saveUsername } from '../api/server';
import type { SignUpPropsType } from '../types/types';
import { Button, FormTitle, InputGroup } from './Form';

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
        <form action={formAction} className="form-container">
          <FormTitle text="Welcome to CodeLeap network!" />

          <InputGroup
            inputTitle="Please enter your username"
            name='username'
            placeholder="John doe"
            value={username}
            setValue={setUsername}
          />

          <Button text={'ENTER'} isPending={isPending} disabled={isPending || !username.trim()} />
        </form>

        {/* {state?.success && <p>Welcome, {localStorage.getItem('username')}!</p>} */}
    </div>
  );
}
