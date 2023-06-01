import React, { useState } from "react";
import BJ from "..//../assets/img/bg.JPG";
import "./style.css";

// Here we import a helper function that will check if the email is valid
import { checkPassword, validateEmail } from "../../utils/helpers";

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  // TODO: Create a password variable and a function "setPassword" using useState

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    // TODO: Add an else statement to the end that will set the password to the value of 'inputValue'

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage("Email or username is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    // If successful, we want to clear out the input after registration.
    setUserName("");
    // TODO: Set the password back to an empty string after the user clicks submit

    setEmail("");
    alert(`Hello ${userName}`);
  };

  return (
    <div className="container">
      <div className="jumbotron jumbotron-fluid">
        <h1 class="text-white card-title text-dark display-4">Lets Connect!</h1>
        <p class="lead mb-3 text-muted">
          If you would like to see more of my skills and job history download my
          resume. If you didnt notice i also my have my Github and Linkedin
          below👇🏽. Feel free to add or follow! 😀
        </p>
        <p class="lead">
          <a
            class="btn btn-primary btn-lg"
            href="//assets/img/AP23.pdf"
            download={true}
            role="button"
          >
            My Resume
          </a>
        </p>
      </div>
      <div className="jumbotron jumbotron-fluid"></div>
      <div className="card-fluid">
        <h1 class="text-white card-title text-dark display-4">
          You can also submit your information - I'll get back to you. Thanks
          for stopping by! 🎉 🙋🏾‍♂️
        </h1>
        <div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text" id="">First and last name</span>
  </div>
  <input type="text" class="form-control">
    </input>
  <input type="text" class="form-control">
    </input>
</div>
<div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
      </input>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
        <form>
          
          <div class="form-group">
            <label for="formGroupExampleInput2">Note</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="Leave me a message..."
            ></input>
          </div>
        </form>
      </div>
      <form className="form">
        <div class="form-row align-items-center">
          <div class="col-sm-3 my-1">
            <label class="sr-only" for="inlineFormInputName">
              Full
            </label>
            <input
              value={email}
              name="full"
              onChange={handleInputChange}
              type="email"
              placeholder="email"
            />
          </div>
          <div class="col-sm-3 my-1">
            <label class="sr-only" for="inlineFormInputGroupUsername">
              Name
            </label>
            <div class="input-group">
              <div class="input-group-prepend">
                <div class="input-group-text">@</div>
              </div>
              <input
                value={userName}
                name="userName"
                onChange={handleInputChange}
                type="text"
                placeholder="username"
              />
            </div>
          </div>
          <div class="col-auto my-1">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="autoSizingCheck2"
              ></input>
              <label class="form-check-label" for="autoSizingCheck2">
                Remember me
              </label>
            </div>
          </div>
          <div class="col-auto my-1">
            <button
              type="btn btn-primary btn-lg"
              class="btn btn-primary btn-lg"
              onClick={handleFormSubmit}
            >
              Submit
            </button>
            <img src={BJ} className="img-fluid" alt="..."></img>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
