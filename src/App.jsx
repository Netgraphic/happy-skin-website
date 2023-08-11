import "./styles.scss";

import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

import About from "./sections/About";
import DidYouKnow from "./sections/DidYouKnow";
import Treatments from "./sections/Treatments";
import Reviews from "./sections/Reviews";
import Faq from "./sections/Faq";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

const initialStylesHeader = {
    background: "bg-transparent",
    textColor: "text-dark-blue hover:text-light-blue",
    button: "bg-dark-blue border-transparent"
};

const App = () => {
    const [headerStyles, setHeaderStyles] = useState(initialStylesHeader);

    const handleScroll = () => {
        const scrollPosition = Math.trunc(window.scrollY);
        const newHeaderStyles = {
            background: "bg-dark-blue",
            textColor: "text-light-blue",
            button: "bg-transparent border-light-blue"
        };

        if (scrollPosition > 0) {
            setHeaderStyles(newHeaderStyles);
        } else {
            setHeaderStyles(initialStylesHeader);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="min-h-screen text-dark-blue">
            <Navbar styles={headerStyles} />

            <Banner />

            <main className="mt-[25rem]">
                <About />

                <Treatments />

                <div className="mt-10 bg-dark-blue">
                    <div className="container mx-auto flex items-center gap-10 py-12 md:max-w-6xl">
                        <div className="text-white">
                            <h4 className="mb-4 font-shippori text-3xl">
                                ¿Necesitas contactarme?
                            </h4>
                            <p className="text-lg">
                                ¿Quieres reservar una hora o preguntarme algo?
                                <br />
                                Agenda tu hora en el sitio web, llámame al +56 9
                                624 267 o envíame un mensaje en Instagram.
                            </p>
                        </div>
                        <div>
                            <button className="mr-5 rounded-3xl bg-light-blue px-4 py-2 font-lato text-dark-blue transition-all duration-200">
                                Agendar cita
                            </button>
                            <button className="rounded-3xl border-2 border-light-blue px-4 py-2 text-white">
                                Hazme una pregunta
                            </button>
                        </div>
                    </div>
                </div>

                <DidYouKnow />

                <Reviews />

                <Faq />
            </main>

            <Footer />
        </div>
    );
};

export default App;
