import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const PrimaryButton = ({ text, icon, to }) => {
    return (
        
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
        <Link to={to} className="text-[10px] px-3 py-1 text-center bg-blue-400 text-white rounded-sm shadow-md hover:bg-blue-500 flex items-center gap-2">{text} {icon}</Link>
        </motion.div>
    );

};

export default PrimaryButton;