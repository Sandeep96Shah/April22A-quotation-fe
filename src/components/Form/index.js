import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createUser, signIn } from "../../action";
import { Container, FormContainer, Header, FormBody, Fields } from "./styles";
import { useNavigate } from "react-router-dom";

const Form = (props) => {
  const navigate = useNavigate();
  const dispatch = props;
  const [isSignUp, setIsSighUp] = useState(true);
    const [data, setData] = useState({name: "", email: "", password: "", confirmPassword: ""});
  const handleForm = (val) => {
    if (val === isSignUp) {
      if(val) {
        createUser(data);
      }else {
        signIn(data, navigate);
      }
        // cll the api
    } else {
      setIsSighUp(val);
    }
    setData({name: "", email: "", password: "", confirmPassword: ""});
  };

  const handleFormUpdate = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    let newData;
    if(field === 'name'){
        newData = {...data, name: value}
    }else if (field === 'email'){
        newData = {...data, email: value};
    }else if(field === 'password') {
        newData = {...data, password: value};
    }else{
        newData = {...data, confirmPassword: value};
    }
    setData(newData);
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token){
      navigate('/home');
    }
  }, [])

  return (
    <Container>
      <FormContainer>
        <Header>{isSignUp ? "Sign Up" : "Sign In"}</Header>
        {isSignUp ? (
          <FormBody>
            <Fields>
              <label>Name:</label>
              <input
                type="text"
                placeholder="Name"
                value={data.name}
                name="name"
                onChange={(e) => handleFormUpdate(e)}
              />
            </Fields>
            <Fields>
              <label>Email:</label>
              <input
                type="email"
                placeholder="Email"
                value={data.email}
                name="email"
                onChange={(e) => handleFormUpdate(e)}
              />
            </Fields>
            <Fields>
              <label>Password:</label>
              <input
                type="password"
                placeholder="Password"
                value={data.password}
                name="password"
                onChange={(e) => handleFormUpdate(e)}
              />
            </Fields>
            <Fields>
              <label>Confirm Password:</label>
              <input
                type="password"
                placeholder="Confirm Password"
                value={data.confirmPassword}
                name="confirmPassword"
                onChange={(e) => handleFormUpdate(e)}
              />
            </Fields>
            <Fields btn>
              <input
                className={isSignUp ? "active" : "in-active"}
                type="submit"
                value="SignUp"
                onClick={() => handleForm(true)}
              />
              <input
                className={!isSignUp ? "active" : "in-active"}
                type="submit"
                value="SignIn"
                onClick={() => handleForm(false)}
              />
            </Fields>
          </FormBody>
        ) : (
          <FormBody>
            <Fields>
              <label>Email:</label>
              <input
                type="email"
                placeholder="Email"
                value={data.email}
                name="email"
                onChange={(e) => handleFormUpdate(e)}
              />
            </Fields>
            <Fields>
              <label>Password:</label>
              <input
                type="password"
                placeholder="Password"
                value={data.password}
                name="password"
                onChange={(e) => handleFormUpdate(e)}
              />
            </Fields>
            <Fields btn>
              <input
                className={isSignUp ? "active" : "in-active"}
                type="submit"
                value="SignUp"
                onClick={() => handleForm(true)}
              />
              <input
                className={!isSignUp ? "active" : "in-active"}
                type="submit"
                value="SignIn"
                onClick={() => handleForm(false)}
              />
            </Fields>
          </FormBody>
        )}
      </FormContainer>
    </Container>
  );
};

const mapstateToProps = (state) => {
  return {};
}

export default connect(mapstateToProps)(Form);
