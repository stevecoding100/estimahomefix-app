import { Link } from "react-router-dom";

const ServiceDetails = ({ data }) => {
    return (
        <div className="w-[95%] m-auto p-2 md:p-6">
            <div className="flex justify-center flex-col items-center">
                <img
                    src={data[4].img}
                    alt="walkway"
                    className="w-[386px] h-[276px] md:w-[400px] md:h-auto mt-12 object-cover rounded"
                />
                <p className="mt-4 text-[#172A3A] text-[16px] md:text-xl font-medium">
                    {data.slice(0, 1).map((name) => name.alt)}
                </p>
            </div>
            <div className="border-t-2 m-4 flex flex-col items-center mt-12">
                <h3 className="m-6 md:m-8 text-[22px] md:text-[28px] text-[#2C3D4C] font-semibold leading-[34px]">
                    Gallery
                </h3>
                <div>
                    <div className="grid grid-cols-2 mb-2 gap-2">
                        {data.slice(0, 2).map((image, index) => (
                            <img
                                key={index}
                                src={image.img}
                                alt={`walkway-${index + 1}`}
                                className="w-[189px] md:w-[389px] h-[250px] md:h-[450px] border-b-[#343E3D] border-b-4 rounded-md shadow-sm"
                            />
                        ))}
                    </div>
                    <img
                        src={data[2].img}
                        alt="img3"
                        className="w-[394px] h-[250px] md:w-[794px] md:h-[450px] border-b-[#343E3D] border-b-4 rounded-md shadow-sm"
                    />
                    <div className="grid grid-cols-2 mt-2 gap-2">
                        {data.slice(3).map((image, index) => (
                            <img
                                key={index + 3}
                                src={image.img}
                                alt={`walkway-${index + 4}`}
                                className="w-[189px] h-[250px] md:w-[389px]   md:h-[450px] border-b-[#343E3D] border-b-4 rounded-md shadow-sm"
                            />
                        ))}
                    </div>
                </div>
                <Link
                    to="/getquote"
                    className=" w-[340px] md:w-[380px] h-[54px] rounded-lg bg-[#D64550] shadow-md mt-12 mx-auto flex justify-center items-center text-[#FFF] text-[16px] font-semibold"
                >
                    Get Free Quote
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;
