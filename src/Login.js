import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css"; 

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const proceedLogin = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Proceeding with login...");

      fetch("http://localhost:5000/users/")
        .then((res) => res.json())
        .then((users) => {
          const user = users.find(
            (user) => user.email === username && user.password === password
          );

          if (user) {
            toast.success("Login Successful!");
            sessionStorage.setItem('username',username);

            
            setTimeout(() => {
              navigate("/dashboard");
            }, 2000);
          } else {
            toast.error("Invalid Username or Password");
          }
        })
        .catch((err) => {
          toast.error("Login Failed: " + err.message);
        });
    }
  };

  const validate = () => {
    let isValid = true;

    if (!username.trim()) {
      isValid = false;
      toast.warning("Please enter a username");
    }

    if (!password.trim()) {
      isValid = false;
      toast.warning("Please enter a password");
    }

    return isValid;
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
      <ToastContainer theme="colored" position="top-right" autoClose={3000} />

      <div className="col-md-5">
        <div className="card shadow-lg border-0 rounded">
          <div className="card-body p-4">
            <h2 className="text-center mb-4 text-primary">User Login</h2>

            <form onSubmit={proceedLogin}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingUsername"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <label htmlFor="floatingUsername">Username</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>

              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary btn-lg">
                  Login
                </button>
                <Link to="/register" className="btn btn-outline-success btn-lg">
                  New User? Register
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
