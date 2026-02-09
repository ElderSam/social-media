import './SignUp.css';

export default function SignUp() {
  return (
    <div className="modal">
      <div className="modal-container">
          <p className="modal-title">Welcome to CodeLeap network!</p>

          <p className="input-title">Please enter your username</p>
          <input type="text" placeholder="John doe" autoFocus/>
      </div>
    </div>
  );
}
