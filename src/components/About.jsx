const About = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto p-8">
                <div className="flex  justify-around items-center w-full mx-auto mt-8">
                    <div className="w-[35%]">
                        <h1 className="text-4xl font-bold mb-4 ">About Us</h1>
                        <p className="text-gray-700 mb-8">
                            Welcome to our amazing company! We strive to deliver
                            the best products and services to our customers.
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                    </div>
                    <div className="w-[50%]">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRnP5HEQclZjmhQyDExeFJvxAB5WSK9g8nU7lrMRjy8A&s"
                            alt="walkway"
                            className="object-cover w-full rounded-md"
                        />
                    </div>
                </div>
                <div className="flex  justify-around items-center w-full mx-auto mt-12 mb-12">
                    <div className="w-[50%]">
                        <img
                            src="data:image/jpeg;base64,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"
                            alt="driveway"
                            className="object-cover w-full rounded-md"
                        />
                    </div>
                    <div className="w-[35%]">
                        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                        <p className="text-gray-700 mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;