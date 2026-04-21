import "@/styles/Heading.css";
interface HeadingProps {
    Property1?: string;
    id?: string;
    className?: string;
    text_403_278?: string;
}
const Heading = (props: HeadingProps) => {
    const { Property1, id, className = "", text_403_278 } = props;

    return (
        <div className={`component-403_261 ${className}`} id={id}>
            <div id="403_261" className="Pixso-symbol-403_261">
                {Property1 === "Green" && (
                    <div id="403_262" className="Pixso-symbol-403_262">
                        <div
                            id="403_263"
                            className="Pixso-frame-403_263 fill-green-36_159"
                        >
                            <p
                                id="403_264"
                                className="Pixso-paragraph-403_264 text-h2-53_1418"
                            >
                                {"Label"}
                            </p>
                        </div>
                        <div
                            id="403_265"
                            className="Pixso-frame-403_265 fill-green-36_159"
                        >
                            <p
                                id="403_266"
                                className="Pixso-paragraph-403_266 text-h2-53_1418"
                            >
                                {"Label"}
                            </p>
                        </div>
                        <div
                            id="403_267"
                            className="Pixso-frame-403_267 fill-green-36_159"
                        >
                            <p
                                id="403_268"
                                className="Pixso-paragraph-403_268 text-h2-53_1418"
                            >
                                {"Label"}
                            </p>
                        </div>
                    </div>
                )}
                {Property1 === "White" && (
                    <div id="403_269" className="Pixso-symbol-403_269">
                        <div id="403_270" className="Pixso-frame-403_270">
                            <p
                                id="403_271"
                                className="Pixso-paragraph-403_271 text-h2-53_1418"
                            >
                                {"Label"}
                            </p>
                        </div>
                        <div id="403_272" className="Pixso-frame-403_272">
                            <p
                                id="403_273"
                                className="Pixso-paragraph-403_273 text-h2-53_1418"
                            >
                                {"Label"}
                            </p>
                        </div>
                        <div id="403_274" className="Pixso-frame-403_274">
                            <p
                                id="403_275"
                                className="Pixso-paragraph-403_275 text-h2-53_1418"
                            >
                                {"Label"}
                            </p>
                        </div>
                    </div>
                )}
                {Property1 === "Black" && (
                    <div id="403_276" className="Pixso-symbol-403_276">
                        <div
                            id="403_277"
                            className="Pixso-frame-403_277 fill-dark-109_952"
                        >
                            <p
                                id="403_278"
                                className="Pixso-paragraph-403_278 text-h2-53_1418"
                            >
                                {text_403_278 ?? "Label"}
                            </p>
                        </div>
                        <div
                            id="403_279"
                            className="Pixso-frame-403_279 fill-dark-109_952"
                        >
                            <p
                                id="403_280"
                                className="Pixso-paragraph-403_280 text-h2-53_1418"
                            >
                                {"Label"}
                            </p>
                        </div>
                        <div
                            id="403_281"
                            className="Pixso-frame-403_281 fill-dark-109_952"
                        >
                            <p
                                id="403_282"
                                className="Pixso-paragraph-403_282 text-h2-53_1418"
                            >
                                {"Label"}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Heading;
