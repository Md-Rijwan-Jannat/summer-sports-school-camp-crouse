import { FaArrowRight } from "react-icons/fa";


const Button = ({label}) => {
    return (
        <button className=" bg-red-600 btn-sm px-7 hover:bg-red-500 border-0 rounded-2xl text-white">
            {label} <FaArrowRight/>
        </button>
    );
};

export default Button;