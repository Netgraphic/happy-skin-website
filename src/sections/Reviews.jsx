import { Carousel } from "react-responsive-carousel";
import IconReview from "../components/icons/IconReview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Reviews = () => {
    const title = "Opiniones de clientes";

    return (
        <section
            className="container mx-auto mb-20 mt-10 md:max-w-6xl"
            id="reviews"
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
                    <div className="w-2/12">
                        <IconReview />
                    </div>
                    <div className="flex w-10/12 items-center rounded-3xl bg-light-blue px-20 py-10 text-left">
                        <div>
                            <span className="mb-2 mr-2 inline-block font-shippori text-xl text-dark-blue">
                                Anna Myers
                            </span>
                            <FontAwesomeIcon
                                icon={faStar}
                                className="mr-1 text-2xl"
                                color="#1E3347"
                            />
                            <FontAwesomeIcon
                                icon={faStar}
                                className="mr-1 text-2xl"
                                color="#1E3347"
                            />
                            <FontAwesomeIcon
                                icon={faStar}
                                className="mr-1 text-2xl"
                                color="#1E3347"
                            />
                            <FontAwesomeIcon
                                icon={faStar}
                                className="mr-1 text-2xl"
                                color="#1E3347"
                            />
                            <FontAwesomeIcon
                                icon={faStar}
                                className="mr-1 text-2xl opacity-50"
                                color="#1E3347"
                            />
                            <q className="block">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed non diam nulla. Nunc ex
                                odio, vestibulum sed aliquet sed, maximus nec
                                sapien.
                            </q>
                        </div>
                    </div>
                </article>

                <article className="container mx-auto flex justify-between gap-6 md:max-w-5xl">
                    <div className="w-2/12">
                        <IconReview />
                    </div>
                    <div className="flex w-10/12 items-center rounded-3xl bg-light-blue px-20 py-10 text-left">
                        <div>
                            <span className="mb-2 mr-2 inline-block font-shippori text-xl text-dark-blue">
                                Anna Myers
                            </span>
                            <FontAwesomeIcon
                                icon={faStar}
                                className="mr-1 text-2xl"
                                color="#1E3347"
                            />
                            <FontAwesomeIcon
                                icon={faStar}
                                className="mr-1 text-2xl"
                                color="#1E3347"
                            />
                            <FontAwesomeIcon
                                icon={faStar}
                                className="mr-1 text-2xl"
                                color="#1E3347"
                            />
                            <FontAwesomeIcon
                                icon={faStar}
                                className="mr-1 text-2xl"
                                color="#1E3347"
                            />
                            <FontAwesomeIcon
                                icon={faStar}
                                className="mr-1 text-2xl"
                                color="#1E3347"
                            />
                            <q className="block">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed non diam nulla. Nunc ex
                                odio, vestibulum sed aliquet sed, maximus nec
                                sapien.
                            </q>
                        </div>
                    </div>
                </article>

                <article className="container mx-auto flex justify-between gap-6 md:max-w-5xl">
                    <div className="w-2/12">
                        <IconReview />
                    </div>
                    <div className="flex w-10/12 items-center rounded-3xl bg-light-blue px-20 py-10 text-left">
                        <div>
                            <span className="mb-2 mr-2 inline-block font-shippori text-xl text-dark-blue">
                                Anna Myers
                            </span>
                            <FontAwesomeIcon
                                icon={faStar}
                                className="mr-1 text-2xl"
                                color="#1E3347"
                            />
                            <FontAwesomeIcon
                                icon={faStar}
                                className="mr-1 text-2xl"
                                color="#1E3347"
                            />
                            <FontAwesomeIcon
                                icon={faStar}
                                className="mr-1 text-2xl"
                                color="#1E3347"
                            />
                            <FontAwesomeIcon
                                icon={faStar}
                                className="mr-1 text-2xl"
                                color="#1E3347"
                            />
                            <FontAwesomeIcon
                                icon={faStar}
                                className="mr-1 text-2xl opacity-50"
                                color="#1E3347"
                            />
                            <q className="block">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed non diam nulla. Nunc ex
                                odio, vestibulum sed aliquet sed, maximus nec
                                sapien.
                            </q>
                        </div>
                    </div>
                </article>
            </Carousel>

            <div className="mt-24 w-full text-center">
                <button className="rounded-3xl bg-dark-blue px-4 py-2 font-lato text-white transition-all duration-200 hover:bg-white hover:text-dark-blue">
                    Dejar opinión
                </button>
            </div>
        </section>
    );
};

export default Reviews;
