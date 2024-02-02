import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                "http://localhost:3001/v1/auth/contact",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (response.ok) {
                console.log("Form submitted successfully");
                alert("Form submitted successfully!");
                // Clear the form after successful submission
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });
            } else {
                console.error("Form submission failed");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <div className="min-h-screen flex items-center w-full justify-around bg-gray-100">
            <div className="w-[60%] h-[100vh]">
                <img
                    src="https://c1.wallpaperflare.com/preview/120/272/942/luxury-home-upscale-architecture-design.jpg"
                    alt="drive way"
                    className="rounded-md object-cover w-full h-full"
                />
            </div>
            <div className="bg-white  w-[50%] p-8 m-8 rounded shadow-md ">
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            name="name"
                            className="mt-1 p-2 border w-full rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            name="email"
                            className="mt-1 p-2 border w-full rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            className="mt-1 p-2 border w-full rounded-md"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
