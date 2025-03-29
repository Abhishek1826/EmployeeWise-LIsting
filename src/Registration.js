import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css"; 

const Registration = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("select");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!id || !name || !password || !email || !phone || country === "select") {
      toast.error("Please fill in all required fields.");
      return;
    }

    let regObj = { id, name, password, email, phone, address, country, gender };
    console.log(regObj);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(regObj),
    })
      .then((res) => {
        if (res.ok) {
          toast.success("Registered Successfully!");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        } else {
          toast.error("Registration Failed. Please try again.");
        }
      })
      .catch((err) => {
        toast.error("Registration Failed: " + err.message);
      });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
      <ToastContainer theme="colored" position="top-right" autoClose={3000} />

      <div className="col-md-7">
        <div className="card shadow-lg border-0 rounded">
          <div className="card-body p-4">
            <h2 className="text-center text-primary mb-4">User Registration</h2>

            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingUserId"
                      placeholder="User ID"
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                      required
                    />
                    <label htmlFor="floatingUserId">User ID</label>
                  </div>
                </div>

                <div className="col-md-6">
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
                </div>

                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingName"
                      placeholder="Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <label htmlFor="floatingName">Full Name</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingEmail"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <label htmlFor="floatingEmail">Email</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingPhone"
                      placeholder="Phone Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                    <label htmlFor="floatingPhone">Phone Number</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <select
                      className="form-select"
                      id="floatingCountry"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      required
                    >
                      <option value="select">Select Country</option>
                      <option value="india">India</option>
                      <option value="usa">USA</option>
                      <option value="uk">UK</option>
                      <option value="japan">Japan</option>
                    </select>
                    <label htmlFor="floatingCountry">Country</label>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-floating mb-3">
                    <textarea
                      className="form-control"
                      id="floatingAddress"
                      placeholder="Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    ></textarea>
                    <label htmlFor="floatingAddress">Address</label>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label d-block">Gender</label>
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="gender"
                        value="male"
                        checked={gender === "male"}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <label className="form-check-label">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="gender"
                        value="female"
                        checked={gender === "female"}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <label className="form-check-label">Female</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="gender"
                        value="not applicable"
                        checked={gender === "not applicable"}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <label className="form-check-label">Prefer Not To Say</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary btn-lg">
                  Register
                </button>
                <button type="button" className="btn btn-outline-danger btn-lg" onClick={() => navigate("/login")}>
                  Back to Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
