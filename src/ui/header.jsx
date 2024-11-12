import BannerSlider from "../components/bannerSlider";
import Navbar from "./navbar";

const Header = () => {
    return (
        <header className="relative w-full bg-black h-[700px]">
            <Navbar/>
            <BannerSlider/>
        </header>
    );
}
 
export default Header;