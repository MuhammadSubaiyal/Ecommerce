import './CSS/LoginSignup.css';
const LoginSignup = () => {
  return (
    <div className="LoginSignup">
      <div className="LoginSignup-container">
        <h1>Sign Up</h1>
        <div className="LoginSignup-fields">
          <input type="text" name="" placeholder="Your Name" id="" />
          <input type="email" name="" placeholder="Your Email Address" id="" />
          <input type="password" name="" placeholder="Password" id="" />
        </div>
        <button> Continue</button>
        <p className="LoginSignup-login">
          Already have an account? <span>Login Here</span>
        </p>
        <div className="LoginSignup-agree">
          <input type="checkbox" />
          <p>By Continuing, i agree the terms of use & privacy policy.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup