import {useTranslation} from "react-i18next";


const Important = () => {
    const {t} = useTranslation();

    return (
        <section className={'important'}>
            <h2 className={'important__title'}>{t("home.important.title")}</h2>
            <div className={'important__row'}>
                <div className="important__card">
                    <img className={'important__card-img'} src="./Assets/home/important1.png" alt=""/>
                    <h3 className={'important__card-title'}>{t("home.important.cardTitle.quality")}</h3>
                    <p className={'important__card-text'}>{t("home.important.cardText.qualityText")}</p>
                </div>
                <div className="important__card">
                    <img className={'important__card-img'} src="./Assets/home/important2.png" alt=""/>
                    <h3 className={'important__card-title'}>{t("home.important.cardTitle.speed")}</h3>
                    <p className={'important__card-text'}>{t("home.important.cardText.speedText")}</p>
                </div>
                <div className="important__card">
                    <img className={'important__card-img'} src="./Assets/home/important3.png" alt=""/>
                    <h3 className={'important__card-title'}>{t("home.important.cardTitle.responsibility")}</h3>
                    <p className={'important__card-text'}>{t("home.important.cardText.responsibilityText")}</p>
                </div>

            </div>
        </section>
    );
};

export default Important;