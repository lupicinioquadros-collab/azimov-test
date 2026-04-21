import "@/styles/Link.css";
interface LinkProps {
    Property1?: string;
    id?: string;
    className?: string;
}
const Link = (props: LinkProps) => {
    const { Property1, id, className = "" } = props;

    return (
        <div className={`component-334_1476 ${className}`} id={id}>
            <div id="334_1476" className="Pixso-symbol-334_1476">
                {Property1 === "White" && (
                    <div id="334_1475" className="Pixso-symbol-334_1475">
                        <div id="334_1472" className="Pixso-group-334_1472">
                            <div
                                id="334_1473"
                                className="Pixso-vector-334_1473"
                            ></div>
                            <div
                                id="334_1474"
                                className="Pixso-vector-334_1474"
                            ></div>
                        </div>
                        <p id="334_1471" className="Pixso-paragraph-334_1471">
                            {"Label"}
                        </p>
                    </div>
                )}
                {Property1 === "White 2" && (
                    <div id="334_1487" className="Pixso-symbol-334_1487">
                        <div id="334_1488" className="Pixso-group-334_1488">
                            <div
                                id="334_1489"
                                className="Pixso-vector-334_1489"
                            ></div>
                            <div
                                id="334_1490"
                                className="Pixso-vector-334_1490"
                            ></div>
                        </div>
                        <p id="334_1491" className="Pixso-paragraph-334_1491">
                            {"Label"}
                        </p>
                    </div>
                )}
                {Property1 === "Black" && (
                    <div id="334_1477" className="Pixso-symbol-334_1477">
                        <div id="334_1478" className="Pixso-group-334_1478">
                            <div
                                id="334_1479"
                                className="Pixso-vector-334_1479"
                            ></div>
                            <div
                                id="334_1480"
                                className="Pixso-vector-334_1480"
                            ></div>
                        </div>
                        <p
                            id="334_1481"
                            className="Pixso-paragraph-334_1481 fill-black-334_1497-paragraph"
                        >
                            {"Label"}
                        </p>
                    </div>
                )}
                {Property1 === "Black 2" && (
                    <div id="334_1482" className="Pixso-symbol-334_1482">
                        <div id="334_1483" className="Pixso-group-334_1483">
                            <div
                                id="334_1484"
                                className="Pixso-vector-334_1484"
                            ></div>
                            <div
                                id="334_1485"
                                className="Pixso-vector-334_1485"
                            ></div>
                        </div>
                        <p
                            id="334_1486"
                            className="Pixso-paragraph-334_1486 fill-black-334_1497-paragraph"
                        >
                            {"Label"}
                        </p>
                    </div>
                )}
                {Property1 === "Green" && (
                    <div id="334_1492" className="Pixso-symbol-334_1492">
                        <div id="334_1493" className="Pixso-group-334_1493">
                            <div
                                id="334_1494"
                                className="Pixso-vector-334_1494"
                            ></div>
                            <div
                                id="334_1495"
                                className="Pixso-vector-334_1495"
                            ></div>
                        </div>
                        <p
                            id="334_1496"
                            className="Pixso-paragraph-334_1496 fill-black-334_1497-paragraph"
                        >
                            {"Label"}
                        </p>
                    </div>
                )}
                {Property1 === "Green 2" && (
                    <div id="334_1498" className="Pixso-symbol-334_1498">
                        <div id="334_1499" className="Pixso-group-334_1499">
                            <div
                                id="334_1500"
                                className="Pixso-vector-334_1500"
                            ></div>
                            <div
                                id="334_1501"
                                className="Pixso-vector-334_1501"
                            ></div>
                        </div>
                        <p id="334_1502" className="Pixso-paragraph-334_1502">
                            {"Label"}
                        </p>
                    </div>
                )}
                {Property1 === "Simple green" && (
                    <div id="337_1778" className="Pixso-symbol-337_1778">
                        <p
                            id="337_1782"
                            className="Pixso-paragraph-337_1782 fill-green-36_159-paragraph"
                        >
                            {"Label"}
                        </p>
                        <div id="337_1779" className="Pixso-group-337_1779">
                            <div
                                id="337_1781"
                                className="Pixso-vector-337_1781"
                            ></div>
                        </div>
                    </div>
                )}
                {Property1 === "Simple white" && (
                    <div id="337_1786" className="Pixso-symbol-337_1786">
                        <p id="337_1787" className="Pixso-paragraph-337_1787">
                            {"Label"}
                        </p>
                        <div id="337_1788" className="Pixso-group-337_1788">
                            <div
                                id="337_1789"
                                className="Pixso-vector-337_1789"
                            ></div>
                        </div>
                    </div>
                )}
                {Property1 === "Simple black" && (
                    <div id="337_1790" className="Pixso-symbol-337_1790">
                        <p
                            id="337_1791"
                            className="Pixso-paragraph-337_1791 fill-black-334_1497-paragraph"
                        >
                            {"Label"}
                        </p>
                        <div id="337_1792" className="Pixso-group-337_1792">
                            <div
                                id="337_1793"
                                className="Pixso-vector-337_1793"
                            ></div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Link;
