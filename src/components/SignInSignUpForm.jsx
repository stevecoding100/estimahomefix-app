import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
// import { useCookies } from "react-cookie";

const SignInSignUpForm = () => {
    const location = useLocation();
    const [isSignIn, setIsSignIn] = useState(true);

    const [formData, setFormData] = useState({
        name: "",
        username: "",
        password: "",
        confirmPassword: "",
    });

    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === "/signup") {
            setIsSignIn(false);
        } else {
            setIsSignIn(true);
        }
    }, [location.pathname]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSignIn) {
            //Handle Sing In
            try {
                const response = await axios.post(
                    "http://localhost:3001/v1/auth/signin",
                    {
                        username: formData.username,
                        password: formData.password,
                    }
                );
                console.log("Response:", response.data);

                const { token, userID, name } = response.data;

                localStorage.setItem("loggedInUserName", name);

                const userDetailsResponse = await axios.get(
                    `http://localhost:3001/v1/auth/user/${userID}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const fetchedName = userDetailsResponse.data.name;
                localStorage.setItem("fetchedUserName", fetchedName);

                navigate("/");
            } catch (error) {
                // Handle Sign-in error
                console.error("Sign-in error", error);
            }
        } else {
            // Handle Sign Up
            try {
                const response = await axios.post(
                    "http://localhost:3001/v1/auth/signup",
                    {
                        name: formData.name,
                        username: formData.username,
                        password: formData.password,
                        confirmPassword: formData.confirmPassword,
                    }
                );
                console.log("Sign-up successful", response.data);
                navigate("/signin"); // Redirect to sign-in after successful sign-up
            } catch (error) {
                // Handle sign-up error
                console.error("Sign-up error", error);
            }
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const toggleForm = () => {
        setIsSignIn(!isSignIn);
    };

    return (
        <div className="flex justify-center w-full items-center mt-24">
            <form
                className="bg-white shadow-md rounded px-24 pt-16 pb-8 mb-4 md:w-[40%] w-[90%]"
                onSubmit={handleSubmit}
            >
                <h3 className="text-3xl md:text-4xl w-[90%] text-[#2C3D4C] font-semibold mb-6 md:leading-snug">
                    {isSignIn ? "Sign In" : "Sign Up"}
                </h3>
                {!isSignIn && (
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                )}
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="username"
                    >
                        Username
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="**********"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                {!isSignIn && (
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="confirmPassword"
                        >
                            Confirm Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="confirmPassword"
                            type="password"
                            placeholder="**********"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                    </div>
                )}
                <div className="flex items-center justify-between w-full">
                    <button
                        className="bg-[#D64550] hover:bg-[#ad3842] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                        // type="button"
                        type="submit"
                    >
                        {isSignIn ? "Sign In" : "Sign Up"}
                    </button>
                    <button
                        className="text-slate-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                        type="button"
                        onClick={toggleForm}
                    >
                        {isSignIn ? "Sign Up" : "Sign In"}
                    </button>
                </div>
            </form>
        </div>
    );
};
export default SignInSignUpForm;
