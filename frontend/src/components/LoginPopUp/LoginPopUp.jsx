import React from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/frontend_assets/assets'
const LoginPopUp = ({setShowLogin}) => {
    const [currState, setCurrState] = React.useState("Login") // login , signup
  return (
    <div className='login-popup'>
      <form action="" className='login-popup-container'>
        <div className='login-popup-title'>
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className='login-popup-inputs'>
            {currState==="Login"?<></>:<input type="text" placeholder='name' required />}
            <input type="email" placeholder='email' required />
            <input type="password" placeholder='password' required />
        </div>
        <button>{currState==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox"  required/>
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState==="Login"
        ?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
        :<p>Alreay have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopUp
