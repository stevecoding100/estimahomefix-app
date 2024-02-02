import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QuoteDetailPage from "./pages/QuoteDetails";
import GetQuotePage from "./pages/GetQuotePage";
import Navbar from "./components/Navbar";
import ServiceDetails from "./components/ServiceDetails";
import Footer from "./components/Footer";
import {
    walkwayGallery,
    drivewayGallery,
    patiopaverGallery,
    poolDeckGallery,
} from "./data/serviceImgData";

import SignInSignUpForm from "./components/SignInSignUpForm";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/contact" element={<Contact />} />
                <Route
                    path="/walkway"
                    element={<ServiceDetails data={walkwayGallery} />}
                />
                <Route
                    path="/driveway"
                    element={<ServiceDetails data={drivewayGallery} />}
                />
                <Route
                    path="/patiopaver"
                    element={<ServiceDetails data={patiopaverGallery} />}
                />
                <Route
                    path="/pooldeck"
                    element={<ServiceDetails data={poolDeckGallery} />}
                />
                <Route path="/quotedetails" element={<QuoteDetailPage />} />
                <Route path="/getquote" element={<GetQuotePage />} />
                <Route path="/signin" element={<SignInSignUpForm />} />
                <Route
                    path="/signup"
                    element={<SignInSignUpForm isSignUp={true} />}
                />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
