import "@/styles/Plusicon.css";
interface PlusiconProps {
    Property1?: string;
    id?: string;
    className?: string;
}
const Plusicon = (props: PlusiconProps) => {
    const { Property1, id, className = "" } = props;

    return (
        <div className={`component-338_168 ${className}`} id={id}>
            <div id="338_168" className="Pixso-symbol-338_168">
                {Property1 === "Plus" && (
                    <div id="338_167" className="Pixso-symbol-338_167">
                        <div
                            id="338_162"
                            className="Pixso-vector-338_162"
                        ></div>
                        <div
                            id="338_163"
                            className="Pixso-vector-338_163"
                        ></div>
                    </div>
                )}
                {Property1 === "Minus" && (
                    <div id="338_169" className="Pixso-symbol-338_169">
                        <div
                            id="338_170"
                            className="Pixso-vector-338_170"
                        ></div>
                        <div
                            id="338_172"
                            className="Pixso-vector-338_172"
                        ></div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Plusicon;
