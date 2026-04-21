import "@/styles/Logo.css";
interface LogoProps {
    Property1?: string;
    id?: string;
    className?: string;
}
const Logo = (props: LogoProps) => {
    const { Property1, id, className = "" } = props;

    return (
        <div className={`component-330_321 ${className}`} id={id}>
            <div id="330_321" className="Pixso-symbol-330_321">
                {Property1 === "Default" && (
                    <div id="330_320" className="Pixso-symbol-330_320">
                        <div id="330_315" className="Pixso-frame-330_315">
                            <div
                                id="330_316"
                                className="Pixso-vector-330_316"
                            ></div>
                        </div>
                        <div
                            id="330_318"
                            className="Pixso-vector-330_318"
                        ></div>
                    </div>
                )}
                {Property1 === "Variant2" && (
                    <div id="330_322" className="Pixso-symbol-330_322">
                        <div id="330_323" className="Pixso-frame-330_323">
                            <div
                                id="330_324"
                                className="Pixso-vector-330_324"
                            ></div>
                        </div>
                        <div
                            id="330_325"
                            className="Pixso-vector-330_325"
                        ></div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Logo;
