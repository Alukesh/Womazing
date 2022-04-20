import {Link, NavLink} from "react-router-dom";
import {useTranslation} from 'react-i18next'


const Footer = () => {

    const {t} = useTranslation();

    return (
        <footer className='footer'>
            <div className="container">

                <div className="footer__wrapper">
                    <div className='footer__about-us'>
                        <h1 className='footer__logo'>
                                <span className='footer__logo-icon'>
                    <svg width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5169 22.6493L18.1587 20.9776C17.4207 17.5332 16.0683 14.2964 14.1387 11.3529V8.64058C15.0275 7.97178 15.6035 6.9084 15.6035 5.71289V4.24805C15.6035 3.84355 15.2756 3.51562 14.8711 3.51562H14.1387V0.732422C14.1387 0.32793 13.8107 0 13.4062 0C13.0018 0 12.6738 0.32793 12.6738 0.732422V3.52339C11.3584 3.6001 10.2059 4.29209 9.5 5.31528C8.79409 4.29209 7.6416 3.6001 6.32617 3.52339V0.732422C6.32617 0.32793 5.99824 0 5.59375 0C5.18926 0 4.86133 0.32793 4.86133 0.732422V3.51562H4.1289C3.72441 3.51562 3.39648 3.84355 3.39648 4.24805V5.71289C3.39648 6.9084 3.97246 7.97178 4.86133 8.64058V11.3529C2.93174 14.2964 1.57934 17.5332 0.841256 20.9776L0.483053 22.6493C0.406491 23.0066 0.605074 23.3658 0.948532 23.4909C3.69741 24.4923 6.57451 25 9.5 25C12.4255 25 15.3026 24.4923 18.0515 23.4909C18.3949 23.3658 18.5935 23.0067 18.5169 22.6493ZM12.918 4.98047H14.1387V5.71289C14.1387 6.92446 13.153 7.91016 11.9414 7.91016H10.2324V7.66602C10.2324 6.1852 11.4372 4.98047 12.918 4.98047ZM4.86133 4.98047H6.08203C7.56284 4.98047 8.76758 6.1852 8.76758 7.66602V7.91016H7.05859C5.84702 7.91016 4.86133 6.92446 4.86133 5.71289V4.98047ZM7.05859 9.375H11.9414C12.1922 9.375 12.4371 9.34956 12.6738 9.30132V10.8398H6.32617V9.30132C6.56289 9.34956 6.80781 9.375 7.05859 9.375ZM9.5 23.5352C6.95849 23.5352 4.45561 23.128 2.05073 22.3244L2.27353 21.2846C2.96118 18.0757 4.21054 15.0566 5.98901 12.3047L13.0109 12.3047C14.7894 15.0566 16.0388 18.0757 16.7264 21.2845L16.9492 22.3244C14.5444 23.128 12.0415 23.5352 9.5 23.5352Z" fill="black"/></svg>
                </span>
                            Womazing</h1>
                        <div className='footer__rights'>
                            <a className='footer__rights-link link' href="#">{t("footer.agreements")}</a>
                            <a className='footer__rights-link link' href="#">{t("footer.agreements2")}</a>
                            <a className='footer__rights-link link' href="#">{t("footer.agreements3")}</a>
                        </div>
                    </div>
                    <div className='footer__links'>
                        <ul className='footer__list'>
                            <li className="">
                                <NavLink to="/" className={'footer__link'}>{t("footer.link1")}</NavLink>
                            </li>
                            <li className="">
                                <NavLink to="/shop" className={'footer__link'}>{t("footer.link2")}</NavLink>
                                <div className='footer__category'>
                                    <p className=''>
                                        <a className='footer__category-link link' href="#">{t("footer.clothes.coat")}</a>
                                    </p>
                                    <p className=''>
                                        <a className='footer__category-link link' href="#">{t("footer.clothes.sweatshirts")}</a>
                                    </p>
                                    <p className=''>
                                        <a className='footer__category-link link' href="#">{t("footer.clothes.cardigans")}</a>
                                    </p>
                                    <p className=''>
                                        <a className='footer__category-link link' href="#">{t("footer.clothes.hoodies")}</a>
                                    </p>
                                </div>
                            </li>
                            <li className="">
                                <NavLink to="/brands" className={'footer__link'}>{t("footer.link3")}</NavLink>
                            </li>
                            <li className="">
                                <NavLink to="/contact" className={'footer__link'}>{t("footer.link4")}</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='footer__contacts'>
                        <div className='footer__contacts-link'>
                            <a className={'footer__contacts-link_item'} href="tel:+7 (495) 823-54-12">+7 (495) 823-54-12</a>
                            <a className={'footer__contacts-link_item'} href="#">hello@womazing.com</a>
                        </div>

                        <div className='footer__icons'>
                            <p>inst</p>
                            <p>face</p>
                            <p>twit</p>
                        </div>
                        <img className={'footer__visa'} src="../Assets/images/visa.png" alt="vis"/>
                    </div>



                    {/*<div className='footer__left'>*/}
                    {/*    <div className='footer__links'>*/}


                    {/*    </div>*/}
                    {/*    <div className='footer__politics'>*/}
                    {/*        <div></div>*/}
                    {/*        <div></div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className='footer__right'>*/}

                    {/*</div>*/}
                </div>

            </div>
        </footer>
    );
};

export default Footer;