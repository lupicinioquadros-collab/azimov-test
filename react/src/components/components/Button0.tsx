import "@/styles/Button0.css";
interface Button0Props {
    Property1?: string;
    id?: string;
    className?: string;
    text_326_271?: string;
    text_334_1504?: string;
    text_326_276?: string;
}
const Button0 = (props: Button0Props) => {
    const {
        Property1,
        id,
        className = "",
        text_326_271,
        text_334_1504,
        text_326_276
    } = props;

    return (
        <div className={`component-326_274 ${className}`} id={id}>
            <div id="326_274" className="Pixso-symbol-326_274">
                {Property1 === "Button primary" && (
                    <div
                        id="326_273"
                        className="Pixso-symbol-326_273 fill-dark-109_952"
                    >
                        <p id="326_271" className="Pixso-paragraph-326_271">
                            {text_326_271 ?? "Label"}
                        </p>
                    </div>
                )}
                {Property1 === "Button tertiary" && (
                    <div
                        id="334_1503"
                        className="Pixso-symbol-334_1503 fill-green-36_159"
                    >
                        <p
                            id="334_1504"
                            className="Pixso-paragraph-334_1504 fill-black-334_1497-paragraph"
                        >
                            {text_334_1504 ?? "Label"}
                        </p>
                    </div>
                )}
                {Property1 === "Button secondary" && (
                    <div id="326_275" className="stroke-wrapper-326_275">
                        <div className="Pixso-symbol-326_275">
                            <p id="326_276" className="Pixso-paragraph-326_276">
                                {text_326_276 ?? "Label"}
                            </p>
                        </div>
                        <div className="stroke-326_275 stroke-dark-109_952"></div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Button0;
