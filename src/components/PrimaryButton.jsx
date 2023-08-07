import { Link } from "react-router-dom";

const PrimaryButton = ({ text, to }) => {
    return (
        <Link to={to} className="inline-block text-[10px] px-1 py-2 bg-blue-400 text-white rounded-sm shadow-md hover:bg-blue-500">{text}</Link>
    );
};

export default PrimaryButton;