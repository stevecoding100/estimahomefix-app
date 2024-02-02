import serviceImg from "../data/serviceImgData";
import { Link } from "react-router-dom";

const Services = () => {
    return (
        <div class="border-t-2 w-[90%] p-2 md:p-6">
            <div className="md:text-center md:flex md:flex-col  md:items-center">
                <h3 class="text-3xl md:text-4xl mb-4 text-[#2C3D4C] font-semibold mt-8 md:leading-snug">
                    Transforming Dreams <br className="md:hidden" /> into
                    Concrete Reality
                </h3>
                <p className=" w-[90%] text-md  md:mt-2 md:w-[50%]   md:leading-2">
                    We're not just fixing homes; we're crafting the canvas of
                    your dreams, one estimate at a time. Let's build the future
                    you envision!
                </p>
            </div>
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-2 w-full  mt-12  ">
                {serviceImg.map((service) => (
                    <Link
                        to={service.link}
                        key={service.id}
                        className="flex flex-col justify-center items-center  w-[100%]"
                    >
                        <img
                            src={service.img}
                            alt={service.alt}
                            className="sm:w-[189px] sm:h-[255px]  md:w-[320px] md:h-[100%]   object-cover"
                        />
                        <h4 className="md:text-xl md:m-4 text-lg">
                            {service.alt}
                        </h4>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Services;
