
import { Link } from 'react-router-dom';
import './login.css';
const Login =()=>{
    return(
<div>
        <center><img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669015111/logo_2_vqa5nf.png" alt="logo" height="200px" width="200px" /></center>
        <div className="container" id="container">
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Sign in</h1>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="#">Forgot your password?</a>
              <button type="button">Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button className="ghost" id="signUp" type="button"><Link to="/signup">Sign Up</Link></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
};
export default Login;