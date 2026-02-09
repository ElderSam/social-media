import { useActionState, useEffect, useState } from 'react';
import './SignUp.css';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [state, formAction, isPending] = useActionState(submitForm, null);


  async function submitForm(prevState: any, formData: FormData) {
    const username = formData.get('username') as string;

    // Your form submission logic here
    console.log('Submitting:', username);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return new state
    return { success: true, username };
  }

  useEffect(() => {
    // React to state changes after form submission
    if (state?.success) {
      console.log('Form submitted successfully!', state.username);
      // Navigate, show message, etc.
    }
  }, [state]);

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

        {/* state contains the return value from submitForm */}
        {state?.success && <p>Welcome, {state.username}!</p>}
    </div>
  );
}
