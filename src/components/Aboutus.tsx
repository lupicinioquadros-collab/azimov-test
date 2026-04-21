import "@/styles/Aboutus.css";
interface AboutusProps {
    id?: string;
    className?: string;
}
const Aboutus = (props: AboutusProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-3_180 ${className}`} id={id}>
            <div id="3_180" className="Pixso-symbol-3_180">
                <p id="330_1198" className="Pixso-paragraph-330_1198">
                    {"About us"}
                </p>
            </div>
        </div>
    );
};
export default Aboutus;
