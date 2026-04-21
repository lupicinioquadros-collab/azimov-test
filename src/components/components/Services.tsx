import "@/styles/Services.css";
interface ServicesProps {
    id?: string;
    className?: string;
}
const Services = (props: ServicesProps) => {
    const { id, className = "" } = props;

    return (
        <div className={`component-5_180 ${className}`} id={id}>
            <div id="5_180" className="Pixso-symbol-5_180">
                <p id="330_1200" className="Pixso-paragraph-330_1200">
                    {"Services"}
                </p>
            </div>
        </div>
    );
};
export default Services;
