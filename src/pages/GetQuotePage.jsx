import QuoteForm from "../components/QuoteForm";
const GetQuotePage = () => {
    return (
        <div className=" flex flex-col w-full md:flex-row  py-6 md:justify-around p-2 md:p-6">
            <div className="w-[90%] md:w-[45%] m-auto flex flex-col justify-center items-center mt-22 pb-12 md:pb-0 md:border-b-0 border-b-2">
                <h3 className="text-3xl md:text-4xl w-[90%] text-[#2C3D4C] font-semibold m-2 mt-8 md:leading-snug">
                    Revitalize Your Outdoors with Expert Care for Your Pool
                    Deck, Walkway, and Driveway
                </h3>
                <p className="text-md m-2 w-[90%] leading-2">
                    Let our dedicated team of professionals alleviate your
                    worries and transform your outdoor spaces. From revitalizing
                    pool decks to enhancing walkways and driveways, our skilled
                    experts ensure a seamless experience.
                    <b> Fill out the form now </b>
                    to experience the difference in quality and care!
                </p>
            </div>
            <div className="w-full md:w-[50%] m-auto flex flex-col mt-8 items-center">
                <h2 className="text-2xl font-medium text-[#2C3D4C]">
                    Fill out the form below
                </h2>
                <QuoteForm />
            </div>
        </div>
    );
};

export default GetQuotePage;
