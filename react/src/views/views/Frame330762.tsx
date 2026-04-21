import Heading0 from "@/components/Heading0";
import { scrollToInContainer } from "@/utils/scroll";
import { withStopPropagation } from "@/utils/utils";
import { useNavigate } from "react-router";
import { getPathByGuid } from "@/router/routes";
import Button0 from "@/components/Button0";
import "@/styles/Frame330762.css";
const Frame330762 = () => {
    const navigate = useNavigate();

    const click_330_1201 = () => {
        const target = document.querySelector(".scroll-337_1757");
        const scrollContainer = document.querySelector(".scroll-container");
        if (!target || !scrollContainer) return;
        scrollToInContainer(
            scrollContainer as HTMLElement,
            target as HTMLElement,
            {
                duration: 300,
                offset: { x: 0, y: 0 },
                easing: [0, 0, 1, 1]
            }
        );
    };

    const click_330_1202 = () => {
        navigate(getPathByGuid("812:150"), {
            state: {
                from: "330:1202",
                et: "c"
            }
        });
    };

    return (
        <div className="scroll-container">
            <div id="330_762" className="Pixso-frame-330_762">
                <div id="333_1374" className="Pixso-frame-333_1374">
                    <div className="frame-content-333_1374">
                        <Heading0
                            id="333_1385"
                            className="Pixso-instance-333_1385"
                            text_330_292={`Services`}
                            Property1={"Green"}
                        ></Heading0>
                        <p
                            id="333_1373"
                            className="Pixso-paragraph-333_1373 text-p-35_146"
                        >
                            {
                                "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
                            }
                        </p>
                    </div>
                </div>
                <div id="337_1756" className="Pixso-frame-337_1756">
                    <div className="frame-content-337_1756">
                        <Heading0
                            id="337_1757"
                            className="Pixso-instance-337_1757 scroll-337_1757"
                            text_330_292={`Case Studies`}
                            Property1={"Green"}
                        ></Heading0>
                        <p
                            id="337_1758"
                            className="Pixso-paragraph-337_1758 text-p-35_146"
                        >
                            {
                                "Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
                            }
                        </p>
                    </div>
                </div>
                <div id="338_147" className="Pixso-frame-338_147">
                    <div className="frame-content-338_147">
                        <Heading0
                            id="338_148"
                            className="Pixso-instance-338_148"
                            text_330_292={`Our Working Process `}
                            Property1={"Green"}
                        ></Heading0>
                        <p
                            id="338_149"
                            className="Pixso-paragraph-338_149 text-p-35_146"
                        >
                            {
                                "Step-by-Step Guide to Achieving Your Business Goals"
                            }
                        </p>
                    </div>
                </div>
                <div id="339_249" className="Pixso-frame-339_249">
                    <div className="frame-content-339_249">
                        <Heading0
                            id="339_250"
                            className="Pixso-instance-339_250"
                            text_330_292={`Team`}
                            Property1={"Green"}
                        ></Heading0>
                        <p
                            id="339_251"
                            className="Pixso-paragraph-339_251 text-p-35_146"
                        >
                            {
                                "Meet the skilled and experienced team behind our successful digital marketing strategies"
                            }
                        </p>
                    </div>
                </div>
                <div id="341_497" className="Pixso-frame-341_497">
                    <div className="frame-content-341_497">
                        <Heading0
                            id="341_498"
                            className="Pixso-instance-341_498"
                            text_330_292={`Testimonials`}
                            Property1={"Green"}
                        ></Heading0>
                        <p
                            id="341_499"
                            className="Pixso-paragraph-341_499 text-p-35_146"
                        >
                            {
                                "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
                            }
                        </p>
                    </div>
                </div>
                <div id="341_568" className="Pixso-frame-341_568">
                    <div className="frame-content-341_568">
                        <Heading0
                            id="341_569"
                            className="Pixso-instance-341_569"
                            text_330_292={`Contact Us`}
                            Property1={"Green"}
                        ></Heading0>
                        <p
                            id="341_570"
                            className="Pixso-paragraph-341_570 text-p-35_146"
                        >
                            {
                                "Connect with Us: Let's Discuss Your Digital Marketing Needs"
                            }
                        </p>
                    </div>
                </div>
                <div id="333_1290" className="Pixso-frame-333_1290">
                    <div className="frame-content-333_1290">
                        <div id="331_1207" className="Pixso-frame-331_1207">
                            <div className="frame-content-331_1207">
                                <div
                                    id="330_1193"
                                    className="Pixso-frame-330_1193"
                                >
                                    <div
                                        id="330_1194"
                                        className="Pixso-frame-330_1194"
                                    >
                                        <div
                                            id="12_123"
                                            className="Pixso-vector-12_123"
                                        ></div>
                                        <div
                                            id="12_125"
                                            className="Pixso-vector-12_125"
                                        ></div>
                                    </div>
                                </div>
                                <div
                                    id="330_1203"
                                    className="Pixso-frame-330_1203"
                                >
                                    <p
                                        id="330_1201"
                                        className="Pixso-paragraph-330_1201"
                                        onClick={withStopPropagation(
                                            click_330_1201
                                        )}
                                    >
                                        {"Use Cases"}
                                    </p>
                                    <p
                                        id="330_1202"
                                        className="Pixso-paragraph-330_1202"
                                        onClick={withStopPropagation(
                                            click_330_1202
                                        )}
                                    >
                                        {"Pricing"}
                                    </p>
                                    <p
                                        id="330_1199"
                                        className="Pixso-paragraph-330_1199"
                                    >
                                        {"Blog"}
                                    </p>
                                    <Button0
                                        id="330_1204"
                                        className="Pixso-instance-330_1204"
                                        text_326_276={`Request a quote`}
                                        Property1={"Button secondary"}
                                    ></Button0>
                                </div>
                            </div>
                        </div>
                        <div id="332_1208" className="Pixso-frame-332_1208">
                            <div className="frame-content-332_1208">
                                <div
                                    id="332_1226"
                                    className="Pixso-frame-332_1226"
                                >
                                    <p
                                        id="332_1222"
                                        className="Pixso-paragraph-332_1222 text-h1-53_1417"
                                    >
                                        {
                                            "Navigating the digital landscape for success"
                                        }
                                    </p>
                                    <p
                                        id="332_1223"
                                        className="Pixso-paragraph-332_1223"
                                    >
                                        {
                                            "Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation."
                                        }
                                    </p>
                                    <Button0
                                        id="332_1224"
                                        className="Pixso-instance-332_1224"
                                        text_326_271={`Book a consultation`}
                                        Property1={"Button primary"}
                                    ></Button0>
                                </div>
                                <div
                                    id="332_1228"
                                    className="Pixso-group-332_1228"
                                >
                                    <div
                                        id="332_1229"
                                        className="Pixso-vector-332_1229"
                                    ></div>
                                    <div
                                        id="332_1231"
                                        className="Pixso-vector-332_1231"
                                    ></div>
                                    <div
                                        id="332_1233"
                                        className="Pixso-vector-332_1233"
                                    ></div>
                                    <div
                                        id="332_1234"
                                        className="Pixso-vector-332_1234"
                                    ></div>
                                    <div
                                        id="332_1235"
                                        className="Pixso-vector-332_1235"
                                    ></div>
                                    <div
                                        id="332_1236"
                                        className="Pixso-vector-332_1236"
                                    ></div>
                                    <div
                                        id="332_1237"
                                        className="Pixso-vector-332_1237"
                                    ></div>
                                    <div
                                        id="332_1238"
                                        className="Pixso-vector-332_1238"
                                    ></div>
                                    <div
                                        id="332_1239"
                                        className="Pixso-group-332_1239"
                                    >
                                        <div
                                            id="332_1240"
                                            className="Pixso-group-332_1240"
                                        >
                                            <div
                                                id="332_1241"
                                                className="Pixso-group-332_1241"
                                            >
                                                <div
                                                    id="332_1242"
                                                    className="Pixso-vector-332_1242"
                                                ></div>
                                                <div
                                                    id="332_1245"
                                                    className="Pixso-vector-332_1245"
                                                ></div>
                                                <div
                                                    id="332_1246"
                                                    className="Pixso-vector-332_1246"
                                                ></div>
                                                <div
                                                    id="332_1249"
                                                    className="Pixso-vector-332_1249"
                                                ></div>
                                                <div
                                                    id="332_1250"
                                                    className="Pixso-vector-332_1250"
                                                ></div>
                                                <div
                                                    id="332_1253"
                                                    className="Pixso-vector-332_1253"
                                                ></div>
                                                <div
                                                    id="332_1254"
                                                    className="Pixso-vector-332_1254"
                                                ></div>
                                                <div
                                                    id="332_1255"
                                                    className="Pixso-vector-332_1255"
                                                ></div>
                                                <div
                                                    id="332_1258"
                                                    className="Pixso-vector-332_1258"
                                                ></div>
                                                <div
                                                    id="332_1259"
                                                    className="Pixso-vector-332_1259"
                                                ></div>
                                                <div
                                                    id="332_1262"
                                                    className="Pixso-vector-332_1262"
                                                ></div>
                                                <div
                                                    id="332_1265"
                                                    className="Pixso-vector-332_1265"
                                                ></div>
                                            </div>
                                        </div>
                                        <div
                                            id="332_1268"
                                            className="Pixso-group-332_1268"
                                        >
                                            <div
                                                id="332_1269"
                                                className="Pixso-group-332_1269"
                                            >
                                                <div
                                                    id="332_1270"
                                                    className="Pixso-vector-332_1270"
                                                ></div>
                                                <div
                                                    id="332_1271"
                                                    className="Pixso-vector-332_1271"
                                                ></div>
                                            </div>
                                            <div
                                                id="332_1273"
                                                className="Pixso-group-332_1273"
                                            >
                                                <div
                                                    id="332_1274"
                                                    className="Pixso-vector-332_1274"
                                                ></div>
                                                <div
                                                    id="332_1277"
                                                    className="Pixso-vector-332_1277"
                                                ></div>
                                            </div>
                                            <div
                                                id="332_1278"
                                                className="Pixso-vector-332_1278"
                                            ></div>
                                            <div
                                                id="332_1281"
                                                className="Pixso-group-332_1281"
                                            >
                                                <div
                                                    id="332_1282"
                                                    className="Pixso-vector-332_1282"
                                                ></div>
                                                <div
                                                    id="332_1285"
                                                    className="Pixso-vector-332_1285"
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="333_1291" className="Pixso-frame-333_1291">
                            <div className="frame-content-333_1291">
                                <div
                                    id="333_1358"
                                    className="Pixso-vector-333_1358"
                                ></div>
                                <div
                                    id="333_1359"
                                    className="Pixso-vector-333_1359"
                                ></div>
                                <div
                                    id="333_1360"
                                    className="Pixso-vector-333_1360"
                                ></div>
                                <div
                                    id="333_1361"
                                    className="Pixso-vector-333_1361"
                                ></div>
                                <div
                                    id="333_1362"
                                    className="Pixso-vector-333_1362"
                                ></div>
                                <div
                                    id="333_1363"
                                    className="Pixso-vector-333_1363"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="336_1715" className="Pixso-frame-336_1715">
                    <div id="336_1697" className="Pixso-frame-336_1697">
                        <div id="336_1596" className="stroke-wrapper-336_1596">
                            <div className="Pixso-frame-336_1596 fill-grey-54_1486">
                                <div className="frame-content-336_1596">
                                    <div
                                        id="336_1597"
                                        className="Pixso-frame-336_1597"
                                    >
                                        <Heading0
                                            id="336_1598"
                                            className="Pixso-instance-336_1598"
                                            text_330_292={`Search engine`}
                                            text_334_1523={`optimization`}
                                            text_334_1542={`(SEO)`}
                                            Property1={"Green"}
                                        ></Heading0>
                                        <div
                                            id="336_1599"
                                            className="Pixso-frame-336_1599"
                                        >
                                            <div
                                                id="12_42"
                                                className="Pixso-vector-12_42"
                                            ></div>
                                            <p
                                                id="12_45"
                                                className="Pixso-paragraph-12_45 fill-black-334_1497-paragraph"
                                            >
                                                {"Learn more"}
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        id="336_1588"
                                        className="Pixso-frame-336_1588"
                                    >
                                        <div
                                            id="336_1587"
                                            className="Pixso-rectangle-336_1587"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className="stroke-336_1596 stroke-dark-109_952"></div>
                        </div>
                        <div id="336_1680" className="stroke-wrapper-336_1680">
                            <div className="Pixso-frame-336_1680 fill-green-36_159">
                                <div className="frame-content-336_1680">
                                    <div
                                        id="336_1681"
                                        className="Pixso-frame-336_1681"
                                    >
                                        <Heading0
                                            id="336_1682"
                                            className="Pixso-instance-336_1682"
                                            text_333_1381={`Pay-per-click`}
                                            text_334_1533={`advertising`}
                                            Property1={"White"}
                                        ></Heading0>
                                        <div
                                            id="336_1683"
                                            className="Pixso-frame-336_1683"
                                        >
                                            <div
                                                id="12_7"
                                                className="Pixso-vector-12_7"
                                            ></div>
                                            <p
                                                id="12_10"
                                                className="Pixso-paragraph-12_10 fill-black-334_1497-paragraph"
                                            >
                                                {"Learn more"}
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        id="336_1695"
                                        className="Pixso-frame-336_1695"
                                    >
                                        <div
                                            id="334_1445"
                                            className="Pixso-rectangle-334_1445"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className="stroke-336_1680 stroke-dark-109_952"></div>
                        </div>
                    </div>
                    <div id="336_1713" className="Pixso-frame-336_1713">
                        <div id="334_1566" className="stroke-wrapper-334_1566">
                            <div className="Pixso-frame-334_1566 fill-dark-109_952">
                                <div className="frame-content-334_1566">
                                    <div
                                        id="334_1565"
                                        className="Pixso-frame-334_1565"
                                    >
                                        <Heading0
                                            id="334_1505"
                                            className="Pixso-instance-334_1505"
                                            text_333_1381={`Social Media`}
                                            text_334_1533={`Marketing`}
                                            Property1={"White"}
                                        ></Heading0>
                                        <div
                                            id="334_1559"
                                            className="Pixso-frame-334_1559"
                                        >
                                            <div
                                                id="12_96"
                                                className="Pixso-vector-12_96"
                                            ></div>
                                            <p
                                                id="12_99"
                                                className="Pixso-paragraph-12_99"
                                            >
                                                {"Learn more"}
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        id="336_1595"
                                        className="Pixso-frame-336_1595"
                                    >
                                        <div
                                            id="336_1594"
                                            className="Pixso-rectangle-336_1594"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className="stroke-334_1566 stroke-dark-109_952"></div>
                        </div>
                        <div id="336_1621" className="stroke-wrapper-336_1621">
                            <div className="Pixso-frame-336_1621 fill-grey-54_1486">
                                <div className="frame-content-336_1621">
                                    <div
                                        id="336_1622"
                                        className="Pixso-frame-336_1622"
                                    >
                                        <Heading0
                                            id="336_1623"
                                            className="Pixso-instance-336_1623"
                                            text_330_292={`Email`}
                                            text_334_1523={`Marketing`}
                                            text_334_1542={`(SEO)`}
                                            Property1={"Green"}
                                        ></Heading0>
                                        <div
                                            id="336_1624"
                                            className="Pixso-frame-336_1624"
                                        >
                                            <div
                                                id="12_11"
                                                className="Pixso-vector-12_11"
                                            ></div>
                                            <p
                                                id="12_14"
                                                className="Pixso-paragraph-12_14 fill-black-334_1497-paragraph"
                                            >
                                                {"Learn more"}
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        id="334_1422"
                                        className="Pixso-rectangle-334_1422"
                                    ></div>
                                </div>
                            </div>
                            <div className="stroke-336_1621 stroke-dark-109_952"></div>
                        </div>
                    </div>
                    <div id="336_1714" className="Pixso-frame-336_1714">
                        <div id="336_1636" className="stroke-wrapper-336_1636">
                            <div className="Pixso-frame-336_1636 fill-green-36_159">
                                <div className="frame-content-336_1636">
                                    <div
                                        id="336_1637"
                                        className="Pixso-frame-336_1637"
                                    >
                                        <Heading0
                                            id="336_1638"
                                            className="Pixso-instance-336_1638"
                                            text_333_1381={`Content`}
                                            text_334_1533={`Creation`}
                                            Property1={"White"}
                                        ></Heading0>
                                        <div
                                            id="336_1639"
                                            className="Pixso-frame-336_1639"
                                        >
                                            <div
                                                id="12_100"
                                                className="Pixso-vector-12_100"
                                            ></div>
                                            <p
                                                id="12_103"
                                                className="Pixso-paragraph-12_103 fill-black-334_1497-paragraph"
                                            >
                                                {"Learn more"}
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        id="336_1660"
                                        className="Pixso-frame-336_1660"
                                    >
                                        <div
                                            id="334_1446"
                                            className="Pixso-rectangle-334_1446"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className="stroke-336_1636 stroke-dark-109_952"></div>
                        </div>
                        <div id="336_1572" className="stroke-wrapper-336_1572">
                            <div className="Pixso-frame-336_1572 fill-dark-109_952">
                                <div className="frame-content-336_1572">
                                    <div
                                        id="336_1573"
                                        className="Pixso-frame-336_1573"
                                    >
                                        <Heading0
                                            id="336_1574"
                                            className="Pixso-instance-336_1574"
                                            text_330_292={`Analytics and `}
                                            text_334_1523={`Tracking`}
                                            Property1={"Green"}
                                        ></Heading0>
                                        <div
                                            id="336_1575"
                                            className="Pixso-frame-336_1575"
                                        >
                                            <div
                                                id="12_53"
                                                className="Pixso-vector-12_53"
                                            ></div>
                                            <p
                                                id="12_56"
                                                className="Pixso-paragraph-12_56"
                                            >
                                                {"Learn more"}
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        id="336_1576"
                                        className="Pixso-frame-336_1576"
                                    >
                                        <div
                                            id="336_1577"
                                            className="Pixso-rectangle-336_1577"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className="stroke-336_1572 stroke-dark-109_952"></div>
                        </div>
                    </div>
                </div>
                <div id="336_1753" className="Pixso-group-336_1753">
                    <div id="336_1752" className="Pixso-frame-336_1752">
                        <div className="frame-content-336_1752">
                            <div
                                id="336_1751"
                                className="Pixso-frame-336_1751 fill-grey-54_1486"
                            >
                                <div className="frame-content-336_1751">
                                    <div
                                        id="336_1748"
                                        className="Pixso-frame-336_1748"
                                    >
                                        <p
                                            id="336_1721"
                                            className="Pixso-paragraph-336_1721 text-h3-53_1419"
                                        >
                                            {"Let’s make things happen"}
                                        </p>
                                        <p
                                            id="336_1720"
                                            className="Pixso-paragraph-336_1720 text-p-35_146"
                                        >
                                            {
                                                "Contact us today to learn more about how our digital marketing services can help your business grow and succeed online."
                                            }
                                        </p>
                                        <Button0
                                            id="336_1742"
                                            className="Pixso-instance-336_1742"
                                            text_326_271={`Get your free proposal`}
                                            Property1={"Button primary"}
                                        ></Button0>
                                    </div>
                                </div>
                            </div>
                            <div id="336_1755" className="Pixso-frame-336_1755">
                                <div
                                    id="336_1731"
                                    className="Pixso-vector-336_1731"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="338_146" className="Pixso-frame-338_146">
                    <div
                        id="338_132"
                        className="Pixso-frame-338_132 fill-dark-109_952"
                    >
                        <div id="337_1828" className="Pixso-frame-337_1828">
                            <p
                                id="337_1815"
                                className="Pixso-paragraph-337_1815 text-p-35_146"
                            >
                                {
                                    "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales."
                                }
                            </p>
                            <div id="337_1820" className="Pixso-frame-337_1820">
                                <p
                                    id="12_65"
                                    className="Pixso-paragraph-12_65 fill-green-36_159-paragraph"
                                >
                                    {"Learn more"}
                                </p>
                                <div
                                    id="12_66"
                                    className="Pixso-vector-12_66"
                                ></div>
                            </div>
                        </div>
                        <div
                            id="337_1818"
                            className="Pixso-vector-337_1818"
                        ></div>
                        <div id="338_133" className="Pixso-frame-338_133">
                            <p id="338_134" className="Pixso-paragraph-338_134">
                                {
                                    "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic."
                                }
                            </p>
                            <div id="338_135" className="Pixso-frame-338_135">
                                <p
                                    id="12_84"
                                    className="Pixso-paragraph-12_84 fill-green-36_159-paragraph"
                                >
                                    {"Learn more"}
                                </p>
                                <div
                                    id="12_85"
                                    className="Pixso-vector-12_85"
                                ></div>
                            </div>
                        </div>
                        <div
                            id="338_139"
                            className="Pixso-vector-338_139"
                        ></div>
                        <div id="338_140" className="Pixso-frame-338_140">
                            <p
                                id="338_141"
                                className="Pixso-paragraph-338_141 text-p-35_146"
                            >
                                {
                                    "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales."
                                }
                            </p>
                            <div id="338_142" className="Pixso-frame-338_142">
                                <p
                                    id="12_148"
                                    className="Pixso-paragraph-12_148 fill-green-36_159-paragraph"
                                >
                                    {"Learn more"}
                                </p>
                                <div
                                    id="12_149"
                                    className="Pixso-vector-12_149"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="338_195" className="Pixso-frame-338_195">
                    <div id="338_196" className="stroke-wrapper-338_196">
                        <div className="Pixso-frame-338_196 fill-green-36_159">
                            <div className="frame-content-338_196">
                                <div
                                    id="338_197"
                                    className="Pixso-frame-338_197"
                                >
                                    <div className="frame-content-338_197">
                                        <div
                                            id="338_198"
                                            className="Pixso-frame-338_198"
                                        >
                                            <p
                                                id="338_199"
                                                className="Pixso-paragraph-338_199"
                                            >
                                                {"01"}
                                            </p>
                                            <p
                                                id="338_200"
                                                className="Pixso-paragraph-338_200"
                                            >
                                                {"Consultation"}
                                            </p>
                                        </div>
                                        <div
                                            id="338_201"
                                            className="Pixso-vector-338_201"
                                        ></div>
                                    </div>
                                </div>
                                <div
                                    id="338_212"
                                    className="Pixso-vector-338_212"
                                ></div>
                                <p
                                    id="338_214"
                                    className="Pixso-paragraph-338_214 text-p-35_146"
                                >
                                    {
                                        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
                                    }
                                </p>
                            </div>
                        </div>
                        <div className="stroke-338_196"></div>
                    </div>
                    <div id="338_204" className="stroke-wrapper-338_204">
                        <div className="Pixso-frame-338_204 fill-grey-54_1486">
                            <div className="frame-content-338_204">
                                <div
                                    id="338_205"
                                    className="Pixso-frame-338_205"
                                >
                                    <div className="frame-content-338_205">
                                        <div
                                            id="338_206"
                                            className="Pixso-frame-338_206"
                                        >
                                            <p
                                                id="338_207"
                                                className="Pixso-paragraph-338_207"
                                            >
                                                {"02"}
                                            </p>
                                            <p
                                                id="338_208"
                                                className="Pixso-paragraph-338_208"
                                            >
                                                {
                                                    "Research and Strategy Development"
                                                }
                                            </p>
                                        </div>
                                        <div
                                            id="338_209"
                                            className="Pixso-vector-338_209"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="stroke-338_204"></div>
                    </div>
                    <div id="339_217" className="stroke-wrapper-339_217">
                        <div className="Pixso-frame-339_217 fill-grey-54_1486">
                            <div className="frame-content-339_217">
                                <div
                                    id="339_218"
                                    className="Pixso-frame-339_218"
                                >
                                    <div className="frame-content-339_218">
                                        <div
                                            id="339_219"
                                            className="Pixso-frame-339_219"
                                        >
                                            <p
                                                id="339_220"
                                                className="Pixso-paragraph-339_220"
                                            >
                                                {"03"}
                                            </p>
                                            <p
                                                id="339_221"
                                                className="Pixso-paragraph-339_221"
                                            >
                                                {"Implementation"}
                                            </p>
                                        </div>
                                        <div
                                            id="339_222"
                                            className="Pixso-vector-339_222"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="stroke-339_217"></div>
                    </div>
                    <div id="339_225" className="stroke-wrapper-339_225">
                        <div className="Pixso-frame-339_225 fill-grey-54_1486">
                            <div className="frame-content-339_225">
                                <div
                                    id="339_226"
                                    className="Pixso-frame-339_226"
                                >
                                    <div className="frame-content-339_226">
                                        <div
                                            id="339_227"
                                            className="Pixso-frame-339_227"
                                        >
                                            <p
                                                id="339_228"
                                                className="Pixso-paragraph-339_228"
                                            >
                                                {"04"}
                                            </p>
                                            <p
                                                id="339_229"
                                                className="Pixso-paragraph-339_229 text-h3-53_1419"
                                            >
                                                {"Monitoring and Optimization"}
                                            </p>
                                        </div>
                                        <div
                                            id="339_230"
                                            className="Pixso-vector-339_230"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="stroke-339_225"></div>
                    </div>
                    <div id="339_233" className="stroke-wrapper-339_233">
                        <div className="Pixso-frame-339_233 fill-grey-54_1486">
                            <div className="frame-content-339_233">
                                <div
                                    id="339_234"
                                    className="Pixso-frame-339_234"
                                >
                                    <div className="frame-content-339_234">
                                        <div
                                            id="339_235"
                                            className="Pixso-frame-339_235"
                                        >
                                            <p
                                                id="339_236"
                                                className="Pixso-paragraph-339_236"
                                            >
                                                {"05"}
                                            </p>
                                            <p
                                                id="339_237"
                                                className="Pixso-paragraph-339_237 text-h3-53_1419"
                                            >
                                                {"Reporting and Communication"}
                                            </p>
                                        </div>
                                        <div
                                            id="339_238"
                                            className="Pixso-vector-339_238"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="stroke-339_233"></div>
                    </div>
                    <div id="339_241" className="stroke-wrapper-339_241">
                        <div className="Pixso-frame-339_241 fill-grey-54_1486">
                            <div className="frame-content-339_241">
                                <div
                                    id="339_242"
                                    className="Pixso-frame-339_242"
                                >
                                    <div className="frame-content-339_242">
                                        <div
                                            id="339_243"
                                            className="Pixso-frame-339_243"
                                        >
                                            <p
                                                id="339_244"
                                                className="Pixso-paragraph-339_244"
                                            >
                                                {"06"}
                                            </p>
                                            <p
                                                id="339_245"
                                                className="Pixso-paragraph-339_245 text-h3-53_1419"
                                            >
                                                {"Continual Improvement"}
                                            </p>
                                        </div>
                                        <div
                                            id="339_246"
                                            className="Pixso-vector-339_246"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="stroke-339_241"></div>
                    </div>
                </div>
                <div id="341_506" className="Pixso-frame-341_506">
                    <div id="341_504" className="Pixso-frame-341_504">
                        <div id="341_333" className="stroke-wrapper-341_333">
                            <div className="Pixso-frame-341_333">
                                <div className="frame-content-341_333">
                                    <div
                                        id="341_334"
                                        className="Pixso-frame-341_334"
                                    >
                                        <div
                                            id="341_335"
                                            className="Pixso-frame-341_335"
                                        >
                                            <div className="frame-content-341_335">
                                                <div
                                                    id="341_336"
                                                    className="Pixso-frame-341_336"
                                                >
                                                    <div className="frame-content-341_336">
                                                        <div
                                                            id="341_350"
                                                            className="Pixso-group-341_350"
                                                        >
                                                            <div
                                                                id="341_351"
                                                                className="Pixso-vector-341_351"
                                                            ></div>
                                                            <div
                                                                id="341_352"
                                                                className="Pixso-vector-341_352"
                                                            ></div>
                                                        </div>
                                                        <div
                                                            id="341_342"
                                                            className="Pixso-group-341_342"
                                                        >
                                                            <p
                                                                id="341_343"
                                                                className="Pixso-paragraph-341_343 text-h4-41_258"
                                                            >
                                                                {"John Smith"}
                                                            </p>
                                                            <p
                                                                id="341_344"
                                                                className="Pixso-paragraph-341_344 text-p-35_146"
                                                            >
                                                                {
                                                                    "CEO and Founder"
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    id="341_345"
                                                    className="Pixso-vector-341_345"
                                                ></div>
                                            </div>
                                        </div>
                                        <div
                                            id="341_348"
                                            className="Pixso-vector-341_348"
                                        ></div>
                                        <p
                                            id="341_349"
                                            className="Pixso-paragraph-341_349 text-p-35_146"
                                        >
                                            {
                                                "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="stroke-341_333"></div>
                        </div>
                        <div id="341_311" className="stroke-wrapper-341_311">
                            <div className="Pixso-frame-341_311">
                                <div className="frame-content-341_311">
                                    <div
                                        id="341_312"
                                        className="Pixso-frame-341_312"
                                    >
                                        <div
                                            id="341_313"
                                            className="Pixso-frame-341_313"
                                        >
                                            <div className="frame-content-341_313">
                                                <div
                                                    id="341_314"
                                                    className="Pixso-frame-341_314"
                                                >
                                                    <div className="frame-content-341_314">
                                                        <div
                                                            id="341_328"
                                                            className="Pixso-group-341_328"
                                                        >
                                                            <div
                                                                id="341_329"
                                                                className="Pixso-vector-341_329"
                                                            ></div>
                                                            <div
                                                                id="341_330"
                                                                className="Pixso-vector-341_330"
                                                            ></div>
                                                        </div>
                                                        <div
                                                            id="341_320"
                                                            className="Pixso-group-341_320"
                                                        >
                                                            <p
                                                                id="341_321"
                                                                className="Pixso-paragraph-341_321 text-h4-41_258"
                                                            >
                                                                {"Jane Doe"}
                                                            </p>
                                                            <p
                                                                id="341_322"
                                                                className="Pixso-paragraph-341_322 text-p-35_146"
                                                            >
                                                                {
                                                                    "Director of Operations"
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    id="341_323"
                                                    className="Pixso-vector-341_323"
                                                ></div>
                                            </div>
                                        </div>
                                        <div
                                            id="341_326"
                                            className="Pixso-vector-341_326"
                                        ></div>
                                        <p
                                            id="341_327"
                                            className="Pixso-paragraph-341_327 text-p-35_146"
                                        >
                                            {
                                                "7+ years of experience in project management and team leadership. Strong organizational and communication skills"
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="stroke-341_311"></div>
                        </div>
                        <div id="341_368" className="stroke-wrapper-341_368">
                            <div className="Pixso-frame-341_368">
                                <div className="frame-content-341_368">
                                    <div
                                        id="341_369"
                                        className="Pixso-frame-341_369"
                                    >
                                        <div
                                            id="341_370"
                                            className="Pixso-frame-341_370"
                                        >
                                            <div className="frame-content-341_370">
                                                <div
                                                    id="341_371"
                                                    className="Pixso-frame-341_371"
                                                >
                                                    <div className="frame-content-341_371">
                                                        <div
                                                            id="341_385"
                                                            className="Pixso-group-341_385"
                                                        >
                                                            <div
                                                                id="341_386"
                                                                className="Pixso-vector-341_386"
                                                            ></div>
                                                            <div
                                                                id="341_387"
                                                                className="Pixso-vector-341_387"
                                                            ></div>
                                                        </div>
                                                        <div
                                                            id="341_377"
                                                            className="Pixso-group-341_377"
                                                        >
                                                            <p
                                                                id="341_378"
                                                                className="Pixso-paragraph-341_378 text-h4-41_258"
                                                            >
                                                                {
                                                                    "Michael Brown"
                                                                }
                                                            </p>
                                                            <p
                                                                id="341_379"
                                                                className="Pixso-paragraph-341_379 text-p-35_146"
                                                            >
                                                                {
                                                                    "Senior SEO Specialist"
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    id="341_380"
                                                    className="Pixso-vector-341_380"
                                                ></div>
                                            </div>
                                        </div>
                                        <div
                                            id="341_383"
                                            className="Pixso-vector-341_383"
                                        ></div>
                                        <p
                                            id="341_384"
                                            className="Pixso-paragraph-341_384 text-p-35_146"
                                        >
                                            {
                                                "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="stroke-341_368"></div>
                        </div>
                    </div>
                    <div id="341_505" className="Pixso-frame-341_505">
                        <div id="341_403" className="stroke-wrapper-341_403">
                            <div className="Pixso-frame-341_403">
                                <div className="frame-content-341_403">
                                    <div
                                        id="341_404"
                                        className="Pixso-frame-341_404"
                                    >
                                        <div
                                            id="341_405"
                                            className="Pixso-frame-341_405"
                                        >
                                            <div className="frame-content-341_405">
                                                <div
                                                    id="341_406"
                                                    className="Pixso-frame-341_406"
                                                >
                                                    <div className="frame-content-341_406">
                                                        <div
                                                            id="341_420"
                                                            className="Pixso-group-341_420"
                                                        >
                                                            <div
                                                                id="341_421"
                                                                className="Pixso-vector-341_421"
                                                            ></div>
                                                            <div
                                                                id="341_422"
                                                                className="Pixso-vector-341_422"
                                                            ></div>
                                                        </div>
                                                        <div
                                                            id="341_412"
                                                            className="Pixso-group-341_412"
                                                        >
                                                            <p
                                                                id="341_413"
                                                                className="Pixso-paragraph-341_413 text-h4-41_258"
                                                            >
                                                                {
                                                                    "Emily Johnson"
                                                                }
                                                            </p>
                                                            <p
                                                                id="341_414"
                                                                className="Pixso-paragraph-341_414 text-p-35_146"
                                                            >
                                                                {"PPC Manager"}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    id="341_415"
                                                    className="Pixso-vector-341_415"
                                                ></div>
                                            </div>
                                        </div>
                                        <div
                                            id="341_418"
                                            className="Pixso-vector-341_418"
                                        ></div>
                                        <p
                                            id="341_419"
                                            className="Pixso-paragraph-341_419 text-p-35_146"
                                        >
                                            {
                                                "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="stroke-341_403"></div>
                        </div>
                        <div id="341_451" className="stroke-wrapper-341_451">
                            <div className="Pixso-frame-341_451">
                                <div className="frame-content-341_451">
                                    <div
                                        id="341_452"
                                        className="Pixso-frame-341_452"
                                    >
                                        <div
                                            id="341_453"
                                            className="Pixso-frame-341_453"
                                        >
                                            <div className="frame-content-341_453">
                                                <div
                                                    id="341_454"
                                                    className="Pixso-frame-341_454"
                                                >
                                                    <div className="frame-content-341_454">
                                                        <div
                                                            id="341_468"
                                                            className="Pixso-group-341_468"
                                                        >
                                                            <div
                                                                id="341_469"
                                                                className="Pixso-vector-341_469"
                                                            ></div>
                                                            <div
                                                                id="341_470"
                                                                className="Pixso-vector-341_470"
                                                            ></div>
                                                        </div>
                                                        <div
                                                            id="341_460"
                                                            className="Pixso-group-341_460"
                                                        >
                                                            <p
                                                                id="341_461"
                                                                className="Pixso-paragraph-341_461 text-h4-41_258"
                                                            >
                                                                {
                                                                    "Brian Williams"
                                                                }
                                                            </p>
                                                            <p
                                                                id="341_462"
                                                                className="Pixso-paragraph-341_462 text-p-35_146"
                                                            >
                                                                {
                                                                    "Social Media Specialist"
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    id="341_463"
                                                    className="Pixso-vector-341_463"
                                                ></div>
                                            </div>
                                        </div>
                                        <div
                                            id="341_466"
                                            className="Pixso-vector-341_466"
                                        ></div>
                                        <p
                                            id="341_467"
                                            className="Pixso-paragraph-341_467 text-p-35_146"
                                        >
                                            {
                                                "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement"
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="stroke-341_451"></div>
                        </div>
                        <div id="341_473" className="stroke-wrapper-341_473">
                            <div className="Pixso-frame-341_473">
                                <div className="frame-content-341_473">
                                    <div
                                        id="341_474"
                                        className="Pixso-frame-341_474"
                                    >
                                        <div
                                            id="341_475"
                                            className="Pixso-frame-341_475"
                                        >
                                            <div className="frame-content-341_475">
                                                <div
                                                    id="341_476"
                                                    className="Pixso-frame-341_476"
                                                >
                                                    <div className="frame-content-341_476">
                                                        <div
                                                            id="341_490"
                                                            className="Pixso-group-341_490"
                                                        >
                                                            <div
                                                                id="341_491"
                                                                className="Pixso-vector-341_491"
                                                            ></div>
                                                            <div
                                                                id="341_492"
                                                                className="Pixso-vector-341_492"
                                                            ></div>
                                                        </div>
                                                        <div
                                                            id="341_482"
                                                            className="Pixso-group-341_482"
                                                        >
                                                            <p
                                                                id="341_483"
                                                                className="Pixso-paragraph-341_483 text-h4-41_258"
                                                            >
                                                                {"Sarah Kim"}
                                                            </p>
                                                            <p
                                                                id="341_484"
                                                                className="Pixso-paragraph-341_484 text-p-35_146"
                                                            >
                                                                {
                                                                    "Content Creator"
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    id="341_485"
                                                    className="Pixso-vector-341_485"
                                                ></div>
                                            </div>
                                        </div>
                                        <div
                                            id="341_488"
                                            className="Pixso-vector-341_488"
                                        ></div>
                                        <div
                                            id="341_489"
                                            className="Pixso-text-341_489 text-p-35_146"
                                        >
                                            <p
                                                id="341_489_0"
                                                className="Pixso-paragraph-341_489_0"
                                            >
                                                <span
                                                    id="341_489_0_1"
                                                    className="Pixso-span-341_489_0_1 text-p-35_146"
                                                >
                                                    {
                                                        "2+ years of experience in writing and editing"
                                                    }
                                                </span>
                                            </p>
                                            <p
                                                id="341_489_1"
                                                className="Pixso-paragraph-341_489_1"
                                            >
                                                <span
                                                    id="341_489_1_1"
                                                    className="Pixso-span-341_489_1_1 text-p-35_146"
                                                >
                                                    {
                                                        "Skilled in creating compelling, SEO-optimized content for various industries"
                                                    }
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="stroke-341_473"></div>
                        </div>
                    </div>
                </div>
                <Button0
                    id="341_495"
                    className="Pixso-instance-341_495"
                    text_326_271={`See all team`}
                    Property1={"Button primary"}
                ></Button0>
                <div
                    id="341_566"
                    className="Pixso-frame-341_566 fill-dark-109_952"
                >
                    <div id="341_567" className="Pixso-frame-341_567">
                        <div id="341_564" className="Pixso-frame-341_564">
                            <div className="frame-content-341_564">
                                <div
                                    id="341_549"
                                    className="Pixso-frame-341_549"
                                >
                                    <div
                                        id="341_550"
                                        className="Pixso-frame-341_550"
                                    >
                                        <div
                                            id="341_551"
                                            className="Pixso-vector-341_551"
                                        ></div>
                                        <p
                                            id="341_554"
                                            className="Pixso-paragraph-341_554 text-p-35_146"
                                        >
                                            {
                                                '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."'
                                            }
                                        </p>
                                    </div>
                                    <div
                                        id="341_555"
                                        className="Pixso-text-341_555 text-p-35_146"
                                    >
                                        <p
                                            id="341_555_0"
                                            className="Pixso-paragraph-341_555_0"
                                        >
                                            <span
                                                id="341_555_0_1"
                                                className="Pixso-span-341_555_0_1 text-h4-41_258"
                                            >
                                                {"John Smith"}
                                            </span>
                                        </p>
                                        <p
                                            id="341_555_1"
                                            className="Pixso-paragraph-341_555_1"
                                        >
                                            <span
                                                id="341_555_1_1"
                                                className="Pixso-span-341_555_1_1 text-p-35_146"
                                            >
                                                {
                                                    "Marketing Director at XYZ Corp"
                                                }
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div
                                    id="341_548"
                                    className="Pixso-frame-341_548"
                                >
                                    <div
                                        id="341_547"
                                        className="Pixso-frame-341_547"
                                    >
                                        <div
                                            id="341_510"
                                            className="Pixso-vector-341_510"
                                        ></div>
                                        <p
                                            id="341_513"
                                            className="Pixso-paragraph-341_513 text-p-35_146"
                                        >
                                            {
                                                '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."'
                                            }
                                        </p>
                                    </div>
                                    <div
                                        id="341_514"
                                        className="Pixso-text-341_514 text-p-35_146"
                                    >
                                        <p
                                            id="341_514_0"
                                            className="Pixso-paragraph-341_514_0"
                                        >
                                            <span
                                                id="341_514_0_1"
                                                className="Pixso-span-341_514_0_1 text-h4-41_258"
                                            >
                                                {"John Smith"}
                                            </span>
                                        </p>
                                        <p
                                            id="341_514_1"
                                            className="Pixso-paragraph-341_514_1"
                                        >
                                            <span
                                                id="341_514_1_1"
                                                className="Pixso-span-341_514_1_1 text-p-35_146"
                                            >
                                                {
                                                    "Marketing Director at XYZ Corp"
                                                }
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div
                                    id="341_556"
                                    className="Pixso-frame-341_556"
                                >
                                    <div
                                        id="341_557"
                                        className="Pixso-frame-341_557"
                                    >
                                        <div
                                            id="341_558"
                                            className="Pixso-vector-341_558"
                                        ></div>
                                        <p
                                            id="341_561"
                                            className="Pixso-paragraph-341_561 text-p-35_146"
                                        >
                                            {
                                                '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."'
                                            }
                                        </p>
                                    </div>
                                    <div
                                        id="341_562"
                                        className="Pixso-text-341_562 text-p-35_146"
                                    >
                                        <p
                                            id="341_562_0"
                                            className="Pixso-paragraph-341_562_0"
                                        >
                                            <span
                                                id="341_562_0_1"
                                                className="Pixso-span-341_562_0_1 text-h4-41_258"
                                            >
                                                {"John Smith"}
                                            </span>
                                        </p>
                                        <p
                                            id="341_562_1"
                                            className="Pixso-paragraph-341_562_1"
                                        >
                                            <span
                                                id="341_562_1_1"
                                                className="Pixso-span-341_562_1_1 text-p-35_146"
                                            >
                                                {
                                                    "Marketing Director at XYZ Corp"
                                                }
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="341_563" className="Pixso-frame-341_563">
                            <div className="frame-content-341_563">
                                <div
                                    id="341_535"
                                    className="Pixso-vector-341_535"
                                ></div>
                                <div
                                    id="341_527"
                                    className="Pixso-group-341_527"
                                >
                                    <div
                                        id="341_529"
                                        className="Pixso-vector-341_529"
                                    ></div>
                                </div>
                                <div
                                    id="341_538"
                                    className="Pixso-vector-341_538"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="341_624" className="Pixso-frame-341_624">
                    <div className="frame-content-341_624">
                        <div
                            id="341_623"
                            className="Pixso-frame-341_623 fill-grey-54_1486"
                        >
                            <div className="frame-content-341_623">
                                <div
                                    id="341_617"
                                    className="Pixso-frame-341_617"
                                >
                                    <div
                                        id="341_601"
                                        className="Pixso-frame-341_601"
                                    >
                                        <div
                                            id="341_599"
                                            className="Pixso-group-341_599"
                                        >
                                            <p
                                                id="341_590"
                                                className="Pixso-paragraph-341_590 text-p-35_146"
                                            >
                                                {"Say Hi"}
                                            </p>
                                            <div
                                                id="341_598"
                                                className="Pixso-group-341_598"
                                            >
                                                <div
                                                    id="341_588"
                                                    className="stroke-wrapper-341_588"
                                                >
                                                    <div className="Pixso-rectangle-341_588"></div>
                                                    <div className="stroke-341_588"></div>
                                                </div>
                                                <div
                                                    id="341_592"
                                                    className="Pixso-vector-341_592"
                                                ></div>
                                            </div>
                                        </div>
                                        <div
                                            id="341_600"
                                            className="Pixso-group-341_600"
                                        >
                                            <div
                                                id="341_589"
                                                className="stroke-wrapper-341_589"
                                            >
                                                <div className="Pixso-rectangle-341_589"></div>
                                                <div className="stroke-341_589"></div>
                                            </div>
                                            <p
                                                id="341_591"
                                                className="Pixso-paragraph-341_591 text-p-35_146"
                                            >
                                                {"Get a Quote"}
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        id="341_608"
                                        className="Pixso-frame-341_608"
                                    >
                                        <div
                                            id="341_603"
                                            className="Pixso-frame-341_603"
                                        >
                                            <p
                                                id="341_586"
                                                className="Pixso-paragraph-341_586"
                                            >
                                                {"Name"}
                                            </p>
                                            <div
                                                id="341_602"
                                                className="stroke-wrapper-341_602"
                                            >
                                                <div className="Pixso-frame-341_602">
                                                    <div className="frame-content-341_602">
                                                        <p
                                                            id="341_582"
                                                            className="Pixso-paragraph-341_582"
                                                        >
                                                            {"Name"}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="stroke-341_602"></div>
                                            </div>
                                        </div>
                                        <div
                                            id="341_604"
                                            className="Pixso-frame-341_604"
                                        >
                                            <p
                                                id="341_605"
                                                className="Pixso-paragraph-341_605"
                                            >
                                                {"Email*"}
                                            </p>
                                            <div
                                                id="341_606"
                                                className="stroke-wrapper-341_606"
                                            >
                                                <div className="Pixso-frame-341_606">
                                                    <div className="frame-content-341_606">
                                                        <p
                                                            id="341_607"
                                                            className="Pixso-paragraph-341_607"
                                                        >
                                                            {"Email"}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="stroke-341_606"></div>
                                            </div>
                                        </div>
                                        <div
                                            id="341_609"
                                            className="Pixso-frame-341_609"
                                        >
                                            <div className="frame-content-341_609">
                                                <p
                                                    id="341_610"
                                                    className="Pixso-paragraph-341_610"
                                                >
                                                    {"Message*"}
                                                </p>
                                                <div
                                                    id="341_611"
                                                    className="stroke-wrapper-341_611"
                                                >
                                                    <div className="Pixso-frame-341_611">
                                                        <div className="frame-content-341_611">
                                                            <p
                                                                id="341_612"
                                                                className="Pixso-paragraph-341_612"
                                                            >
                                                                {"Message"}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="stroke-341_611"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Button0
                                        id="341_615"
                                        className="Pixso-instance-341_615"
                                        text_326_271={`Send Message`}
                                        Property1={"Button primary"}
                                    ></Button0>
                                </div>
                            </div>
                        </div>
                        <div id="341_618" className="Pixso-group-341_618">
                            <div id="341_593" className="Pixso-group-341_593">
                                <div
                                    id="341_595"
                                    className="Pixso-rectangle-341_595"
                                ></div>
                            </div>
                            <div
                                id="341_596"
                                className="Pixso-vector-341_596"
                            ></div>
                            <div
                                id="341_597"
                                className="Pixso-vector-341_597"
                            ></div>
                        </div>
                    </div>
                </div>
                <div id="341_690" className="Pixso-frame-341_690">
                    <div
                        id="341_689"
                        className="Pixso-frame-341_689 fill-dark-109_952"
                    >
                        <div id="341_687" className="Pixso-frame-341_687">
                            <div id="341_665" className="Pixso-frame-341_665">
                                <div className="frame-content-341_665">
                                    <div
                                        id="341_656"
                                        className="Pixso-frame-341_656"
                                    >
                                        <div
                                            id="12_27"
                                            className="Pixso-vector-12_27"
                                        ></div>
                                        <div
                                            id="12_29"
                                            className="Pixso-vector-12_29"
                                        ></div>
                                    </div>
                                    <div
                                        id="341_663"
                                        className="Pixso-frame-341_663"
                                    >
                                        <p
                                            id="341_632"
                                            className="Pixso-paragraph-341_632"
                                        >
                                            {"About us"}
                                        </p>
                                        <p
                                            id="341_635"
                                            className="Pixso-paragraph-341_635"
                                        >
                                            {"Services"}
                                        </p>
                                        <p
                                            id="341_633"
                                            className="Pixso-paragraph-341_633"
                                        >
                                            {"Use Cases"}
                                        </p>
                                        <p
                                            id="341_636"
                                            className="Pixso-paragraph-341_636"
                                        >
                                            {"Pricing"}
                                        </p>
                                        <p
                                            id="341_634"
                                            className="Pixso-paragraph-341_634"
                                        >
                                            {"Blog"}
                                        </p>
                                    </div>
                                    <div
                                        id="341_664"
                                        className="Pixso-frame-341_664"
                                    >
                                        <div
                                            id="341_641"
                                            className="Pixso-vector-341_641"
                                        ></div>
                                        <div
                                            id="341_644"
                                            className="Pixso-vector-341_644"
                                        ></div>
                                        <div
                                            id="341_645"
                                            className="Pixso-vector-341_645"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div id="341_684" className="Pixso-frame-341_684">
                                <div
                                    id="341_674"
                                    className="Pixso-frame-341_674"
                                >
                                    <Heading0
                                        id="341_666"
                                        className="Pixso-instance-341_666"
                                        text_330_292={`Contact us:`}
                                        Property1={"Green"}
                                    ></Heading0>
                                    <div
                                        id="341_673"
                                        className="Pixso-frame-341_673"
                                    >
                                        <p
                                            id="341_628"
                                            className="Pixso-paragraph-341_628 text-p-35_146"
                                        >
                                            {"Email: info@positivus.com"}
                                        </p>
                                        <p
                                            id="341_626"
                                            className="Pixso-paragraph-341_626 text-p-35_146"
                                        >
                                            {"Phone: 555-567-8901"}
                                        </p>
                                        <div
                                            id="341_627"
                                            className="Pixso-text-341_627 text-p-35_146"
                                        >
                                            <p
                                                id="341_627_0"
                                                className="Pixso-paragraph-341_627_0"
                                            >
                                                <span
                                                    id="341_627_0_1"
                                                    className="Pixso-span-341_627_0_1 text-p-35_146"
                                                >
                                                    {"Address: 1234 Main St"}
                                                </span>
                                            </p>
                                            <p
                                                id="341_627_1"
                                                className="Pixso-paragraph-341_627_1"
                                            >
                                                <span
                                                    id="341_627_1_1"
                                                    className="Pixso-span-341_627_1_1 text-p-35_146"
                                                >
                                                    {
                                                        "Moonstone City, Stardust State 12345"
                                                    }
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id="341_683"
                                    className="Pixso-frame-341_683"
                                >
                                    <div
                                        id="341_675"
                                        className="stroke-wrapper-341_675"
                                    >
                                        <div className="Pixso-frame-341_675">
                                            <div className="frame-content-341_675">
                                                <p
                                                    id="341_651"
                                                    className="Pixso-paragraph-341_651 text-p-35_146"
                                                >
                                                    {"Email"}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="stroke-341_675"></div>
                                    </div>
                                    <Button0
                                        id="341_676"
                                        className="Pixso-instance-341_676"
                                        text_334_1504={`Subscribe to news`}
                                        Property1={"Button tertiary"}
                                    ></Button0>
                                </div>
                            </div>
                        </div>
                        <div id="341_688" className="Pixso-frame-341_688">
                            <div
                                id="341_648"
                                className="Pixso-vector-341_648"
                            ></div>
                            <div id="341_685" className="Pixso-frame-341_685">
                                <p
                                    id="341_630"
                                    className="Pixso-paragraph-341_630"
                                >
                                    {"© 2023 Positivus. All Rights Reserved."}
                                </p>
                                <p
                                    id="341_629"
                                    className="Pixso-paragraph-341_629"
                                >
                                    {"Privacy Policy"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Frame330762;
