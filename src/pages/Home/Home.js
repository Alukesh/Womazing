import './home.scss'
// import {useTranslation} from 'react-i18next'
import NewSeason from "./NewSeason/NewSeason";
import Collection from "./Collection/Collection";
import Important from "./Important/Important";


const Home = () => {
// const {t} = useTranslation();
    // console.log(t); t is a func...


    return (
        <div className={'container'}>
            <NewSeason/>
            <Collection/>
            <Important/>



        </div>
    );
};

export default Home;