import {Route, Routes} from "react-router-dom";
import Home from "../../pages/Home/Home";
import Shop from "../../pages/Shop/Shop";
import Brands from "../../pages/Brands/Brands";
import Contact from "../../pages/Contact/Contact";
import Wrong from "../../pages/Wrong/Wrong";
import Cart from "../../pages/Cart/Cart";

const Main = () => {


    return (
        <main className={'main'}>
            <div className="container">
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route  path='/shop' element={<Shop/>}/>
                    <Route path='/brands' element={<Brands/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='*' element={<Wrong/>}/>
                </Routes>
            </div>
        </main>
    );
};

export default Main;