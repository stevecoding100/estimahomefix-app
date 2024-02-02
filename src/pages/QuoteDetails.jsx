import { useLocation } from "react-router-dom";

const QuoteDetails = (props) => {
    const location = useLocation();
    const formData = location.state;

    console.log("Form Data:", formData);
    return (
        <div>
            <div className="md:text-center md:flex md:flex-col  md:items-center p-6">
                <h3 className="text-3xl md:text-4xl  text-[#2C3D4C] font-semibold m-6 mt-8 md:leading-snug">
                    Estimate Cost
                </h3>
                <p className="m-6 w-[90%] text-md  md:mt-2 md:w-[50%]  md:leading-2">
                    Based on the information provided, the cost of the project
                    is calculated. If you have a specific project or request,
                    feel free to{" "}
                    <b>
                        contact us at <a href="tel:123-456-7890">111-222-000</a>
                    </b>
                </p>
                <div className="flex flex-col items-center border-t-2 mt-8 w-[90%] m-auto">
                    <h4 className="mt-4 text-[20px] md:text-[22px] text-[#2C3D4C] font-medium leading-[34px]">
                        Price Breakdown
                    </h4>
                    <div className="flex flex-col mt-12 w-full md:w-[50%] gap-6">
                        <div className="flex justify-around">
                            <h5 className="text-sm md:text-lg text-left">
                                Your Square Footage
                            </h5>
                            <p className="text-md md:text-xl font-semibold text-[#2C3D4C]">
                                {formData.projectSize}
                                <span className="text-xs">/Sq Foot</span>
                            </p>
                        </div>
                        <div className="flex justify-around">
                            <h5 className="text-sm md:text-lg">
                                Avg. Contractor Cost
                            </h5>
                            <p className="text-md md:text-xl font-semibold text-[#2C3D4C]">
                                $110 <span className="text-xs">/Sq Foot</span>
                            </p>
                        </div>
                        <div className="flex justify-around">
                            <h5 className="text-sm md:text-lg">
                                Type Of Service
                            </h5>
                            <p className="text-md md:text-xl font-semibold text-[#2C3D4C]">
                                {formData.serviceNeeded}
                            </p>
                        </div>
                        <div className="flex justify-around">
                            <h5 className="text-sm md:text-lg">Rebuild</h5>
                            <p className="text-md  md:text-xl font-semibold text-[#2C3D4C]">
                                $22,000
                            </p>
                        </div>
                    </div>
                </div>

                {/* Display uploaded image if available */}
                {formData.image && (
                    <div className="flex justify-center items-center mt-8">
                        <img
                            src={formData.image.imageUrl}
                            alt="Uploaded Project"
                            className="max-w-full max-h-96"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default QuoteDetails;
