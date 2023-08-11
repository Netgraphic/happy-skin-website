import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-scroll";

const Footer = () => {
    return (
        <footer className="mt-10 font-shippori text-light-blue">
            <div className="bg-dark-blue">
                <div className="container mx-auto flex justify-between pb-10 pt-4 md:max-w-6xl">
                    <section className="text-lg">
                        <h4 className="mb-5 text-2xl">Contáctame</h4>
                        <ul>
                            <li className="mb-5 flex items-center">
                                <FontAwesomeIcon
                                    icon={faPhone}
                                    className="mr-3 text-2xl"
                                />
                                +56 9 624 267
                            </li>
                            <li className="mb-5">
                                <a
                                    href="https://www.instagram.com/happy_skin_cm/"
                                    target="_blank"
                                    className="flex items-center"
                                >
                                    <FontAwesomeIcon
                                        icon={faInstagram}
                                        className="mr-3 text-3xl"
                                    />
                                    happy_skin_cm
                                </a>
                            </li>
                            <li className="flex items-center">
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className="mr-3 text-2xl"
                                />
                                happyskin@gmail.com
                            </li>
                        </ul>

                        <button className="mt-6 rounded-3xl border-2 border-light-blue px-4 py-2 text-white">
                            Agendar cita
                        </button>
                    </section>

                    <section className="text-lg">
                        <h4 className="mb-5 text-2xl">Tratamientos</h4>
                        <ul>
                            <li className="mb-3 flex items-center">
                                Plasma rico en plaquetas
                            </li>
                            <li className="mb-3 flex items-center">
                                Roler facial y Gua Sha
                            </li>
                            <li className="mb-3 flex items-center">
                                Yoga facial
                            </li>
                            <li className="flex items-center">
                                Limpieza facial profunda
                            </li>
                        </ul>
                    </section>

                    <section className="text-lg">
                        <h4 className="mb-5 text-2xl">Navegación</h4>
                        <ul>
                            <li className="mb-3 flex items-center">
                                <Link
                                    to="about"
                                    className="cursor-pointer"
                                    smooth
                                    offset={-100}
                                >
                                    Sobre mí
                                </Link>
                            </li>
                            <li className="mb-3 flex items-center">
                                <Link
                                    to="treatments"
                                    className="cursor-pointer"
                                    smooth
                                    offset={-100}
                                >
                                    ¿Qué tratamientos ofrezco?
                                </Link>
                            </li>
                            <li className="mb-3 flex items-center">
                                <Link
                                    to="did-you-know"
                                    className="cursor-pointer"
                                    smooth
                                    offset={-100}
                                >
                                    ¿Sabías que?
                                </Link>
                            </li>
                            <li className="mb-3 flex items-center">
                                <Link
                                    to="reviews"
                                    className="cursor-pointer"
                                    smooth
                                    offset={-100}
                                >
                                    Opiniones de clientes
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <Link
                                    to="faq"
                                    className="cursor-pointer"
                                    smooth
                                    offset={-100}
                                >
                                    Preguntas frecuentes
                                </Link>
                            </li>
                        </ul>
                    </section>
                </div>

                <address>Website design by Natalia Botko and developed by Diego Moris</address>
            </div>
        </footer>
    );
};

export default Footer;
