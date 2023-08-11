import imgAbout from "../assets/images/about-me.png";

const About = () => {
    const title = "Sobre mí";

    return (
        <section
            className="container mx-auto mt-10 flex justify-between md:max-w-6xl"
            id="about"
        >
            <div className="flex w-2/3 items-center rounded-2xl bg-light-blue">
                <div className="px-24 py-10">
                    <h2 className="mb-5 font-shippori text-4xl">{title}</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus convallis neque quis orci ultrices, non pharetra
                        libero tempus. Fusce rutrum ligula vitae dolor
                        sollicitudin vulputate. Suspendisse malesuada erat
                        mauris, in auctor ante hendrerit ut. Aliquam sit amet
                        nunc quis sem porta placerat. Aenean ullamcorper dapibus
                        nunc, a dapibus nibh vehicula vitae.
                    </p>
                </div>
            </div>
            <figure>
                <img src={imgAbout} alt={title} />
            </figure>
        </section>
    );
};

export default About;
