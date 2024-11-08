import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { FaGoogle } from "react-icons/fa";
function Login({ setUser }) {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="w-full mx-auto text-center mt-8">
      <button
        className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-400 font-semibold text-white w-fit rounded-lg px-6 py-3 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:scale-105 transition-all duration-300 mx-auto"
        onClick={handleLogin}
      >
        <FaGoogle className="mr-3 text-2xl bg-gradient-to-b from-red-400 to-green-500" />{" "}
        {/* Google Icon */}
        Login with Google
      </button>
    </div>
  );
}

export default Login;
