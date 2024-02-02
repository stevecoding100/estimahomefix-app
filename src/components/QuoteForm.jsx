import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const QuoteForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
        serviceNeeded: "Select Service",
        projectSize: "Select Size",
        imageUrl: "",
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: files ? files[0] : value, // Use files[0] for file inputs, otherwise use value
        }));
    };

    // Function to validate form data
    const validateForm = (formData) => {
        // Check if all fields are filled except for the image field
        return (
            formData.firstName !== "" &&
            formData.lastName !== "" &&
            formData.email !== "" &&
            formData.street !== "" &&
            formData.city !== "" &&
            formData.state !== "" &&
            formData.zipCode !== "" &&
            formData.country !== "" &&
            formData.serviceNeeded !== "Select Service" &&
            formData.projectSize !== "Select Size"
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // // Validate form data
        if (!validateForm(formData)) {
            alert("Please fill out all fields before submitting.");
            return;
        }

        try {
            // Upload image to Cloudinary
            const imageData = new FormData();
            imageData.append("file", e.target.image.files[0]);
            imageData.append("upload_preset", "estimahomefix");

            const cloudinaryResponse = await axios.post(
                "https://api.cloudinary.com/v1_1/estimahomefix/image/upload",
                imageData
            );

            // Extract the image URL from the Cloudinary response
            const imageUrl = cloudinaryResponse.data.url;

            // Update formData with the Cloudinary URL
            const updatedFormData = {
                ...formData,
                image: {
                    imageUrl: imageUrl,
                    contentType: "image/*", // You can adjust this based on the actual content type
                },
            };

            // Use updatedFormData in the axios post request to MongoDB
            const response = await axios.post(
                "http://localhost:3001/v1/auth/submitQuoteForm",
                updatedFormData
            );

            console.log("Quote form submitted successfully", response.data);

            navigate("/quotedetails", {
                state: { ...updatedFormData }, // Passing updatedFormData as state
            });
        } catch (error) {
            console.error("Error uploading image or submitting form", error);
            alert("Error submitting quote form. Please try again.");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-[90%] m-auto  md:m-6 mt-10 py-8 px-4 md:p-6 bg-gray-100 shadow-md rounded-md"
        >
            <div className="grid grid-cols-2">
                <div className="mb-4 m-2">
                    <label
                        className="block mb-2 text-sm font-semibold"
                        htmlFor="firstName"
                    >
                        First Name:
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="block w-full mt-1 px-3 py-2 rounded-md border focus:outline-none focus:border-blue-500"
                        />
                    </label>
                </div>
                <div className="mb-4 m-2">
                    <label
                        className="block mb-2 text-sm font-semibold"
                        htmlFor="lastName"
                    >
                        Last Name:
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="block w-full mt-1 px-3 py-2 rounded-md border focus:outline-none focus:border-blue-500"
                        />
                    </label>
                </div>
            </div>
            <div className="mb-4 m-2">
                <label
                    className="block mb-2 text-sm font-semibold"
                    htmlFor="email"
                >
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full mt-1 px-3 py-2 rounded-md border focus:outline-none focus:border-blue-500"
                    />
                </label>
            </div>
            <div className="mb-4 m-2">
                <label
                    className="block mb-2 text-sm font-semibold"
                    htmlFor="address"
                >
                    Address:
                    <input
                        type="text"
                        name="street"
                        value={formData.street}
                        onChange={handleChange}
                        className="block w-full mt-1 px-3 py-2 rounded-md border focus:outline-none focus:border-blue-500"
                    />
                </label>
                <label
                    className="block mb-2 text-sm font-semibold"
                    htmlFor="address"
                >
                    City:
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="block w-full mt-1 px-3 py-2 rounded-md border focus:outline-none focus:border-blue-500"
                    />
                </label>
                <label
                    className="block mb-2 text-sm font-semibold"
                    htmlFor="address"
                >
                    State:
                    <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="block w-full mt-1 px-3 py-2 rounded-md border focus:outline-none focus:border-blue-500"
                    />
                </label>
                <label
                    className="block mb-2 text-sm font-semibold"
                    htmlFor="address"
                >
                    zipCode:
                    <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        className="block w-full mt-1 px-3 py-2 rounded-md border focus:outline-none focus:border-blue-500"
                    />
                </label>
                <label
                    className="block mb-2 text-sm font-semibold"
                    htmlFor="address"
                >
                    Country:
                    <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="block w-full mt-1 px-3 py-2 rounded-md border focus:outline-none focus:border-blue-500"
                    />
                </label>
            </div>

            <div className="mb-4 m-2">
                <label
                    className="block mb-2 text-sm font-semibold"
                    htmlFor="serviceNeeded"
                >
                    Service Needed:
                    <select
                        name="serviceNeeded"
                        value={formData.serviceNeeded}
                        onChange={handleChange}
                        className="block w-full mt-1 px-3 py-2 rounded-md border focus:outline-none focus:border-blue-500"
                    >
                        <option value="Select Service">Select Service</option>
                        <option value="Walkway">Walkway</option>
                        <option value="Patio Paver">Patio Paver</option>
                        <option value="Drive Way">Drive Way</option>
                        <option value="Pool Deck">Pool Deck</option>
                    </select>
                </label>
            </div>
            <div className="mb-4 m-2">
                <label
                    className="block mb-2 text-sm font-semibold"
                    htmlFor="image"
                >
                    Upload Image:
                    <input
                        type="file"
                        name="image"
                        onChange={handleChange}
                        className="block w-full mt-1 px-3 py-2 rounded-md border focus:outline-none focus:border-blue-500"
                    />
                </label>
            </div>
            <div className="mb-4 m-2">
                <label
                    className="block mb-2 text-sm font-semibold"
                    htmlFor="approximateSize"
                >
                    Approximate Size (Sq Ft) Of Project:
                    <select
                        name="projectSize"
                        value={formData.projectSize}
                        onChange={handleChange}
                        className="block w-full mt-1 px-3 py-2 rounded-md border focus:outline-none focus:border-blue-500"
                    >
                        <option value="Select Size">Select Size</option>
                        <option value="Small 100-150">Small 100-150</option>
                        <option value="Medium 200-400">Medium 200-400</option>
                        <option value="Large 500+">Large 500+</option>
                        {/* Add more options as needed */}
                    </select>
                </label>
            </div>
            <button
                type="submit"
                className="w-[340px] md:w-[380px] h-[54px] mx-auto  flex justify-center items-center mt-8 py-4 bg-[#D64550] hover:bg-[#D64550] text-white font-semibold  rounded-md focus:outline-none focus:shadow-outline"
            >
                Get Quote
            </button>
        </form>
    );
};

export default QuoteForm;
