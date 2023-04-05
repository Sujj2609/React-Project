
import { Link } from 'react-router-dom';
import './login.css';
const Signup =()=>{
    return(
<div>
        <center><img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669015111/logo_2_vqa5nf.png" alt="logo" height="200px" width="200px" /></center>
        <div className="container" id="container">
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Create Account</h1>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="button">Sign Up</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-right">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
                <button className="ghost" id="signIn" type="button"><Link to="/signin">Sign In</Link></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
};
export default Signup;