import Logo from "../assets/images/estimahomefix-logo-white.png";
import { Link } from "react-router-dom";
import Facebook from "../assets/icons/facebook-white.png";
import Instagram from "../assets/icons/instagram-white.png";
import Twitter from "../assets/icons/twitter-white.png";
import Pinterest from "../assets/icons/pinterest-white.png";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 min-h-[30vh] flex flex-col  bottom-0 w-full">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
                <div className="flex items-center mb-8 lg:mb-0">
                    <img src={Logo} alt="Logo" className="h-8 w-auto" />
                </div>
                <div className="flex flex-col lg:flex-row">
                    <div className="mb-4 lg:mb-0 lg:mr-8">
                        <h5 className="text-lg font-semibold mb-2 text-center ">
                            Quick Links
                        </h5>
                        <ul className="text-sm flex flex-col items-center">
                            <Link className="mb-1 hover:text-gray-400" to="/">
                                Home
                            </Link>
                            <Link
                                className="mb-1 hover:text-gray-400"
                                to="/driveway"
                            >
                                Services
                            </Link>

                            <Link
                                className="mb-1 hover:text-gray-400"
                                to="/about"
                            >
                                About Us
                            </Link>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-lg font-semibold mb-2 text-center">
                            Connect With Us
                        </h5>
                        <div className="flex items-center ml-4">
                            <Link
                                className="mr-4"
                                to="https://www.facebook.com"
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
                            >
                                <img
                                    src={Instagram}
                                    alt="instagram logo"
                                    className="w-[22px] h-auto object-cover"
                                />
                            </Link>
                            <Link
                                className="mr-4"
                                to="https://www.instagram.com"
                            >
                                <img
                                    src={Twitter}
                                    alt="twitter logo"
                                    className="w-[22px] h-auto object-cover"
                                />
                            </Link>
                            <Link
                                className="mr-4"
                                to="https://www.instagram.com"
                            >
                                <img
                                    src={Pinterest}
                                    alt="pinterest logo"
                                    className="w-[22px] h-auto object-cover"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
