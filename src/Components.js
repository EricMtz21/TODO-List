import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Link } from "react-router-dom"

function MyButton({ text }) {
  return (
    <div className="custom-input-2">
      <button>{text}</button>
    </div>
  )
}

function MyInput({ type, placeholder, icon }) {
  return (
    <div className="custom-input">
      <FontAwesomeIcon icon={icon} className="icons" />
      <input type={type} placeholder={placeholder} />
    </div>
  )
}

function MyCheckBox({ text }) {
  return (
    <div className="custom-input-2">
      <input type="checkbox" name="text" />
      <label for="text">{text}</label>
    </div>
  )
}

export function SignUp() {
  const [showPassword, setShowPassword] = useState(false)

  const handleCheckBoxChange = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="session">
      <div className="container-2">
        <br></br>
        <h1>Sign up</h1>
        <div className="inputs-div">
          <MyInput type="text" placeholder="Username" icon="user" />
          <br></br>
          <MyInput type="text" placeholder="Mail" icon="envelope" />
          <br></br>
          <MyInput type="text" placeholder="Phone" icon="phone" />
          <br></br>
          <MyInput
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            icon="lock"
          />
          <br></br>
          <MyInput
            type={showPassword ? "text" : "password"}
            placeholder="Confirm password"
            icon="lock"
          />
          <br></br>
          <div className="custom-input-2">
            <input
              type="checkbox"
              name="text"
              onChange={handleCheckBoxChange}
            />
            <label for="text">Show password</label>
          </div>
          <br></br>
          <MyButton text="Sign up" />
          <br></br>
          <p>Already have an account?</p>
          <Link to="../">Log in</Link>
        </div>
      </div>
    </div>
  )
}

export function LogIn() {
  return (
    <div className="session">
      <div className="container">
        <br></br>
        <h1>Log in</h1>
        <div className="inputs-div">
          <MyInput type="text" placeholder="Mail" icon="envelope" />
          <br></br>
          <MyInput type="text" placeholder="Password" icon="lock" />
          <br></br>
          <MyCheckBox text="Remember me" />
          <br></br>
          <MyButton text="Log in" />
          <br></br>
          <p>Don't have an account?</p>
          <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  )
}

export function View() {
  return <SignUp />
}
