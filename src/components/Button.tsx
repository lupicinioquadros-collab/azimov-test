import "@/styles/Button.css";
interface ButtonProps {
    Property1?: string;
    id?: string;
    className?: string;
    text_422_1025?: string;
}
const Button = (props: ButtonProps) => {
    const { Property1, id, className = "", text_422_1025 } = props;

    return (
        <div className={`component-422_1021 ${className}`} id={id}>
            <div id="422_1021" className="Pixso-symbol-422_1021">
                {Property1 === "Button primary" && (
                    <div
                        id="422_1022"
                        className="Pixso-symbol-422_1022 fill-dark-422_1018"
                    >
                        <p id="422_1023" className="Pixso-paragraph-422_1023">
                            {"Label"}
                        </p>
                    </div>
                )}
                {Property1 === "Button tertiary" && (
                    <div
                        id="422_1024"
                        className="Pixso-symbol-422_1024 fill-green-422_1019"
                    >
                        <p
                            id="422_1025"
                            className="Pixso-paragraph-422_1025 fill-black-422_1020-paragraph fill-green-36_159-paragraph"
                        >
                            {text_422_1025 ?? "Label"}
                        </p>
                    </div>
                )}
                {Property1 === "Button secondary" && (
                    <div id="422_1026" className="stroke-wrapper-422_1026">
                        <div className="Pixso-symbol-422_1026">
                            <p
                                id="422_1027"
                                className="Pixso-paragraph-422_1027"
                            >
                                {"Label"}
                            </p>
                        </div>
                        <div className="stroke-422_1026 stroke-dark-422_1018"></div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Button;
