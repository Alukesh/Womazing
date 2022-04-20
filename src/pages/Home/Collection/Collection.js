import {useTranslation} from 'react-i18next'
import CollectionCard from "./CollectionCard";

const Collection = () => {

    const {t} = useTranslation();

    return (
        <section className={'collection'}>
            <h2 className={'collection__title'}>{t("home.collection.title")}</h2>
            <div className={'collection__row'}>
                <CollectionCard img={'card1.jpg'} title={`${t("home.collection.text")}`} price={'$229'} newPrice={'$129'}/>
                <CollectionCard img={'card2.jpg'} title={'Купальник Glow'} price={'$129'}/>
                <CollectionCard img={'card3.jpg'} arrow={'active'} title={`Свитшот Sweet Shot`} price={'$129'}/>
            </div>
            <button className={'collection__btn'}>{t("home.collection.btn")}</button>
        </section>
        // <div className="collection__card">
        //     <div className="collection__hover">
        //         <img className={'collection__img'} src="./Assets/home/card3.jpg" alt=""/>
        //         <span className={'collection__arrow active'}>
        //                           <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 12H31M31 12L20.186 1M31 12L20.186 23" stroke="white"/></svg>
        //                         </span>
        //     </div>
        //     <h3 className={'collection__card-title'}>Свитшот Sweet Shot</h3>
        //     <p className={'collection__price'}><span>$129</span></p>
        // </div>
    );
};

export default Collection;