import { useState } from "react";
import { Link } from "react-router-dom";
import Facebook from "../assets/icons/facebook-dark.png";
import Instagram from "../assets/icons/instagram-dark.png";
import Twitter from "../assets/icons/twitter-dark.png";
import Pinterest from "../assets/icons/pinterest-dark.png";

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSignIn, setIsSignIn] = useState(true);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleButtonClick = (isSignInButton) => {
        setIsSignIn(isSignInButton);
        setIsOpen(false); // Close the menu
    };
    return (
        <div className="hamburger-menu">
            <div
                className={`menu-icon ${isOpen ? "open" : ""}`}
                onClick={toggleMenu}
            >
                <div class="w-[30px] h-1 bg-[#3C493F] mb-1 rounded-sm bar1"></div>
                <div class="w-[30px] h-1 bg-[#3C493F] mb-1 rounded-sm bar2"></div>
                <div class="w-[30px] h-1 bg-[#3C493F] rounded-sm bar3"></div>
            </div>
            {isOpen && (
                <div className="menu-items">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/reviews">Reviews</a>
                    <a href="/contact">Contact</a>

                    <div className="flex w-[60%] m-4 md:w-[30%] justify-around">
                        <Link
                            to="/signin"
                            className={`${
                                isSignIn
                                    ? "bg-[#D64550]  hover:bg-[#ad3842] flex justify-center w-[50%] text-white"
                                    : "bg-none text-slate-700"
                            } font-medium py-2 px-4 rounded`}
                            onClick={() => handleButtonClick(true)}
                        >
                            Sign In
                        </Link>
                        <Link
                            to="/signup"
                            className={`${
                                !isSignIn
                                    ? "bg-[#D64550] hover:bg-[#ad3842] flex justify-center w-[50%]"
                                    : "bg-none text-slate-700"
                            } font-medium py-2 px-4 rounded`}
                            onClick={() => handleButtonClick(false)}
                        >
                            Sign Up
                        </Link>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex items-center ml-4 mt-8">
                        <Link
                            className="mr-4"
                            to="https://www.facebook.com"
                            target="_blank"
                        >
                            <img
                                src={Facebook}
                                alt="facebook logo"
                                className="w-[22px] h-auto object-cover"
                            />
                        </Link>
                        <Link
                            className="mr-4"
                            to="https://www.instagram.com"
                            target="_blank"
                        >
                            <img
                                src={Instagram}
                                alt="instagram logo"
                                className="w-[22px] h-auto object-cover"
                            />
                        </Link>
                        <Link
                            className="mr-4"
                            to="https://www.twitter.com"
                            target="_blank"
                        >
                            <img
                                src={Twitter}
                                alt="twitter logo"
                                className="w-[22px] h-auto object-cover"
                            />
                        </Link>
                        <Link
                            className="mr-4"
                            to="https://www.pinterest.com"
                            target="_blank"
                        >
                            <img
                                src={Pinterest}
                                alt="pinterest logo"
                                className="w-[22px] h-auto object-cover"
                            />
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HamburgerMenu;
