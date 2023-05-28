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
            href="//assets/img/AP23.pdf" download={true}
            role="button"
          >
            My Resume
          </a>
        </p>
      </div>
      <div className="jumbotron jumbotron-fluid"></div>
      <div className="card-fluid">
        <h1 class="text-white card-title text-dark display-4">
          You can also submit your information - Thanks for stopping by!👨🏾‍💻✨
        </h1>
        <form className="form">
          <label htmlFor="email">Email address:</label>

          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
          <input
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
            placeholder="username"
          />
          {/* TODO Add another input field with a value, name, type, and placeholder of "password" */}
          {/* TODO Add a `onChange` attribute with a value of `handleInputChange` */}
          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <img src={BJ} className="img-fluid" alt="..."></img>
      </div>
    </div>
  );
}

export default Form;
