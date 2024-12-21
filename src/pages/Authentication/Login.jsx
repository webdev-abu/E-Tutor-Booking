import { NavLink } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="card w-full max-w-md bg-base-100 shadow-xl p-6">
        <h2 className="text-2xl font-bold text-center text-primary mb-4">
          Login
        </h2>
        <form>
          {/* Email Field */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <div className="relative">
              <span className="absolute top-2 left-2 text-gray-400">
                <FaEnvelope />
              </span>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered pl-10 w-full"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <span className="absolute top-2 left-2 text-gray-400">
                <FaLock />
              </span>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered pl-10 w-full"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-control">
            <button className="btn btn-primary w-full">Login</button>
          </div>
        </form>

        {/* Footer */}
        <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <NavLink to="/registration" className="text-primary font-bold">
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
