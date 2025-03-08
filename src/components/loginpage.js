import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(""); 

  const TEMP_OTP = "123456";

  const handleLogin = (e) => {
    e.preventDefault();
    // Replace with real authentication logic
    console.log("Login successful, proceeding to OTP verification...");
    setError("");
    alert(`Use this OTP to continue: ${TEMP_OTP}`);
    setStep(2);
  };

  const handleOTPVerification = (e) => {
    e.preventDefault();
    if (otp === TEMP_OTP) {
      alert("Login Successful! 🎉");
      navigate("/dashboard");
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      <div className="bg-gray-900 bg-opacity-90 p-8 rounded-2xl shadow-xl w-96 backdrop-blur-md">
        <h2 className="text-3xl font-extrabold text-center mb-4 text-blue-400">
          {step === 1 ? "Login" : "OTP Verification"}
        </h2>

        {error && <p className="text-red-400 text-center mb-4">{error}</p>} 

        {step === 1 && (
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-300 font-semibold">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-300 font-semibold">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-4 bg-blue-600 rounded-lg font-semibold text-white hover:bg-blue-700 transition-transform transform hover:scale-105"
            >
              Login
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleOTPVerification}>
            <div className="mb-4">
              <label className="block text-gray-300 font-semibold">Enter OTP (123456)</label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                placeholder="Enter OTP"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-4 bg-blue-600 rounded-lg font-semibold text-white hover:bg-blue-700 transition-transform transform hover:scale-105"
            >
              Verify OTP
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginPage;

