const Banner = () => {
    const logo = "Happy Skin CM";
    const slogan = "Lo mejor para tu piel";

    return (
        <div className="absolute top-0 h-[433px] w-full bg-[url('./assets/images/bg-header.jpg')] bg-cover bg-fixed bg-center bg-no-repeat text-center">
            <h1 className="mt-[11rem] font-lato text-6xl font-light uppercase">
                {logo}
            </h1>
            <p className="mt-2 font-shippori text-3xl">{slogan}</p>
        </div>
    );
};

export default Banner;
