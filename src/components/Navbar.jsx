import { Link } from "react-scroll";

const Navbar = ({ styles }) => {
    const { background, textColor, button } = styles;

    return (
        <header
            className={`sticky top-0 z-10 border-b border-b-dark-blue ${background} py-4 transition-all duration-500`}
        >
            <div className="container mx-auto flex items-center justify-between md:max-w-6xl">
                <nav className="text-xl font-semibold [&>a]:transition-all">
                    <Link
                        className={`mr-7 cursor-pointer ${textColor}`}
                        activeClass="active"
                        smooth
                        spy
                        offset={-100}
                        to="about"
                    >
                        Sobre mí
                    </Link>
                    <Link
                        className={`mr-7 cursor-pointer ${textColor}`}
                        activeClass="active"
                        smooth
                        spy
                        offset={-100}
                        to="treatments"
                    >
                        Tratamientos
                    </Link>
                    <Link
                        className={`mr-7 cursor-pointer ${textColor}`}
                        activeClass="active"
                        smooth
                        spy
                        offset={-100}
                        to="did-you-know"
                    >
                        ¿Sabías que?
                    </Link>
                    <Link
                        className={`mr-7 cursor-pointer ${textColor}`}
                        activeClass="active"
                        smooth
                        spy
                        offset={-100}
                        to="reviews"
                    >
                        Opiniones
                    </Link>
                    <Link
                        className={`mr-7 cursor-pointer ${textColor}`}
                        activeClass="active"
                        smooth
                        spy
                        offset={-100}
                        to="faq"
                    >
                        Preguntas frecuentes
                    </Link>
                </nav>

                <button
                    className={`rounded-3xl border-2 border-tr ${button} px-4 py-2 font-lato text-light-blue transition-all duration-200 hover:bg-light-blue hover:text-dark-blue`}
                >
                    Agendar cita
                </button>
            </div>
        </header>
    );
};

export default Navbar;
