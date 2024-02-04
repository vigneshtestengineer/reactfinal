// Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import '../css/bootstrap.min.css';
import '../css/fontawesome.min.css';



const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const validateForm = (event) => {
    event.preventDefault();

    // Perform your validation logic here
    if (username === password) {
      // Successful login, navigate to the dashboard
      setErrorMessage('');
      navigate('/dashboard');
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (

    

<>


    <div>
    <nav class="navbar navbar-expand-xl">
      <div class="container h-100">
        <a class="navbar-brand" href="">
          <h1 class="tm-site-title mb-0">Product Admin</h1>
        </a>
        <button
          class="navbar-toggler ml-auto mr-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars tm-nav-icon"></i>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto h-100">
            <li class="nav-item">
              <a class="nav-link" href="">
                <i class="fas fa-tachometer-alt"></i> Dashboard
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                <i class="fas fa-shopping-cart"></i> Products
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="">
                <i class="far fa-user"></i> Accounts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>

  <div class="container tm-mt-big tm-mb-big">
    <div class="row">
      <div class="col-12 mx-auto tm-login-col">
        <div class="tm-bg-primary-dark tm-block tm-block-h-auto">
          <div class="row">
            <div class="col-12 text-center">
              <h2 class="tm-block-title mb-4">Welcome to Dashboard, Login</h2>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-12">
              <form onSubmit={validateForm}>
                <div class="form-group">
                  <label for="username">Username</label>
                  <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
                </div>
                <div class="form-group mt-3">
                  <label for="password">Password</label>
                  <input
                        type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
                </div>
                <div class="form-group mt-4">
                  <button
                    type="submit"
                    class="btn btn-primary btn-block text-uppercase"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer class="tm-footer row tm-mt-small">
    <div class="col-12 font-weight-light">
      <p class="text-center text-white mb-0 px-4 small">
        Copyright &copy; <b>2024</b> All rights reserved. 
      </p>
    </div>
  </footer>

  <script src="js/jquery-3.3.1.min.js"></script>

    <script src="js/bootstrap.min.js"></script>

  </>

  );
};

export default Login;
