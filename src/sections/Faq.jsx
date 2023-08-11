import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Faq = () => {
    const title = "Preguntas frecuentes";

    const AccordionItem = ({ header, ...rest }) => (
        <Item
            {...rest}
            header={({ state: { isEnter } }) => (
                <>
                    {header}
                    <FontAwesomeIcon
                        className={`ml-auto transition-transform duration-200 ease-in-out ${
                            isEnter && "rotate-180"
                        }`}
                        icon={isEnter ? faMinus : faPlus}
                    />
                </>
            )}
            className="mb-3 rounded-xl bg-light-blue"
            buttonProps={{
                className:
                    "flex items-center w-full text-left font-shippori text-xl pl-20 py-4 pr-5",
            }}
            contentProps={{
                className: "transition-height duration-200 ease-out pl-20",
            }}
            panelProps={{
                className: "pb-5",
            }}
        />
    );

    return (
        <section
            className="container mx-auto md:max-w-6xl"
            id="faq"
        >
            <h2 className="mb-10 text-center font-shippori text-5xl">
                {title}
            </h2>

            <Accordion transition transitionTimeout={200}>
                <AccordionItem header="¿Son dolorosos los tratamientos?">
                    Quisque eget luctus mi, vehicula mollis lorem. Proin
                    fringilla vel erat quis sodales. Nam ex enim, eleifend
                    venenatis lectus vitae, accumsan auctor mi.
                </AccordionItem>

                <AccordionItem header="¿Cómo me preparo para mi cita?">
                    Suspendisse massa risus, pretium id interdum in, dictum sit
                    amet ante. Fusce vulputate purus sed tempus feugiat.
                </AccordionItem>

                <AccordionItem header="¿Cuánto dura la cita?">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </AccordionItem>
            </Accordion>
        </section>
    );
};

export default Faq;
