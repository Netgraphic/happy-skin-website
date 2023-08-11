import imgDYK1 from "../assets/images/did-you-know-1.png";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const DidYouKnow = () => {
    const title = "¿Sabías que?";

    return (
        <section
            className="container mx-auto mt-10 mb-36 md:max-w-6xl"
            id="did-you-know"
        >
            <h2 className="mb-10 text-center font-shippori text-5xl">
                {title}
            </h2>

            <Carousel
                className="mx-auto"
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={6000}
            >
                <article className="container mx-auto flex justify-between gap-6 md:max-w-5xl">
                    <div className="w-1/4">
                        <img
                            src={imgDYK1}
                            alt="Beneficios del roller facial y gua sha"
                        />
                    </div>
                    <div className="flex w-3/4 items-center rounded-3xl bg-light-blue px-20 py-10 text-left">
                        <div className="m-auto">
                            <h4 className="mb-5 font-shippori text-3xl">
                                Beneficios del roller facial y gua sha
                            </h4>

                            <div className="mb-1 block text-xl uppercase">
                                Roller facial
                            </div>
                            <ul className="mb-5 list-disc pl-4">
                                <li>
                                    Ayuda a eliminar toxinas a través de un
                                    drenaje linfático suave.
                                </li>
                                <li>Estimula la circulación.</li>
                                <li>
                                    Reduce inflamaciones especialmente en
                                    contorno de ojos.
                                </li>
                            </ul>

                            <div className="mb-1 block text-xl uppercase">
                                Gua sha
                            </div>
                            <ul className="list-disc pl-4">
                                <li>
                                    Proporciona un drenaje linfático más
                                    intenso.
                                </li>
                                <li>Estimula la circulación.</li>
                                <li>
                                    Reduce las líneas de expresión y aumenta la
                                    elasticidad del rostro.
                                </li>
                            </ul>
                        </div>
                    </div>
                </article>

                <article className="container mx-auto flex justify-between gap-6 md:max-w-5xl">
                    <div className="w-1/4">
                        <img
                            src={imgDYK1}
                            alt="Beneficios del roller facial y gua sha"
                        />
                    </div>
                    <div className="flex w-3/4 items-center rounded-3xl bg-light-blue px-20 py-10 text-left">
                        <div className="m-auto">
                            <h4 className="mb-5 font-shippori text-3xl">
                                Beneficios del roller facial y gua sha
                            </h4>

                            <div className="mb-1 block text-xl uppercase">
                                Roller facial
                            </div>
                            <ul className="mb-5 list-disc pl-4">
                                <li>
                                    Ayuda a eliminar toxinas a través de un
                                    drenaje linfático suave.
                                </li>
                                <li>Estimula la circulación.</li>
                                <li>
                                    Reduce inflamaciones especialmente en
                                    contorno de ojos.
                                </li>
                            </ul>

                            <div className="mb-1 block text-xl uppercase">
                                Gua sha
                            </div>
                            <ul className="list-disc pl-4">
                                <li>
                                    Proporciona un drenaje linfático más
                                    intenso.
                                </li>
                                <li>Estimula la circulación.</li>
                                <li>
                                    Reduce las líneas de expresión y aumenta la
                                    elasticidad del rostro.
                                </li>
                            </ul>
                        </div>
                    </div>
                </article>
            </Carousel>
        </section>
    );
};

export default DidYouKnow;
