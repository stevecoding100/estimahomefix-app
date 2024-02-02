import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "../assets/images/estimahomefix-logo.png";

const Navbar = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isSignIn, setIsSignIn] = useState(true);
    const [loggedInUser, setLoggedInUser] = useState(null); // State to hold logged-in user's name

    const toggleForm = () => {
        setIsSignIn(!isSignIn);
    };

    // Sign Out User
    const handleSignOut = () => {
        localStorage.removeItem("loggedInUser");
        localStorage.removeItem("loggedInUserName"); // Clear the user's name
        // Remove other relevant items associated with user authentication
        // For example: localStorage.removeItem("token");
        // ...

        setLoggedInUser(null); // Update state to null after sign-out
    };

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 900);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const user = localStorage.getItem("loggedInUserName");
        if (user) {
            setLoggedInUser(user); // Set the logged-in user's name in state
        } else {
            setLoggedInUser(null);
        }
    }, []);

    return (
        <div class=" backdrop-blur-sm bg-white/50 drop-shadow-md h-[100px]  w-full flex justify-around items-center">
            <Link to="/">
                <img
                    src={Logo}
                    alt="estimahomefix logo"
                    className="w-[170px] h-auto mx-[6rem]"
                />
            </Link>
            {isSmallScreen ? (
                <HamburgerMenu />
            ) : (
                <div class="flex items-cente w-full items-center justify-center">
                    <div className="flex  items-center justify-around w-[60%] mx-auto">
                        <Link
                            to="/"
                            style={{
                                textDecoration: "none",
                                color: "#2B2D42",
                                borderBottom: "3px solid #D64550",
                            }}
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            style={{
                                textDecoration: "none",
                                color: "#2B2D42",
                            }}
                        >
                            About
                        </Link>
                        <Link
                            to="/reviews"
                            style={{
                                textDecoration: "none",
                                color: "#2B2D42",
                            }}
                        >
                            Reviews
                        </Link>
                        <Link
                            to="/contact"
                            style={{
                                textDecoration: "none",
                                color: "#2B2D42",
                            }}
                        >
                            Contact
                        </Link>
                        <div className="auth-section">
                            {loggedInUser ? (
                                // If user is authenticated, display user's name and sign-out button
                                <div className="">
                                    <span>Welcome, {loggedInUser}</span>
                                    <button
                                        onClick={handleSignOut}
                                        className="ml-[2rem] bg-none text-slate-700"
                                    >
                                        Sign Out
                                    </button>
                                </div>
                            ) : (
                                // If user is not authenticated, display sign-in and sign-up links
                                <div className="flex  mx-auto w-full justify-around">
                                    <Link
                                        to="/signin"
                                        className={`${
                                            isSignIn
                                                ? "bg-[#D64550] hover:bg-[#ad3842] text-white"
                                                : "bg-none text-slate-700"
                                        } font-medium py-2 px-4 rounded`}
                                    >
                                        Sign In
                                    </Link>
                                    <Link
                                        to="/signup"
                                        className={`${
                                            !isSignIn
                                                ? "bg-[#D64550] hover:bg-[#ad3842] text-white"
                                                : "bg-none text-slate-700"
                                        } font-medium py-2 px-4 rounded`}
                                    >
                                        Sign Up
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
