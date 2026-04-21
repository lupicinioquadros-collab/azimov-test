import "@/styles/Heading0.css";
interface Heading0Props {
    Property1?: string;
    id?: string;
    className?: string;
    text_330_292?: string;
    text_334_1523?: string;
    text_334_1542?: string;
    text_333_1381?: string;
    text_334_1533?: string;
}
const Heading0 = (props: Heading0Props) => {
    const {
        Property1,
        id,
        className = "",
        text_330_292,
        text_334_1523,
        text_334_1542,
        text_333_1381,
        text_334_1533
    } = props;

    return (
        <div className={`component-333_1378 ${className}`} id={id}>
            <div id="333_1378" className="Pixso-symbol-333_1378">
                {Property1 === "Green" && (
                    <div id="333_1377" className="Pixso-symbol-333_1377">
                        <div
                            id="330_291"
                            className="Pixso-frame-330_291 fill-green-36_159"
                        >
                            <p
                                id="330_292"
                                className="Pixso-paragraph-330_292 text-h2-53_1418"
                            >
                                {text_330_292 ?? "Label"}
                            </p>
                        </div>
                        <div
                            id="334_1522"
                            className="Pixso-frame-334_1522 fill-green-36_159"
                        >
                            <p
                                id="334_1523"
                                className="Pixso-paragraph-334_1523 text-h2-53_1418"
                            >
                                {text_334_1523 ?? "Label"}
                            </p>
                        </div>
                        <div
                            id="334_1541"
                            className="Pixso-frame-334_1541 fill-green-36_159"
                        >
                            <p
                                id="334_1542"
                                className="Pixso-paragraph-334_1542 text-h2-53_1418"
                            >
                                {text_334_1542 ?? "Label"}
                            </p>
                        </div>
                    </div>
                )}
                {Property1 === "White" && (
                    <div id="333_1379" className="Pixso-symbol-333_1379">
                        <div id="333_1380" className="Pixso-frame-333_1380">
                            <p
                                id="333_1381"
                                className="Pixso-paragraph-333_1381 text-h2-53_1418"
                            >
                                {text_333_1381 ?? "Label"}
                            </p>
                        </div>
                        <div id="334_1532" className="Pixso-frame-334_1532">
                            <p
                                id="334_1533"
                                className="Pixso-paragraph-334_1533 text-h2-53_1418"
                            >
                                {text_334_1533 ?? "Label"}
                            </p>
                        </div>
                        <div id="334_1555" className="Pixso-frame-334_1555">
                            <p
                                id="334_1556"
                                className="Pixso-paragraph-334_1556 text-h2-53_1418"
                            >
                                {"Label"}
                            </p>
                        </div>
                    </div>
                )}
                {Property1 === "Black" && (
                    <div id="333_1382" className="Pixso-symbol-333_1382">
                        <div
                            id="333_1383"
                            className="Pixso-frame-333_1383 fill-dark-109_952"
                        >
                            <p
                                id="333_1384"
                                className="Pixso-paragraph-333_1384 text-h2-53_1418"
                            >
                                {"Label"}
                            </p>
                        </div>
                        <div
                            id="334_1534"
                            className="Pixso-frame-334_1534 fill-dark-109_952"
                        >
                            <p
                                id="334_1535"
                                className="Pixso-paragraph-334_1535 text-h2-53_1418"
                            >
                                {"Label"}
                            </p>
                        </div>
                        <div
                            id="334_1557"
                            className="Pixso-frame-334_1557 fill-dark-109_952"
                        >
                            <p
                                id="334_1558"
                                className="Pixso-paragraph-334_1558 text-h2-53_1418"
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
export default Heading0;
