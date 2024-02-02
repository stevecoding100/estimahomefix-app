import HeroVideo from "../components/HeroVideo";
import Services from "../components/Services";
const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <HeroVideo />
            <Services />
        </div>
    );
};

export default Home;
