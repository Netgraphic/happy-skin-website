import imgPrp from "../assets/images/prp.jpg";
import imgGuaSha from "../assets/images/gua-sha.jpg";
import imgYogaFacial from "../assets/images/yoga-facial.jpg";
import imgSkinCare from "../assets/images/limpieza-facial.jpg";

const Treatments = () => {
    const title = "¿Qué tratamientos ofrezco?";

    return (
        <section
            className="container mx-auto mt-10 md:max-w-6xl"
            id="treatments"
        >
            <h2 className="mb-10 text-center font-shippori text-5xl">
                {title}
            </h2>

            <div className="flex flex-wrap justify-between">
                <article className="relative mb-7 w-[49%] rounded-2xl bg-light-blue p-10">
                    <img src={imgPrp} alt="Plasma rico en plaquetas" />
                    <h3 className="mb-4 mt-5 text-center font-shippori text-3xl">
                        Plasma rico en plaquetas
                    </h3>
                    <p className="mb-20 text-center">
                        Mejora aspecto y calidad de la piel. Atenúa lineas de
                        expresión y manchas. Tratamiento para alopecia y
                        estrías.
                    </p>
                    <div className="absolute bottom-5 left-[50%] mb-3 flex translate-x-[-50%] justify-center gap-10">
                        <div className="text-3xl">$75.000</div>
                        <button className="rounded-3xl bg-dark-blue px-4 py-2 font-lato text-white transition-all duration-200 hover:bg-white hover:text-dark-blue">
                            Agendar cita
                        </button>
                    </div>
                </article>

                <article className="relative mb-7 w-[49%] rounded-2xl bg-light-blue p-10">
                    <img src={imgGuaSha} alt="Plasma rico en plaquetas" />
                    <h3 className="mb-4 mt-5 text-center font-shippori text-3xl">
                        Roler facial y Gua Sha
                    </h3>
                    <p className="mb-20 text-center">
                        Ambas puedes encontrarlas en distintos tipos de piedras
                        como el cuarzo rosa, jade y amatista. Puedes usarlos
                        como complemento de tu rutina de skincare y en conjunto
                        proporcionan un drenaje linfático facial mucho más
                        efectivo.
                    </p>
                    <div className="absolute bottom-5 left-[50%] mb-3 flex translate-x-[-50%] justify-center gap-10">
                        <div className="text-3xl">$75.000</div>
                        <button className="rounded-3xl bg-dark-blue px-4 py-2 font-lato text-white transition-all duration-200 hover:bg-white hover:text-dark-blue">
                            Agendar cita
                        </button>
                    </div>
                </article>

                <article className="relative mb-7 w-[49%] rounded-2xl bg-light-blue p-10">
                    <img src={imgYogaFacial} alt="Plasma rico en plaquetas" />
                    <h3 className="mb-4 mt-5 text-center font-shippori text-3xl">
                        Yoga facial
                    </h3>
                    <p className="mb-20 text-center">
                        Sesión 30 minutos incluye masaje y drenaje linfático
                        facial mas entrega de pauta de ejercicios para realizar
                        en casa.
                    </p>
                    <div className="absolute bottom-5 left-[50%] mb-3 flex translate-x-[-50%] justify-center gap-10">
                        <div className="text-3xl">$75.000</div>
                        <button className="rounded-3xl bg-dark-blue px-4 py-2 font-lato text-white transition-all duration-200 hover:bg-white hover:text-dark-blue">
                            Agendar cita
                        </button>
                    </div>
                </article>

                <article className="relative mb-7 w-[49%] rounded-2xl bg-light-blue p-10">
                    <img src={imgSkinCare} alt="Plasma rico en plaquetas" />
                    <h3 className="mb-4 mt-5 text-center font-shippori text-3xl">
                        Limpieza facial profunda
                    </h3>
                    <p className="mb-20 text-center">
                        Dentro de los beneficios de la limpieza facial profunda
                        se encuentran: suavizar la piel, aumentar la luminosidad
                        del rostro, regular el PH de la piel y la producción de
                        grasa, eliminar impurezas y células muertas, retrasar el
                        envejecimiento y la aparición de arrugas, disminuir el
                        acné y puntos negros, estimular la absorción de los
                        productos de skin care.
                    </p>
                    <div className="absolute bottom-5 left-[50%] mb-3 flex translate-x-[-50%] justify-center gap-10">
                        <div className="text-3xl">$75.000</div>
                        <button className="rounded-3xl bg-dark-blue px-4 py-2 font-lato text-white transition-all duration-200 hover:bg-white hover:text-dark-blue">
                            Agendar cita
                        </button>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Treatments;
