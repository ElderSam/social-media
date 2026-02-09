import { useState } from 'react';
import './SignUp.css';

export default function SignUp() {
  const [username, setUsername] = useState('');

  return (
    <div className="modal">
      <div className="modal-container">
          <p className="modal-title">Welcome to CodeLeap network!</p>

          <p className="input-title">Please enter your username</p>
          <input
            type="text"
            placeholder="John doe"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <button disabled={!username.trim()}>
            <p>ENTER</p>
          </button>
      </div>
    </div>
  );
}
