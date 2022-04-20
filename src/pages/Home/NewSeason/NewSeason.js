import {useTranslation} from 'react-i18next'

const NewSeason = () => {

    const {t} = useTranslation();

    return (
        <section className={'newSeason'}>
            <div className={'newSeason__info'}>
                <h2 className={'newSeason__title'} dangerouslySetInnerHTML={{__html: t("home.newSeason.title")}} />
                <div className={'newSeason__textblock'}>
                    <p className={'newSeason__subtitle'}>{t("home.newSeason.subtitle")}</p>
                    <div className={'newSeason__btns'}>
                        <button className={'newSeason__btn newSeason__arrow'}>
                            <span>
                                <svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0V28M8 28L1 20.8108M8 28L15 20.8108" stroke="#6E9C9F"/></svg>
                            </span>
                        </button>
                        <button className={'newSeason__btn newSeason__open-shop'}>{t("home.newSeason.btn")}</button>
                    </div>
                </div>

            </div>
            <div className={'newSeason__photos'}>
                <img className={'newSeason__img'} src="../Assets/home/season.jpg" alt="a"/>
            </div>
        </section>
    );
};

export default NewSeason;