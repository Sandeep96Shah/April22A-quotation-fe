import React, { useState } from "react";
import { Container, FormContainer, Header, FormBody, Fields } from './styles';

const Form = (props) => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const handleForm = (val) => {
    if(val === isSignUp){

    }else if(val === isSignUp){
    }
    else{
        setName("");
        setEmail("");
        setPassword();
        setConfirmPassword();
        setIsSignUp(val);
    }
  }
  return (
    <Container>
      <FormContainer>
        <Header>{ isSignUp ?  "Sign Up" : "Sign In"}</Header>
        { isSignUp ? (<FormBody>
          <Fields>
            <label>Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </Fields>
          <Fields>
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  />
          </Fields>
          <Fields>
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  />
          </Fields>
          <Fields>
            <label>Confirm Password</label>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}  />
          </Fields>
          <Fields btn>
            <input className={isSignUp ? 'active ' : 'in-active'} type="submit" value="SignUp" onClick={() => handleForm(true)} />
            <input className={!isSignUp ? 'active' : 'in-active'} type="submit" value="SignIn" onClick={() => handleForm(false)}/>
          </Fields>
        </FormBody>) :
         (<FormBody>
          <Fields>
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  />
          </Fields>
          <Fields>
            <label>Password</label>
            <input type="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Fields>
          <Fields btn>
            <input className={isSignUp ? 'active' : 'in-active'} type="submit" value="SignUp" onClick={() => handleForm(true)} />
            <input className={!isSignUp ? 'active' : 'in-active'} type="submit" value="SignIn" onClick={() => handleForm(false)}/>
          </Fields>
          </FormBody>) }
      </FormContainer>
    </Container>
  );
};
export default Form;
