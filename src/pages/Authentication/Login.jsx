import { NavLink } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { AiOutlineGooglePlus } from "react-icons/ai";

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
              <span className="absolute top-[50%] translate-y-[-50%] left-2 text-gray-400">
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
              <span className="absolute top-[50%] translate-y-[-50%] left-2 text-gray-400">
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
        <p className="text-sm text-center my-5">
          Don't have an account?{" "}
          <NavLink to="/registration" className="text-primary font-bold">
            Sign Up
          </NavLink>
        </p>

        <div className="divider">OR</div>
        <div className="my-5">
          <button className="btn btn-primary w-full">
            <AiOutlineGooglePlus className="text-xl" />
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
