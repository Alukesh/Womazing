import Header from "./Header/header";
import Footer from "./Footer/footer";
import Main from "./Main/Main";
import {useLocation} from "react-router-dom";




const Layout = () => {

    const location = useLocation();

    // console.log(location);


    return (
        <>
            <Header/>
            <Main/>
            {
                location.pathname === '/' ||
                location.pathname === '/shop' ||
                location.pathname === '/brands' ||
                location.pathname === '/contact' ||
                location.pathname === '/cart'
                ? <Footer/> : ''

            }
        </>
    );
};

export default Layout;